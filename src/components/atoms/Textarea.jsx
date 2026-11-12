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
  id,
  required = false,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
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
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={rows}
        required={required || undefined}
        aria-required={required || undefined}
        aria-invalid={isError || undefined}
        aria-describedby={isError && errorText && id ? `${id}-error` : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          minHeight: '96px',
          width: '100%',
          padding: 'var(--space-3)',
          border: borderStyle,
          borderRadius: 'var(--radius-sm)',
          background: 'var(--color-input-bg)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--color-text-primary)',
          opacity: isDisabled ? 0.4 : 1,
          cursor: isDisabled ? 'not-allowed' : 'text',
          resize: 'vertical',
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

Textarea.propTypes = {
  label:      PropTypes.string,
  placeholder: PropTypes.string,
  value:      PropTypes.string,
  onChange:   PropTypes.func,
  state:      PropTypes.oneOf(['default', 'focus', 'filled', 'error', 'disabled']),
  rows:       PropTypes.number,
  helperText: PropTypes.string,
  errorText:  PropTypes.string,
  id:         PropTypes.string,
  /** Champ obligatoire (annoncé aux lecteurs d'écran) */
  required:   PropTypes.bool,
};

export default Textarea;
