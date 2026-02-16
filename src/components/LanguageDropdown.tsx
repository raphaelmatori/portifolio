import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n/i18n';

type LanguageOption = (typeof supportedLanguages)[number];

function getCurrentLanguageOption(code: string | undefined): LanguageOption {
  const fallback = supportedLanguages[0];
  if (!code) return fallback;
  return supportedLanguages.find((language) => language.code === code) ?? fallback;
}

export const LanguageDropdown: React.FC = () => {
  const { t, i18n } = useTranslation();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const current = useMemo(
    () => getCurrentLanguageOption(i18n.resolvedLanguage ?? i18n.language),
    [i18n.language, i18n.resolvedLanguage]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (buttonRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const changeLanguage = async (language: LanguageOption) => {
    setIsOpen(false);
    await i18n.changeLanguage(language.code);
  };

  return (
    <div className="language-dropdown">
      <button
        ref={buttonRef}
        type="button"
        className="language-dropdown__button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="language-dropdown__flag" aria-hidden="true">
          {current.flag}
        </span>
        <span className="language-dropdown__label">{current.nativeName}</span>
        <ChevronDownIcon />
      </button>

      <div
        id={menuId}
        ref={menuRef}
        role="menu"
        aria-label={t('languages.label')}
        className={`language-dropdown__menu ${
          isOpen ? 'language-dropdown__menu--open' : ''
        }`}
      >
        {supportedLanguages.map((language) => (
          <button
            key={language.code}
            type="button"
            role="menuitemradio"
            aria-checked={language.code === current.code}
            className={`language-dropdown__item ${
              language.code === current.code ? 'language-dropdown__item--active' : ''
            }`}
            onClick={() => void changeLanguage(language)}
          >
            <span className="language-dropdown__flag" aria-hidden="true">
              {language.flag}
            </span>
            <span className="language-dropdown__item-text">
              <span className="language-dropdown__item-name">{language.nativeName}</span>
              <span className="language-dropdown__item-subtle">{language.label}</span>
            </span>
            {language.code === current.code ? <CheckIcon /> : <span className="language-dropdown__spacer" />}
          </button>
        ))}
      </div>
    </div>
  );
};

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="language-dropdown__chevron"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

