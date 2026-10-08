import PropTypes from 'prop-types';

const VARIANTS = {
  brand: {
    track: 'var(--color-divider)',
    bar: 'var(--color-action-primary)',
    labelColor: 'var(--color-text-secondary)',
  },
  electric: {
    track: 'var(--color-surface-page)',
    bar: 'var(--color-electric)',
    labelColor: 'var(--color-text-subtle)',
  },
};

export function Progress({
  value = 0,
  variant = 'brand',
  showLabel = true,
}) {
  const clamped = Math.min(100, Math.max(0, value));
  const { track, bar, labelColor } = VARIANTS[variant] ?? VARIANTS.brand;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        width: '100%',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '5px',
          borderRadius: 0,
          background: track,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '5px',
            width: `${clamped}%`,
            borderRadius: 0,
            background: bar,
            transition: 'width var(--transition-base)',
          }}
        />
      </div>
      {showLabel && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-regular)',
            color: labelColor,
            flexShrink: 0,
            minWidth: '32px',
            textAlign: 'right',
          }}
        >
          {clamped}%
        </span>
      )}
    </div>
  );
}

Progress.propTypes = {
  value:     PropTypes.number,
  variant:   PropTypes.oneOf(['brand', 'electric']),
  showLabel: PropTypes.bool,
};

export default Progress;
