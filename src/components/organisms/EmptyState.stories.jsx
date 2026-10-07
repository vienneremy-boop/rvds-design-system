import { EmptyState } from './EmptyState';

export default {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          'État vide avec icône Token hexagonale, titre Outfit Bold et CTA primary. Surface surface-page, dimensions 640×400px.',
      },
    },
  },
  argTypes: {
    title:      { control: 'text' },
    message:    { control: 'text' },
    ctaLabel:   { control: 'text' },
    onCtaClick: { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Aucun résultat trouvé',
    message: "Essayez d'ajuster vos filtres ou d'explorer d'autres catégories.",
    ctaLabel: 'Explorer les projets',
  },
};

export const CustomContent = {
  args: {
    title: 'Aucun projet publié',
    message: 'Commencez par ajouter votre premier projet.',
    ctaLabel: 'Ajouter un projet',
  },
};

export const NoCta = {
  args: {
    title: 'Aucun résultat trouvé',
    message: "Essayez d'ajuster vos filtres.",
    ctaLabel: '',
  },
};
