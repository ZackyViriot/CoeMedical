import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, icon, variant = 'default', className = '' }) => {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: 'var(--radius-full)',
    fontSize: '13px',
    fontWeight: 600,
    backgroundColor: variant === 'accent' ? 'var(--color-accent-rose-bg)' : 'rgba(255, 255, 255, 0.15)',
    color: variant === 'accent' ? 'var(--color-accent-rose-fg)' : 'var(--color-white)',
    backdropFilter: 'blur(4px)',
    border: variant === 'default' ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
  };

  return (
    <span style={styles} className={className}>
      {icon}
      {children}
    </span>
  );
};

export default Badge;
