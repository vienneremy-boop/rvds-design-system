import PropTypes from 'prop-types';
import { useState } from 'react';

export function Chip({
  label,
  selected: selectedProp = false,
  onClick,
  disabled = false,
}) {
  const [selected, setSelected] = useState(selectedProp);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    setSelected(s => !s);
    onClick?.(!selected);
  };

  let bg, border, color;

  if (selected) {
    bg = 'var(--color-action-primary)';
    border = '1px solid var(--color-action-primary)';
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 12px',
        borderRadius: '999px',
        background: bg,
        border,
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        fontWeight: 500,
        color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background var(--transition-fast), border var(--transition-fast), color var(--transition-fast)',
        userSelect: 'none',

        whiteSpace: 'nowrap',
      }}
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
