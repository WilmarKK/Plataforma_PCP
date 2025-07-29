import React, { useEffect, useRef } from 'react';
import { ModuleCard } from './ModuleCard';
import { MODULE_DATA } from '@/core/types/modules';
import { createStaggerAnimation } from '@/core/utils/animations';
import styles from './ModulesGrid.module.css';

export const ModulesGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // Implementação nativa do IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && gridRef.current) {
      const cards = gridRef.current.querySelectorAll(`.${styles.moduleCard}`);
      createStaggerAnimation(cards, 100);
    }
  }, [isVisible]);

  return (
    <section 
      ref={gridRef}
      id="modules" 
      className={`${styles.modulesGrid} ${isVisible ? styles.visible : ''}`}
    >
      {MODULE_DATA.map((module, index) => (
        <ModuleCard
          key={module.id}
          module={module}
          index={index}
          className={styles.moduleCard}
        />
      ))}
    </section>
  );
};