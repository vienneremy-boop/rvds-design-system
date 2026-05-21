import PropTypes from 'prop-types';

export function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  error = false,
}) {
  let boxBorder;
  if (error) {
    boxBorder = '2px solid var(--color-error)';
  } else if (checked) {
    boxBorder = '2px solid var(--color-action-primary)';
  } else {
    boxBorder = '2px solid var(--color-input-border)';
  }

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
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
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
          borderRadius: '4px',
          border: boxBorder,
          background: checked ? 'var(--color-action-primary)' : 'transparent',
          flexShrink: 0,
          transition: 'background var(--transition-fast), border var(--transition-fast)',
        }}
      >
        {checked && (
          <span
            style={{
              color: '#FFFFFF',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            ✓
          </span>
        )}
      </span>
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}

Checkbox.propTypes = {
  label:    PropTypes.string,
  checked:  PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error:    PropTypes.bool,
};

export default Checkbox;
