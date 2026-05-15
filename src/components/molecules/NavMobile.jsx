import PropTypes from 'prop-types';
import { NavItem } from '../atoms/NavItem';
import { Icon } from '../atoms/Icon';

const DEFAULT_ITEMS = [
  { label: 'Home',    icon: 'Home'      },
  { label: 'Projets', icon: 'Terminal'  },
  { label: 'Lab',     icon: 'Wireframe' },
  { label: 'Contact', icon: 'Mail'      },
];

export function NavMobile({
  items = DEFAULT_ITEMS,
  activeIndex = 0,
  onItemClick,
}) {
  return (
    <nav
      aria-label="Navigation mobile"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '401px',
          height: '70px',
          borderRadius: '100px',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          background: 'var(--color-nav-glass-bg)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
          pointerEvents: 'auto',
        }}
      >
        {items.map((item, i) => (
          <NavItem
            key={item.label}
            icon={<Icon name={item.icon} size={24} />}
            label={item.label}
            active={activeIndex === i}
            onClick={() => onItemClick?.(i)}
          />
        ))}
      </div>
    </nav>
  );
}

NavMobile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon:  PropTypes.string.isRequired,
    })
  ),
  activeIndex: PropTypes.number,
  onItemClick: PropTypes.func,
};

export default NavMobile;
