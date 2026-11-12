import PropTypes from 'prop-types';

const defaultItems = [
  { label: 'ACCESSIBILITÉ - WCAG 2.2 AA', sublabel: 'Pré-audit : 0 erreur automatique' },
  { label: 'Mode sombre', sublabel: 'Géré par tokens' },
  { label: 'Mouvement réduit', sublabel: 'Respecté sur tout le site' },
  { label: 'Design Inclusif', sublabel: 'Accessibilité AA WCAG 2.2' },
];

function InfoItem({ label, sublabel }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', height: '100%', flexShrink: 0 }}>
      <div
        style={{
          width: '24px',
          height: '24px',
          borderRadius: 0,
          background: 'var(--color-surface-raised)',
          flexShrink: 0,
          marginRight: '-12px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'flex-start',
          width: '148px',
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-action-accent)',
            margin: 0,
            lineHeight: 1,
            width: '100%',
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-primary)',
            margin: 0,
            lineHeight: 1,
            width: '100%',
          }}
        >
          {sublabel}
        </p>
      </div>
    </div>
  );
}

export function Reassurance2({ items = defaultItems, style }) {
  return (
    <div
      style={{
        background: 'var(--color-surface-page)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px 162px',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {items.map((item, i) => (
          <InfoItem key={i} label={item.label} sublabel={item.sublabel} />
        ))}
      </div>
    </div>
  );
}

Reassurance2.propTypes = {
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      sublabel: PropTypes.string.isRequired,
    })
  ),
};

export default Reassurance2;
