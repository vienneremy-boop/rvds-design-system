import { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

/* ── Sub-components ── */

function MetaCell({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, minWidth: 0 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-subtle)',
      }}>
        {label}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 500,
        color: 'var(--color-text-primary)', lineHeight: 1.4,
      }}>
        {value}
      </span>
    </div>
  );
}

function KpiCard({ value, label, color = 'electric' }) {
  const valueColor = color === 'electric' ? 'var(--color-electric)' : 'var(--color-action-primary)';
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', gap: 6,
      padding: '20px 24px', background: 'var(--color-surface-card)',
      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)',
        fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em',
        color: valueColor, lineHeight: 1,
        fontVariationSettings: "'SOFT' 0, 'WONK' 1",
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 400,
        color: 'var(--color-text-secondary)', lineHeight: 1.4,
      }}>
        {label}
      </span>
    </div>
  );
}

function SectionHeader({ num, label, heading }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.15em',
        color: 'var(--color-action-accent)', margin: 0,
      }}>
        {num} — {label}
      </p>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)',
        fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.02em',
        color: 'var(--color-text-primary)', margin: 0, lineHeight: 1.1,
        fontVariationSettings: "'SOFT' 0, 'WONK' 1",
      }}>
        {heading}
      </h2>
    </div>
  );
}

function AccordionStep({ step, isOpen, onToggle }) {
  return (
    <div style={{
      borderTop: '1px solid var(--color-border)',
    }}>
      <button
        aria-expanded={isOpen}
        onClick={() => onToggle(step.num)}
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '16px 0', background: 'transparent', border: 'none',
          cursor: 'pointer', width: '100%', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700,
          letterSpacing: '0.1em', color: 'var(--color-action-primary)', flexShrink: 0, minWidth: 44,
        }}>
          {step.num}
        </span>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 700,
          color: 'var(--color-text-primary)', margin: 0, flex: 1,
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
        }}>
          {step.title}
        </h3>
        <span style={{
          display: 'flex', alignItems: 'center', flexShrink: 0,
          color: 'var(--color-text-subtle)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease',
        }}>
          <Icon name="ChevronDown" size={16} />
        </span>
      </button>

      {isOpen && (
        <div style={{ padding: '0 0 20px 56px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 400,
            color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 0 12px',
          }}>
            {step.desc}
          </p>
          {step.tools && step.tools.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {step.tools.map((tool) => (
                <span key={tool} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
                  color: 'var(--color-text-subtle)', background: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border)', borderRadius: 'var(--radius-btn)',
                  padding: '3px 10px',
                }}>
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Main component ── */

export function CaseStudy({
  onBack,
  client = 'Decathlon',
  type = 'PRODUCT DESIGN',
  tags = ['UX', 'DS', 'UI', 'Product'],
  tagline = "3 ans chez Decathlon, 3 équipes, des centaines de livrables. Trois exemples concrets — un par équipe.",
  role = 'Senior Product Designer',
  duration = '3 ans',
  team = "POP · Stock'N Business · Cube in Store Goods",
  stack = 'Figma · Vitamin Play · Amplitude · Datadog',
  kpis = [
    { value: '×24', label: 'Inventaire fiscal accéléré', color: 'electric' },
    { value: '÷4',  label: 'Temps renseignement client', color: 'brand' },
    { value: '100k+', label: 'Utilisateurs actifs', color: 'brand' },
    { value: '500+', label: 'Tickets Jira traités', color: 'brand' },
  ],
  context = {
    heading: "3 ans, 3 équipes, des centaines de livrables.",
    desc: "Chez Decathlon, j'ai travaillé sur trois équipes produit successivement. Les produits sont des outils internes pour 100 000+ collaborateurs terrain.",
  },
  process = {
    heading: 'Terrain → Discovery → Design → Tests → Prod → Mesure',
    steps: [
      { num: '01', title: 'Équipe POP — Inventaire Fiscal', desc: "Immersion terrain, shadowing, co-création. Résultat : 1 semaine → 3 heures.", tools: ['Figma', 'Amplitude'] },
      { num: '02', title: "Équipe Stock'N Business — Seconde vie", desc: "Intégration des parcours occasion dans tous les flux existants.", tools: ['Figma', 'Vitamin Play'] },
      { num: '03', title: 'Équipe Cube in Store Goods — Page Supply', desc: "Refonte bout en bout. Temps renseignement client ÷4.", tools: ['Figma', 'Vitamin Play', 'Amplitude'] },
    ],
  },
  solution = {
    heading: "3 ans, 3 équipes, des résultats mesurés sur le terrain.",
    desc: "Ces trois exemples sont représentatifs de ma façon de travailler : terrain d'abord, design system toujours, impact mesuré avant de valider.",
  },
  impact = {
    heading: "Des résultats mesurés — pas estimés.",
    lessons: [
      "×24 sur l'inventaire fiscal : 1 semaine → 3 heures",
      "÷4 sur le temps de renseignement client (Page Supply)",
      "La contrainte physique (gants, luminosité, mobilité) guide chaque décision UI",
    ],
  },
}) {
  const [openStep, setOpenStep] = useState(process.steps[0]?.num ?? null);
  function toggleStep(num) {
    setOpenStep(prev => prev === num ? null : num);
  }

  const sectionStyle = {
    padding: '56px 0',
    borderTop: '1px solid var(--color-border)',
  };

  const bodyTextStyle = {
    fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 400,
    color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0,
  };

  return (
    <div style={{ background: 'var(--color-surface-page)', width: '100%', boxSizing: 'border-box' }}>

      {/* ── HERO ── */}
      <section style={{
        padding: '80px 162px 64px',
        background: 'var(--color-surface-deep)',
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        <div>
          <Button variant="tertiary" size="small" label="← Retour aux projets" onClick={onBack} />
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge type="electric" label={type} />
          {tags.map(t => <Badge key={t} type="electric" label={t} />)}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)',
          fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em',
          color: '#ffffff', margin: 0, lineHeight: 0.95,
          fontVariationSettings: "'SOFT' 0, 'WONK' 1",
        }}>
          {client}
        </h1>

        <p style={{ ...bodyTextStyle, color: 'rgba(255,255,255,0.7)', maxWidth: 640 }}>
          {tagline}
        </p>

        {/* Meta strip */}
        <div style={{
          display: 'flex', gap: 0, alignItems: 'stretch',
          border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-default)',
          overflow: 'hidden', marginTop: 8,
        }}>
          {[
            { label: 'Rôle', value: role },
            { label: 'Durée', value: duration },
            { label: 'Équipe', value: team },
            { label: 'Stack', value: stack },
          ].map((cell, i, arr) => (
            <div key={cell.label} style={{
              flex: 1, padding: '12px 20px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
            }}>
              <MetaCell label={cell.label} value={cell.value} />
            </div>
          ))}
        </div>
      </section>

      {/* ── KPIs ── */}
      <section style={{ padding: '0 162px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', gap: 1, background: 'var(--color-border)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
          {kpis.map((kpi, i) => <KpiCard key={i} {...kpi} />)}
        </div>
      </section>

      <div style={{ padding: '0 162px' }}>

        {/* ── SECTION 01 — CONTEXTE ── */}
        <section style={sectionStyle}>
          <SectionHeader num="01" label="Contexte" heading={context.heading} />
          <p style={bodyTextStyle}>{context.desc}</p>
        </section>

        {/* ── SECTION 02 — PROCESSUS ── */}
        <section style={sectionStyle}>
          <SectionHeader num="02" label="Processus" heading={process.heading} />
          <div>
            {process.steps.map((step) => (
              <AccordionStep
                key={step.num}
                step={step}
                isOpen={openStep === step.num}
                onToggle={toggleStep}
              />
            ))}
            <div style={{ borderTop: '1px solid var(--color-border)' }} />
          </div>
        </section>

        {/* ── SECTION 03 — SOLUTION ── */}
        <section style={sectionStyle}>
          <SectionHeader num="03" label="Solution" heading={solution.heading} />
          <p style={bodyTextStyle}>{solution.desc}</p>
        </section>

        {/* ── SECTION 04 — IMPACT ── */}
        <section style={sectionStyle}>
          <SectionHeader num="04" label="Impact" heading={impact.heading} />
          {impact.lessons && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {impact.lessons.map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)', lineHeight: 1.6,
                }}>
                  <span style={{ color: 'var(--color-action-accent)', flexShrink: 0, marginTop: 2 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

CaseStudy.propTypes = {
  onBack:   PropTypes.func,
  client:   PropTypes.string,
  type:     PropTypes.string,
  tags:     PropTypes.arrayOf(PropTypes.string),
  tagline:  PropTypes.string,
  role:     PropTypes.string,
  duration: PropTypes.string,
  team:     PropTypes.string,
  stack:    PropTypes.string,
  kpis: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.oneOf(['electric', 'brand']),
  })),
  context: PropTypes.shape({
    heading: PropTypes.string,
    desc: PropTypes.string,
  }),
  process: PropTypes.shape({
    heading: PropTypes.string,
    steps: PropTypes.arrayOf(PropTypes.shape({
      num: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
      tools: PropTypes.arrayOf(PropTypes.string),
    })),
  }),
  solution: PropTypes.shape({
    heading: PropTypes.string,
    desc: PropTypes.string,
  }),
  impact: PropTypes.shape({
    heading: PropTypes.string,
    lessons: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default CaseStudy;
