import PropTypes from 'prop-types';

// Figma: 4 types — Default (gray line), Brand (violet line), Label (line + center text), Pill (badge pill)
export function Divider({ type = 'default', label = 'Section Label' }) {

  // Default: 1px gray line
  if (type === 'default') {
    return (
      <div
        role="separator"
        style={{
          height: '1px',
          width: '100%',
          background: 'var(--color-divider)',
          borderRadius: '8px',
        }}
      />
    );
  }

  // Brand: 1px violet line
  if (type === 'brand') {
    return (
      <div
        role="separator"
        style={{
          height: '1px',
          width: '100%',
          background: 'var(--color-action-primary)',
          borderRadius: '8px',
        }}
      />
    );
  }

  // Label: line — centered label — line
  if (type === 'label') {
    return (
      <div
        role="separator"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'var(--color-divider)', borderRadius: '8px' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            color: 'var(--color-action-accent)',
            letterSpacing: '0.18px',
            lineHeight: '1.4',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--color-divider)', borderRadius: '8px' }} />
      </div>
    );
  }

  // Pill: pill badge with dots
  if (type === 'pill') {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 20px',
          background: 'var(--color-badge-neutral-bg)',
          border: '1px solid var(--color-divider)',
          borderRadius: '999px',
          boxShadow: '0 0 0 0 rgba(29,10,61,0.12)',
        }}
      >
        <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-action-accent)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            color: 'var(--color-action-accent)',
            letterSpacing: '0.18px',
            lineHeight: '1.4',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
        <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-action-accent)' }} />
      </div>
    );
  }

  return null;
}

Divider.propTypes = {
  type:  PropTypes.oneOf(['default', 'brand', 'label', 'pill']),
  label: PropTypes.string,
};

export default Divider;
