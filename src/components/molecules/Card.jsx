import PropTypes from 'prop-types';
import { Tag } from '../atoms/Tag';

export function Card({
  type = 'Feature',
  category = 'PRODUCT DESIGN',
  index = '01',
  title = 'Project Title',
  titleLine2,
  description = 'Brief description of the project context and the main challenge addressed.',
  tags = ['UX'],
  cta = 'View case',
  href = '#',
  onCtaClick,
}) {
  const isFeature = type === 'Feature';
  const padding = isFeature ? '32px' : '20px';
  const width = isFeature ? '480px' : '300px';
  const height = isFeature ? '380px' : '280px';

  return (
    <div
      style={{
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-divider)',
        borderRadius: 0,
        clipPath: 'var(--cut-m)',
        overflow: 'hidden',
        width,
        height,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding,
          height: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '5px',
                height: '5px',
                borderRadius: 0,
                background: 'var(--color-action-accent)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-action-accent)',
                letterSpacing: '1.5px',
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
              }}
            >
              {category}
            </span>
          </div>
          <div
            style={{
              padding: '4px 8px',
              background: 'var(--color-tag-brand-bg)',
              border: '1px solid var(--color-tag-brand-border)',
              borderRadius: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-action-primary)',
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              {index}
            </span>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            padding: '12px 0',
          }}
        >
          {isFeature ? (
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                lineHeight: 1,
              }}
            >
              <p style={{ margin: 0, lineHeight: 'normal' }}>{title}</p>
              {titleLine2 && <p style={{ margin: 0, lineHeight: 'normal' }}>{titleLine2}</p>}
            </div>
          ) : (
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </p>
          )}
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1,
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 1, overflow: 'hidden', flexWrap: 'wrap' }}>
            {tags.map((tag, i) => (
              <Tag key={i} type="electric" label={tag} />
            ))}
          </div>
          <a
            href={href}
            onClick={onCtaClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '8px 16px',
              background: 'var(--color-btn-secondary-bg)',
              border: '2px solid var(--color-btn-secondary-border)',
              borderRadius: 'var(--radius-btn)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-action-primary)',
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
              }}
            >
              {cta}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.oneOf(['Feature', 'Small']),
  category: PropTypes.string,
  index: PropTypes.string,
  title: PropTypes.string,
  titleLine2: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  cta: PropTypes.string,
  href: PropTypes.string,
  onCtaClick: PropTypes.func,
};

export default Card;
