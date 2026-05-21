import PropTypes from 'prop-types';
import { useState } from 'react';

export function NavItem({
  icon,
  label,
  active = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const pillBg = active && hovered
    ? 'var(--color-badge-brand-bg)'
    : !active && hovered
      ? 'var(--color-skeleton)'
      : 'transparent';

  return (
    <button
      type="button"
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-2)',
        flex: '1 0 0',
        paddingBottom: 'var(--space-1)',
        paddingLeft: 'var(--space-2)',
        paddingRight: 'var(--space-2)',
        background: 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-card)',
        cursor: 'pointer',
        userSelect: 'none',
        boxSizing: 'border-box',
        minWidth: 0,
      }}
    >
      {/* Indicateur 2px en haut */}
      <span
        style={{
          display: 'block',
          width: '24px',
          height: '2px',
          borderRadius: '1.5px',
          background: active ? 'var(--color-action-primary)' : 'transparent',
          flexShrink: 0,
          transition: 'background var(--transition-fast)',
        }}
      />

      {/* Icon + label pill */}
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-1)',
          padding: 'var(--space-1)',
          width: '100%',
          borderRadius: 'var(--radius-card)',
          background: pillBg,
          transition: 'background var(--transition-fast)',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            color: active ? 'var(--color-action-accent)' : 'var(--color-text-primary)',
            flexShrink: 0,
          }}
        >
          {icon}
        </span>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: active ? 500 : 400,
            color: active ? 'var(--color-action-accent)' : 'var(--color-text-primary)',
            letterSpacing: '0.2px',
            lineHeight: 1,
            textAlign: 'center',
            width: '100%',
            transition: 'color var(--transition-fast)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </span>
    </button>
  );
}

NavItem.propTypes = {
  icon:    PropTypes.node,
  label:   PropTypes.string.isRequired,
  active:  PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavItem;
