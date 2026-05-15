import PropTypes from 'prop-types';
import { Button } from '../atoms/Button';

const defaultSteps = [
  { number: '01', title: 'Recherche' },
  { number: '02', title: 'Idéation' },
  { number: '03', title: 'Prototype' },
  { number: '04', title: 'Livraison' },
];

function MetaItem({ label, value }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        alignItems: 'flex-start',
        paddingLeft: '32px',
        flexShrink: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          fontWeight: 400,
          color: '#836f61',
          margin: 0,
          letterSpacing: '0px',
        }}
      >
        {label.toUpperCase()}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-base)',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
        padding: '24px',
        background: 'var(--color-btn-secondary-bg)',
        borderRadius: '16px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '36px',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'var(--color-action-primary)',
          letterSpacing: '-1px',
          lineHeight: 1,
          margin: 0,
        }}
      >
        {number}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          lineHeight: 1.2,
          letterSpacing: '-0.1px',
          margin: 0,
        }}
      >
        {title}
      </p>
    </div>
  );
}

export function CaseStudy({
  onBack,
  eyebrow = 'ÉTUDE DE CAS · RETAIL × DESIGN SYSTEM',
  title = 'Store Efficiency',
  titleLine2 = '@ Decathlon',
  subtitle = "Refonte de l'outil opérationnel T-Rex, utilisé par 8 000 collaborateurs Decathlon pour gérer l'efficacité des rayons en temps réel.",
  metric = '+40%',
  metricLabel = 'efficacité tâches',
  role = 'Lead Design Engineer',
  duration = '14 mois',
  team = 'PM, 3 devs, Data',
  steps = defaultSteps,
}) {
  return (
    <div
      style={{
        background: 'var(--color-btn-secondary-bg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'flex-start',
        padding: '64px 80px',
        width: '100%',
        minHeight: '860px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Back button */}
      <Button
        variant="tertiary"
        size="large"
        label="← Retour aux projets"
        onClick={onBack}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
          width: '100%',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Eye — accent dash + overline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <div
            style={{
              width: '20px',
              height: '2px',
              background: 'var(--color-action-primary)',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--color-text-secondary)',
              letterSpacing: '1.5px',
              lineHeight: 1.4,
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {eyebrow}
          </p>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '64px',
            fontWeight: 900,
            fontStyle: 'italic',
            color: 'var(--color-text-primary)',
            letterSpacing: '-2px',
            lineHeight: 0,
            flexShrink: 0,
          }}
        >
          <p style={{ lineHeight: '68px', margin: '0 0 0 0' }}>{title}</p>
          <p style={{ lineHeight: '68px', margin: 0 }}>{titleLine2}</p>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            margin: 0,
            width: '100%',
          }}
        >
          {subtitle}
        </p>
      </div>

      {/* Result + meta */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start',
          width: '100%',
          flexShrink: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Metric badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '280px',
            height: '160px',
            background: 'var(--color-action-deep)',
            borderRadius: '20px',
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '56px',
              fontWeight: 900,
              fontStyle: 'italic',
              color: 'var(--color-electric)',
              letterSpacing: '-2px',
              lineHeight: '56px',
              margin: 0,
            }}
          >
            {metric}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-sm)',
              fontWeight: 400,
              color: 'rgba(214,252,64,0.7)',
              margin: 0,
              lineHeight: 1,
            }}
          >
            {metricLabel}
          </p>
        </div>

        {/* Meta */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            minWidth: 0,
            alignItems: 'center',
            padding: '24px 32px',
            borderRadius: '20px',
          }}
        >
          <MetaItem label="Rôle" value={role} />
          <MetaItem label="Durée" value={duration} />
          <MetaItem label="Équipe" value={team} />
        </div>
      </div>

      {/* Process label */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 700,
          color: '#836f61',
          letterSpacing: '2px',
          lineHeight: 1.4,
          margin: 0,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        PROCESSUS
      </p>

      {/* Steps */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          width: '100%',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {steps.map((step, i) => (
          <Step key={i} number={step.number} title={step.title} />
        ))}
      </div>
    </div>
  );
}

CaseStudy.propTypes = {
  onBack: PropTypes.func,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  titleLine2: PropTypes.string,
  subtitle: PropTypes.string,
  metric: PropTypes.string,
  metricLabel: PropTypes.string,
  role: PropTypes.string,
  duration: PropTypes.string,
  team: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default CaseStudy;
