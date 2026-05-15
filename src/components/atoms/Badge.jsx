import PropTypes from 'prop-types';

// Figma: h=22px, radius=20px, 10px Bold JetBrains Mono
// success/error show a colored dot before text
const badgeConfig = {
  neutral:  { bg: 'var(--color-badge-neutral-bg)',  color: 'var(--color-badge-neutral-text)', border: '1px solid var(--color-badge-neutral-border)', dot: false },
  brand:    { bg: 'var(--color-badge-brand-bg)',    color: 'var(--color-action-primary)',      border: '1px solid var(--color-btn-secondary-border)',  dot: false },
  electric: { bg: 'var(--color-badge-electric-bg)', color: 'var(--color-electric-text)',       border: '1px solid var(--color-badge-electric-border)', dot: false },
  success:  { bg: 'var(--color-badge-success-bg)',  color: 'var(--color-badge-success-text)', border: 'none',                                          dot: '#029E73' },
  error:    { bg: 'var(--color-badge-error-bg)',    color: 'var(--color-badge-error-text)',   border: 'none',                                          dot: '#F8413B' },
  warning:  { bg: 'var(--color-badge-warning-bg)', color: 'var(--color-badge-warning-text)', border: 'none',                                          dot: false },
  info:     { bg: 'var(--color-badge-info-bg)',     color: 'var(--color-action-primary)',      border: 'none',                                          dot: false },
  outline:  { bg: 'transparent',                    color: 'var(--color-badge-neutral-text)', border: '1px solid var(--color-badge-outline-border)',   dot: false },
};

export function Badge({ type = 'neutral', label }) {
  const cfg = badgeConfig[type] || badgeConfig.neutral;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: cfg.dot ? '4px' : 0,
        height: '22px',
        padding: '0 8px',
        borderRadius: '20px',
        background: cfg.bg,
        border: cfg.border,
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        fontWeight: 700,
        color: cfg.color,
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      {cfg.dot && (
        <span
          style={{
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: cfg.dot,
            flexShrink: 0,
          }}
        />
      )}
      {label}
    </span>
  );
}

Badge.propTypes = {
  type:  PropTypes.oneOf(['neutral', 'brand', 'electric', 'success', 'error', 'warning', 'info', 'outline']),
  label: PropTypes.string.isRequired,
};

export default Badge;
