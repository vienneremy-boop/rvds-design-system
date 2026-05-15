import PropTypes from 'prop-types';
import { useState } from 'react';

export function Input({
  label,
  placeholder = 'Placeholder',
  type = 'text',
  value,
  onChange,
  state = 'default',
  helperText,
  errorText,
  id,
  fullWidth = false,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: fullWidth ? '100%' : undefined }}>
      {label && (
        <label
          htmlFor={id}
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
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '50px',
          width: fullWidth ? '100%' : undefined,
          padding: '0 12px',
          border: borderStyle,
          borderRadius: 'var(--radius-default)',
          background: 'var(--color-input-bg)',
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          outline: 'none',
          opacity: isDisabled ? 0.4 : 1,
          cursor: isDisabled ? 'not-allowed' : 'text',
          transition: 'border var(--transition-fast)',
          boxSizing: 'border-box',
        }}
      />
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

Input.propTypes = {
  label:      PropTypes.string,
  placeholder: PropTypes.string,
  type:       PropTypes.oneOf(['text', 'email', 'password']),
  value:      PropTypes.string,
  onChange:   PropTypes.func,
  state:      PropTypes.oneOf(['default', 'focus', 'filled', 'error', 'disabled']),
  helperText: PropTypes.string,
  errorText:  PropTypes.string,
  id:         PropTypes.string,
  fullWidth:  PropTypes.bool,
};

export default Input;
