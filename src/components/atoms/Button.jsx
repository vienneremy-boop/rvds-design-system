import PropTypes from 'prop-types';
import { useState } from 'react';
import { Cut } from './Cut';

// v2 « le point final » : coin bas-droit coupé à 60° (coupe S), Outfit Bold, flèche optionnelle à droite.
// Primary = turquoise + texte blanc (lime + texte bleu en dark) | Secondary = contour bleu, fond blanc | Tertiary = ghost, sans coupe
const sizeMap = {
  large:  { padding: '16px 24px 16px 22px', fontSize: 'var(--text-base)', gap: '12px', iconSize: '20px' },
  medium: { padding: '12px 20px 12px 18px', fontSize: '15px',             gap: '10px', iconSize: '18px' },
  small:  { padding: '8px 16px 8px 14px',   fontSize: 'var(--text-sm)',   gap: '8px',  iconSize: '16px' },
};

const variantBase = {
  primary:   { background: 'var(--color-action-primary)', color: 'var(--color-btn-primary-text)', hoverBackground: 'var(--color-action-primary-hover)' },
  secondary: { background: 'var(--color-btn-secondary-bg)', color: 'var(--color-action-deep)', border: 'var(--color-btn-secondary-border)', hoverBackground: 'var(--color-action-row-hover)' },
  tertiary:  { background: 'transparent', color: 'var(--color-action-deep)', hoverBackground: 'var(--color-btn-tertiary-hover)' },
};

export function Arrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" style={{ display: 'block' }}>
      <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function Button({
  variant = 'primary',
  size = 'large',
  label = 'Button',
  icon,
  iconPosition = 'right',
  arrow = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}) {
  const [hovered, setHovered] = useState(false);
  const { padding, fontSize, gap, iconSize } = sizeMap[size] || sizeMap.large;
  const v = variantBase[variant] || variantBase.primary;
  const active = hovered && !disabled;
  const bg = active ? v.hoverBackground : v.background;

  const iconEl = icon ? <span style={{ display: 'flex', alignItems: 'center', fontSize: iconSize }}>{icon}</span> : null;
  const arrowEl = arrow ? (
    <span style={{ display: 'flex', transform: active ? 'translateX(3px)' : 'none', transition: 'transform var(--transition-base)' }}>
      <Arrow size={parseInt(iconSize, 10) - 2} />
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {label}
      {iconPosition === 'right' && iconEl}
      {arrowEl}
    </>
  );
  const inner = { alignItems: 'center', justifyContent: 'center', gap, padding, width: '100%', color: v.color, transition: 'background var(--transition-fast)' };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        padding: 0,
        border: 0,
        background: 'transparent',
        fontFamily: 'var(--font-display)',
        fontSize,
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 1.2,
        letterSpacing: '0.005em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.38 : 1,
        width: fullWidth ? '100%' : undefined,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        outlineOffset: 3,
      }}
    >
      {variant === 'tertiary' ? (
        <span style={{ display: 'inline-flex', background: bg, borderRadius: 'var(--radius-sm)', ...inner }}>{content}</span>
      ) : (
        <Cut size="s" background={bg} borderColor={v.border} style={{ width: fullWidth ? '100%' : undefined }} innerStyle={inner}>
          {content}
        </Cut>
      )}
    </button>
  );
}

Button.propTypes = {
  variant:      PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size:         PropTypes.oneOf(['large', 'medium', 'small']),
  label:        PropTypes.string,
  icon:         PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  arrow:        PropTypes.bool,
  disabled:     PropTypes.bool,
  fullWidth:    PropTypes.bool,
  onClick:      PropTypes.func,
  type:         PropTypes.oneOf(['button', 'submit', 'reset']),
  'aria-label': PropTypes.string,
};

export default Button;
