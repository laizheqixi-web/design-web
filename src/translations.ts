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
      highlightsBtn: string;
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
      work: 'Experience',
      whyMe: 'Why Me',
      contact: 'Contact',
      status: 'Open to Consulting / Collaboration',
    },
    hero: {
      tag: 'About Me',
      title: 'Bridging ADAS Technology and Commercial Delivery.',
      subtitle: 'Specializing at the intersection of Advanced Driver Assistance Systems (ADAS) and Technical Project Management. Beyond hands-on engineering and global road testing, I break down barriers between Chinese and European automotive development — translating ambiguous cross-border requirements into precise, quantifiable, and replicable delivery systems (SOPs). I don\'t just deliver projects; I deliver certainty.',
      ctaPrimary: 'View My Work',
      ctaSecondary: "Let's Connect",
      metaLocation: 'Based in Koblenz',
      metaAvailability: 'Open to selective consulting and client contracts',
    },
    work: {
      sectionTitle: 'Core Experience',
      sectionSubtitle: 'A structured record of engineering leadership, international validation, and cross-border delivery.',
      highlightsBtn: '+ View Highlights',
      interactionTitle: 'Diagnostic Protocol Playground',
      interactionDesc: 'Test an ECU UDS (ISO 14229) service simulation. Run real-world diagnostic requests to read identifiers or trigger seed/key security access.',
      simTerminalHeader: 'Automotive ECU Terminal',
      projects: [
        {
          id: 'pm-execution',
          category: 'Technical Project Management',
          year: '2024 - Present',
          title: 'Strategic Project Execution & Lean Delivery',
          description: 'Leading complex ADAS / automated driving controller export projects. Serving as the core hub connecting domestic R&D headquarters with high-standard European customers — balancing cross-timezone, cultural, and process differences while maintaining the right equilibrium between development velocity and automotive-grade production rigor to ensure high-quality on-time delivery (SOP).',
          highlights: [
            'Cross-border Testing & Compliance Lead: Coordinated and executed overseas vehicle function-level testing (e.g., ISA Intelligent Speed Assist road testing), managing the full chain from pre-test vehicle setup and logistics planning to on-site validation — rapidly closing technical blockers as they arose.',
            'Commercial Requirements Decoding & Technical Translation: Precisely deconstructed abstract, evolving overseas customer requirements into executable technical specifications for domestic R&D teams. Leveraged EU regulatory expertise to proactively eliminate compliance risks.',
            'Productizing Non-Standard Engineering Pain Points: Extracted hidden friction from cross-border delivery and high-frequency communication, built structured scheduling models and Quality Gates — transforming personal expertise in complex road testing into reusable team-wide standardized assets.'
          ],
          techStack: ['Technical Project Management (TPM)', 'ADAS Development Pipeline', 'Full-Lifecycle Requirements Tracing', 'ISA / ADAS Overseas Compliance Validation']
        },
        {
          id: 'tech-deepdive',
          category: 'Engineering Research',
          year: '2023.06 - 2024.01',
          title: 'Automotive Haptic Feedback System Design & Validation (Thesis)',
          description: 'Under a joint R&D framework between GE-T and Volkswagen (VW), independently led a full concept validation cycle for an in-vehicle vibrotactile feedback system from scratch. Bridged the complete pipeline from subjective user requirement decoding and hardware Design for Manufacturability (DFM) to automated system-level software/hardware validation — establishing a standardized R&D paradigm for translating fuzzy perception into hard engineering specifications.',
          highlights: [
            'Requirements Decomposition & Architecture Selection: Used morphological matrices and paired comparison methods to transform abstract user perception needs into structured, quantifiable engineering evaluation models for scientific concept selection.',
            'Agile Hardware Iteration & Rapid Prototyping: Led SolidWorks-based 3D modeling and industry-standard engineering drawings. Used 3D printing for assembly validation to catch design flaws at the earliest stage.',
            'Software/Hardware Integration & Automated Test Bench: Built bottom-level control bench logic from scratch using NI CompactRio (FPGA) for fully automated closed-loop operation; combined with Matlab for automated data cleaning and metric validation of large-scale test datasets.'
          ],
          techStack: ['Proof of Concept (POC)', 'Hardware-Software Co-development', 'Automated Test Bench Design', 'LabVIEW (FPGA) / Matlab / SolidWorks']
        },
        {
          id: 'testing-validation',
          category: 'Early Career',
          year: '2022.09 - 2023.02',
          title: 'New Product Launch (NPL) Procurement Support (Internship)',
          description: 'Provided in-depth business support during the New Product Launch phase of Volkswagen\'s core all-electric MEB platform. Served as the communication bridge between internal engineering and external suppliers, assisting in managing high-frequency Engineering Change Requests (ECRs) during production ramp-up — gaining deep insight into OEM-perspective technical cost accounting.',
          highlights: [
            'Budget Defense Support: Cross-validated (Plausibilisierung) new supplier quotes for technical changes. By breaking down material, labor, and overhead costs, identified unreasonable premiums and provided effective data support for formal negotiations.',
            'Cross-border Communication Closure: Independently managed daily supplier communication and meeting coordination, tracking post-meeting action items to ensure delivery progress aligned tightly with internal R&D milestones.',
            'Parts Asset & Compliance Management: Assisted in building rigorous parts lifecycle documentation (Bauteillebenslauf) and systematically tracked phased payments for supplier-owned tooling to ensure supply chain compliance.'
          ],
          techStack: ['New Product Procurement', 'Supplier Communication', 'Quote Cross-Validation', 'VW Procurement Process']
        }
      ]
    },
    whyMe: {
      sectionTitle: 'Why Me',
      sectionSubtitle: 'Rock-solid technical foundation fused with international perspective and commercial clarity.',
      items: [
        {
          id: 'tech-found',
          num: '01',
          title: 'Technical Foundation',
          description: 'No spreadsheet progress-tracking. I maintain deep, bottom-level understanding of ADAS architecture, radar/camera perception layers, and vehicular bus communications.'
        },
        {
          id: 'cross-cultural',
          num: '02',
          title: 'Cross-Cultural Communication',
          description: 'Fluent in English, German, and Chinese. Acting as a high-efficiency technical bridge between Chinese and European R&D centers and executives — significantly reducing information loss in cross-border co-development.'
        },
        {
          id: 'multi-perspective',
          num: '03',
          title: 'Multidisciplinary Perspective',
          description: 'Combining rigorous engineering thinking with sharp commercial and quantitative logic. Helping organizations build product roadmaps that are both technically sound and strategically forward-looking.'
        }
      ]
    },
    contact: {
      sectionTitle: "Let's Connect",
      sectionSubtitle: 'No endless meetings. Let\'s align on specifics and move fast.',
      sentence: "Let's build something precise and impactful together.",
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject / Area',
      formMessage: 'Can you describe the challenges you are facing in your work?',
      formSend: 'Send Message',
      formSuccess: 'Message sent successfully. Thank you for reaching out.',
      copyEmail: 'Copy Email to Clipboard',
      copyEmailSuccess: 'Email copied!',
      directCall: 'Email Me Directly'
    },
    focusMode: {
      label: 'Focus Toolkit',
      description: 'Custom configurations to enhance your reading experience.',
      lineGuide: 'Toggle Reading Line Helper',
      spacingHelper: 'Expand Macro Whitespace',
      monoMode: 'Aesthetic Mono Font Mode',
      reset: 'Reset View'
    }
  },
  ZH: {
    nav: {
      home: '主页',
      work: '工作经验',
      whyMe: '优势',
      contact: '联系我',
      status: '可接受咨询 / 合作',
    },
    hero: {
      tag: '关于我',
      title: 'ADAS技术与商业交付的转化者',
      subtitle: '深耕先进驾驶辅助系统（ADAS）与技术项目管理（Technical Project Management）交汇点。我不仅止于底层技术与全球路试执行，同时致力于打通中欧汽车工程壁垒：将模糊的跨国需求精准降维，把复杂的风险管控与技术测试，萃取为清晰、可量化、可复用的标准化交付体系（SOPs）。我交付的不只是项目，更是确定性。',
      ctaPrimary: '查看精品工作',
      ctaSecondary: '即刻沟通',
      metaLocation: '现居德国 科布伦茨',
      metaAvailability: '当前项目状态：可承接高壁垒咨询与特殊客户合同',
    },
    work: {
      sectionTitle: '核心经历',
      sectionSubtitle: '一份关于工程领导力、全球化道路验证以及底层诊断协议深度的严谨记录。',
      highlightsBtn: '+ 了解详细亮点',
      interactionTitle: '车载诊断协议 (UDS) 动态沙盒',
      interactionDesc: '在此模拟测试车载诊断 ECU UDS (ISO 14229) 服务。发送真实报文指令以读取标识符（如 VIN 码）或模拟安全密钥算法。',
      simTerminalHeader: '车载 ECU 交互终端',
      projects: [
        {
          id: 'pm-execution',
          category: '技术项目管理',
          year: '2024 - 至今',
          title: '战略项目执行与精益交付',
          description: '主导复杂的 ADAS / 自动驾驶控制器出口项目。作为连接国内研发总部与欧洲高标准客户的核心枢纽，在对冲跨国时差、文化与流程差异的同时，平衡"开发速度"与"车规级量产严谨性"，确保高质量的如期交付（SOP）。',
          highlights: [
            '跨国测试与合规交付主导： 统筹并落地海外整车功能级测试项目（如核心 ISA 智能限速辅助系统路试），贯穿从前置车辆设备调试、物流规划到实地路况验证的全链路，快速闭环并解决突发技术阻断。',
            '商业需求"降维"与底层解码： 将高度抽象、多变的海外客户需求，精准解构为国内研发团队可执行的技术规格书。依托欧盟法律严格把控技术边界，前置规避合规风险。',
            '"非标"工程痛点的产品化： 萃取跨国交付与高频沟通中的隐性摩擦，构建结构化的排期模型与质量门禁（Quality Gates），将处理复杂路试与技术对接的个人经验转化为可复用的团队标准化资产。'
          ],
          techStack: ['技术项目管理 (TPM)', 'ADAS 开发流', '需求全生命周期追踪', 'ISA / ADAS 海外合规验证']
        },
        {
          id: 'tech-deepdive',
          category: '技术深挖',
          year: '2023.06 - 2024.01',
          title: '车载触觉反馈系统设计与验证（毕业设计）',
          description: '在 GE-T 与大众汽车（VW）的联合研发框架下，独立主导了车载触觉反馈系统（Vibrotactile Feedback）从"0到1"的概念验证周期。打通了从主观用户需求解码、硬件可制造性设计（DFM）到系统级软硬件自动化验证的完整数据流。不仅验证了技术可行性，更沉淀了一套将"模糊感知"转化为"硬核工程规范"的标准化研发范式。',
          highlights: [
            '需求降维与架构寻优： 打破常规摸黑开发，运用形态学矩阵（Morphologischer Kasten）与成对比较法，将高度抽象的用户感知需求转化为结构化、可量化的工程评估模型，实现系统级概念的科学选型。',
            '敏捷硬件闭环与快速原型（Rapid Prototyping）： 贯穿硬件生命周期，主导基于 SolidWorks 的 3D 建模及符合行业标准的工程出图。通过 3D 打印快速原型完成装配验证，将设计缺陷拦截在早期阶段。',
            '软硬件集成测试与自动化台架搭建： 基于 NI CompactRio (FPGA) 核心，从零编写底层控制台架逻辑，实现触觉模拟器的全自动化闭环运行；并结合 Matlab 实现海量测试数据的自动化清洗与指标验证。'
          ],
          techStack: ['概念验证 (POC)', '软硬件协同开发', '自动化测试台架设计', 'Labview (FPGA) / Matlab / SolidWorks']
        },
        {
          id: 'testing-validation',
          category: '初出茅庐',
          year: '2022.09 - 2023.02',
          title: '新产品导入 (NPL) 采购支持（实习）',
          description: '在大众汽车核心纯电平台（MEB）的新产品导入阶段提供深度业务支持。作为内部工程与外部供应商的沟通桥梁，协助处理量产爬坡期高频的技术变更（ECR）。通过核对报价、追踪模具投资与梳理零件合规档案，保障了零部件按节点顺利交付，并深入掌握了整车厂视角的"技术成本核算"逻辑。',
          highlights: [
            '协助守住预算底线： 针对车辆量产期的技术变更，协助对供应商的新报价进行交叉比对（Plausibilisierung）。通过拆解料工费，识别不合理溢价，为正式谈判提供有效的数据支撑。',
            '推进跨国沟通闭环： 独立负责与外部供应商的日常沟通及会议管理，落实会议决议的后置追踪，确保交付进度与内部研发计划（Milestones）严密对齐。',
            '零部件资产与合规管理： 协助建立严谨的零部件生命周期档案（Bauteillebenslauf），并系统性追踪供应商专属工装模具（Tooling）的阶段性付款，保障供应链合规准入。'
          ],
          techStack: ['新产品采购', '供应商日常沟通', '报价交叉验证', '大众采购体系流程']
        },
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
          description: '我不会只在表格上画进度进度条。我对于 ADAS 架构、雷达/摄像头感知层、车载总线交互有着底层的透彻理解。'
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
      formMessage: '能具体描述一下您在工作中遇到的痛点吗？',
      formSend: '发送信息',
      formSuccess: '简讯发送成功，感谢您的信息。',
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
      work: 'Erfahrung',
      whyMe: 'Vorteile',
      contact: 'Kontakt',
      status: 'Offen für Beratung / Zusammenarbeit',
    },
    hero: {
      tag: 'Über mich',
      title: 'Übersetzer zwischen ADAS-Technologie und kommerziellem Projektabschluss.',
      subtitle: 'Spezialisiert an der Schnittstelle von Advanced Driver Assistance Systems (ADAS) und Technical Project Management. Über Hands-on-Engineering und globale Straßentests hinaus überbrücke ich die Barrieren zwischen chinesischer und europäischer Automobilentwicklung — und übersetze mehrdeutige grenzüberschreitende Anforderungen in präzise, quantifizierbare und reproduzierbare Liefersysteme (SOPs). Ich liefere nicht nur Projekte; ich liefere Gewissheit.',
      ctaPrimary: 'Projekte ansehen',
      ctaSecondary: 'Kontakt aufnehmen',
      metaLocation: 'Standort: Koblenz',
      metaAvailability: 'Offen für spezialisierte Beratungsmandate',
    },
    work: {
      sectionTitle: 'Kernkompetenz & Projekte',
      sectionSubtitle: 'Ein fundierter Nachweis von technischer Führung, internationaler Absicherung und grenzüberschreitender Lieferung.',
      highlightsBtn: '+ Details ansehen',
      interactionTitle: 'Diagnoseprotokoll-Spielplatz',
      interactionDesc: 'Testen Sie eine ECU UDS (ISO 14229) Diagnosesimulation. Führen Sie reale Diagnoseanfragen aus, um Identifikatoren auszulesen oder den Seed/Key-Zugriff zu simulieren.',
      simTerminalHeader: 'Automotive ECU Terminal',
      projects: [
        {
          id: 'pm-execution',
          category: 'Technisches Projektmanagement',
          year: '2024 - Heute',
          title: 'Strategische Projektausführung & Lean Delivery',
          description: 'Leitung komplexer ADAS/Automated Driving Controller-Exportprojekte. Als zentrales Bindeglied zwischen inländischem F&E-Hauptsitz und anspruchsvollen europäischen Kunden — Ausbalancierung von Zeitzonen-, Kultur- und Prozessunterschieden bei gleichzeitiger Aufrechterhaltung der Balance zwischen Entwicklungsgeschwindigkeit und automotive-grade Produktionsstrenge für termingerechte Lieferungen (SOP).',
          highlights: [
            'Leitung grenzüberschreitender Tests & Compliance-Lieferung: Koordination und Durchführung von Überseefahrzeugtests auf Funktionsebene (z.B. ISA Intelligent Speed Assist Straßentests) — von der Fahrzeugvorbereitung über Logistikplanung bis zur Vor-Ort-Validierung mit schneller Lösung technischer Blocker.',
            'Kommerzielles Anforderungs-Decoding & technische Übersetzung: Präzise Zerlegung hochabstrakter, sich verändernder Kundenanforderungen in ausführbare technische Spezifikationen für inländische F&E-Teams. EU-Regulierungsexpertise zur proaktiven Risikominimierung genutzt.',
            'Produktisierung nicht-standardisierter Engineering-Schmerzpunkte: Latente Reibung aus grenzüberschreitender Lieferung extrahiert, strukturierte Planungsmodelle und Quality Gates aufgebaut — persönliches Fachwissen in wiederverwendbare Teamstandards überführt.'
          ],
          techStack: ['Technical Project Management (TPM)', 'ADAS-Entwicklungspipeline', 'Vollständiges Anforderungstracing', 'ISA/ADAS Overseas Compliance Validation']
        },
        {
          id: 'tech-deepdive',
          category: 'Ingenieurforschung',
          year: '2023.06 - 2024.01',
          title: 'Automotive Haptic-Feedback-System: Design & Validierung (Abschlussarbeit)',
          description: 'Im Rahmen eines gemeinsamen F&E-Projekts zwischen GE-T und Volkswagen (VW) eigenständige Leitung eines vollständigen Konzeptvalidierungszyklus für ein fahrzeuginternes vibrotaktiles Feedbacksystem von Grund auf. Verbindung der gesamten Pipeline von der Dekodierung subjektiver Nutzeranforderungen und Hardware-DFM bis zur automatisierten System-Level-Software/Hardware-Validierung — mit Etablierung eines standardisierten F&E-Paradigmas.',
          highlights: [
            'Anforderungsdekomposition & Architekturauswahl: Mithilfe morphologischer Matrizen (Morphologischer Kasten) und paarweiser Vergleichsmethoden abstrakte Nutzerwahrnehmungsanforderungen in strukturierte, quantifizierbare Engineering-Bewertungsmodelle transformiert.',
            'Agile Hardware-Iteration & Rapid Prototyping: Leitung der SolidWorks-basierten 3D-Modellierung und branchenkonformer Fertigungszeichnungen. 3D-Druck für Montagevalidierung zur frühzeitigen Fehleridentifikation eingesetzt.',
            'Software/Hardware-Integrationstest & automatisierter Prüfstand: Steuerlogik von Grund auf mit NI CompactRio (FPGA) aufgebaut für vollautomatisierten Closed-Loop-Betrieb; kombiniert mit Matlab für automatisierte Datenbereinigung und Metrikvalidierung.'
          ],
          techStack: ['Proof of Concept (POC)', 'Hardware-Software-Co-Entwicklung', 'Automatisierter Prüfstandsaufbau', 'LabVIEW (FPGA) / Matlab / SolidWorks']
        },
        {
          id: 'testing-validation',
          category: 'Berufsstart',
          year: '2022.09 - 2023.02',
          title: 'Neuprodukteinführung (NPL) Einkaufsunterstützung (Praktikum)',
          description: 'Intensive Unterstützung während der Neuprodukteinführungsphase der Volkswagen MEB-Plattform. Als Kommunikationsbrücke zwischen internem Engineering und externen Lieferanten — Bearbeitung hochfrequenter Engineering Change Requests (ECRs) während des Produktionshochlaufs und tiefes Einblick in die OEM-Perspektive der technischen Kostenkalkulation.',
          highlights: [
            'Budgetverteidigung: Kreuzvalidierung (Plausibilisierung) neuer Lieferantenangebote bei technischen Änderungen. Unrealistische Preisaufschläge durch Aufschlüsselung von Material-, Arbeits- und Gemeinkosten identifiziert und Datengrundlage für Verhandlungen geschaffen.',
            'Grenzüberschreitende Kommunikationsschließung: Eigenständige Verwaltung der täglichen Lieferantenkommunikation und Meeting-Koordination, Nachverfolgung von Aktionspunkten zur Sicherstellung der Liefertermine.',
            'Teile-Asset & Compliance-Management: Aufbau rigoroser Bauteillebenslauf-Dokumentation und systematisches Tracking lieferantenspezifischer Werkzeugzahlungen zur Sicherstellung der Supply-Chain-Compliance.'
          ],
          techStack: ['Neuprodukteinkauf', 'Lieferantenkommunikation', 'Angebotskreuzvalidierung', 'VW-Einkaufsprozesse']
        }
      ]
    },
    whyMe: {
      sectionTitle: 'Warum ich?',
      sectionSubtitle: 'Solide technische Basis vereint mit internationalem Weitblick und kommerziellem Scharfsinn.',
      items: [
        {
          id: 'tech-found',
          num: '01',
          title: 'Technisches Fundament',
          description: 'Keine Fortschrittskontrolle per Excel: Ich besitze ein tiefgreifendes Verständnis von ADAS-Architektur, Radar/Kamera-Sensorik und Fahrzeugnetzwerken auf Systemebene.'
        },
        {
          id: 'cross-cultural',
          num: '02',
          title: 'Interkulturelle Kompetenz',
          description: 'Fließend in Deutsch, Englisch und Chinesisch. Hocheffiziente Brückenfunktion zwischen chinesischen und europäischen F&E-Zentren und Führungskräften — mit erheblicher Reduzierung von Informationsverlusten in der grenzüberschreitenden Zusammenarbeit.'
        },
        {
          id: 'multi-perspective',
          num: '03',
          title: 'Multidisziplinärer Blick',
          description: 'Verbindung aus rigorosem Engineering-Denken und scharfer kaufmännischer Logik. Unterstützung von Organisationen beim Aufbau technisch fundierter und strategisch zukunftsorientierter Produkt-Roadmaps.'
        }
      ]
    },
    contact: {
      sectionTitle: 'Kontakt aufnehmen',
      sectionSubtitle: 'Keine überflüssigen Meetings. Lassen Sie uns konkret werden und schnell handeln.',
      sentence: 'Lassen Sie uns gemeinsam etwas Präzises und Wirkungsvolles aufbauen.',
      formName: 'Name',
      formEmail: 'E-Mail',
      formSubject: 'Thema / Bereich',
      formMessage: 'Können Sie die Herausforderungen beschreiben, mit denen Sie in Ihrer Arbeit konfrontiert sind?',
      formSend: 'Nachricht senden',
      formSuccess: 'Nachricht erfolgreich gesendet. Vielen Dank für Ihre Anfrage.',
      copyEmail: 'E-Mail kopieren',
      copyEmailSuccess: 'E-Mail kopiert!',
      directCall: 'E-Mail direkt senden'
    },
    focusMode: {
      label: 'Fokus-Werkzeuge',
      description: 'Optionale visuelle Hilfsmittel zur Optimierung des Leseflusses.',
      lineGuide: 'Lesehilfe-Linie aktivieren',
      spacingHelper: 'Extremer Freiraum (Macro Whitespace)',
      monoMode: 'Monospace-Schriftart aktivieren',
      reset: 'Ansicht zurücksetzen'
    }
  }
};
