import PropTypes from 'prop-types';
import { useState } from 'react';

export function Chip({
  label,
  selected = false,
  onClick,
  disabled = false,
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  let bg, border, color;

  if (selected) {
    bg = 'var(--color-chip-selected-bg)';
    border = '1px solid var(--color-chip-selected-bg)';
    color = 'var(--color-chip-selected-text)';
  } else if (hovered && !disabled) {
    bg = 'var(--color-surface-raised)';
    border = '1px solid var(--color-border-strong)';
    color = 'var(--color-text-primary)';
  } else {
    bg = 'var(--color-chip-bg)';
    border = '1px solid var(--color-input-border)';
    color = 'var(--color-text-primary)';
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-2) var(--space-3)',
        borderRadius: 'var(--radius-full)',
        background: bg,
        border,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-medium)',
        color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background var(--transition-fast), border var(--transition-fast), color var(--transition-fast)',
        userSelect: 'none',
        outline: 'none',
        whiteSpace: 'nowrap',
      }}
      onFocus={e => { e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-action-primary)'; }}
      onBlur={e => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      {label}
    </button>
  );
}

Chip.propTypes = {
  label:    PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick:  PropTypes.func,
  disabled: PropTypes.bool,
};

export default Chip;
