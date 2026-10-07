import PropTypes from 'prop-types';

const pulseStyle = {
  animation: 'skeleton-pulse 1.5s ease-in-out infinite',
  background: 'var(--color-skeleton)',
};

export function Skeleton({
  width = '280px',
  height = '160px',
}) {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        background: 'var(--color-btn-secondary-bg)',
        borderRadius: 'var(--radius-default)',
        overflow: 'hidden',
      }}
    >
      {/* Circle */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '12px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          ...pulseStyle,
        }}
      />
      {/* Rect title */}
      <div
        style={{
          position: 'absolute',
          left: '88px',
          top: '12px',
          width: '140px',
          height: '16px',
          borderRadius: 'var(--radius-sm)',
          ...pulseStyle,
        }}
      />
      {/* Rect subtitle */}
      <div
        style={{
          position: 'absolute',
          left: '88px',
          top: '36px',
          width: '110px',
          height: '12px',
          borderRadius: 'var(--radius-sm)',
          ...pulseStyle,
        }}
      />
      {/* Line 1 */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '82px',
          width: '240px',
          height: '12px',
          borderRadius: 'var(--radius-sm)',
          ...pulseStyle,
        }}
      />
      {/* Line 2 */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '102px',
          width: '200px',
          height: '12px',
          borderRadius: 'var(--radius-sm)',
          ...pulseStyle,
        }}
      />
      {/* Pill */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          top: '126px',
          width: '72px',
          height: '22px',
          borderRadius: 'var(--radius-full)',
          ...pulseStyle,
        }}
      />
    </div>
  );
}

Skeleton.propTypes = {
  width:  PropTypes.string,
  height: PropTypes.string,
};

export default Skeleton;
