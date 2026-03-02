import React from 'react';
import { Search } from '../../icons';

const SearchBar: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '320px',
    }}>
      <div style={{
        position: 'absolute',
        left: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--color-text-muted)',
        pointerEvents: 'none'
      }}>
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search prescriptions & services"
        style={{
          width: '100%',
          padding: '10px 12px 10px 40px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-white)',
          fontSize: '14px',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
          transition: 'border-color var(--transition-fast)'
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
      />
    </div>
  );
};

export default SearchBar;
