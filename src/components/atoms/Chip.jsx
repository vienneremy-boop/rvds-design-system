import PropTypes from 'prop-types';
import { useState } from 'react';
import { Cut } from './Cut';

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

  const borderColor = border.replace('1px solid ', '');
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        padding: 0,
        border: 0,
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-regular)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        outlineOffset: 3,
      }}
    >
      <Cut size="xs" background={bg} borderColor={borderColor} borderWidth={1}
        innerStyle={{ alignItems: 'center', padding: 'var(--space-2) var(--space-4) var(--space-2) var(--space-3)', color, transition: 'background var(--transition-fast), color var(--transition-fast)' }}>
        {label}
      </Cut>
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
