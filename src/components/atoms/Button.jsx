import PropTypes from 'prop-types';
import { useState } from 'react';
import { Cut } from './Cut';

// v2 « le point final » : coin bas-droit coupé à 60° (coupe S), Outfit Bold, flèche optionnelle à droite.
// Motion (survol / focus) : la couleur de survol balaie le bouton depuis la gauche, en diagonale à 60°
// (l'angle de la coupe) ; la flèche sort à droite et revient par la gauche. Durée et courbe : token --motion-sweep,
// ramené à 0 si l'utilisateur réduit les animations.
// Primary = turquoise + texte blanc (lime + texte bleu en dark) | Secondary = contour turquoise, texte bleu, fond blanc | Tertiary = ghost, sans coupe
const sizeMap = {
  large:  { padding: '16px 24px 16px 22px', fontSize: 'var(--text-base)', gap: '12px', iconSize: '20px' },
  medium: { padding: '12px 20px 12px 18px', fontSize: '15px',             gap: '10px', iconSize: '18px' },
  small:  { padding: '8px 16px 8px 14px',   fontSize: 'var(--text-sm)',   gap: '8px',  iconSize: '16px' },
};

const variantBase = {
  primary:   { background: 'var(--color-action-primary)', color: 'var(--color-btn-primary-text)', hoverBackground: 'var(--color-action-primary-hover)', sweep: 'var(--color-btn-primary-sweep)' },
  secondary: { background: 'var(--color-btn-secondary-bg)', color: 'var(--color-action-deep)', border: 'var(--color-btn-secondary-border)', hoverBackground: 'var(--color-action-row-hover)' },
  tertiary:  { background: 'transparent', color: 'var(--color-action-deep)', hoverBackground: 'var(--color-btn-tertiary-hover)' },
};

// Balayage à 60° : polygones de même structure, donc animables. décalage de 2em ≈ 0,58 × la hauteur du bouton, soit une pente à 60°.
const SWEEP_HIDDEN = 'polygon(0 0, 0 0, -2em 100%, -2em 100%)';
const SWEEP_SHOWN = 'polygon(0 0, calc(100% + 2em) 0, 100% 100%, -2em 100%)';
const SWEEP_TRANSITION = 'clip-path var(--motion-sweep, 0.5s cubic-bezier(0.16, 1, 0.3, 1))';

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
  href,
  type = 'button',
  'aria-label': ariaLabel,
}) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const { padding, fontSize, gap, iconSize } = sizeMap[size] || sizeMap.large;
  const v = variantBase[variant] || variantBase.primary;
  const active = (hovered || focused) && !disabled;
  const sweeps = variant !== 'tertiary';
  // Tertiary garde un simple changement de fond ; Primary et Secondary balaient
  const bg = sweeps ? v.background : (active ? v.hoverBackground : v.background);
  const arrowSize = parseInt(iconSize, 10) - 2;

  const iconEl = icon ? <span style={{ display: 'flex', alignItems: 'center', fontSize: iconSize }}>{icon}</span> : null;
  // Flèche : sort à droite, une seconde flèche entre par la gauche
  const arrowMove = 'transform var(--motion-sweep, 0.5s cubic-bezier(0.16, 1, 0.3, 1))';
  const arrowEl = arrow ? (
    <span aria-hidden="true" style={{ position: 'relative', display: 'flex', width: arrowSize, height: arrowSize, overflow: 'hidden' }}>
      <span style={{ display: 'flex', transform: active ? 'translateX(130%)' : 'none', transition: arrowMove }}><Arrow size={arrowSize} /></span>
      <span style={{ position: 'absolute', inset: 0, display: 'flex', transform: active ? 'none' : 'translateX(-130%)', transition: arrowMove }}><Arrow size={arrowSize} /></span>
    </span>
  ) : null;

  const sweepEl = sweeps ? (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, background: v.sweep || v.hoverBackground,
        clipPath: active ? SWEEP_SHOWN : SWEEP_HIDDEN, transition: SWEEP_TRANSITION,
      }}
    />
  ) : null;

  const content = (
    <>
      {sweepEl}
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap }}>
        {iconPosition === 'left' && iconEl}
        {label}
        {iconPosition === 'right' && iconEl}
        {arrowEl}
      </span>
    </>
  );
  const inner = { position: 'relative', alignItems: 'center', justifyContent: 'center', gap, padding, width: '100%', color: v.color, transition: 'background var(--transition-fast)' };

  // Avec `href`, le bouton est un vrai lien (navigation, ancre) : même rendu, sémantique <a>.
  const Tag = href ? 'a' : 'button';
  const tagProps = href
    ? { href: disabled ? undefined : href, 'aria-disabled': disabled || undefined }
    : { type, disabled };

  return (
    <Tag
      {...tagProps}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
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
        textDecoration: 'none',
      }}
    >
      {variant === 'tertiary' ? (
        <span style={{ display: 'inline-flex', background: bg, borderRadius: 'var(--radius-sm)', ...inner }}>{content}</span>
      ) : (
        <Cut size="s" background={bg} borderColor={v.border} style={{ width: fullWidth ? '100%' : undefined }} innerStyle={inner}>
          {content}
        </Cut>
      )}
    </Tag>
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
  href:         PropTypes.string,
  type:         PropTypes.oneOf(['button', 'submit', 'reset']),
  'aria-label': PropTypes.string,
};

export default Button;
