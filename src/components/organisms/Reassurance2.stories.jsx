import { Reassurance2 } from './Reassurance2';

export default {
  title: 'Organisms/Reassurance2',
  component: Reassurance2,
  parameters: {
    docs: {
      description: {
        component:
          'Seconde bande de réassurance sur fond Surface/page. 4 métriques techniques (accessibilité, perf, sobriété, inclusif) avec bullet 24px violet, label accent mono bold et sublabel mono caption.',
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
      { label: 'ACCESSIBILITY - WCAG 2.2', sublabel: '98.2% (AA/AAA)' },
      { label: 'Performance Lighthouse', sublabel: '100/100/100/100' },
      { label: 'Digital Sobriety', sublabel: '0.12g CO2e / view' },
      { label: 'Design Inclusif', sublabel: 'Accessibilité AA WCAG 2.2' },
    ],
  },
};
