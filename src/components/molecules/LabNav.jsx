import PropTypes from 'prop-types';

export function LabNav({
  prevTitle,
  prevHref = '#',
  nextTitle,
  nextHref = '#',
  nextComingSoon = false,
}) {
  const hasBoth = !!prevTitle && !!nextTitle;

  const blockStyle = (align) => ({
    display: 'block',
    padding: '80px 48px',
    textDecoration: 'none',
    textAlign: align,
    background: 'transparent',
    transition: 'filter 0.3s ease',
    cursor: 'pointer',
  });

  const innerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'rgba(255,255,255,0.5)',
    margin: 0,
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--font-weight-bold)',
    fontStyle: 'normal',
    lineHeight: 1,
    letterSpacing: '-0.03em',
    color: '#ffffff',
    margin: 0,
    fontSize: hasBoth ? 'clamp(28px, 4vw, 52px)' : 'clamp(36px, 6vw, 72px)',
  };

  const arrowStyle = {
    color: 'var(--color-electric)',
  };

  const soonStyle = {
    display: 'inline-block',
    marginLeft: '12px',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-weight-bold)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 'var(--radius-btn)',
    padding: '4px 12px',
    verticalAlign: 'middle',
  };

  return (
    <nav
      style={{
        display: 'grid',
        gridTemplateColumns: hasBoth ? '1fr 1fr' : '1fr',
        background: '#0C364E',
      }}
      aria-label="Navigation entre projets"
    >
      {prevTitle && (
        <a
          href={prevHref}
          style={{
            ...blockStyle('left'),
            borderRight: hasBoth ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}
        >
          <div style={innerStyle}>
            <p style={labelStyle}>← Playground précédent</p>
            <p style={titleStyle}>{prevTitle}</p>
            <span style={arrowStyle}>←</span>
          </div>
        </a>
      )}

      {nextTitle && (
        <a
          href={nextComingSoon ? undefined : nextHref}
          style={{
            ...blockStyle(hasBoth ? 'right' : 'center'),
            opacity: nextComingSoon ? 0.45 : 1,
            pointerEvents: nextComingSoon ? 'none' : 'auto',
            cursor: nextComingSoon ? 'default' : 'pointer',
          }}
        >
          <div style={innerStyle}>
            <p style={{ ...labelStyle, textAlign: hasBoth ? 'right' : 'center' }}>
              Playground suivant →
            </p>
            <p style={{ ...titleStyle, textAlign: hasBoth ? 'right' : 'center' }}>
              {nextTitle}
              {nextComingSoon && <span style={soonStyle}>Bientôt</span>}
            </p>
            <span style={{ ...arrowStyle, display: 'block', textAlign: hasBoth ? 'right' : 'center' }}>→</span>
          </div>
        </a>
      )}
    </nav>
  );
}

LabNav.propTypes = {
  prevTitle: PropTypes.string,
  prevHref: PropTypes.string,
  nextTitle: PropTypes.string,
  nextHref: PropTypes.string,
  nextComingSoon: PropTypes.bool,
};

export default LabNav;
