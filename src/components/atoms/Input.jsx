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
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
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
        readOnly={value !== undefined && !onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        aria-invalid={isError || undefined}
        aria-describedby={isError && errorText && id ? `${id}-error` : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '50px',
          width: fullWidth ? '100%' : undefined,
          padding: '0 12px',
          border: borderStyle,
          borderRadius: 'var(--radius-default)',
          background: 'var(--color-input-bg)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--color-text-primary)',
          opacity: isDisabled ? 0.4 : 1,
          cursor: isDisabled ? 'not-allowed' : 'text',
          transition: 'border var(--transition-fast)',
          boxSizing: 'border-box',
        }}
      />
      {isError && errorText && (
        <span id={id ? `${id}-error` : undefined} role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-error)' }}>
          {errorText}
        </span>
      )}
      {!isError && helperText && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
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
