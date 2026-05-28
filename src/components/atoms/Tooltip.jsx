import PropTypes from 'prop-types';
import { useState } from 'react';

const positionStyles = {
  top: {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottom: {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  left: {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  right: {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

const arrowStyles = {
  top: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '6px 6px 0 6px',
    borderColor: 'var(--color-action-deep) transparent transparent transparent',
  },
  bottom: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '0 6px 6px 6px',
    borderColor: 'transparent transparent var(--color-action-deep) transparent',
  },
  left: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderWidth: '6px 0 6px 6px',
    borderColor: 'transparent transparent transparent var(--color-action-deep)',
  },
  right: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    borderWidth: '6px 6px 6px 0',
    borderColor: 'transparent var(--color-action-deep) transparent transparent',
  },
};

export function Tooltip({
  content,
  children,
  position = 'top',
}) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          style={{
            position: 'absolute',
            ...positionStyles[position],
            background: 'var(--color-action-deep)',
            color: 'var(--color-text-inverse)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-regular)',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-sm)',
            whiteSpace: 'nowrap',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        >
          {content}
          <span
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderStyle: 'solid',
              ...arrowStyles[position],
            }}
          />
        </span>
      )}
    </span>
  );
}

Tooltip.propTypes = {
  content:  PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

export default Tooltip;
