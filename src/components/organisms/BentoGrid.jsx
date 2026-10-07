import PropTypes from 'prop-types';
import { Card } from '../molecules/Card';
import { Button } from '../atoms/Button';

export function BentoGrid({
  sectionTitle = 'Projets récents',
  viewAllLabel = 'Voir tous les projets',
  onViewAll,
  featuredCard = {
    category: 'PRODUCT DESIGN',
    index: '01',
    title: 'Store Efficiency',
    titleLine2: '@ Decathlon',
    description: 'Brief description of the project context and the main challenge addressed.',
    tags: ['UX', 'DS', 'IA'],
    cta: 'View case',
  },
  smallCards = [
    {
      category: 'PRODUCT DESIGN',
      index: '02',
      title: 'Project Title',
      description: 'Brief description of the project context and the main challenge addressed.',
      tags: ['UX', 'Mobile'],
      cta: 'View case',
    },
    {
      category: 'PRODUCT DESIGN',
      index: '03',
      title: 'Project Title',
      description: 'Brief description of the project context and the main challenge addressed.',
      tags: ['UX', 'Mobile'],
      cta: 'View case',
    },
  ],
}) {
  return (
    <div
      style={{
        background: 'var(--color-btn-secondary-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '48px 80px 40px',
          width: '100%',
          boxSizing: 'border-box',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {sectionTitle}
        </p>
        <Button
          variant="tertiary"
          size="medium"
          label={viewAllLabel}
          onClick={onViewAll}
        />
      </div>

      {/* Cards row */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          padding: '0 80px 80px',
          width: '100%',
          boxSizing: 'border-box',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Featured card — flex-1 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Card
            type="Feature"
            category={featuredCard.category}
            index={featuredCard.index}
            title={featuredCard.title}
            titleLine2={featuredCard.titleLine2}
            description={featuredCard.description}
            tags={featuredCard.tags}
            cta={featuredCard.cta}
            href={featuredCard.href}
            onCtaClick={featuredCard.onCtaClick}
            style={{ width: '100%', height: '380px' }}
          />
        </div>

        {/* Small cards column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '340px',
            flexShrink: 0,
          }}
        >
          {smallCards.map((card, i) => (
            <Card
              key={i}
              type="Small"
              category={card.category}
              index={card.index}
              title={card.title}
              description={card.description}
              tags={card.tags}
              cta={card.cta}
              href={card.href}
              onCtaClick={card.onCtaClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

BentoGrid.propTypes = {
  sectionTitle: PropTypes.string,
  viewAllLabel: PropTypes.string,
  onViewAll: PropTypes.func,
  featuredCard: PropTypes.shape({
    category: PropTypes.string,
    index: PropTypes.string,
    title: PropTypes.string,
    titleLine2: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    cta: PropTypes.string,
    href: PropTypes.string,
    onCtaClick: PropTypes.func,
  }),
  smallCards: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      index: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      cta: PropTypes.string,
      href: PropTypes.string,
      onCtaClick: PropTypes.func,
    })
  ),
};

export default BentoGrid;
