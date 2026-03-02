import React from 'react';
import { ArrowRight } from '../../icons';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: 'var(--radius-full)',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all var(--transition-fast)',
    fontSize: '16px',
  };

  const styles = {
    primary: {
      backgroundColor: 'var(--color-white)',
      color: 'var(--color-primary)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    secondary: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-border)',
    },
    icon: {
      padding: '8px',
      width: '40px',
      height: '40px',
      justifyContent: 'center',
    }
  };

  return (
    <button 
      onClick={onClick} 
      className={`hover-slide-right ${className}`}
      style={{ ...baseStyles, ...styles[variant] }}
    >
      {children}
      {variant === 'primary' && (
        <span className="icon-arrow" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFD700', // Yellow arrow circle
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          color: 'var(--color-primary)'
        }}>
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </button>
  );
};

export default Button;
