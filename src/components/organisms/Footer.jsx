import PropTypes from 'prop-types';
import { Tag } from '../atoms/Tag';
import { Button } from '../atoms/Button';
import { LogoButton } from '../atoms/LogoButton';

const availabilityItems = [
  { label: 'Disponible immédiatement', detail: 'Prêt pour de nouveaux défis en immersion ou en mode sprint.' },
  { label: 'Remote · Lille', detail: 'Mobilité sur Lille & Paris pour vos ateliers stratégiques.' },
  { label: 'Réponse sous 24h', detail: 'Un premier échange pour cadrer votre projet sans attendre.' },
];

const tags = [
  'Design systems',
  'Product design',
  'Ux research',
  'Workflows IA design',
  'Identité visuelle',
  'Audit accessibilité',
  'Print',
];

const navLinks = [
  { label: 'Projets',   href: '/projets' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Lab',       href: '/lab' },
  { label: 'Contact',   href: '/contact' },
];

function FooterListItem({ label, detail }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      paddingTop: '16px',
      paddingBottom: '16px',
      borderBottom: '1px solid var(--color-border-on-deep)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{ width: '20px', height: '20px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-electric)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--color-text-on-deep)',
          lineHeight: 1.4,
          letterSpacing: '0.5px',
          margin: 0,
        }}>
          {label}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 400,
          color: 'var(--color-text-muted-on-deep)',
          lineHeight: 1.5,
          margin: 0,
        }}>
          {detail}
        </p>
      </div>
    </div>
  );
}

export function Footer({
  email = 'studio@remyvienne.fr',
  calendlyUrl = '#',
  year = 2026,
  onEmailClick,
  onCalendlyClick,
  onLogoClick,
  onNavClick,
}) {
  return (
    <footer style={{
      background: 'var(--color-surface-deep)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* Decorative glow blob */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '800px',
        height: '600px',
        borderRadius: '50%',
        background: 'rgba(89,20,178,0.25)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Contact section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        gap: '80px',
        alignItems: 'flex-start',
        padding: '80px',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Left — hero text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '88px',
            fontWeight: 700,
            color: 'var(--color-text-on-deep)',
            margin: 0,
            lineHeight: '92px',
            letterSpacing: '-3px',
            fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          }}>
            Travaillons
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '88px',
            fontWeight: 900,
            fontStyle: 'italic',
            color: 'var(--color-electric)',
            margin: 0,
            lineHeight: '92px',
            letterSpacing: '-3px',
            fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          }}>
            ensemble
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '88px',
            fontWeight: 900,
            color: 'var(--color-action-accent)',
            margin: 0,
            lineHeight: '92px',
            letterSpacing: '-3px',
            fontVariationSettings: "'SOFT' 0, 'WONK' 1",
          }}>
            maintenant.
          </p>
        </div>

        {/* Right — contact info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>

          {/* Intro */}
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '20px',
            fontWeight: 400,
            color: 'var(--color-text-secondary-on-deep)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <span style={{ color: 'var(--color-text-on-deep)' }}>Je suis disponible pour des </span>
            <span style={{ fontWeight: 700, color: 'var(--color-electric)' }}>missions freelance</span>
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {tags.map((tag, i) => (
              <Tag key={i} type="brand-inverse" label={tag} />
            ))}
          </div>

          {/* CTA buttons row */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="large"
              label={`${email} ↗`}
              onClick={onEmailClick}
            />
            <Button
              variant="secondary"
              size="large"
              label="Réserver 20 min · Calendly"
              onClick={onCalendlyClick}
            />
          </div>

          {/* Availability list */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {availabilityItems.map((item, i) => (
              <FooterListItem key={i} label={item.label} detail={item.detail} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        padding: '0 80px',
        borderTop: '1px solid var(--color-divider-on-deep)',
        width: '100%',
        boxSizing: 'border-box',
      }}>

        {/* Logo + tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <LogoButton onClick={onLogoClick} />
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--color-text-muted-on-deep)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            — Design Engineer
          </p>
        </div>

        {/* Nav links + year */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onNavClick}
              style={{ padding: '4px 20px', textDecoration: 'none', flexShrink: 0 }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-text-on-deep)',
                letterSpacing: '0.2px',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}>
                {link.label}
              </span>
            </a>
          ))}
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            fontWeight: 400,
            color: 'var(--color-text-muted-on-deep)',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  email:          PropTypes.string,
  calendlyUrl:    PropTypes.string,
  year:           PropTypes.number,
  onEmailClick:   PropTypes.func,
  onCalendlyClick: PropTypes.func,
  onLogoClick:    PropTypes.func,
  onNavClick:     PropTypes.func,
};

export default Footer;
