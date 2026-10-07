import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from './Icon';

export function SearchBar({
  placeholder = 'Search…',
  value = '',
  onChange,
  state = 'default',
  onClear,
}) {
  const [focused, setFocused] = useState(false);

  const isDisabled = state === 'disabled';
  const isFocused = focused || state === 'focus';
  const isFilled = value && value.length > 0;

  let borderStyle;
  if (isFocused) {
    borderStyle = '2px solid var(--color-input-focus-border)';
  } else {
    borderStyle = '1px solid var(--color-input-border)';
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        height: '42px',
        padding: '0 var(--space-3)',
        border: borderStyle,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--color-input-bg)',
        opacity: isDisabled ? 0.4 : 1,
        transition: 'border var(--transition-fast)',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <Icon name="Search" size={16} style={{ color: 'var(--color-text-secondary)', flexShrink: 0 }} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1,
          border: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--color-text-primary)',
  
          cursor: isDisabled ? 'not-allowed' : 'text',
          minWidth: 0,
        }}
      />
      {isFilled && !isDisabled && (
        <button
          onClick={onClear}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-sm)',
            padding: '0',
            lineHeight: 1,
            flexShrink: 0,
          }}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value:       PropTypes.string,
  onChange:    PropTypes.func,
  state:       PropTypes.oneOf(['default', 'focus', 'filled', 'disabled']),
  onClear:     PropTypes.func,
};

export default SearchBar;
