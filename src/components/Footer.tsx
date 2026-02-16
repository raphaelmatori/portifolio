import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <span className="footer__copyright">
        © {new Date().getFullYear()} Raphael Matori. {t('footer.rights')}
      </span>
      {/* <div className="footer__right">
        <a href="/resume.pdf" className="button button--download-cv">
          {t('footer.downloadCv')}
        </a>
      </div> */}
    </footer>
  );
};

