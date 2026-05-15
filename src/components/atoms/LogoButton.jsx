import PropTypes from 'prop-types';
import { useState } from 'react';

export function LogoButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        height: '32px',
        padding: '0 10px',
        background: hovered ? 'var(--color-electric)' : 'var(--color-btn-secondary-bg)',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: hovered
          ? '0 2px 4px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.02)'
          : '0 1px 4px rgba(29,10,61,0.08)',
        transition:
          'background var(--transition-fast), box-shadow var(--transition-fast)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--color-action-deep)',
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          lineHeight: 1,
        }}
      >
        Rémy
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '16px',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'var(--color-action-primary)',
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          lineHeight: 1,
        }}
      >
        Vienne
      </span>
    </button>
  );
}

LogoButton.propTypes = {
  onClick: PropTypes.func,
};

export default LogoButton;
