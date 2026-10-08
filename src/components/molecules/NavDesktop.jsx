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
        borderRadius: 0,
        cursor: 'pointer',
        padding: 0,
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
      aria-label={`Changer de langue — ${lang}`}
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
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
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
  isDark = false,
}) {
  return (
    <nav
      aria-label="Navigation principale"
      style={{
        width: 'min(1232px, calc(100vw - 48px))',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        background: 'var(--color-nav-glass-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-btn)',
        padding: '0 var(--space-12)',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
          <Button
            variant="secondary"
            size="small"
            label={ctaLabel}
            onClick={onCtaClick}
          />
          <LangToggle lang={lang} onClick={onLangClick} />
          <IconButton label="Changer de thème" onClick={onDarkModeClick}>
            <Icon name={isDark ? 'Sun' : 'Moon'} size={20} style={{ color: 'var(--color-text-primary)' }} />
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
