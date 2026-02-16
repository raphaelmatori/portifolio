import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageDropdown } from './LanguageDropdown';

const navigationItems = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.projects', path: '/projects' },
  { labelKey: 'nav.resume', path: '/resume' },
  { labelKey: 'nav.contact', path: '/contact' },
] as const;

export const NavigationBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="navigation">
      <div className="navigation__container">
        <div className="navigation__brand">
          <span className="navigation__name">Raphael Matori</span>
          <span className="navigation__role">{t('nav.role')}</span>
        </div>

        <nav aria-label="Primary navigation" className="navigation__nav">
          <ul className="navigation__items">
            {navigationItems.map(({ labelKey, path }) => (
              <li key={path} className="navigation__item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                  }
                  end={path === '/'}
                >
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageDropdown />
        </nav>
      </div>
    </header>
  );
};
