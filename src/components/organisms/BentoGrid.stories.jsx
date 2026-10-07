import { BentoGrid } from './BentoGrid';

export default {
  title: 'Organisms/BentoGrid',
  component: BentoGrid,
  parameters: {
    docs: {
      description: {
        component:
          'Grille projets : 1 Card Feature à gauche (flex-1) + 2 Cards Small empilées à droite (340px). Header avec titre Outfit Bold h1 + lien "Voir tous".',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    sectionTitle: { control: 'text' },
    viewAllLabel: { control: 'text' },
    onViewAll:    { control: false },
    featuredCard: { control: 'object' },
    smallCards:   { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    sectionTitle: 'Études de cas',
    viewAllLabel: 'Voir tous les projets',
    featuredCard: {
      category: 'PRODUCT DESIGN',
      index: '01',
      title: '3 ans',
      titleLine2: '@ Decathlon',
      description: "De l'inventaire fiscal (plusieurs jours → quelques heures) à la migration Vitamin Play — 3 équipes, 100 000+ collaborateurs terrain.",
      tags: ['UX', 'DS', 'UI', 'Product'],
      cta: 'Voir le case',
    },
    smallCards: [
      {
        category: 'PRODUCT DESIGN',
        index: '02',
        title: 'Carte Familles Nombreuses',
        description: "Refonte du portail gouvernemental pour IN Groupe — 1,3 million de nouveaux bénéficiaires en 2 ans.",
        tags: ['UX Research', 'DSFR', 'Gov'],
        cta: 'Voir le case',
      },
      {
        category: 'DESIGN ENGINEER',
        index: '03',
        title: 'ASES Électricité',
        description: "Identité visuelle + site web end-to-end via Figma Make. ×2 prospects dès J+7.",
        tags: ['Branding', 'Web', 'Dev'],
        cta: 'Voir le case',
      },
    ],
  },
};
