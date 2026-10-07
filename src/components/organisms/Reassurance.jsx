import PropTypes from 'prop-types';
import './Reassurance.css';

const defaultItems = [
  { metric: '12 ans', description: 'Design produit - Direction artistique' },
  { metric: 'IA & MCP workflows', description: '+ 50% de vélocité' },
  { metric: 'Retail, B2B\n& SaaS', description: 'Spécialiste' },
  { metric: 'Design Inclusif', description: 'Accessibilité AA WCAG 2.2' },
];

function InfoItem({ metric, description }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', height: '100%', flexShrink: 0 }}>
      <div
        className="reassurance-dot"
        style={{
          width: '12px',
          height: '12px',
          clipPath: 'var(--cut-point)',
          background: 'var(--color-action-primary)',
          flexShrink: 0,
          marginTop: '5px',
          marginRight: '10px',
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
          className="reassurance-stat"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            margin: 0,
            lineHeight: 1,
            width: '100%',
            whiteSpace: 'pre-line',
          }}
        >
          {metric}
        </p>
        <p
          className="reassurance-desc"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-secondary)',
            margin: 0,
            lineHeight: 1,
            width: '100%',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function Reassurance({ items = defaultItems, style }) {
  return (
    <div
      style={{
        background: 'var(--color-surface-card)',
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
          <InfoItem key={i} metric={item.metric} description={item.description} />
        ))}
      </div>
    </div>
  );
}

Reassurance.propTypes = {
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      metric: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Reassurance;
