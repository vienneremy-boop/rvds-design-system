import PropTypes from 'prop-types';
import { useState } from 'react';

// Figma: Primary = violet #5A14BF | Secondary = off-white bg + violet border | Tertiary = ghost
const sizeMap = {
  large:  { padding: '20px 32px', fontSize: '14px', gap: '8px',  iconSize: '24px' },
  medium: { padding: '12px 20px', fontSize: '14px', gap: '8px',  iconSize: '20px' },
  small:  { padding: '8px 16px',  fontSize: '12px', gap: '4px',  iconSize: '16px' },
};

const variantBase = {
  primary: {
    background: 'var(--color-action-primary)',
    color: 'var(--color-btn-primary-text)',
    border: '2px solid transparent',
    hoverBackground: 'var(--color-action-primary-hover)',
  },
  secondary: {
    background: 'var(--color-btn-secondary-bg)',
    color: 'var(--color-action-primary)',
    border: '2px solid var(--color-btn-secondary-border)',
    hoverBackground: 'var(--color-surface-card)',
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--color-action-deep)',
    border: '2px solid transparent',
    hoverBackground: 'var(--color-btn-tertiary-hover)',
  },
};

export function Button({
  variant = 'primary',
  size = 'large',
  label = 'Button',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}) {
  const [hovered, setHovered] = useState(false);

  const { padding, fontSize, gap, iconSize } = sizeMap[size] || sizeMap.large;
  const v = variantBase[variant] || variantBase.primary;

  const bg    = hovered && !disabled ? v.hoverBackground : v.background;
  const color = v.color;
  const border = variant === 'secondary' && hovered && !disabled
    ? '2px solid var(--color-action-primary-hover)'
    : v.border;

  const transform = hovered && !disabled ? 'translateY(-2px) scale(1.01)' : 'none';
  const boxShadow = hovered && !disabled
    ? variant === 'primary'
      ? '0 8px 24px rgba(90, 20, 191, 0.3)'
      : variant === 'secondary'
        ? '0 4px 16px rgba(90, 20, 191, 0.15)'
        : 'none'
    : 'none';

  const iconEl = icon ? (
    <span style={{ display: 'flex', alignItems: 'center', fontSize: iconSize }}>{icon}</span>
  ) : null;

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap,
        padding,
        borderRadius: 'var(--radius-btn)',
        background: bg,
        color,
        border,
        fontFamily: 'var(--font-mono)',
        fontSize,
        fontWeight: 500,
        lineHeight: '1.4',
        letterSpacing: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        width: fullWidth ? '100%' : undefined,
        transform,
        boxShadow,
        transition: 'background var(--transition-fast), border var(--transition-fast), transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow var(--transition-fast)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }}
    >
      {iconPosition === 'left' && iconEl}
      {label}
      {iconPosition === 'right' && iconEl}
    </button>
  );
}

Button.propTypes = {
  variant:      PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size:         PropTypes.oneOf(['large', 'medium', 'small']),
  label:        PropTypes.string,
  icon:         PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled:     PropTypes.bool,
  fullWidth:    PropTypes.bool,
  onClick:      PropTypes.func,
  type:         PropTypes.oneOf(['button', 'submit', 'reset']),
  'aria-label': PropTypes.string,
};

export default Button;
