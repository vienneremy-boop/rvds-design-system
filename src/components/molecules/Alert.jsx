import PropTypes from 'prop-types';
import { Badge } from '../atoms/Badge';

const alertConfig = {
  success: { containerBg: '#d5f5ec' },
  error:   { containerBg: '#fff1f1' },
  warning: { containerBg: '#ffe5d6' },
  info:    { containerBg: '#eceaff' },
};

export function Alert({ type = 'info', title, message }) {
  const config = alertConfig[type] || alertConfig.info;

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        padding: '16px',
        borderRadius: '8px',
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
              fontWeight: 600,
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
              fontWeight: 400,
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
