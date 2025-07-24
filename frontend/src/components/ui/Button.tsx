import React from 'react';

/**
 * Componente de botão reutilizável.
 * Props:
 * - children: conteúdo do botão
 * - onClick: função chamada ao clicar
 * - type: tipo do botão (button, submit, reset)
 * - className: classes adicionais do Tailwind
 */
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-primary-500 text-white font-semibold hover:bg-primary-900 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 