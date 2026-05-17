import PropTypes from 'prop-types';
import { useState } from 'react';

export function Select({
  label,
  options = [],
  placeholder = 'Select an option',
  value,
  onChange,
  state = 'default',
  helperText,
  errorText,
}) {
  const [focused, setFocused] = useState(false);

  const isDisabled = state === 'disabled';
  const isError = state === 'error';
  const isFocused = focused || state === 'focus';

  let borderStyle;
  if (isError) {
    borderStyle = '2px solid var(--color-error)';
  } else if (isFocused) {
    borderStyle = '2px solid var(--color-input-focus-border)';
  } else {
    borderStyle = '1px solid var(--color-input-border)';
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <label
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            height: '44px',
            width: '100%',
            padding: '0 36px 0 12px',
            border: borderStyle,
            borderRadius: '8px',
            background: 'var(--color-input-bg)',
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            fontWeight: 400,
            color: value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
    
            opacity: isDisabled ? 0.4 : 1,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none',
            transition: 'border var(--transition-fast)',
            boxSizing: 'border-box',
          }}
        >
          <option value="" disabled={!!placeholder}>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            flexShrink: 0,
            color: 'var(--color-text-secondary)',
          }}
          aria-hidden="true"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isError && errorText && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-error)' }}>
          {errorText}
        </span>
      )}
      {!isError && helperText && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
          {helperText}
        </span>
      )}
    </div>
  );
}

Select.propTypes = {
  label:      PropTypes.string,
  options:    PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
  placeholder: PropTypes.string,
  value:      PropTypes.string,
  onChange:   PropTypes.func,
  state:      PropTypes.oneOf(['default', 'focus', 'filled', 'error', 'disabled']),
  helperText: PropTypes.string,
  errorText:  PropTypes.string,
};

export default Select;
