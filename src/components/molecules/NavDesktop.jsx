import PropTypes from 'prop-types';
import { useState } from 'react';
import { LogoButton } from '../atoms/LogoButton';
import { TabItem } from '../atoms/TabItem';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

const DEFAULT_TABS = [
  { label: 'Projets' },
  { label: 'Expertise' },
  { label: 'Lab' },
  { label: 'Contact' },
];

function IconButton({ onClick, children, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        background: hovered ? 'var(--color-btn-tertiary-hover)' : 'transparent',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        padding: 0,
        outline: 'none',
        transition: 'background var(--transition-fast)',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

function LangToggle({ lang, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 12px',
        background: hovered ? 'var(--color-btn-tertiary-hover)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-btn)',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        outline: 'none',
        transition: 'background var(--transition-fast)',
        flexShrink: 0,
      }}
    >
      {lang}
    </button>
  );
}

export function NavDesktop({
  tabs = DEFAULT_TABS,
  activeTab = 0,
  onTabClick,
  onLogoClick,
  onCtaClick,
  ctaLabel = "Discuter d'un projet",
  lang = 'FR / EN',
  onLangClick,
  onDarkModeClick,
}) {
  return (
    <nav
      aria-label="Navigation principale"
      style={{
        width: '1232px',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        background: 'var(--color-nav-glass-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: '100px',
        padding: '0 48px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        {/* Logo */}
        <LogoButton onClick={onLogoClick} />

        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {tabs.map((tab, i) => (
            <TabItem
              key={tab.label}
              label={tab.label}
              active={activeTab === i}
              onClick={() => onTabClick?.(i)}
            />
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Button
            variant="secondary"
            size="small"
            label={ctaLabel}
            onClick={onCtaClick}
          />
          <LangToggle lang={lang} onClick={onLangClick} />
          <IconButton label="Changer de thème" onClick={onDarkModeClick}>
            <Icon name="Moon" size={20} style={{ color: 'var(--color-text-primary)' }} />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

NavDesktop.propTypes = {
  tabs:            PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
  activeTab:       PropTypes.number,
  onTabClick:      PropTypes.func,
  onLogoClick:     PropTypes.func,
  onCtaClick:      PropTypes.func,
  ctaLabel:        PropTypes.string,
  lang:            PropTypes.string,
  onLangClick:     PropTypes.func,
  onDarkModeClick: PropTypes.func,
};

export default NavDesktop;
