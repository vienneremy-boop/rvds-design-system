import PropTypes from 'prop-types';

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
}) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        userSelect: 'none',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}
      />
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '52px',
          height: '30px',
          borderRadius: 'var(--radius-full)',
          background: checked ? 'var(--color-action-primary)' : 'var(--color-input-placeholder)',
          transition: 'background var(--transition-fast)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '3px',
            left: checked ? '24px' : '2px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'var(--color-surface-card)',
            transition: 'left var(--transition-fast)',
          }}
        />
      </span>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}

Switch.propTypes = {
  checked:  PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label:    PropTypes.string,
};

export default Switch;
