import PropTypes from 'prop-types';

const linkBase = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-sm)',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: 1.4,
};

export function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          flexWrap: 'wrap',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {isLast ? (
                <span
                  aria-current="page"
                  style={{
                    ...linkBase,
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || '#'}
                  style={{
                    ...linkBase,
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'underline',
                  }}
                >
                  {item.label}
                </a>
              )}
              {!isLast && (
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 400,
                    color: 'var(--color-text-secondary)',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
