import { ProjectItem, WhyMeItem, NavigationLinks } from './types';

export const TRANSLATIONS: Record<
  'EN' | 'ZH' | 'DE',
  {
    nav: NavigationLinks & { status: string };
    hero: {
      tag: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      metaLocation: string;
      metaAvailability: string;
    };
    work: {
      sectionTitle: string;
      sectionSubtitle: string;
      interactionTitle: string;
      interactionDesc: string;
      simTerminalHeader: string;
      projects: ProjectItem[];
    };
    whyMe: {
      sectionTitle: string;
      sectionSubtitle: string;
      items: WhyMeItem[];
    };
    contact: {
      sectionTitle: string;
      sectionSubtitle: string;
      sentence: string;
      formName: string;
      formEmail: string;
      formSubject: string;
      formMessage: string;
      formSend: string;
      formSuccess: string;
      copyEmail: string;
      copyEmailSuccess: string;
      directCall: string;
    };
    focusMode: {
      label: string;
      description: string;
      lineGuide: string;
      spacingHelper: string;
      monoMode: string;
      reset: string;
    };
  }
> = {
  EN: {
    nav: {
      home: 'Home',
      work: 'Work',
      whyMe: 'Why Me',
      contact: 'Contact',
      status: 'Available for Advisory',
    },
    hero: {
      tag: 'SYSTEMS ENGINEERING & MANAGEMENT',
      title: 'Bridging the gap between complex engineering and strategic project execution.',
      subtitle: 'Navigating the intersection of advanced mobility systems and customer-centric project management. From deep technical diagnostics to global road testing, I translate complex automotive requirements into clear, actionable outcomes.',
      ctaPrimary: 'View My Work',
      ctaSecondary: "Let's Connect",
      metaLocation: 'Based in Stuttgart / Munich',
      metaAvailability: 'Active Project Status: Open to selective consulting client contracts',
    },
    work: {
      sectionTitle: 'Core Experience',
      sectionSubtitle: 'A structured record of engineering leadership, international validation, and diagnostic depth.',
      interactionTitle: 'Diagnostic Protocol Playground',
      interactionDesc: 'Test an ECU UDS (ISO 14229) service simulation. Run real-world diagnostic requests to read identifiers or trigger seed/key security access.',
      simTerminalHeader: 'Automotive ECU Terminal',
      projects: [
        {
          id: 'pm-execution',
          category: 'Technical Project Management',
          year: '2023 - Present',
          title: 'Strategic Project Execution & Delivery',
          description: 'Managing complex ADAS / AD vehicle software builds and driving international customer releases. Bridging technical team sprints with commercial objectives.',
          highlights: [
            'Led cross-functional feature planning for Level 2+ automated driving pipelines.',
            'Structured customer-facing requirements gathering, converting marketing requests to technical specifications.',
            'Designed diagnostic metrics tracking system for real-time validation cycles.'
          ],
          techStack: ['Agile Roadmap', 'ADAS Pipelines', 'Requirements Tracing', 'Jira/Confluence']
        },
        {
          id: 'testing-validation',
          category: 'Global Testing & Validation',
          year: '2021 - 2023',
          title: 'Intelligent Speed Assist (ISA) Road Testing',
          description: 'Spearheaded global validation campaigns for Speed Limit Info and ISA systems under real-world conditions, including extreme climate and regional speed-sign anomalies.',
          highlights: [
            'Conducted full-scope overseas vehicle road testing in Melbourne, Australia to validate local speed sign classifiers.',
            'Processed multi-terabyte CAN/LIN diagnostic logs and optical camera footage utilizing customized Python extraction tools.',
            'Aligned testing findings directly with UNECE regulations to ensure target market type-approval.'
          ],
          techStack: ['Melbourne Road Test', 'CANoe/CANalyzer', 'UNECE Regulation', 'Python Data Processing']
        },
        {
          id: 'tech-deepdive',
          category: 'Technical Deep-Dive',
          year: '2019 - 2021',
          title: 'UDS Protocols & Firmware Flashing Integrity',
          description: 'Established rigorous bottom-up integration and diagnostic validation methodologies for safety-critical Engine Control Units (ECUs) and vehicle gateways.',
          highlights: [
            'Configured ISO 14229 (UDS) and ISO 15765 (DoCAN) stack integrations for robust message transmission.',
            'Optimized ECU bootloader software flashing routines, cutting cycle times by 15% with optimized block request mapping.',
            'Developed automated test suites to mock diagnostic Session Control ($10) transition anomalies.'
          ],
          techStack: ['UDS ISO 14229', 'ISO 15765 DoCAN', 'ECU Flash Bootloader', 'Diagnostic $F190 VIN Reads']
        }
      ]
    },
    whyMe: {
      sectionTitle: 'Why Me',
      sectionSubtitle: 'Engineering-driven clarity coupled with multilingual and commercial versatility.',
      items: [
        {
          id: 'tech-found',
          num: '01',
          title: 'Technical Foundation',
          description: 'Not merely tracking progress on a spreadsheet. I maintain deep, bottom-level understanding of ADAS systems, radar/camera perception pipelines, and vehicular communications (consistent with 4B-level technical expert benchmarks).'
        },
        {
          id: 'cross-cultural',
          num: '02',
          title: 'Cross-Cultural Communication',
          description: 'Fully bilingual and bicultural in Chinese, English, and German. Seamlessly handling high-stakes negotiations and daily R&D standups between European premium OEMs and rapid-iteration Chinese tech suppliers.'
        },
        {
          id: 'multi-perspective',
          num: '03',
          title: 'Multidisciplinary Perspective',
          description: 'Combining rigorous systems-engineering discipline with sharp financial and transaction logic. I analyze structural technical risks alongside data metrics to yield optimized, quantitatively bulletproof roadmaps.'
        }
      ]
    },
    contact: {
      sectionTitle: "Let's Connect",
      sectionSubtitle: 'No endless meetings or generic forms. Let’s specify your requirements and execute.',
      sentence: "Let's build something functional and precise.",
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject / Area',
      formMessage: 'How can I assist you with your mobility / project systems?',
      formSend: 'Send Diagnostic Brief',
      formSuccess: 'Brief transmitted successfully. Connection established.',
      copyEmail: 'Copy Email to Clipboard',
      copyEmailSuccess: 'Email path copied!',
      directCall: 'Email Me directly'
    },
    focusMode: {
      label: 'Focus Toolkit',
      description: 'Custom configurations to enhance your reading and aesthetic analysis.',
      lineGuide: 'Toggle Reading Line Helper',
      spacingHelper: 'Expand Macro Whitespace',
      monoMode: 'Aesthetic Mono Font Mode',
      reset: 'Reset View'
    }
  },
  ZH: {
    nav: {
      home: '主页',
      work: '工作实例',
      whyMe: '选择优势',
      contact: '联系我',
      status: '可接受顾问咨询 / 合作',
    },
    hero: {
      tag: '系统工程与项目管理',
      title: '连接复杂工程与战略项目执行之间的鸿沟。',
      subtitle: '深耕于先进出行系统与以客户为中心的项目管理之交汇处。从底层技术诊断到全球道路测试，我将复杂的汽车技术需求转化为清晰、可量化且可落地的工作成果。',
      ctaPrimary: '查看精品工作',
      ctaSecondary: '即刻沟通',
      metaLocation: '现居德国 斯图加特 / 慕尼黑',
      metaAvailability: '当前项目状态：可承接高壁垒咨询与特殊客户合同',
    },
    work: {
      sectionTitle: '核心经历',
      sectionSubtitle: '一份关于工程领导力、全球化道路验证以及底层诊断协议深度的严谨记录。',
      interactionTitle: '车载诊断协议 (UDS) 动态沙盒',
      interactionDesc: '在此模拟测试车载诊断 ECU UDS (ISO 14229) 服务。发送真实报文指令以读取标识符（如 VIN 码）或模拟安全密钥算法。',
      simTerminalHeader: '车载 ECU 交互终端',
      projects: [
        {
          id: 'pm-execution',
          category: '技术项目管理',
          year: '2023 - 至今',
          title: '战略项目执行与精益交付',
          description: '管理复杂的 ADAS / 自动驾驶整车端软件构建。在保障敏捷开发周期的同时，精准对接国际客户的高标准量产发布。',
          highlights: [
            '主导跨国、跨职能团队设计开发 L2+ 自动驾驶系统功能流水线。',
            '将高度抽象的客户需求与商业目标迅速解构，转化为底层工程团队可执行的技术规格书（Specifications）。',
            '构建软件健康度指标监控体系，实现回归测试周期的实时数据验证。'
          ],
          techStack: ['敏捷路线图', 'ADAS 开发流', '需求全生命周期追踪', 'Jira/Confluence']
        },
        {
          id: 'testing-validation',
          category: '全球测试与合规验证',
          year: '2021 - 2023',
          title: '智能速度辅助系统 (ISA) 全球道路测试',
          description: '统筹多国限速信息 (SLI) 和 ISA 系统在真实复杂环境中的验证任务，包含解决极端气候及特定区域路标识别偏差等行业痛点。',
          highlights: [
            '在澳大利亚墨尔本独立主持整车的海外道路测试，成功对复杂的当地限速标志分类器进行本地化标定。',
            '利用 Python 开发自动化日志解析脚本，提取处理多达数千万条 CAN/LIN 总线诊断日志与视频流。',
            '确保系统性能完全对标 UNECE 联合国法规，成功协助车辆攻克出海准入难题。'
          ],
          techStack: ['墨尔本道路测试', 'CANoe/CANalyzer', 'UNECE 联合国合规', 'Python 数据处理']
        },
        {
          id: 'tech-deepdive',
          category: '技术深挖',
          year: '2019 - 2021',
          title: 'UDS 诊断协议与 ECU 固件刷新安全校验',
          description: '建立针对高安全级别电子控制单元 (ECU) 及整车网关的诊断测试方法论，守护整车软件刷写最后一道防线。',
          highlights: [
            '基于 ISO 14229 和 ISO 15765 诊断协议栈，完成高可靠性报文传输的完整参数调优。',
            '优化 ECU Bootloader 刷写逻辑。通过合理的块数据块重排，使软件批量刷写效率提升 15%。',
            '自主编写自动化脚本，专门用于捕获并解析诊断会话控制 ($10 服务) 在异常环境下的跳转漏斗。'
          ],
          techStack: ['UDS ISO 14229', 'ISO 15765 总线传输', 'ECU 固件安全刷写', '诊断 DID F190 读取']
        }
      ]
    },
    whyMe: {
      sectionTitle: '选择我的理由',
      sectionSubtitle: '将无懈可击的技术底盘，与国际化的视野及商业化拆解能力融为一体。',
      items: [
        {
          id: 'tech-found',
          num: '01',
          title: '过硬的技术底盘',
          description: '我不会只在表格上画进度进度条。我对于 ADAS 架构、雷达/摄像头感知层、车载总线交互有着底层的透彻理解（契合研发 4B 级技术专家标准，具备解决一线现场技术攻坚的实力）。'
        },
        {
          id: 'cross-cultural',
          num: '02',
          title: '极致的跨文化对接能力',
          description: '精通英语、德语和中文。能够在中欧双方的研发中心与高管之间充当高效的技术翻译官、调停人，大幅降低跨国合资开发过程中的信息衰减。'
        },
        {
          id: 'multi-perspective',
          num: '03',
          title: '多维思维交融',
          description: '拥有严密的复杂工程思维，同时敏锐把握商业交易和量化逻辑。通过精准解构风险，帮助企业规划既合理又具前瞻性的产品路线图。'
        }
      ]
    },
    contact: {
      sectionTitle: '开始联系',
      sectionSubtitle: '拒绝繁琐的低效会议或敷衍的答复，让我们对标技术细节，并以最快效率推进。',
      sentence: '我们来一起构建高品质且精准的产品。',
      formName: '称呼',
      formEmail: '电子邮箱',
      formSubject: '合作领域 / 咨询主题',
      formMessage: '能具体描述一下您在移动出行或系统工程中遇到的痛点吗？',
      formSend: '传输诊断简讯',
      formSuccess: '简讯发送成功，通讯链路已建立。',
      copyEmail: '复制邮箱地址',
      copyEmailSuccess: '邮箱已成功复制到剪贴板！',
      directCall: '直接发送邮件'
    },
    focusMode: {
      label: '专注浏览工具箱',
      description: '可微调的排版模块，为您打造沉浸式的美学研究与文字阅读体验。',
      lineGuide: '开启阅读辅助标尺线',
      spacingHelper: '展开呼吸感留白 (Macro Whitespace)',
      monoMode: '切换纯粹极简等宽字体',
      reset: '复位至默认排版'
    }
  },
  DE: {
    nav: {
      home: 'Home',
      work: 'Projekte',
      whyMe: 'Vorteile',
      contact: 'Kontakt',
      status: 'Verfügbar für Advisory',
    },
    hero: {
      tag: 'SYSTEMS ENGINEERING & MANAGEMENT',
      title: 'Die Lücke zwischen komplexer Technik und strategischer Projektausführung schließen.',
      subtitle: 'Navigation an der Schnittstelle von fortschrittlichen Mobilitätssystemen und kundenorientiertem Projektmanagement. Von tiefgehender technischer Diagnostik bis hin zu globalen Straßentests übersetze ich komplexe Automotive-Anforderungen in klare, handlungsfähige Ergebnisse.',
      ctaPrimary: 'Projekte ansehen',
      ctaSecondary: 'Kontakt aufnehmen',
      metaLocation: 'Standort: Stuttgart / München',
      metaAvailability: 'Status: Offen für hochspezialisierte Beratungsmandate',
    },
    work: {
      sectionTitle: 'Kernkompetenz & Projekte',
      sectionSubtitle: 'Ein fundierter Nachweis von technischer Führung, internationaler Absicherung und diagnostischer Tiefe.',
      interactionTitle: 'Diagnoseprotokoll-Spielplatz',
      interactionDesc: 'Testen Sie eine ECU UDS (ISO 14229) Diagnosesimulation. Führen Sie reale Diagnoseanfragen aus, um Identifikatoren auszulesen oder den Seed/Key-Zugriff zu simulieren.',
      simTerminalHeader: 'Automotive ECU Terminal',
      projects: [
        {
          id: 'pm-execution',
          category: 'Technisches Projektmanagement',
          year: '2023 - Heute',
          title: 'Strategische Projektausführung & Delivery',
          description: 'Steuerung komplexer ADAS/AD-Fahrzeugsoftware-Builds und Koordination internationaler Kundenfreigaben. Verbindung von agilen Entwickler-Sprints mit kaufmännischen Zielen.',
          highlights: [
            'Leitung funktionsübergreifender Feature-Planungen für Level 2+ Automated Driving Pipelines.',
            'Strukturierung der kundenseitigen Anforderungsanalyse und Übersetzung in technische Spezifikationen.',
            'Entwicklung von Diagnose-Metriken zur Echtzeit-Absicherung während der Sprint-Zyklen.'
          ],
          techStack: ['Agile Roadmap', 'ADAS Pipelines', 'Requirements Tracing', 'Jira/Confluence']
        },
        {
          id: 'testing-validation',
          category: 'Globale Erprobung & Absicherung',
          year: '2021 - 2023',
          title: 'Intelligent Speed Assist (ISA) Straßenerprobung',
          description: 'Verantwortlich für globale Absicherungskampagnen von Speed Limit Info und ISA-Systemen unter realen Bedingungen, inklusive extremer Klimafaktoren.',
          highlights: [
            'Eigenständige Durchführung von Überseetests in Melbourne, Australien zur Absicherung lokaler Tempolimit-Klassifikatoren.',
            'Verarbeitung von Multi-Terabyte CAN/LIN-Diagnosedatenströmen mittels eigens entwickelter Python-Skripte.',
            'Sicherstellung der Compliance nach UNECE-Richtlinien zur Erreichung der Typgenehmigung.'
          ],
          techStack: ['Melbourne Road Test', 'CANoe/CANalyzer', 'UNECE Regulierung', 'Python Data Processing']
        },
        {
          id: 'tech-deepdive',
          category: 'Technischer Deep-Dive',
          year: '2019 - 2021',
          title: 'UDS-Protokolle & Firmware-Flashendeckung',
          description: 'Implementierung und Validierung hochzuverlässiger Diagnosesequenzen für sicherheitsrelevante Steuergeräte (ECUs) und Gateways.',
          highlights: [
            'Parametrierung von ISO 14229 (UDS) und ISO 15765 (DoCAN) Kommunikationsstacks.',
            'Optimierung von ECU-Bootloader-Flashtracks mit einer Reduzierung des Zeitaufwands um 15% durch intelligentes Blockmapping.',
            'Entwicklung automatisierter Testsuites zur Simulation von Session-Umsprüngen ($10) unter Fehlereinfluss.'
          ],
          techStack: ['UDS ISO 14229', 'ISO 15765 DoCAN', 'ECU Flash Bootloader', 'Diagnostic $F190 VIN Reads']
        }
      ]
    },
    whyMe: {
      sectionTitle: 'Why Me',
      sectionSubtitle: 'Verbindung aus fundierter technischer Exzellenz, interkultureller Kompetenz und analytischem Scharfsinn.',
      items: [
        {
          id: 'tech-found',
          num: '01',
          title: 'Technisches Fundament',
          description: 'Keine Fortschrittskontrolle via Excel-Template: Ich besitze ein tiefgreifendes technologisches Verständnis von ADAS-Systemen, Radar/Kamera-Sensorik und Fahrzeugnetzwerken (Äquivalent zum 4B-Expertenstandard).'
        },
        {
          id: 'cross-cultural',
          num: '02',
          title: 'Interkulturelle Kompetenz',
          description: 'Fließend in Deutsch, Englisch und Chinesisch. Nahtloses Überbrücken von Entwicklungsabstimmungen und Verhandlungen zwischen europäischen OEMs und agilen chinesischen Tech-Zulieferern.'
        },
        {
          id: 'multi-perspective',
          num: '03',
          title: 'Multidisziplinärer Blick',
          description: 'Verbindung aus System-Engineering und messbarer kaufmännischer Logik. Ich bewerte Risiken strikt datenbasiert für zukunftssichere Roadmaps.'
        }
      ]
    },
    contact: {
      sectionTitle: 'Kontakt',
      sectionSubtitle: 'Keine überflüssigen Meetings. Lassen Sie uns Spezifikationen klären und zielgerichtet umsetzen.',
      sentence: 'Lassen Sie uns etwas Präzises und Funktionales bauen.',
      formName: 'Name',
      formEmail: 'E-Mail',
      formSubject: 'Thema / Bereich',
      formMessage: 'Wie kann ich Sie bei Ihren Mobilitäts- oder Systemprojekten unterstützen?',
      formSend: 'Senden',
      formSuccess: 'Brief erfolgreich übertragen. Verbindung steht.',
      copyEmail: 'In die Zwischenablage kopieren',
      copyEmailSuccess: 'E-Mail kopiert!',
      directCall: 'E-Mail direkt senden'
    },
    focusMode: {
      label: 'Fokus-Werkzeuge',
      description: 'Optionale visuelle Hilfsmittel zur Optimierung des Lese- und Designflusses.',
      lineGuide: 'Lesehilfe-Linie aktivieren',
      spacingHelper: 'Extremer Freiraum (Macro Whitespace)',
      monoMode: 'Monospace-Schriftart aktivieren',
      reset: 'Ansicht zurücksetzen'
    }
  }
};
