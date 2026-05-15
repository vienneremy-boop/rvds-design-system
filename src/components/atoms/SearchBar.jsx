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
        gap: '8px',
        height: '42px',
        padding: '0 12px',
        border: borderStyle,
        borderRadius: '8px',
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
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          outline: 'none',
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
            fontSize: '14px',
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
