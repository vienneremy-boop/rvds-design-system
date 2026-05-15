import PropTypes from 'prop-types';

const sizeMap = {
  xs: { diameter: '20px', fontSize: '8px' },
  s:  { diameter: '28px', fontSize: '11px' },
  m:  { diameter: '36px', fontSize: '14px' },
  l:  { diameter: '44px', fontSize: '16px' },
  xl: { diameter: '56px', fontSize: '20px' },
};

export function Avatar({
  src,
  alt = '',
  initials = '',
  size = 'm',
}) {
  const { diameter, fontSize } = sizeMap[size] || sizeMap.m;

  return (
    <div
      style={{
        width: diameter,
        height: diameter,
        borderRadius: '50%',
        background: 'var(--color-skeleton)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
      }}
      aria-label={alt || initials}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize,
            fontWeight: 700,
            color: 'var(--color-action-accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

Avatar.propTypes = {
  src:      PropTypes.string,
  alt:      PropTypes.string,
  initials: PropTypes.string,
  size:     PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
};

export default Avatar;
