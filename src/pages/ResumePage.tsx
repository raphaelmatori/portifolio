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
            SWE | Java | Angular | Node.js | React | Netherlands
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
            Senior Full Stack Developer specialized in Angular and Java Spring Boot,
            with 10+ years of experience delivering scalable frontend applications and
            backend services in complex, high-impact projects. Proven ability to lead
            feature development (including UX-focused tools like Query Builders),
            diagnose and fix critical performance issues, and manage major framework
            migrations (Angular 9→14 | Angular 15→21). Skilled in RxJS reactive
            programming, state management, and E2E testing with Cypress, including
            innovative adaptations for hybrid mobile environments.
          </p>
        </div>

      <div className="resume__skills">
        <h2 className="resume__section-title">{t('resume.skills')}</h2>
        <dl className="resume__skills-list">
          <div>
            <dt>Frontend</dt>
            <dd>Angular (5 to 21), RxJS, TypeScript, HTML5, CSS3, Ionic, Cypress (E2E Testing)</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>Java Spring Boot</dd>
          </div>
          <div>
            <dt>Cloud & DevOps</dt>
            <dd>AWS, Azure DevOps</dd>
          </div>
          <div>
            <dt>Databases</dt>
            <dd>MariaDB, DynamoDB, MongoDB, Microsoft Common Data Service</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Git/GitHub, Jira, Scrum, Postman, Swagger</dd>
          </div>
        </dl>
      </div>

      <div className="resume__experience">
        <h2 className="resume__section-title">{t('resume.experience')}</h2>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">Hexaware Technologies</h3>
            <span className="resume__job-period">October 2022 – Present</span>
          </div>
          <p className="resume__job-role">Senior Full Stack Developer · Amsterdam Area</p>
          <p className="resume__job-project">Dealership platform</p>
          <ul className="resume__job-bullets">
            <li>Orchestrated Strategic Frontend Modernization (Angular v15 to v21)</li>
            <li>Mitigated 4 low, 12 moderate, and 17 high vulnerabilities down to zero</li>
            <li>Designed and implemented a centralized DateAdapter pattern to eliminate heavy reliance on moment.js</li>
          </ul>
          <p className="resume__job-project">Digital Identity Wallet App</p>
          <ul className="resume__job-bullets">
            <li>Led migration from Angular 9 to Angular 14, ensuring compatibility and performance</li>
            <li>Implemented SSL pinning for enhanced security in hybrid Ionic/Cordova mobile app</li>
            <li>Developed framework enabling Cypress E2E testing in hybrid mobile environments</li>
            <li>Mentored backend developers and junior frontend engineers on frontend best practices</li>
            <li>Conducted production support and incident analysis using OpenSearch and AWS CloudWatch</li>
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">CI&T</h3>
            <span className="resume__job-period">April 2021 – February 2022</span>
          </div>
          <p className="resume__job-role">Software Engineer · Campinas, Brazil</p>
          <ul className="resume__job-bullets">
            <li>Led development of Query Builder feature empowering non-technical operators to perform advanced database searches</li>
            <li>Diagnosed and fixed critical memory leak in Angular component that caused frequent browser crashes</li>
            <li>Drove process improvements that cut refinement session times by 50%</li>
            <li>Used Cypress extensively for end-to-end testing</li>
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">URBAM – Urbanizadora Municipal S/A</h3>
            <span className="resume__job-period">December 2018 – March 2021</span>
          </div>
          <p className="resume__job-role">Systems Analyst · São José dos Campos, Brazil</p>
          <ul className="resume__job-bullets">
            <li>Developed enterprise applications using Java Spring Boot, Ionic, and React Native</li>
            <li>Integrated SAP and HR systems to optimize administrative workflows</li>
            <li>Implemented automated UI testing with Cypress for hybrid and mobile platforms</li>
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">FITec – Fundação para Inovações Tecnológicas</h3>
            <span className="resume__job-period">August 2017 – December 2018</span>
          </div>
          <p className="resume__job-role">Junior Software Developer · Belo Horizonte, Brazil</p>
          <ul className="resume__job-bullets">
            <li>Developed AngularJS, Angular 5, and Java backend for multinational Swedish client</li>
            <li>Participated in code reviews (Gerrit) and developed workflows with Camunda</li>
          </ul>
        </article>

        <article className="resume__job">
          <div className="resume__job-header">
            <h3 className="resume__job-company">Jornal Diário de Contagem Online</h3>
            <span className="resume__job-period">August 2007 – December 2015</span>
          </div>
          <p className="resume__job-role">Web Developer · Contagem, Brazil</p>
          <ul className="resume__job-bullets">
            <li>Developed and maintained proprietary CMS in PHP for news portal</li>
            <li>Created microsites and features using HTML, CSS, JavaScript (jQuery)</li>
            <li>Developed RESTful APIs for internal and external consumption</li>
          </ul>
        </article>
      </div>

      <div className="resume__education">
        <h2 className="resume__section-title">{t('resume.education')}</h2>
        <ul className="resume__education-list">
          <li>Bachelor of Information Systems – PUC Minas, Brazil (2012 – 2016)</li>
          <li>Exchange Student, Computer Science and Engineering – UCONN, USA (2015 – 2016)</li>
        </ul>
      </div>

      <div className="resume__certifications">
        <h2 className="resume__section-title">{t('resume.certifications')}</h2>
        <ul className="resume__cert-list">
          <li>AWS Certified AI Practitioner (2025)</li>
          <li>Angular 2+ – The Complete Guide</li>
          <li>React – The Complete Guide</li>
          <li>React Native</li>
        </ul>
      </div>

      <div className="resume__honors">
        <h2 className="resume__section-title">{t('resume.honors')}</h2>
        <ul className="resume__honors-list">
          <li>Academic Highlight – Outstanding Student</li>
          <li>Honorable Award</li>
        </ul>
      </div>
    </section>
  </main>
  );
};
