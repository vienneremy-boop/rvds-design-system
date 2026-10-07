import PropTypes from 'prop-types';
import { useState } from 'react';

export function TabItem({
  label,
  active = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  // Active + hovered: outer gets brand-bg pill
  const outerBg = (active && hovered) ? 'var(--color-badge-brand-bg)' : 'transparent';
  const outerRadius = 'var(--radius-sm)';

  // Hovered only (not active): inner content gets nav-tab-hover pill
  const contentBg = (!active && hovered) ? 'var(--color-nav-tab-hover)' : 'transparent';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-current={active ? 'page' : undefined}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'clip',
        padding: '0 var(--space-2)',
        background: outerBg,
        borderRadius: outerRadius,
        border: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        flexShrink: 0,
        transition: 'background var(--transition-fast)',
      }}
    >
      {/* Content */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 20px',
          background: contentBg,
          borderRadius: 'var(--radius-full)',
          flexShrink: 0,
          transition: 'background var(--transition-fast)',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: active ? 700 : 500,
            lineHeight: 1,
            color: active ? 'var(--color-action-accent)' : 'var(--color-text-primary)',
            whiteSpace: 'nowrap',
            transition: 'color var(--transition-fast)',
          }}
        >
          {label}
        </span>
      </div>

      {/* Active Bar */}
      <div
        style={{
          height: '2px',
          width: '100%',
          flexShrink: 0,
          background: 'var(--color-action-accent)',
          borderRadius: 'var(--radius-sm)',
          opacity: active ? 1 : 0,
          transition: 'opacity var(--transition-fast)',
        }}
      />
    </button>
  );
}

TabItem.propTypes = {
  label:   PropTypes.string.isRequired,
  active:  PropTypes.bool,
  onClick: PropTypes.func,
};

export function Tabs({ items = [], defaultActive = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {items.map((item, index) => (
          <TabItem
            key={index}
            label={item.label}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div style={{ paddingTop: 'var(--space-4)' }}>
        {items[activeIndex]?.content}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  items:         PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, content: PropTypes.node })),
  defaultActive: PropTypes.number,
};

export default TabItem;
