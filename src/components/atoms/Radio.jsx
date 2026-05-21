import PropTypes from 'prop-types';

export function Radio({
  label,
  selected = false,
  onChange,
  disabled = false,
  error = false,
  name,
  value,
}) {
  let ringBorder;
  if (error) {
    ringBorder = '2px solid var(--color-error)';
  } else if (selected) {
    ringBorder = '2px solid var(--color-action-primary)';
  } else {
    ringBorder = '2px solid var(--color-input-border)';
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
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={disabled ? undefined : onChange}
        disabled={disabled}
        style={{ display: 'none' }}
      />
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: ringBorder,
          background: 'transparent',
          flexShrink: 0,
          transition: 'border var(--transition-fast)',
        }}
      >
        {selected && (
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-action-primary)',
              display: 'block',
            }}
          />
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

Radio.propTypes = {
  label:    PropTypes.string,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error:    PropTypes.bool,
  name:     PropTypes.string,
  value:    PropTypes.string,
};

export default Radio;
