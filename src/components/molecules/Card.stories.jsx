import { Card } from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Project card en deux densités. `Feature` (480×380px) : titre Outfit Bold 2 lignes + description + footer tags/CTA. `Small` (300×280px) : titre Outfit Bold 1 ligne + description + footer tags/CTA.',
      },
    },
  },
  argTypes: {
    type:        { control: 'select', options: ['Feature', 'Small'] },
    category:    { control: 'text' },
    index:       { control: 'text' },
    title:       { control: 'text' },
    titleLine2:  { control: 'text' },
    description: { control: 'text' },
    tags:        { control: 'object' },
    cta:         { control: 'text' },
    onCtaClick:  { control: false },
  },
  tags: ['autodocs'],
};

export const Feature = {
  args: {
    type: 'Feature',
    category: 'PRODUCT DESIGN',
    index: '01',
    title: '3 ans',
    titleLine2: '@ Decathlon',
    description: "De l'inventaire fiscal (plusieurs jours → quelques heures) à la migration Vitamin Play — 3 équipes, 100 000+ collaborateurs terrain.",
    tags: ['UX', 'DS', 'UI', 'Product'],
    cta: 'Voir le case',
  },
};

export const Small = {
  args: {
    type: 'Small',
    category: 'PRODUCT DESIGN',
    index: '02',
    title: 'Carte Familles Nombreuses',
    description: "Refonte du portail gouvernemental — 1,3 million de nouveaux bénéficiaires en 2 ans.",
    tags: ['UX Research', 'DSFR', 'Gov'],
    cta: 'Voir le case',
  },
};

export const SmallDesignEngineer = {
  name: 'Small — Design Engineer',
  args: {
    type: 'Small',
    category: 'DESIGN ENGINEER',
    index: '03',
    title: 'ASES Électricité',
    description: "Identité visuelle + site web end-to-end via Figma Make. ×2 prospects dès J+7.",
    tags: ['Branding', 'Web', 'Dev'],
    cta: 'Voir le case',
  },
};

export const BothSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap', padding: '24px' }}>
      <Card
        type="Feature"
        category="PRODUCT DESIGN"
        index="01"
        title="3 ans"
        titleLine2="@ Decathlon"
        description="De l'inventaire fiscal (plusieurs jours → quelques heures) à la migration Vitamin Play — 3 équipes, 100 000+ collaborateurs terrain."
        tags={['UX', 'DS', 'UI', 'Product']}
        cta="Voir le case"
      />
      <Card
        type="Small"
        category="PRODUCT DESIGN"
        index="02"
        title="Carte Familles Nombreuses"
        description="Refonte du portail gouvernemental — 1,3 million de nouveaux bénéficiaires en 2 ans."
        tags={['UX Research', 'DSFR', 'Gov']}
        cta="Voir le case"
      />
    </div>
  ),
};
