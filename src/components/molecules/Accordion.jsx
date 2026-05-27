import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms/Icon';

function AccordionItem({ id, title, body, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <button
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${id}`}
        id={`accordion-trigger-${id}`}
        onClick={() => onToggle(id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          width: '100%',
          padding: '16px 20px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-raised)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-base)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1.3,
            fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          }}
        >
          {title}
        </span>
        <span
          style={{
            flexShrink: 0,
            color: 'var(--color-action-primary)',
            display: 'flex',
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <Icon name="ChevronDown" size={16} />
        </span>
      </button>

      <div
        id={`accordion-body-${id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${id}`}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '600px' : '0px',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div
          style={{
            padding: '0 20px 20px',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items = [], defaultOpen = null }) {
  const [openId, setOpenId] = useState(defaultOpen);

  function handleToggle(id) {
    setOpenId(prev => (prev === id ? null : id));
  }

  return (
    <div
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        background: 'var(--color-surface-card)',
      }}
    >
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
    })
  ),
  defaultOpen: PropTypes.string,
};

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Accordion;
