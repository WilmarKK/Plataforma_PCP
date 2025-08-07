import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/components/ui';
import { Icon } from '@/shared/components/ui';
import { useNotification } from '@/shared/hooks/useNotification';
import type { ModuleInfo } from '@/core/types/modules';
import styles from './ModulesGrid.module.css';

interface ModuleCardProps {
  module: ModuleInfo;
  index: number;
  className?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  module, 
  index,
  className 
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const handleModuleClick = async () => {
    setIsLoading(true);

    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 800));

    setIsLoading(false);

    switch (module.status) {
      case 'available':
        showNotification(`Módulo ${module.title} carregado!`, 'success');
        // Navigate to module
        if (module.route) {
          navigate(module.route);
        }
        break;
      case 'development':
        showNotification('Módulo em desenvolvimento', 'warning');
        break;
      case 'planned':
        showNotification('Módulo em planejamento', 'info');
        break;
      default:
        showNotification('Módulo em desenvolvimento', 'info');
    }
  };

  const getStatusConfig = () => {
    switch (module.status) {
      case 'available':
        return {
          icon: 'check-circle',
          text: 'Disponível',
          className: styles.statusAvailable
        };
      case 'development':
        return {
          icon: 'code',
          text: 'Em Desenvolvimento',
          className: styles.statusDevelopment
        };
      case 'planned':
        return {
          icon: 'clock',
          text: 'Planejado',
          className: styles.statusPlanned
        };
      default:
        return {
          icon: 'clock',
          text: 'Em breve',
          className: styles.statusPlanned
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card
      className={`${styles.moduleCard} ${className} ${isLoading ? styles.loading : ''}`}
      onClick={handleModuleClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.moduleIcon} style={{ background: module.gradient }}>
        <Icon name={module.icon} size={24} color="white" />
      </div>
      
      <h3 className={styles.moduleTitle}>{module.title}</h3>
      
      <p className={styles.moduleDescription}>
        {module.description}
      </p>
      
      <div className={`${styles.moduleStatus} ${statusConfig.className}`}>
        <Icon name={statusConfig.icon} size={16} />
        {statusConfig.text}
      </div>
    </Card>
  );
};