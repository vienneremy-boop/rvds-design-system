import PropTypes from 'prop-types';

const defaultLogos = [
  { key: 'decathlon',       src: '/logos/decathlon.webp',      label: 'Decathlon',       height: 56 },
  { key: 'leroymerlin',     src: '/logos/leroy-merlin.webp',   label: 'Leroy Merlin',    height: 48 },
  { key: 'ingroupe',        src: '/logos/in.webp',             label: 'IN Groupe',       height: 96 },
  { key: 'easyence',        src: '/logos/easyence.webp',       label: 'Easyence',        height: 56 },
  { key: 'genesdiffusion',  src: '/logos/genes-diffusion.webp',label: 'Gènes Diffusion', height: 80 },
];

export function ClientBand({ label = "Ils m'ont fait confiance", logos = defaultLogos }) {
  return (
    <section
      aria-label={label}
      style={{
        background: 'var(--color-surface-card)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '32px 162px',
      }}
    >
      <div
        style={{
          maxWidth: '956px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--color-text-subtle)',
            margin: 0,
          }}
        >
          {label}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          {logos.map(({ key, src, label: alt, height }) => (
            <div
              key={key}
              aria-label={alt}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.7,
                transition: 'opacity 0.2s ease',
              }}
            >
              <img
                src={src}
                alt=""
                style={{
                  display: 'block',
                  width: 'auto',
                  height,
                  maxHeight: height,
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ClientBand.propTypes = {
  label: PropTypes.string,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
    })
  ),
};

export default ClientBand;
