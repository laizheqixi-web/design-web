import { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Cpu, Check, Play, RotateCcw, Lock, Unlock } from 'lucide-react';
import { Language } from '../types';

interface DiagnosticPlaygroundProps {
  lang: Language;
}

export default function DiagnosticPlayground(props: DiagnosticPlaygroundProps) {
  const { lang } = props;

  // Translation of component titles/logs
  const uiText = {
    EN: {
      title: 'UDS Protocol Validation Simulator',
      desc: 'Interact with vehicle diagnostic layers (ISO 14229 / DoCAN). Run session control, authorization, and software flash routines.',
      session: 'Session Control ($10)',
      readDid: 'Read Identifier ($22)',
      security: 'Security Access ($27)',
      flashSim: 'Bootloader Flash ($34/$36)',
      btnDefault: 'Default Session ($01)',
      btnExtended: 'Extended Session ($03)',
      btnReadVin: 'Read VIN ($F190)',
      btnReadVer: 'Read ECU SW Version ($F189)',
      btnReqSeed: '1. Request Seed',
      btnSendKey: '2. Transmit Key',
      btnFlash: 'Start Bootloader Software Flash',
      termPlaceholder: 'Logs will appear as diagnostic messages are transmitted...',
      terminalTitle: 'UDS Diagnostic Console',
      statusSession: 'Diagnostic Session',
      statusSecurity: 'Security Level',
      statusFlash: 'Flash Integrity',
      securityLocked: 'Locked',
      securityUnlocked: 'Level 01 Unlocked',
      stateNormal: 'Default Mode',
      stateExtended: 'Extended Diagnostics',
      readyToFlash: 'Ready to Flash',
      flashing: 'Writing blocks...',
      flashSuccess: 'ECU Reflash Complete (Signature Validated)',
      unauthorized: 'Error: Access Denied. Extended session or Level 1 authentication required.',
      clearLogs: 'Clear Console',
      txLabel: 'TX (Command)',
      rxLabel: 'RX (Response)',
    },
    ZH: {
      title: 'UDS 底层诊断协议验证模拟器',
      desc: '直接交互车载电子控制单元诊断层 (ISO 14229 / DoCAN)。体验诊断会话切换、安全级别解锁及固件刷写流程。',
      session: '诊断会话控制 ($10)',
      readDid: '读取数据标识符 ($22)',
      security: '安全级别认证 ($27)',
      flashSim: 'Bootloader 固件刷新 ($34/$36)',
      btnDefault: '默认会话 ($01)',
      btnExtended: '扩展会话 ($03)',
      btnReadVin: '读取车载 VIN 码 ($F190)',
      btnReadVer: '模块软件版本 ($F189)',
      btnReqSeed: '1. 请求随机种子 (Seed)',
      btnSendKey: '2. 发送加密计算秘钥 (Key)',
      btnFlash: '启动 Bootloader 固件刷写',
      termPlaceholder: '控制台将实时捕获发送与接收的总线报文...',
      terminalTitle: 'UDS 车载总线控制台',
      statusSession: '当前诊断会话',
      statusSecurity: '安全认证级别',
      statusFlash: 'Flash 校验状态',
      securityLocked: '设备安全锁定',
      securityUnlocked: '1级安全权限已解锁',
      stateNormal: '普通默认会话',
      stateExtended: '扩展诊断会话',
      readyToFlash: '刷写环境就绪',
      flashing: '正在切分并写入数据块...',
      flashSuccess: '固件刷新成功 (底层 CRC 签名验证通过)',
      unauthorized: '错误：诊断服务拒绝。要求先切换至扩展会话或通过1级安全认证。',
      clearLogs: '清空控制台',
      txLabel: 'TX 发送',
      rxLabel: 'RX 接收',
    },
    DE: {
      title: 'UDS Protokoll-Validierungssimulator',
      desc: 'Interagieren Sie mit Fahrzeugdiagnoseschichten (ISO 14229 / DoCAN). Führen Sie Session-Control-, Sicherheitszugriffs- und Flash-Routinen aus.',
      session: 'Session Control ($10)',
      readDid: 'Lese Identifikator ($22)',
      security: 'Security Access ($27)',
      flashSim: 'Bootloader Flash ($34/$36)',
      btnDefault: 'Default Session ($01)',
      btnExtended: 'Extended Session ($03)',
      btnReadVin: 'Lese VIN ($F190)',
      btnReadVer: 'Lese ECU SW-Version ($F189)',
      btnReqSeed: '1. Request Seed',
      btnSendKey: '2. Sende Key',
      btnFlash: 'Start Bootloader Software Flash',
      termPlaceholder: 'Protokolle erscheinen hier, sobald Diagnosenachrichten gesendet werden...',
      terminalTitle: 'UDS Diagnosekonsole',
      statusSession: 'Diagnosesitzung',
      statusSecurity: 'Sicherheitsstufe',
      statusFlash: 'Flash-Integrität',
      securityLocked: 'Gesperrt',
      securityUnlocked: 'Stufe 01 Entsperrt',
      stateNormal: 'Standard-Modus',
      stateExtended: 'Erweiterte Diagnose',
      readyToFlash: 'Bereit zum Flashen',
      flashing: 'Schreibe Datenblöcke...',
      flashSuccess: 'ECU Reflash abgeschlossen (Signatur validiert)',
      unauthorized: 'Fehler: Zugriff verweigert. Erweiterte Sitzung oder Sicherheitsstufe 1 erforderlich.',
      clearLogs: 'Konsole leeren',
      txLabel: 'TX (Anfrage)',
      rxLabel: 'RX (Antwort)',
    }
  }[lang];

  // Simulator States
  const [session, setSession] = useState<'default' | 'extended'>('default');
  const [securityState, setSecurityState] = useState<'locked' | 'seed_requested' | 'unlocked'>('locked');
  const [flashStatus, setFlashStatus] = useState<'idle' | 'flashing' | 'complete'>('idle');
  const [flashProgress, setFlashProgress] = useState(0);
  const [generatedSeed, setGeneratedSeed] = useState<string>('');
  const [calculatedKey, setCalculatedKey] = useState<string>('');
  const [logs, setLogs] = useState<{ type: 'tx' | 'rx' | 'sys' | 'err'; timestamp: string; msg: string }[]>([]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (type: 'tx' | 'rx' | 'sys' | 'err', msg: string) => {
    const time = new Date().toLocaleTimeString('zh-CN', { hour12: false });
    setLogs((prev) => [...prev, { type, timestamp: time, msg }]);
  };

  const clearLogs = () => {
    setLogs([]);
    addLog('sys', `[SYSTEM] Terminal reset. Ready.`);
  };

  // 1. Session Control ($10)
  const handleSessionChange = (target: 'default' | 'extended') => {
    if (target === 'default') {
      addLog('tx', '10 01');
      setTimeout(() => {
        addLog('rx', '50 01 00 32 01 F4');
        addLog('sys', `[SYSTEM] Transition to Default Session completed.`);
        setSession('default');
        setSecurityState('locked'); // Relocks on returning to default session
        setFlashStatus('idle');
        setFlashProgress(0);
      }, 200);
    } else {
      addLog('tx', '10 03');
      setTimeout(() => {
        addLog('rx', '50 03 00 32 01 F4');
        addLog('sys', `[SYSTEM] Transited to Extended Diagnostic Session successfully.`);
        setSession('extended');
      }, 200);
    }
  };

  // 2. Read DID ($22)
  const handleReadDID = (did: 'F190' | 'F189') => {
    const didCmd = did === 'F190' ? '22 F1 90' : '22 F1 89';
    addLog('tx', didCmd);

    setTimeout(() => {
      if (did === 'F190') {
        // Read VIN
        // Response format positive: 62 + DID + Data bytes
        addLog('rx', '62 F1 90 57 41 55 5A 5A 5A 46 34 5A 47 41');
        addLog('sys', `[RESOLVED] ASCII VIN Data: "WAUZZZF4ZGA******"`);
      } else {
        // Read SW Version
        addLog('rx', '62 F1 89 53 57 5F 56 34 2E 36 2E 32 5F 42');
        addLog('sys', `[RESOLVED] ASCII ECU SW Version: "SW_V4.6.2_B4_Expert"`);
      }
    }, 280);
  };

  // 3. Security Access ($27)
  const handleRequestSeed = () => {
    if (session !== 'extended') {
      addLog('tx', '27 01');
      setTimeout(() => {
        addLog('err', `7F 27 7E  - Negative Response: Subfunction Not Supported in Active Session`);
        addLog('sys', uiText.unauthorized);
      }, 150);
      return;
    }

    addLog('tx', '27 01');
    setTimeout(() => {
      // Generate a realistic hex seed
      const randomSeed = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
      // Algorithmic simulation: Key is simple bitwise XOR 0x61FA142D (a diagnostic key formula)
      const seedInt = parseInt(randomSeed, 16);
      const computed = (seedInt ^ 0x61FA142D) >>> 0;
      const computedHex = computed.toString(16).toUpperCase().padStart(8, '0');

      setGeneratedSeed(randomSeed);
      setCalculatedKey(computedHex);

      addLog('rx', `67 01 ${randomSeed.match(/.{1,2}/g)?.join(' ')}`);
      addLog('sys', `[SECURITY] Seed issued: 0x${randomSeed}. Authenticator formula: (Seed ^ 0x61FA142D).`);
      setSecurityState('seed_requested');
    }, 250);
  };

  const handleSendKey = () => {
    if (securityState !== 'seed_requested') {
      addLog('sys', '[SYSTEM] Execute "Request Seed" before submitting credential key.');
      return;
    }

    const spacedKey = calculatedKey.match(/.{1,2}/g)?.join(' ') || '';
    addLog('tx', `27 02 ${spacedKey}`);

    setTimeout(() => {
      addLog('rx', '67 02');
      addLog('sys', `[SECURITY] Authentication succeeded. Key matches ECU security module hash.`);
      setSecurityState('unlocked');
    }, 300);
  };

  // 4. Flash Simulation ($34 / $36)
  const handleFlashSimulation = () => {
    if (session !== 'extended' || securityState !== 'unlocked') {
      addLog('sys', uiText.unauthorized);
      return;
    }

    addLog('sys', '[FLASH] Starting bootloader upload sequence...');
    addLog('tx', '34 00 44 00 10 00 00 00 05 00 00'); // Request download address range
    setFlashStatus('flashing');
    setFlashProgress(0);

    setTimeout(() => {
      addLog('rx', '74 20 00 40'); // Max packet size accepted
      addLog('sys', '[FLASH] Address range verified. Exporting block packets...');

      // Run progress intervals
      let currentPercent = 0;
      const interval = setInterval(() => {
        currentPercent += 20;
        setFlashProgress(currentPercent);

        if (currentPercent < 100) {
          const blockNumHex = (currentPercent / 20).toString(16).toUpperCase().padStart(2, '0');
          addLog('tx', `36 ${blockNumHex} [FF EE DD CC BB AA 99 88 77 66 55 44 33 22 11 00]`);
          addLog('rx', `76 ${blockNumHex}`);
        } else {
          clearInterval(interval);
          addLog('tx', '37'); // Request Transfer Exit
          addLog('rx', '77');
          addLog('tx', '31 01 FF 01'); // Routine control for CRC integrity signature
          addLog('rx', '71 01 FF 01 00'); // Signature Verified
          addLog('sys', `[SUCCESS] 100% written. Integrity match. ECU checksum valid.`);
          setFlashStatus('complete');
        }
      }, 500);
    }, 400);
  };

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 rounded-xl p-5 md:p-8 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-5">
        <div>
          <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded">
            ISO 14229 / UDS CAN Sandbox
          </span>
          <h3 className="text-lg font-sans font-medium text-zinc-900 dark:text-white mt-2">
            {uiText.title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl font-sans leading-relaxed">
            {uiText.desc}
          </p>
        </div>

        <div className="flex gap-2 self-start md:self-center">
          <button
            onClick={clearLogs}
            className="text-xs font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 px-3 py-1.5 rounded transition-all cursor-pointer"
          >
            {uiText.clearLogs}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Workspace controls */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-5">
          {/* Diagnostic Session Selector */}
          <div className="border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 p-4 rounded-lg">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              {uiText.session}
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => handleSessionChange('default')}
                className={`flex-1 text-xs font-mono py-2 px-3 rounded border transition-all cursor-pointer ${
                  session === 'default'
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white font-medium'
                    : 'bg-white dark:bg-zinc-900/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {uiText.btnDefault}
              </button>
              <button
                onClick={() => handleSessionChange('extended')}
                className={`flex-1 text-xs font-mono py-2 px-3 rounded border transition-all cursor-pointer ${
                  session === 'extended'
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white font-medium'
                    : 'bg-white dark:bg-zinc-900/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {uiText.btnExtended}
              </button>
            </div>
          </div>

          {/* Read DID Identifier block */}
          <div className="border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 p-4 rounded-lg">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              {uiText.readDid}
            </h4>
            <div className="flex gap-2">
              <button
                onClick={() => handleReadDID('F190')}
                className="flex-1 text-xs font-mono py-2 px-3 rounded border bg-white dark:bg-zinc-900/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
              >
                {uiText.btnReadVin}
              </button>
              <button
                onClick={() => handleReadDID('F189')}
                className="flex-1 text-xs font-mono py-2 px-3 rounded border bg-white dark:bg-zinc-900/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
              >
                {uiText.btnReadVer}
              </button>
            </div>
          </div>

          {/* Security Access block */}
          <div className="border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {uiText.security}
              </h4>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono">
                {securityState === 'unlocked' ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <Unlock className="w-3 h-3" /> {uiText.securityUnlocked}
                  </span>
                ) : (
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> {uiText.securityLocked}
                  </span>
                )}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button
                  onClick={handleRequestSeed}
                  className={`flex-1 text-xs font-mono py-2 px-3 rounded border transition-all cursor-pointer ${
                    securityState === 'locked' && session === 'extended'
                      ? 'bg-amber-500/10 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-500/20'
                      : 'bg-white dark:bg-zinc-900/40 hover:bg-zinc-100 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  {uiText.btnReqSeed}
                </button>
                <button
                  onClick={handleSendKey}
                  disabled={securityState !== 'seed_requested'}
                  className={`flex-1 text-xs font-mono py-2 px-3 rounded border transition-all cursor-pointer ${
                    securityState === 'seed_requested'
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white font-medium hover:opacity-90 animate-pulse'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 border-zinc-200/50 dark:border-zinc-900/50 cursor-not-allowed'
                  }`}
                >
                  {uiText.btnSendKey}
                </button>
              </div>

              {/* Seed state indicator */}
              {securityState !== 'locked' && generatedSeed && (
                <div className="mt-2 p-2 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-mono leading-relaxed rounded border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-500 dark:text-zinc-400">
                  <div>Seed Generated: <span className="text-zinc-900 dark:text-amber-400 font-semibold">0x{generatedSeed}</span></div>
                  <div>Computed Key: <span className="text-zinc-900 dark:text-emerald-400 font-semibold">0x{calculatedKey}</span></div>
                </div>
              )}
            </div>
          </div>

          {/* Flash Program */}
          <div className="border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 p-4 rounded-lg">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              {uiText.flashSim}
            </h4>
            <button
              onClick={handleFlashSimulation}
              disabled={flashStatus === 'flashing'}
              className={`w-full text-xs font-mono py-2.5 px-3 rounded border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                session === 'extended' && securityState === 'unlocked' && flashStatus !== 'flashing'
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 font-medium hover:opacity-95'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 border-zinc-200/50 dark:border-zinc-900/50 cursor-not-allowed'
              }`}
            >
              <Cpu className={`w-4.5 h-4.5 ${flashStatus === 'flashing' ? 'animate-spin' : ''}`} />
              {flashStatus === 'flashing' ? uiText.flashing : uiText.btnFlash}
            </button>

            {flashStatus !== 'idle' && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 text-zinc-500 dark:text-zinc-400">
                  <span>
                    {flashStatus === 'complete' ? (
                      <span className="text-emerald-500 font-medium">{uiText.flashSuccess}</span>
                    ) : (
                      uiText.flashing
                    )}
                  </span>
                  <span>{flashProgress}%</span>
                </div>
                <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-505 bg-emerald-500 transition-all duration-300"
                    style={{ width: `${flashProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Console logs terminal */}
        <div className="col-span-1 lg:col-span-6 flex flex-col h-[340px] md:h-auto min-h-[300px]">
          <div className="flex items-center justify-between bg-zinc-900 dark:bg-zinc-950 px-4 py-2.5 rounded-t-lg border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-[10px] font-mono text-zinc-400 ml-2 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                {uiText.terminalTitle}
              </span>
            </div>
            {/* Status badges */}
            <div className="flex items-center gap-2 text-[9px] font-mono">
              <span className={`px-1.5 py-0.5 rounded ${
                session === 'extended' ? 'bg-amber-500/20 text-amber-300' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {session === 'extended' ? 'EXT' : 'DEF'}
              </span>
              <span className={`px-1.5 py-0.5 rounded ${
                securityState === 'unlocked' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {securityState === 'unlocked' ? 'SEC_1' : 'LOCKED'}
              </span>
            </div>
          </div>

          <div className="flex-1 bg-zinc-950 text-amber-400 p-4 font-mono text-[11px] leading-relaxed overflow-y-auto rounded-b-lg scrollbar-thin scrollbar-thumb-zinc-800">
            {logs.length === 0 ? (
              <div className="text-zinc-600 italic h-full flex items-center justify-center">
                {uiText.termPlaceholder}
              </div>
            ) : (
              <div className="space-y-1.5">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2 border-b border-zinc-900/30 pb-1">
                    <span className="text-zinc-600 select-none">[{log.timestamp}]</span>
                    {log.type === 'tx' && (
                      <span className="text-sky-400">
                        <span className="text-[10px] bg-sky-500/10 text-sky-300 px-1 py-0.2 mr-1.5 rounded">{uiText.txLabel}</span>
                        {log.msg}
                      </span>
                    )}
                    {log.type === 'rx' && (
                      <span className="text-emerald-400">
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-1 py-0.2 mr-1.5 rounded">{uiText.rxLabel}</span>
                        {log.msg}
                      </span>
                    )}
                    {log.type === 'sys' && (
                      <span className="text-zinc-300 italic">{log.msg}</span>
                    )}
                    {log.type === 'err' && (
                      <span className="text-red-400 bg-red-900/10 px-1 py-0.5 rounded border border-red-900/30 w-full">{log.msg}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
