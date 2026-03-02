import React from 'react';
import { ChevronDown } from '../../icons';

const LocationSelector: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: 'var(--radius-md)',
      transition: 'background-color var(--transition-fast)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-accent-green-fg)'
      }} />
      <span style={{
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--color-text-dark)'
      }}>
        Colleyville, TX
      </span>
      <ChevronDown style={{ color: 'var(--color-text-muted)' }} />
    </div>
  );
};

export default LocationSelector;
