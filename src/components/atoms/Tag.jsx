import PropTypes from 'prop-types';

// Figma: 4 types, radius-card (8px), 10px Bold, px-8px py-4px
const tagStyles = {
  brand: {
    background: 'var(--color-tag-brand-bg)',
    color: 'var(--color-tag-brand-text)',
    border: '1px solid var(--color-tag-brand-border)',
  },
  electric: {
    background: 'var(--color-electric-bg)',
    color: 'var(--color-electric-text)',
    border: '1px solid var(--color-electric-border)',
  },
  white: {
    background: 'var(--color-tag-neutral-bg)',
    color: 'var(--color-tag-neutral-text)',
    border: '1px solid var(--color-tag-neutral-border)',
  },
  'brand-inverse': {
    background: 'var(--color-tag-inverse-bg)',
    color: 'var(--color-tag-brand-text)',
    border: '1px solid var(--color-tag-inverse-border)',
  },
};

export function Tag({ type = 'brand', label }) {
  const style = tagStyles[type] || tagStyles.brand;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 8px',
        borderRadius: 'var(--radius-default)',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 700,
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
