import PropTypes from 'prop-types';
import { useState } from 'react';

export function LogoButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Rémy Vienne — Accueil"
      data-hovered={hovered}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
        height: '32px',
        padding: '0 10px',
        background: hovered ? 'var(--color-logo-hover-bg, var(--color-electric))' : 'var(--color-btn-secondary-bg)',
        borderRadius: 'var(--radius-full)',
        border: 'none',
        cursor: 'pointer',
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
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-logo-hover-text, var(--color-action-deep))',
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          lineHeight: 1,
          transition: 'color var(--transition-fast)',
        }}
      >
        Rémy
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-base)',
          fontStyle: 'italic',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--color-logo-hover-italic, var(--color-action-primary))',
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          lineHeight: 1,
          transition: 'color var(--transition-fast)',
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
