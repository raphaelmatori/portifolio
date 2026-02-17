import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const { i18n } = useTranslation();
  const languageKey = i18n.resolvedLanguage ?? i18n.language;

  return (
    <BrowserRouter>
      <div className="page" data-language={languageKey}>
        <ScrollToTop />
        <NavigationBar />
        <AnimatedRoutes key={languageKey} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
