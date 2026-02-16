import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

type SupportedLanguage = 'en' | 'pt-BR' | 'nl';

export const supportedLanguages: {
  code: SupportedLanguage;
  label: string;
  nativeName: string;
  flag: string;
}[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'pt-BR', label: 'Portuguese', nativeName: 'Português (BR)', flag: '🇧🇷' },
  { code: 'nl', label: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
];

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        resume: 'Resume',
        contact: 'Contact',
        role: 'Fullstack Developer',
      },
      hero: {
        eyebrow: 'Fullstack Developer',
        tagline: 'Building the future, one commit at a time.',
        githubCta: 'View my GitHub',
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'A snapshot of the products and tools I have shipped recently.',
        allTitle: 'Projects',
        // Featured projects
        basicLlmChatTitle: 'Basic LLM Chat',
        basicLlmChatDescription:
          'Proof of concept connecting a chat interface with DeepSeek through API integration.',
        bookMarketplaceTitle: 'Book Marketplace',
        bookMarketplaceDescription:
          'A marketplace platform for buying and selling books with user authentication and listings management.',
        f1AppTitle: 'F1 App',
        f1AppDescription:
          'Full-stack application for F1 race data, featuring live timings, driver stats, and team information.',
        whatsappProxyTitle: 'WhatsApp Proxy',
        whatsappProxyDescription:
          'Docker-based proxy solution for WhatsApp API integration and messaging automation.',
        browserFingerprintTitle: 'Browser Fingerprint',
        browserFingerprintDescription:
          'Device fingerprinting library to identify and track users across sessions.',
        universalDocumentWalletTitle: 'Universal Document Wallet',
        universalDocumentWalletDescription:
          'AI-powered wallet to extract specific data from PDFs using LLM agents (e.g., insurance dates, contract clauses).',
        documentWalletTitle: 'Universal Document Wallet',
        documentWalletDescription:
          'AI-powered wallet to extract specific data from PDFs using LLM agents (e.g., insurance dates, contract clauses).',
        // All projects
        aiResumeTitle: 'AI Resume',
        aiResumeDescription: 'Generates professional resumes with AI precision',
        automataStemmingTitle: 'Automata Driven Stemming',
        automataStemmingDescription: 'Automata-based text stemming implementation in Java',
        agendaFacilUiTitle: 'Agenda Facil UI',
        agendaFacilUiDescription: 'Agenda SaaS application for scheduling',
        kotlinGrpcTitle: 'Kotlin gRPC',
        kotlinGrpcDescription: 'Simple API using gRPC protocol in Kotlin',
        llmAutoTranslatedChatTitle: 'LLM Auto Translated Chat',
        llmAutoTranslatedChatDescription: 'Multilingual chat using LLM translation',
        urlShortenerTitle: 'URL Shortener',
        urlShortenerDescription: 'URL shortening system design in Kotlin',
        pianoGameTitle: 'Piano Game',
        pianoGameDescription: 'Sheet music practice game',
        curriculumTitle: 'Curriculum',
        curriculumDescription: 'Personal curriculum and resume in CSS',
        desafioZapptsFrontendTitle: 'Desafio Zappts Frontend',
        desafioZapptsFrontendDescription: 'Frontend challenge solution',
        burgerBuilderTitle: 'Burger Builder',
        burgerBuilderDescription: 'React burger builder application',
        recipeBookTitle: 'Recipe Book',
        recipeBookDescription: 'Recipe management application',
      },
      about: {
        title: 'About',
        p1: 'I am a fullstack developer focused on building modern web applications with clean architecture, strong UX, and long-term maintainability.',
        p2: 'I enjoy working across the stack, from backend services and APIs to responsive frontends, and care deeply about code quality and collaboration.',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Reach out for collaboration, opportunities, or a quick chat.',
        getInTouch: 'GET IN TOUCH',
        introText: "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and ideas.",
        emailLabel: 'EMAIL',
        phoneLabel: 'PHONE',
        locationLabel: 'LOCATION',
        location: 'Amsterdam, Netherlands',
        followMe: 'FOLLOW ME',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'Project inquiry',
        messagePlaceholder: 'Tell me about your project...',
        sendMessage: 'SEND MESSAGE',
      },
      footer: {
        resume: 'Resume',
        downloadCv: 'Download CV',
        rights: 'All rights reserved.',
      },
      resume: {
        title: 'Senior Full Stack Developer',
        tagline: 'SWE | Java | Angular | Node.js | React | Netherlands',
        summary: 'Summary',
        summaryText: 'Senior Full Stack Developer specialized in Angular and Java Spring Boot, with 10+ years of experience delivering scalable frontend applications and backend services in complex, high-impact projects. Proven ability to lead feature development (including UX-focused tools like Query Builders), diagnose and fix critical performance issues, and manage major framework migrations (Angular 9→14 | Angular 15→21). Skilled in RxJS reactive programming, state management, and E2E testing with Cypress, including innovative adaptations for hybrid mobile environments.',
        skills: 'Technical Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        cloudDevops: 'Cloud & DevOps',
        databases: 'Databases',
        tools: 'Tools',
        experience: 'Professional Experience',
        education: 'Education',
        certifications: 'Certifications & Courses',
        honors: 'Honors & Awards',
        contactLabel: 'Contact information',
        // Experience entries
        hexaware: 'Hexaware Technologies',
        hexawarePeriod: 'October 2022 – Present',
        hexawareRole: 'Senior Full Stack Developer · Amsterdam Area',
        dealershipProject: 'Dealership platform',
        dealershipBullets: 'Orchestrated Strategic Frontend Modernization (Angular v15 to v21); Mitigated 4 low, 12 moderate, and 17 high vulnerabilities down to zero; Designed and implemented a centralized DateAdapter pattern to eliminate heavy reliance on moment.js',
        identityProject: 'Digital Identity Wallet App',
        identityBullets: 'Led migration from Angular 9 to Angular 14, ensuring compatibility and performance; Implemented SSL pinning for enhanced security in hybrid Ionic/Cordova mobile app; Developed framework enabling Cypress E2E testing in hybrid mobile environments; Mentored backend developers and junior frontend engineers on frontend best practices; Conducted production support and incident analysis using OpenSearch and AWS CloudWatch',
        cit: 'CI&T',
        citPeriod: 'April 2021 – February 2022',
        citRole: 'Software Engineer · Campinas, Brazil',
        citBullets: 'Led development of Query Builder feature empowering non-technical operators to perform advanced database searches; Diagnosed and fixed critical memory leak in Angular component that caused frequent browser crashes; Drove process improvements that cut refinement session times by 50%; Used Cypress extensively for end-to-end testing',
        urbam: 'URBAM – Urbanizadora Municipal S/A',
        urbamPeriod: 'December 2018 – March 2021',
        urbamRole: 'Systems Analyst · São José dos Campos, Brazil',
        urbamBullets: 'Developed enterprise applications using Java Spring Boot, Ionic, and React Native; Integrated SAP and HR systems to optimize administrative workflows; Implemented automated UI testing with Cypress for hybrid and mobile platforms',
        fitec: 'FITec – Fundação para Inovações Tecnológicas',
        fitecPeriod: 'August 2017 – December 2018',
        fitecRole: 'Junior Software Developer · Belo Horizonte, Brazil',
        fitecBullets: 'Developed AngularJS, Angular 5, and Java backend for multinational Swedish client; Participated in code reviews (Gerrit) and developed workflows with Camunda',
        diario: 'Jornal Diário de Contagem Online',
        diarioPeriod: 'August 2007 – December 2015',
        diarioRole: 'Web Developer · Contagem, Brazil',
        diarioBullets: 'Developed and maintained proprietary CMS in PHP for news portal; Created microsites and features using HTML, CSS, JavaScript (jQuery); Developed RESTful APIs for internal and external consumption',
        educationText: 'Bachelor of Information Systems – PUC Minas, Brazil (2012 – 2016); Exchange Student, Computer Science and Engineering – UCONN, USA (2015 – 2016)',
        certAws: 'AWS Certified AI Practitioner (2025)',
        certAngular: 'Angular 2+ – The Complete Guide',
        certReact: 'React – The Complete Guide',
        certReactNative: 'React Native',
        honorsText: 'Academic Highlight – Outstanding Student; Honorable Award',
      },
      languages: {
        label: 'Language',
      },
    },
  },
  'pt-BR': {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        resume: 'Currículo',
        contact: 'Contato',
        role: 'Desenvolvedor Fullstack',
      },
      hero: {
        eyebrow: 'Desenvolvedor Fullstack',
        tagline: 'Construindo o futuro, um commit por vez.',
        githubCta: 'Ver meu GitHub',
      },
      projects: {
        title: 'Projetos em Destaque',
        subtitle: 'Uma amostra dos produtos e ferramentas que entreguei recentemente.',
        allTitle: 'Projetos',
        // Featured projects
        basicLlmChatTitle: 'Basic LLM Chat',
        basicLlmChatDescription:
          'Prova de conceito conectando uma interface de chat com DeepSeek através de integração via API.',
        bookMarketplaceTitle: 'Livraria Marketplace',
        bookMarketplaceDescription:
          'Plataforma de marketplace para compra e venda de livros com autenticação e gerenciamento de anúncios.',
        f1AppTitle: 'Aplicativo F1',
        f1AppDescription:
          'Aplicação full-stack para dados de corridas de F1, com tempos ao vivo, estatísticas de pilotos e informações das equipes.',
        whatsappProxyTitle: 'WhatsApp Proxy',
        whatsappProxyDescription:
          'Solução baseada em Docker para integração com API do WhatsApp e automação de mensagens.',
        browserFingerprintTitle: 'Browser Fingerprint',
        browserFingerprintDescription:
          'Biblioteca de fingerprint de dispositivo para identificar e rastrear usuários entre sessões.',
        universalDocumentWalletTitle: 'Carteira de Documentos Universal',
        universalDocumentWalletDescription:
          'Carteira com IA para extrair dados específicos de PDFs usando agentes LLM (ex.: datas de seguro, cláusulas de contrato).',
        documentWalletTitle: 'Carteira de Documentos Universal',
        documentWalletDescription:
          'Carteira com IA para extrair dados específicos de PDFs usando agentes LLM (ex.: datas de seguro, cláusulas de contrato).',
        // All projects
        aiResumeTitle: 'Currículo IA',
        aiResumeDescription: 'Gera currículos profissionais com precisão de IA',
        automataStemmingTitle: 'Stemming Automata',
        automataStemmingDescription: 'Implementação de stemming de texto baseado em autômatos em Java',
        agendaFacilUiTitle: 'Agenda Facil UI',
        agendaFacilUiDescription: 'Aplicação SaaS de agendamento',
        kotlinGrpcTitle: 'Kotlin gRPC',
        kotlinGrpcDescription: 'API simples usando protocolo gRPC em Kotlin',
        llmAutoTranslatedChatTitle: 'Chat com Tradução Automática LLM',
        llmAutoTranslatedChatDescription: 'Chat multilíngue usando tradução LLM',
        urlShortenerTitle: 'Encurtador de URL',
        urlShortenerDescription: 'Sistema de encurtamento de URLs em Kotlin',
        pianoGameTitle: 'Jogo de Piano',
        pianoGameDescription: 'Jogo de prática de partituras',
        curriculumTitle: 'Currículo',
        curriculumDescription: 'Currículo pessoal e resume em CSS',
        desafioZapptsFrontendTitle: 'Desafio Zappts Frontend',
        desafioZapptsFrontendDescription: 'Solução do desafio frontend',
        burgerBuilderTitle: 'Montador de Hambúrguer',
        burgerBuilderDescription: 'Aplicação React para montar hambúrgueres',
        recipeBookTitle: 'Livro de Receitas',
        recipeBookDescription: 'Aplicação de gerenciamento de receitas',
      },
      about: {
        title: 'Sobre',
        p1: 'Sou um desenvolvedor fullstack focado em criar aplicações web modernas com arquitetura limpa, ótima UX e manutenção de longo prazo.',
        p2: 'Gosto de trabalhar em toda a stack, de serviços backend e APIs a frontends responsivos, e valorizo muito qualidade de código e colaboração.',
      },
      contact: {
        title: 'Contato',
        subtitle: 'Fale comigo para colaboração, oportunidades ou uma conversa rápida.',
        getInTouch: 'ENTRE EM CONTATO',
        introText: 'Tem um projeto em mente ou quer apenas dar um oi? Sempre estou aberto a discutir novas oportunidades e ideias.',
        emailLabel: 'E-MAIL',
        phoneLabel: 'TELEFONE',
        locationLabel: 'LOCALIZAÇÃO',
        location: 'Amsterdã, Países Baixos',
        followMe: 'SIGA-ME',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'seu@email.com',
        subjectPlaceholder: 'Assunto do projeto',
        messagePlaceholder: 'Conte-me sobre o seu projeto...',
        sendMessage: 'ENVIAR MENSAGEM',
      },
      footer: {
        resume: 'Currículo',
        downloadCv: 'Baixar CV',
        rights: 'Todos os direitos reservados.',
      },
      resume: {
        title: 'Desenvolvedor Full Stack Sênior',
        summary: 'Resumo',
        skills: 'Competências Técnicas',
        experience: 'Experiência Profissional',
        education: 'Formação',
        certifications: 'Certificações & Cursos',
        honors: 'Honras & Prêmios',
        contactLabel: 'Informações de contato',
      },
      languages: {
        label: 'Idioma',
      },
    },
  },
  nl: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Over',
        projects: 'Projecten',
        resume: 'CV',
        contact: 'Contact',
        role: 'Fullstack Developer',
      },
      hero: {
        eyebrow: 'Fullstack Developer',
        tagline: 'De toekomst bouwen, één commit tegelijk.',
        githubCta: 'Bekijk mijn GitHub',
      },
      projects: {
        title: 'Uitgelichte Projecten',
        subtitle: 'Een greep uit de producten en tools die ik recent heb opgeleverd.',
        allTitle: 'Projecten',
        // Featured projects
        basicLlmChatTitle: 'Basic LLM Chat',
        basicLlmChatDescription:
          'Proof of concept die een chat-interface verbindt met DeepSeek via API-integratie.',
        bookMarketplaceTitle: 'Boeken Marktplaats',
        bookMarketplaceDescription:
          'Marktplaatsplatform voor het kopen en verkopen van boeken met gebruikersauthenticatie en advertentiebeheer.',
        f1AppTitle: 'F1 App',
        f1AppDescription:
          'Full-stack applicatie voor F1-racegegevens met live tijden, coureurstatistieken en teaminformatie.',
        whatsappProxyTitle: 'WhatsApp Proxy',
        whatsappProxyDescription:
          'Docker-gebaseerde proxy-oplossing voor WhatsApp API-integratie en messaging-automatisering.',
        browserFingerprintTitle: 'Browser Fingerprint',
        browserFingerprintDescription:
          'Apparaat-fingerprinting bibliotheek om gebruikers te identificeren en te volgen tussen sessies.',
        universalDocumentWalletTitle: 'Universele Documenten Wallet',
        universalDocumentWalletDescription:
          'AI-gestuurde wallet om specifieke gegevens uit PDF\'s te extraheren met LLM-agents (bijv. verzekeringsdata, contractclausules).',
        documentWalletTitle: 'Universele Documenten Wallet',
        documentWalletDescription:
          'AI-gestuurde wallet om specifieke gegevens uit PDF\'s te extraheren met LLM-agents (bijv. verzekeringsdata, contractclausules).',
        // All projects
        aiResumeTitle: 'AI Resume',
        aiResumeDescription: 'Genereert professionele cv\'s met AI-nauwkeurigheid',
        automataStemmingTitle: 'Automata Stemming',
        automataStemmingDescription: 'Automata-gebaseerde tekststemming implementatie in Java',
        agendaFacilUiTitle: 'Agenda Facil UI',
        agendaFacilUiDescription: 'SaaS-applicatie voor agendaplanning',
        kotlinGrpcTitle: 'Kotlin gRPC',
        kotlinGrpcDescription: 'Simpele API met gRPC-protocol in Kotlin',
        llmAutoTranslatedChatTitle: 'LLM Auto Vertaalde Chat',
        llmAutoTranslatedChatDescription: 'Meertalige chat met LLM-vertaling',
        urlShortenerTitle: 'URL Verkorter',
        urlShortenerDescription: 'URL-verkortingssysteem in Kotlin',
        pianoGameTitle: 'Piano Game',
        pianoGameDescription: 'Bladmuziek oefenspel',
        curriculumTitle: 'Curriculum',
        curriculumDescription: 'Persoonlijk curriculum en cv in CSS',
        desafioZapptsFrontendTitle: 'Desafio Zappts Frontend',
        desafioZapptsFrontendDescription: 'Frontend challenge oplossing',
        burgerBuilderTitle: 'Burger Builder',
        burgerBuilderDescription: 'React burger bouw applicatie',
        recipeBookTitle: 'Receptenboek',
        recipeBookDescription: 'Receptenbeheerapplicatie',
      },
      about: {
        title: 'Over',
        p1: 'Ik ben een fullstack developer die moderne webapplicaties bouwt met clean architecture, sterke UX en focus op onderhoudbaarheid.',
        p2: 'Ik werk graag end-to-end, van backend services en APIs tot responsieve frontends, en hecht veel waarde aan codekwaliteit en samenwerking.',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Neem contact op voor samenwerking, kansen of een korte chat.',
        getInTouch: 'NEEM CONTACT OP',
        introText: 'Heb je een project in gedachten of wil je gewoon hallo zeggen? Ik sta altijd open voor het bespreken van nieuwe mogelijkheden en ideeën.',
        emailLabel: 'E-MAIL',
        phoneLabel: 'TELEFOON',
        locationLabel: 'LOCATIE',
        location: 'Amsterdam, Nederland',
        followMe: 'VOLG MIJ',
        namePlaceholder: 'Je naam',
        emailPlaceholder: 'jouw@email.com',
        subjectPlaceholder: 'Onderwerp van het project',
        messagePlaceholder: 'Vertel me over je project...',
        sendMessage: 'BERICHT VERSTUREN',
      },
      footer: {
        resume: 'CV',
        downloadCv: 'Download CV',
        rights: 'Alle rechten voorbehouden.',
      },
      resume: {
        title: 'Senior Full Stack Developer',
        summary: 'Samenvatting',
        skills: 'Technische Vaardigheden',
        experience: 'Werkervaring',
        education: 'Opleiding',
        certifications: 'Certificeringen & Cursussen',
        honors: 'Onderscheidingen',
        contactLabel: 'Contactgegevens',
      },
      languages: {
        label: 'Taal',
      },
    },
  },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export { i18n };

