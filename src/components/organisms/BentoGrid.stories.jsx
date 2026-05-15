import { BentoGrid } from './BentoGrid';

export default {
  title: 'Organisms/BentoGrid',
  component: BentoGrid,
  parameters: {
    docs: {
      description: {
        component:
          'Grille projets : 1 Card Feature à gauche (flex-1) + 2 Cards Small empilées à droite (340px). Header avec titre Fraunces h1 + lien "Voir tous".',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    sectionTitle:  { control: 'text' },
    viewAllLabel:  { control: 'text' },
    onViewAll:     { control: false },
    featuredCard:  { control: 'object' },
    smallCards:    { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    sectionTitle: 'Projets récents',
    viewAllLabel: 'Voir tous les projets',
    featuredCard: {
      category: 'PRODUCT DESIGN',
      index: '01',
      title: 'Store Efficiency',
      titleLine2: '@ Decathlon',
      description: 'Brief description of the project context and the main challenge addressed.',
      tags: ['UX', 'DS', 'IA'],
      cta: 'View case',
    },
    smallCards: [
      {
        category: 'PRODUCT DESIGN',
        index: '02',
        title: 'Project Title',
        description: 'Brief description of the project context and the main challenge addressed.',
        tags: ['UX', 'Mobile'],
        cta: 'View case',
      },
      {
        category: 'BRAND',
        index: '03',
        title: 'Project Title',
        description: 'Brief description of the project context and the main challenge addressed.',
        tags: ['Identité', 'Print'],
        cta: 'View case',
      },
    ],
  },
};
