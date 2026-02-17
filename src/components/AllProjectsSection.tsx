import React from 'react';
import { useTranslation } from 'react-i18next';

type TechnologyTag = 'Fullstack' | 'Node.js' | 'Python' | 'React' | 'MongoDB' | 'TypeScript' | 'Kotlin' | 'Docker' | 'AI/LLM' | 'Java' | 'JavaScript' | 'C++' | 'CSS';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: TechnologyTag[];
  url: string;
  language?: string;
};

type ProjectCardKey =
  | 'browserFingerprint' | 'aiResume' | 'universalDocumentWallet' | 'automataStemming' | 'f1App'
  | 'agendaFacilUi' | 'kotlinGrpc' | 'llmAutoTranslatedChat' | 'urlShortener' | 'bookMarketplace'
  | 'basicLlmChat' | 'whatsappProxy' | 'pianoGame' | 'desafioZapptsFrontend'
  | 'burgerBuilder' | 'recipeBook';

const allProjects: { key: ProjectCardKey; technologies: TechnologyTag[]; url: string; language?: string }[] = [
  { key: 'browserFingerprint', technologies: ['JavaScript'], url: 'https://github.com/raphaelmatori/browser-fingerprint', language: 'JavaScript' },
  { key: 'aiResume', technologies: ['Python', 'AI/LLM'], url: 'https://github.com/raphaelmatori/ai-resume', language: 'Python' },
  { key: 'universalDocumentWallet', technologies: ['TypeScript', 'AI/LLM'], url: 'https://github.com/raphaelmatori/universal-document-wallet', language: 'TypeScript' },
  { key: 'automataStemming', technologies: ['Java'], url: 'https://github.com/raphaelmatori/automata-driven-stemming', language: 'Java' },
  { key: 'f1App', technologies: ['Java', 'Fullstack'], url: 'https://github.com/raphaelmatori/f1-app', language: 'Java' },
  { key: 'agendaFacilUi', technologies: ['TypeScript', 'React'], url: 'https://github.com/raphaelmatori/agenda-facil-ui' },
  { key: 'kotlinGrpc', technologies: ['Kotlin'], url: 'https://github.com/raphaelmatori/kotlin-grpc', language: 'Kotlin' },
  { key: 'llmAutoTranslatedChat', technologies: ['AI/LLM', 'TypeScript'], url: 'https://github.com/raphaelmatori/llm-autotranslated-chat' },
  { key: 'urlShortener', technologies: ['Kotlin'], url: 'https://github.com/raphaelmatori/url-shortener', language: 'Kotlin' },
  { key: 'bookMarketplace', technologies: ['Kotlin'], url: 'https://github.com/raphaelmatori/book-marketplace', language: 'Kotlin' },
  { key: 'basicLlmChat', technologies: ['TypeScript', 'AI/LLM'], url: 'https://github.com/raphaelmatori/basic-llm-chat', language: 'TypeScript' },
  { key: 'whatsappProxy', technologies: ['Docker', 'Node.js'], url: 'https://github.com/raphaelmatori/whatsapp-proxy', language: 'Dockerfile' },
  { key: 'pianoGame', technologies: ['TypeScript', 'React'], url: 'https://github.com/raphaelmatori/piano-game', language: 'TypeScript' },
  { key: 'desafioZapptsFrontend', technologies: ['TypeScript', 'React'], url: 'https://github.com/raphaelmatori/desafio-zappts-frontend', language: 'TypeScript' },
  { key: 'burgerBuilder', technologies: ['JavaScript', 'React'], url: 'https://github.com/raphaelmatori/burger-builder', language: 'JavaScript' },
  { key: 'recipeBook', technologies: ['TypeScript', 'React'], url: 'https://github.com/raphaelmatori/recipe-book', language: 'TypeScript' },
];

const technologyBadges: Record<TechnologyTag, string> = {
  'React': 'https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB',
  'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
  'Python': 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  'TypeScript': 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
  'Kotlin': 'https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white',
  'Docker': 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
  'MongoDB': 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
  'AI/LLM': 'https://img.shields.io/badge/AI-LLM-FF6F61?style=for-the-badge&logo=openai&logoColor=white',
  'Fullstack': 'https://img.shields.io/badge/Fullstack-4A154B?style=for-the-badge&logo=javascript&logoColor=white',
  'Java': 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
  'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  'C++': 'https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
  'CSS': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, url, language }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
    <h3 className="project-card__title">{title}</h3>
    <p className="project-card__description">{description}</p>
    <ul className="project-card__tags" aria-label="Technologies used">
      {technologies.map((technology) => (
        <li key={technology} className="project-card__tag">
          <img
            src={technologyBadges[technology]}
            alt={technology}
            className="project-card__badge"
            width="24"
            height="24"
          />
        </li>
      ))}
    </ul>
  </a>
);

export const AllProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="all-projects" className="projects" aria-labelledby="all-projects-title">
      <div className="projects__header">
        <h2 id="all-projects-title" className="projects__title">
          {t('projects.allTitle')}
        </h2>
      </div>
      <div className="projects__grid">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.key}
            title={t(`projects.${project.key}Title`)}
            description={t(`projects.${project.key}Description`)}
            technologies={project.technologies}
            url={project.url}
            language={project.language}
          />
        ))}
      </div>
    </section>
  );
};
