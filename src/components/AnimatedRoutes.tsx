import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ResumePage = lazy(() => import('../pages/ResumePage').then(m => ({ default: m.ResumePage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then(m => ({ default: m.ContactPage })));

const ROUTE_ORDER = ['/', '/about', '/projects', '/resume', '/contact'];

const SLIDES = [
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '/projects', component: <ProjectsPage /> },
  { path: '/resume', component: <ResumePage /> },
  { path: '/contact', component: <ContactPage /> },
];

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const activeIndex = ROUTE_ORDER.indexOf(location.pathname);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;

  return (
    <div className="carousel">

        {SLIDES.map((slide, index) => (
          <div
            key={slide.path}
            className="carousel__slide"
            style={{ display: index === safeIndex ? 'flex' : 'none' }}
          >
            <Suspense fallback={<div className="page__content" />}>
              {slide.component}
            </Suspense>
          </div>
        ))}
    </div>
  );
};
