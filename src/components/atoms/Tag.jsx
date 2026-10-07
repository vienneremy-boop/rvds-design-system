import PropTypes from 'prop-types';

// v2 : coupe XS (coin bas-droit 60°), sans contour, JetBrains Mono Bold
const tagStyles = {
  brand: {
    background: 'var(--color-tag-brand-bg)',
    color: 'var(--color-tag-brand-text)',
  },
  electric: {
    background: 'var(--color-electric-bg)',
    color: 'var(--color-electric-text)',
  },
  white: {
    background: 'var(--color-tag-neutral-bg)',
    color: 'var(--color-tag-neutral-text)',
  },
  'brand-inverse': {
    background: 'var(--color-tag-inverse-bg)',
    color: 'var(--color-tag-brand-text)',
  },
};

export function Tag({ type = 'brand', label }) {
  const style = tagStyles[type] || tagStyles.brand;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px 4px 8px',
        clipPath: 'var(--cut-xs)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {label}
    </span>
  );
}

Tag.propTypes = {
  type:  PropTypes.oneOf(['brand', 'electric', 'white', 'brand-inverse']),
  label: PropTypes.string.isRequired,
};

export default Tag;
