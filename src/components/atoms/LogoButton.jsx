import PropTypes from 'prop-types';
import { useState } from 'react';
import { Logo } from './Logo';

// v2 : le logo vectoriel compact (jamais retapé). Au survol, le point passe en bleu puis revient : un clin d'œil, pas une animation.
export function LogoButton({ onClick, height = 26, onDark = false }) {
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
        padding: '6px 4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: onDark ? 'var(--color-text-on-deep)' : 'var(--color-text-primary)',
        '--rv-logo-point': onDark ? 'var(--color-electric)' : undefined,
        flexShrink: 0,
        outlineOffset: 3,
        transform: hovered ? 'translateY(-1px)' : 'none',
        transition: 'transform var(--transition-fast)',
      }}
    >
      <Logo variant="compact" height={height} />
    </button>
  );
}

LogoButton.propTypes = {
  onClick: PropTypes.func,
  height:  PropTypes.number,
  onDark:  PropTypes.bool,
};

export default LogoButton;
