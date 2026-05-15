import { Reassurance } from './Reassurance';

export default {
  title: 'Organisms/Reassurance',
  component: Reassurance,
  parameters: {
    docs: {
      description: {
        component:
          'Bande de réassurance sur fond blanc. 4 métriques clés avec bullet electric lime, valeur mono bold et description mono caption.',
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
      { metric: '12 ans', description: 'Design produit - Direction artistique' },
      { metric: 'IA & MCP workflows', description: '+ 50% de vélocité' },
      { metric: 'Retail, B2B\n& SaaS', description: 'Spécialiste' },
      { metric: 'Design Inclusif', description: 'Accessibilité AA WCAG 2.2' },
    ],
  },
};
