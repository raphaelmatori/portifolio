import React, { useEffect, useRef, useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="navigation" ref={navRef}>
      <div className="navigation__container">
        <div className="navigation__brand">
          <span className="navigation__name">Raphael Matori</span>
          <span className="navigation__role">{t('nav.role')}</span>
        </div>

        <button
          className={`navigation__hamburger ${isMenuOpen ? 'navigation__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="navigation__hamburger-line"></span>
          <span className="navigation__hamburger-line"></span>
          <span className="navigation__hamburger-line"></span>
        </button>

        <nav
          aria-label="Primary navigation"
          className={`navigation__nav ${isMenuOpen ? 'navigation__nav--open' : ''}`}
        >
          <ul className="navigation__items">
            {navigationItems.map(({ labelKey, path }) => (
              <li key={path} className="navigation__item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                  }
                  end={path === '/'}
                  onClick={closeMenu}
                >
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageDropdown onLanguageChange={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
