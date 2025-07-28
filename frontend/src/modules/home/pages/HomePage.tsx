import React from 'react';
import { Hero, ModulesGrid } from '../components';

export const HomePage: React.FC = () => {
  const scrollToModules = () => {
    const modulesSection = document.getElementById('modules');
    if (modulesSection) {
      modulesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Hero onExploreModules={scrollToModules} />
      <ModulesGrid />
    </>
  );
};