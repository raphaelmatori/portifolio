import React from 'react';
import { useTranslation } from 'react-i18next';

type TechnologyTag = 'Fullstack' | 'Node.js' | 'Python' | 'React' | 'MongoDB' | 'TypeScript' | 'Kotlin' | 'Docker' | 'AI/LLM';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: TechnologyTag[];
  url: string;
};

type ProjectCardKey = 'basicLlmChat' | 'bookMarketplace' | 'f1App' | 'whatsappProxy' | 'browserFingerprint' | 'documentWallet';

const projectCards: { key: ProjectCardKey; technologies: TechnologyTag[]; url: string }[] = [
  { key: 'basicLlmChat', technologies: ['React', 'Node.js', 'AI/LLM'], url: 'https://github.com/raphaelmatori/basic-llm-chat' },
  { key: 'bookMarketplace', technologies: ['Kotlin', 'Fullstack'], url: 'https://github.com/raphaelmatori/book-marketplace' },
  { key: 'f1App', technologies: ['Fullstack', 'TypeScript', 'React'], url: 'https://github.com/raphaelmatori/f1-app' },
  { key: 'whatsappProxy', technologies: ['Docker', 'Node.js'], url: 'https://github.com/raphaelmatori/whatsapp-proxy' },
  { key: 'browserFingerprint', technologies: ['TypeScript', 'Node.js'], url: 'https://github.com/raphaelmatori/browser-fingerprint' },
  { key: 'documentWallet', technologies: ['AI/LLM', 'Python', 'Fullstack'], url: 'https://github.com/raphaelmatori/universal-document-wallet' },
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
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, url }) => (
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

export const FeaturedProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__header">
        <h2 id="projects-title" className="projects__title">
          {t('projects.title')}
        </h2>
        <p className="projects__subtitle">{t('projects.subtitle')}</p>
      </div>
      <div className="projects__grid">
        {projectCards.map((project) => (
          <ProjectCard
            key={project.key}
            title={t(`projects.${project.key}Title`)}
            description={t(`projects.${project.key}Description`)}
            technologies={project.technologies}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

