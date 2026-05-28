import PropTypes from 'prop-types';
import { Badge } from '../atoms/Badge';

const alertConfig = {
  success: { containerBg: 'var(--color-success-bg)' },
  error:   { containerBg: 'var(--color-error-bg)' },
  warning: { containerBg: 'var(--color-warning-bg)' },
  info:    { containerBg: 'var(--color-info-bg)' },
};

export function Alert({ type = 'info', title, message }) {
  const config = alertConfig[type] || alertConfig.info;

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start',
        padding: 'var(--space-4)',
        borderRadius: 'var(--radius-sm)',
        background: config.containerBg,
      }}
    >
      {/* Badge */}
      <Badge type={type} label={type} />

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
        {title && (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-text-primary)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            {title}
          </p>
        )}
        {message && (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--color-text-secondary)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
