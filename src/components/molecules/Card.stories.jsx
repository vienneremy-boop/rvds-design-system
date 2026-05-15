import { Card } from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Project card en deux densités. `Feature` (480×380px) : titre Fraunces 2 lignes + description + footer tags/CTA. `Small` (300×280px) : titre Fraunces 1 ligne + description + footer tags/CTA.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['Feature', 'Small'] },
    category: { control: 'text' },
    index: { control: 'text' },
    title: { control: 'text' },
    titleLine2: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' },
    cta: { control: 'text' },
    onCtaClick: { control: false },
  },
  tags: ['autodocs'],
};

export const Feature = {
  args: {
    type: 'Feature',
    category: 'PRODUCT DESIGN',
    index: '01',
    title: 'Store Efficiency',
    titleLine2: '@ Decathlon',
    description: 'Brief description of the project context and the main challenge addressed.',
    tags: ['UX', 'DS', 'IA'],
    cta: 'View case',
  },
};

export const Small = {
  args: {
    type: 'Small',
    category: 'PRODUCT DESIGN',
    index: '01',
    title: 'Project Title',
    description: 'Brief description of the project context and the main challenge addressed.',
    tags: ['UX', 'Mobile'],
    cta: 'View case',
  },
};

export const BothSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Card
        type="Feature"
        category="PRODUCT DESIGN"
        index="01"
        title="Store Efficiency"
        titleLine2="@ Decathlon"
        description="Brief description of the project context and the main challenge addressed."
        tags={['UX', 'DS', 'IA']}
        cta="View case"
      />
      <Card
        type="Small"
        category="PRODUCT DESIGN"
        index="01"
        title="Project Title"
        description="Brief description of the project context and the main challenge addressed."
        tags={['UX', 'Mobile']}
        cta="View case"
      />
    </div>
  ),
};
