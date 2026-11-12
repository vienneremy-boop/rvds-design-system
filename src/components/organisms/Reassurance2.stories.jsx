import { Reassurance2 } from './Reassurance2';

export default {
  title: 'Organisms/Reassurance2',
  component: Reassurance2,
  parameters: {
    docs: {
      description: {
        component:
          'Seconde bande de réassurance sur fond Surface/page. 4 métriques techniques (accessibilité, perf, sobriété, inclusif) avec bullet 24px, label accent mono bold et sublabel mono caption.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    items: { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    items: [
      { label: 'ACCESSIBILITÉ - WCAG 2.2 AA', sublabel: 'Pré-audit : 0 erreur automatique' },
      { label: 'Mode sombre', sublabel: 'Géré par tokens' },
      { label: 'Mouvement réduit', sublabel: 'Respecté sur tout le site' },
      { label: 'Design Inclusif', sublabel: 'Accessibilité AA WCAG 2.2' },
    ],
  },
};
