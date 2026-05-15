import PropTypes from 'prop-types';
import { useState } from 'react';

export function Textarea({
  label,
  placeholder = 'Enter text…',
  value,
  onChange,
  state = 'default',
  rows = 4,
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
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          minHeight: '96px',
          width: '100%',
          padding: '12px',
          border: borderStyle,
          borderRadius: '8px',
          background: 'var(--color-input-bg)',
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          outline: 'none',
          opacity: isDisabled ? 0.4 : 1,
          cursor: isDisabled ? 'not-allowed' : 'text',
          resize: 'vertical',
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

Textarea.propTypes = {
  label:      PropTypes.string,
  placeholder: PropTypes.string,
  value:      PropTypes.string,
  onChange:   PropTypes.func,
  state:      PropTypes.oneOf(['default', 'focus', 'filled', 'error', 'disabled']),
  rows:       PropTypes.number,
  helperText: PropTypes.string,
  errorText:  PropTypes.string,
};

export default Textarea;
