import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ResumePage } from '../pages/ResumePage';
import { ContactPage } from '../pages/ContactPage';

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
            {slide.component}
          </div>
        ))}
    </div>
  );
};
