import PropTypes from 'prop-types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

export function HeroSection({
  badge = 'Disponible pour mission',
  roleTitle = 'Senior Product Designer × Design Engineer',
  roleLocation = 'Freelance · Lille',
  eyebrow = 'Retail, B2B & SaaS',
  titleMain = 'Transformons vos sites et applications en expériences',
  titleAccent1 = 'claires',
  titleConnector = 'et',
  titleAccent2 = 'mémorables',
  subtitle = "De l'audit au lancement : repérer ce qui bloque vos utilisateurs, repenser leurs parcours, tester avec eux, puis mesurer ce que ça vous rapporte. L'IA accélère chaque étape.",
  primaryCta = 'Voir mes études de cas',
  secondaryCta = 'Me contacter',
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'flex-start',
        width: '956px',
      }}
    >
      {/* Category section — badge + role header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'flex-end',
          width: '100%',
          flexShrink: 0,
        }}
      >
        {/* Badge electric */}
        {badge && <Badge type="electric" label={badge} />}

        {/* Role + accent dash */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px',
            width: '100%',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '1.5px',
                lineHeight: 1.4,
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {roleTitle}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-secondary)',
                letterSpacing: '1.5px',
                lineHeight: 1.4,
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {roleLocation}
            </p>
          </div>
          <div
            style={{
              width: '24px',
              height: '2px',
              background: 'var(--color-action-primary)',
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* Main content row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          gap: '16px',
          width: '100%',
          flexShrink: 0,
        }}
      >
        {/* Text container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '760px',
            flexShrink: 0,
          }}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--color-action-accent)',
                lineHeight: 1.6,
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {eyebrow}
            </p>
          )}

          {/* Rich title */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 0,
              margin: 0,
              lineHeight: '52.8px',
              color: 'var(--color-text-primary)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-5xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                lineHeight: '52.8px',
              }}
            >
              {titleMain}
            </span>
            {' '}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-7xl)',
                fontWeight: 'var(--font-weight-regular)',
                fontStyle: 'normal',
                color: 'var(--color-action-accent)',
                lineHeight: '52.8px',
              }}
            >
              {titleAccent1}
            </span>
            {titleConnector && (
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  lineHeight: '52.8px',
                }}
              >
                {` ${titleConnector} `}
              </span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-7xl)',
                fontWeight: 'var(--font-weight-regular)',
                fontStyle: 'normal',
                color: 'var(--color-action-accent)',
                lineHeight: '52.8px',
              }}
            >
              {titleAccent2}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-5xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-action-accent)',
                lineHeight: '52.8px',
              }}
            >
              .
            </span>
          </p>

          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1,
                margin: 0,
                maxWidth: '662px',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'stretch',
            flexShrink: 0,
          }}
        >
          {primaryCta && (
            <Button
              variant="primary"
              size="medium"
              label={primaryCta}
              onClick={onPrimaryClick}
            />
          )}
          {secondaryCta && (
            <Button
              variant="secondary"
              size="medium"
              label={secondaryCta}
              onClick={onSecondaryClick}
            />
          )}
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  badge: PropTypes.string,
  roleTitle: PropTypes.string,
  roleLocation: PropTypes.string,
  eyebrow: PropTypes.string,
  titleMain: PropTypes.string,
  titleAccent1: PropTypes.string,
  titleConnector: PropTypes.string,
  titleAccent2: PropTypes.string,
  subtitle: PropTypes.string,
  primaryCta: PropTypes.string,
  secondaryCta: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

export default HeroSection;
