import React from 'react';
import { useTranslation } from 'react-i18next';

export const ResumePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="page__content">
      <section className="resume">
        <header className="resume__header">
          <h1 className="resume__name">Raphael Matori</h1>
          <p className="resume__title">{t('resume.title')}</p>
          <p className="resume__tagline">
            {t('resume.tagline')}
          </p>
          <ul className="resume__contact" aria-label={t('resume.contactLabel')}>
            <li>
              <a href="mailto:raphaelmatori@hotmail.com">raphaelmatori@hotmail.com</a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/raphaelmatori"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/raphaelmatori
              </a>
            </li>
          </ul>
        </header>

        <div className="resume__summary">
          <h2 className="resume__section-title">{t('resume.summary')}</h2>
          <p className="resume__paragraph">
            {t('resume.summaryText')}
          </p>
        </div>

      <div className="resume__skills">
        <h2 className="resume__section-title">{t('resume.skills')}</h2>
        <dl className="resume__skills-list">
          <div>
            <dt>{t('resume.frontend')}</dt>
            <dd>Angular (5 to 21), RxJS, TypeScript, HTML5, CSS3, Ionic, Cypress (E2E Testing)</dd>
          </div>
          <div>
            <dt>{t('resume.backend')}</dt>
            <dd>Java Spring Boot</dd>
          </div>
          <div>
            <dt>{t('resume.cloudDevops')}</dt>
            <dd>AWS, Azure DevOps</dd>
          </div>
          <div>
            <dt>{t('resume.databases')}</dt>
            <dd>MariaDB, DynamoDB, MongoDB, Microsoft Common Data Service</dd>
          </div>
          <div>
            <dt>{t('resume.tools')}</dt>
            <dd>Git/GitHub, Jira, Scrum, Postman, Swagger</dd>
          </div>
        </dl>
      </div>

      <div className="resume__experience">
        <h2 className="resume__section-title">{t('resume.experience')}</h2>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">{t('resume.hexaware')}</h3>
            <span className="resume__job-period">{t('resume.hexawarePeriod')}</span>
          </div>
          <p className="resume__job-role">{t('resume.hexawareRole')}</p>
          <p className="resume__job-project">{t('resume.dealershipProject')}</p>
          <ul className="resume__job-bullets">
            {t('resume.dealershipBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
          <p className="resume__job-project">{t('resume.identityProject')}</p>
          <ul className="resume__job-bullets">
            {t('resume.identityBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">{t('resume.cit')}</h3>
            <span className="resume__job-period">{t('resume.citPeriod')}</span>
          </div>
          <p className="resume__job-role">{t('resume.citRole')}</p>
          <ul className="resume__job-bullets">
            {t('resume.citBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">{t('resume.urbam')}</h3>
            <span className="resume__job-period">{t('resume.urbamPeriod')}</span>
          </div>
          <p className="resume__job-role">{t('resume.urbamRole')}</p>
          <ul className="resume__job-bullets">
            {t('resume.urbamBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">{t('resume.fitec')}</h3>
            <span className="resume__job-period">{t('resume.fitecPeriod')}</span>
          </div>
          <p className="resume__job-role">{t('resume.fitecRole')}</p>
          <ul className="resume__job-bullets">
            {t('resume.fitecBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">{t('resume.diario')}</h3>
            <span className="resume__job-period">{t('resume.diarioPeriod')}</span>
          </div>
          <p className="resume__job-role">{t('resume.diarioRole')}</p>
          <ul className="resume__job-bullets">
            {t('resume.diarioBullets', { returnObjects: true } as any).map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="resume__education">
        <h2 className="resume__section-title">{t('resume.education')}</h2>
        <ul className="resume__education-list">
          {t('resume.educationText', { returnObjects: true } as any).map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="resume__certifications">
        <h2 className="resume__section-title">{t('resume.certifications')}</h2>
        <ul className="resume__cert-list">
          <li>{t('resume.certAws')}</li>
          <li>{t('resume.certAngular')}</li>
          <li>{t('resume.certReact')}</li>
          <li>{t('resume.certReactNative')}</li>
        </ul>
      </div>

      <div className="resume__honors">
        <h2 className="resume__section-title">{t('resume.honors')}</h2>
        <ul className="resume__honors-list">
          {t('resume.honorsText', { returnObjects: true } as any).map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  </main>
  );
};
