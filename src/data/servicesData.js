/**
 * IBS - Innovative Business Solutions
 * Central Services Data: 14 Major Language & Outsourcing / Consulting Service Categories
 *
 * Individual subservices represent capabilities and proposed offerings confirmed per project requirements.
 */

// Top 5 quick highlight banners below Hero
export const CATEGORY_SERVICES = [
  {
    id: 'translation-services',
    title: 'Translation Services',
    category: 'language',
    bgColor: '#0B2545',
    textColor: '#ffffff',
    iconName: 'FileText',
    description: 'General, business, technical, legal, medical, financial, marketing, and corporate document translation.',
    features: ['Business & Corporate Translation', 'Technical & Legal Documents', 'Medical & Financial Translation', 'Multilingual Document Delivery']
  },
  {
    id: 'localization-services',
    title: 'Localization Services',
    category: 'language',
    bgColor: '#0D9488',
    textColor: '#ffffff',
    iconName: 'Globe',
    description: 'Website, software, mobile app, e-commerce, game, multimedia, and UI/UX cultural adaptation.',
    features: ['Website & App Localization', 'Software & UI/UX Adaptation', 'E-commerce & Marketing', 'Cultural Adaptation']
  },
  {
    id: 'interpretation-services',
    title: 'Interpretation Services',
    category: 'language',
    bgColor: '#14B8A6',
    textColor: '#ffffff',
    iconName: 'Headphones',
    description: 'Simultaneous, consecutive, OPI, VRI, and on-site interpretation for meetings, conferences, and consultations.',
    features: ['Simultaneous & Consecutive', 'OPI & Video Remote (VRI)', 'Business & Conference Support', 'Medical & Legal Interpretation']
  },
  {
    id: 'transcription-services',
    title: 'Transcription Services',
    category: 'media',
    bgColor: '#0A2540',
    textColor: '#ffffff',
    iconName: 'Mic',
    description: 'Audio, video, verbatim, interview, focus group, medical, and legal transcription with timestamps.',
    features: ['Audio & Video Transcription', 'Interviews & Focus Groups', 'Timestamped & Speaker ID', 'Verbatim & Clean Verbatim']
  },
  {
    id: 'subtitling-captioning',
    title: 'Subtitling & Dubbing',
    category: 'media',
    bgColor: '#0F766E',
    textColor: '#ffffff',
    iconName: 'Film',
    description: 'Multilingual subtitling, closed/open captions (SRT/VTT), corporate voice-over, and dubbing.',
    features: ['Multilingual Subtitling (SRT/VTT)', 'Closed & SDH Captioning', 'Corporate & E-learning Voice-over', 'Audio Synchronization']
  }
];

// 14 Major Service Categories
export const MAJOR_SERVICES = [
  {
    id: 'translation-services',
    menuLabel: 'Translation',
    title: 'Translation Services',
    group: 'language',
    groupLabel: 'Language & Localization',
    tag: 'Core Language Service',
    iconName: 'FileText',
    description: 'Accurate general, business, technical, legal, medical, financial, and academic translation across global languages.',
    fullDescription: 'IBS delivers accurate, context-aware translation services across corporate, technical, legal, medical, and financial domains. Every project is handled with terminology consistency, structural fidelity, and strict confidentiality.',
    subservices: [
      'General and Business Translation',
      'Technical Translation',
      'Legal and Contractual Translation',
      'Medical and Pharmaceutical Translation',
      'Financial and Banking Translation',
      'Marketing Translation',
      'Website and Application Translation',
      'Academic Translation',
      'Corporate Document Translation',
      'Certified Translation, where available',
      'Multilingual Document Translation'
    ],
    useCases: [
      'Commercial contracts, NDAs, and regulatory compliance documentation',
      'Engineering manuals, product specifications, and SOPs',
      'Financial statements, banking disclosures, and investor presentations',
      'Clinical records, pharmaceutical inserts, and academic transcripts'
    ],
    qualityStandard: 'Contextual Accuracy, Terminology Consistency & Multi-Tier Review',
    isLanguageService: true
  },
  {
    id: 'localization-services',
    menuLabel: 'Localization',
    title: 'Localization Services',
    group: 'language',
    groupLabel: 'Language & Localization',
    tag: 'Digital & Cultural Adaptation',
    iconName: 'Globe',
    description: 'End-to-end website, software, mobile app, e-commerce, game, and multimedia cultural adaptation.',
    fullDescription: 'Localization goes beyond literal translation to adapt user interfaces, cultural nuances, date/currency formats, and brand messaging so your digital products feel native to every target market.',
    subservices: [
      'Website Localization',
      'Software Localization',
      'Mobile App Localization',
      'E-commerce Localization',
      'Game Localization',
      'Marketing Localization',
      'Product and Packaging Localization',
      'Multimedia Localization',
      'Cultural Adaptation',
      'UI/UX Localization'
    ],
    useCases: [
      'Multilingual corporate websites and global e-commerce storefronts',
      'SaaS dashboards, desktop software, and iOS/Android mobile apps',
      'Regional product packaging, labels, and consumer collateral',
      'Interactive UI/UX string adaptation and regional layout checks'
    ],
    qualityStandard: 'Cultural Authenticity, Functional UI Integrity & Locale Accuracy',
    isLanguageService: true
  },
  {
    id: 'interpretation-services',
    menuLabel: 'Interpretation',
    title: 'Interpretation Services',
    group: 'language',
    groupLabel: 'Language & Localization',
    tag: 'Live Communication',
    iconName: 'Headphones',
    description: 'Simultaneous, consecutive, over-the-phone (OPI), video remote (VRI), and on-site interpretation.',
    fullDescription: 'IBS facilitates clear, real-time spoken communication across languages for corporate meetings, international conferences, legal consultations, and healthcare interactions.',
    subservices: [
      'Simultaneous Interpretation',
      'Consecutive Interpretation',
      'Over-the-Phone Interpretation (OPI)',
      'Video Remote Interpretation (VRI)',
      'On-site Interpretation',
      'Business Meeting Interpretation',
      'Conference Interpretation',
      'Medical Interpretation',
      'Legal Interpretation',
      'Community Interpretation'
    ],
    useCases: [
      'Executive negotiations, board meetings, and cross-border briefings',
      'Remote video (VRI) and telephonic (OPI) multilingual support',
      'Industry conferences, seminars, and international trade events',
      'Healthcare consultations, legal proceedings, and community outreach'
    ],
    qualityStandard: 'Real-Time Precision, Impartiality & Strict Confidentiality',
    isLanguageService: true
  },
  {
    id: 'transcription-services',
    menuLabel: 'Transcription',
    title: 'Transcription Services',
    group: 'media',
    groupLabel: 'Audio, Video & DTP',
    tag: 'Audio & Video Text',
    iconName: 'Mic',
    description: 'Audio, video, verbatim, interview, focus group, medical, and legal transcription with timestamps.',
    fullDescription: 'Convert recorded speech into clean, searchable, and accurately formatted text. IBS supports verbatim and intelligent verbatim transcription with speaker identification and precise time-coding.',
    subservices: [
      'Audio Transcription',
      'Video Transcription',
      'Verbatim Transcription',
      'Interview Transcription',
      'Focus Group Transcription',
      'Market Research Transcription',
      'Medical Transcription',
      'Legal Transcription',
      'Timestamped Transcription',
      'Speaker Identification'
    ],
    useCases: [
      'Market research focus groups and consumer in-depth interviews',
      'Corporate webinars, board calls, and conference recordings',
      'Legal depositions, hearings, and medical dictation records',
      'Multi-speaker media archives with time-coded speaker labels'
    ],
    qualityStandard: 'Audio Clarity Verification & Timestamp Fidelity',
    isLanguageService: true
  },
  {
    id: 'subtitling-captioning',
    menuLabel: 'Subtitling & Captioning',
    title: 'Subtitling & Captioning',
    group: 'media',
    groupLabel: 'Audio, Video & DTP',
    tag: 'Video Accessibility',
    iconName: 'Captions',
    description: 'Multilingual subtitling, closed/open captioning, SDH captions, and frame-accurate SRT/VTT sync.',
    fullDescription: 'Make corporate, educational, and entertainment video content accessible across global audiences with synchronized multilingual subtitles and compliant closed captions.',
    subservices: [
      'Subtitle Translation',
      'Multilingual Subtitling',
      'Closed Captioning',
      'Open Captioning',
      'SDH Captions',
      'Subtitle Synchronization',
      'SRT and VTT Formats'
    ],
    useCases: [
      'Corporate training videos, e-learning courses, and onboarding media',
      'Product launches, promotional videos, and social media reels',
      'Accessible SDH captions for hearing-impaired audiences',
      'Broadcast and streaming deliverables in SRT, VTT, and embedded formats'
    ],
    qualityStandard: 'Frame-Accurate Synchronization & Reading-Speed Compliance',
    isLanguageService: true
  },
  {
    id: 'dubbing-voiceover',
    menuLabel: 'Dubbing & Voice-over',
    title: 'Dubbing & Voice-over',
    group: 'media',
    groupLabel: 'Audio, Video & DTP',
    tag: 'Multimedia Audio',
    iconName: 'Film',
    description: 'Multilingual dubbing, corporate & e-learning voice-over, documentary narration, and IVR recordings.',
    fullDescription: 'Deliver engaging spoken-word experiences in target languages through adapted scripts, synchronized dubbing, professional narration, and clear telephony voice prompts.',
    subservices: [
      'Multilingual Dubbing',
      'Corporate Voice-over',
      'E-learning Voice-over',
      'Advertising Voice-over',
      'Documentary Narration',
      'Explainer Video Narration',
      'IVR Recordings',
      'Audio Synchronization'
    ],
    useCases: [
      'Multilingual e-learning modules and corporate explainer videos',
      'Commercial advertising spots and documentary narration',
      'Interactive Voice Response (IVR) menus and customer support prompts',
      'Timed audio dubbing aligned with on-screen video pacing'
    ],
    qualityStandard: 'Natural Delivery, Script Adaptation & Audio Sync Integrity',
    isLanguageService: true
  },
  {
    id: 'multilingual-dtp',
    menuLabel: 'Multilingual DTP',
    title: 'Multilingual Desktop Publishing',
    group: 'media',
    groupLabel: 'Audio, Video & DTP',
    tag: 'Formatting & Typesetting',
    iconName: 'Layout',
    description: 'Multilingual document formatting, brochure/PDF localization, RTL language layout, and typesetting.',
    fullDescription: 'Preserve the visual polish of brochures, technical manuals, presentations, and PDFs after translation, including script-specific typography and right-to-left (RTL) layout adaptation.',
    subservices: [
      'Multilingual Document Formatting',
      'Brochure Localization',
      'Presentation Localization',
      'PDF Localization',
      'Technical Manual Formatting',
      'Right-to-Left Language Formatting',
      'Multilingual Typesetting'
    ],
    useCases: [
      'Corporate brochures, product catalogs, and marketing collateral',
      'Technical user manuals and illustrated safety handbooks',
      'Right-to-left (RTL) Arabic and Hebrew layout mirroring',
      'Executive slide decks and print-ready multilingual PDFs'
    ],
    qualityStandard: 'Publication-Grade Typography & Visual Layout Consistency',
    isLanguageService: true
  },
  {
    id: 'linguistic-qa',
    menuLabel: 'Linguistic QA',
    title: 'Linguistic Quality Assurance',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'Quality & Validation',
    iconName: 'ShieldCheck',
    description: 'Translation proofreading, bilingual & native review, terminology validation, and style guide compliance.',
    fullDescription: 'Ensure published content meets high linguistic and brand standards through independent bilingual review, native-language proofreading, and systematic quality assessment.',
    subservices: [
      'Translation Proofreading',
      'Bilingual Review',
      'Native-Language Review',
      'Terminology Validation',
      'Translation Quality Assessment',
      'Style Guide Compliance',
      'Linguistic Validation'
    ],
    useCases: [
      'Pre-publication bilingual proofreading of high-visibility documents',
      'In-context UI/UX review for localized web and mobile applications',
      'Terminology and corporate brand style-guide audits',
      'Third-party translation quality scoring and corrective feedback'
    ],
    qualityStandard: 'Independent Bilingual Review & Style-Guide Adherence',
    isLanguageService: true
  },
  {
    id: 'back-translation',
    menuLabel: 'Back Translation & Validation',
    title: 'Back Translation & Linguistic Validation',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'Clinical & Survey QA',
    iconName: 'Repeat',
    description: 'Independent back translation, reconciliation, harmonization, cognitive debriefing, and clinical surveys.',
    fullDescription: 'Verify conceptual equivalence for clinical trials, regulated documentation, and global research instruments through blind back translation, reconciliation, and harmonization workflows.',
    subservices: [
      'Back Translation',
      'Reconciliation',
      'Harmonization',
      'Cognitive Debriefing Support',
      'Questionnaire Translation',
      'Survey Translation',
      'Clinical Document Translation'
    ],
    useCases: [
      'Clinical trial protocols, informed consent forms, and patient diaries',
      'Global market research questionnaires and psychometric scales',
      'Side-by-side reconciliation and cross-regional harmonization',
      'Regulatory submissions requiring documented linguistic validation'
    ],
    qualityStandard: 'Blind Verification, Reconciliation & Conceptual Equivalence',
    isLanguageService: true
  },
  {
    id: 'multilingual-content',
    menuLabel: 'Content Creation',
    title: 'Multilingual Content Creation',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'Copywriting & Transcreation',
    iconName: 'PenTool',
    description: 'Multilingual copywriting, transcreation, SEO translation, product descriptions, and brand messaging.',
    fullDescription: 'Craft compelling, culturally resonant copy across markets. From creative transcreation to SEO-aligned web pages and product descriptions, IBS helps your brand speak authentically.',
    subservices: [
      'Multilingual Copywriting',
      'Transcreation',
      'Marketing Content Adaptation',
      'Website Content Creation',
      'SEO Translation',
      'Product Descriptions',
      'Social Media Content',
      'Brand Messaging Localization'
    ],
    useCases: [
      'Creative campaign transcreation and regional brand slogans',
      'SEO-optimized landing pages and multilingual website copy',
      'E-commerce product catalogs and marketplace listings',
      'Regional social media calendars and corporate newsletters'
    ],
    qualityStandard: 'Brand Voice Alignment & Cultural Resonance',
    isLanguageService: true
  },
  {
    id: 'ai-language-tech',
    menuLabel: 'AI Language Tech',
    title: 'AI Translation & Language Technology',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'Human-in-the-Loop AI',
    iconName: 'Cpu',
    description: 'AI-assisted translation, MTPE, neural MT review, translation memory, CAT tools, and terminology management.',
    fullDescription: 'Combine modern language technology with human linguistic oversight. IBS supports Machine Translation Post-Editing (MTPE), CAT tool workflows, translation memory maintenance, and AI output review.',
    subservices: [
      'AI-assisted Translation',
      'Machine Translation Post-editing',
      'Neural Machine Translation Review',
      'Translation Memory Management',
      'CAT Tools',
      'Terminology Management',
      'AI Content Linguistic Review'
    ],
    useCases: [
      'Light and full Machine Translation Post-Editing (MTPE) for scale',
      'Translation Memory (TM) and glossary upkeep across projects',
      'Human linguistic review of AI-generated corporate content',
      'CAT-tool assisted workflows for consistent multi-document updates'
    ],
    qualityStandard: 'Human-Led Post-Editing & Terminology Governance',
    isLanguageService: true
  },
  {
    id: 'language-data',
    menuLabel: 'Language Data',
    title: 'Language Data & Annotation',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'AI & NLP Datasets',
    iconName: 'Database',
    description: 'Text & audio annotation, speech labeling, intent/sentiment tagging, NER, and dataset validation.',
    fullDescription: 'Support NLP, conversational AI, and speech recognition initiatives with structured multilingual text and audio annotation, entity tagging, and dataset quality validation.',
    subservices: [
      'Text Annotation',
      'Audio Annotation',
      'Speech Labeling',
      'Intent and Sentiment Annotation',
      'Named Entity Recognition',
      'Linguistic Tagging',
      'Language Identification',
      'Dataset Validation'
    ],
    useCases: [
      'Training and evaluation corpora for regional Indian & global languages',
      'Named Entity Recognition (NER), intent, and sentiment labeling',
      'Speech-to-text audio segmentation and phonetic tagging',
      'Multilingual dataset auditing and consistency validation'
    ],
    qualityStandard: 'Structured Annotation Guidelines & Dataset Hygiene',
    isLanguageService: true
  },
  {
    id: 'market-research',
    menuLabel: 'Market Research',
    title: 'Market Research Language Solutions',
    group: 'qa-ai',
    groupLabel: 'QA, AI & Research',
    tag: 'Insights & Surveys',
    iconName: 'BarChart3',
    description: 'Focus group & IDI translation, consumer interview transcription, survey translation, and qualitative data processing.',
    fullDescription: 'Enable accurate cross-market insights for research agencies and enterprises with multilingual survey adaptation, focus group transcription, back translation, and qualitative coding support.',
    subservices: [
      'Focus Group Translation',
      'In-depth Interview Translation',
      'Consumer Interview Transcription',
      'Survey Translation',
      'Back Translation',
      'Research Interpretation',
      'Research Report Translation',
      'Multilingual Qualitative Data Processing'
    ],
    useCases: [
      'Multilingual consumer surveys, screeners, and discussion guides',
      'In-depth interview (IDI) and focus group transcription & translation',
      'Open-ended verbatim coding and qualitative insight summaries',
      'Final research report translation for global stakeholders'
    ],
    qualityStandard: 'Unbiased Phrasing & Qualitative Data Integrity',
    isLanguageService: true
  },
  {
    id: 'outsourcing-consulting',
    menuLabel: 'Outsourcing & Consulting',
    title: 'Outsourcing and Consulting Services',
    group: 'outsourcing',
    groupLabel: 'Outsourcing & Consulting',
    tag: 'Outsourcing & Consulting',
    iconName: 'Workflow',
    description: 'Multilingual customer support, email, chat & call support, document/data processing, content moderation, back-office operations, and consulting.',
    fullDescription: 'Streamline business operations with dedicated outsourcing, business process management, and operational consulting support from Hyderabad. IBS handles customer interactions, language-based data processing, content moderation, and strategic workflow optimization.',
    subservices: [
      'Business Process Outsourcing (BPO)',
      'Operational & Process Consulting',
      'Multilingual Customer Support',
      'Email and Chat Support',
      'Multilingual Call Centre Support',
      'Document & Data Processing',
      'Content Moderation',
      'Back-office Support',
      'Translation Project Coordination',
      'Vendor and Linguist Coordination'
    ],
    useCases: [
      'Multilingual email, live chat, and customer support desks',
      'Back-office administration, CRM hygiene, and document processing',
      'Strategic workflow and business process optimization consulting',
      'User-generated content moderation across regional languages',
      'End-to-end translation project, linguist, and vendor coordination'
    ],
    qualityStandard: 'SLA-Driven Execution, Data Confidentiality & Continuity',
    isLanguageService: false
  }
];

// Ordered 14-item navigation menu for Navbar & Mobile Drawer
export const WEBSITE_MENU_SERVICES = MAJOR_SERVICES.map((srv) => ({
  menuLabel: srv.title,
  shortLabel: srv.menuLabel,
  category: srv.groupLabel,
  serviceId: srv.id,
  quoteValue: srv.title
}));

// Combined export for modals & lookups
export const ALL_SERVICES = MAJOR_SERVICES;
