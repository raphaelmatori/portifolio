import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="page__content">
      <section className="about">
        <div className="about__image-wrapper">
          <picture>
            <source srcSet="/Raphael_Draw.webp" type="image/webp" />
            <img
              src="/Raphael_Draw.png"
              alt="Raphael Matori"
              className="about__image"
              width="300"
              height="300"
            />
          </picture>
        </div>
        <div className="about__content">
          <h1 className="about__title">{t('about.title')}</h1>
          <p className="about__text">{t('about.p1')}</p>
          <p className="about__text">{t('about.p2')}</p>
        </div>
      </section>
    </main>
  );
};
