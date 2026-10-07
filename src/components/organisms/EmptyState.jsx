import PropTypes from 'prop-types';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function EmptyState({
  title = 'Aucun résultat trouvé',
  message = "Essayez d'ajuster vos filtres ou d'explorer d'autres catégories.",
  ctaLabel = 'Explorer les projets',
  onCtaClick,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '44px',
        width: '640px',
        height: '400px',
        background: 'var(--color-btn-secondary-bg)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Icon wrapper */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: 0,
          clipPath: 'var(--cut-m)',
          background: 'var(--color-btn-secondary-bg)',
          flexShrink: 0,
        }}
      >
        <Icon name="Token" size={24} />
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
          margin: 0,
          lineHeight: 1,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {title}
      </p>

      {/* Message */}
      {message && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-secondary)',
            margin: 0,
            lineHeight: 1,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          {message}
        </p>
      )}

      {/* CTA button */}
      {ctaLabel && (
        <Button
          variant="primary"
          size="medium"
          label={ctaLabel}
          onClick={onCtaClick}
        />
      )}
    </div>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  ctaLabel: PropTypes.string,
  onCtaClick: PropTypes.func,
};

export default EmptyState;
