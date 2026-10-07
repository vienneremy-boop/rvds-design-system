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
    gap: 'var(--space-3)',
    paddingTop: 'var(--space-4)',
    paddingBottom: 'var(--space-4)',
    paddingLeft: hasPaddingX ? 'var(--space-2)' : '0',
    paddingRight: hasPaddingX ? 'var(--space-2)' : '0',
    borderBottom: '1px solid var(--color-divider)',
    background: isHover || isActive ? 'var(--color-action-row-hover)' : 'var(--color-surface-page)',
    opacity: isDisabled ? 0.4 : 1,
    cursor: isDisabled ? 'not-allowed' : onClick || href ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'var(--color-text-primary)',
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
            fontSize: 'var(--text-sm)',
          }}
        >
          {leading}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
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
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.5,
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
