import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '../atoms/Icon';

export function ListItem({ state = 'default', label, description, leading, onClick, href }) {
  const [hovered, setHovered] = useState(false);

  const isDisabled = state === 'disabled';
  const isActive = state === 'active';
  const isHover = state === 'hover' || (hovered && !isDisabled && !isActive);

  const hasPaddingX = isHover || isActive;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: hasPaddingX ? '8px' : '0',
    paddingRight: hasPaddingX ? '8px' : '0',
    borderBottom: '1px solid var(--color-divider)',
    background: isHover || isActive ? 'var(--color-action-row-hover)' : 'var(--color-surface-page)',
    opacity: isDisabled ? 0.4 : 1,
    cursor: isDisabled ? 'not-allowed' : onClick || href ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'padding var(--transition-fast)',
  };

  const arrowColor = isActive
    ? 'var(--color-action-accent)'
    : 'var(--color-text-secondary)';

  const content = (
    <>
      {leading !== undefined && (
        <div
          style={{
            width: '20px',
            height: '20px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
          }}
        >
          {leading}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            fontWeight: 500,
            color: isActive ? 'var(--color-action-accent)' : 'var(--color-text-primary)',
            lineHeight: 1.4,
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            margin: 0,
          }}
        >
          {label}
        </p>
        {description && (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1,
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </p>
        )}
      </div>
      <Icon name="ChevronRight" size={16} style={{ color: arrowColor, flexShrink: 0 }} />
    </>
  );

  if (href && !isDisabled) {
    return (
      <a
        href={href}
        style={containerStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !isDisabled ? 0 : undefined}
      style={containerStyle}
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </div>
  );
}

ListItem.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'active', 'disabled']),
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  leading: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default ListItem;
