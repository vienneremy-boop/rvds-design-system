import { Tag } from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component:
          'Étiquette thématique sur fond clair. 4 types : Brand, Electric, White, Brand Inverse. Radius 8px, 10px Bold JetBrains Mono.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['brand', 'electric', 'white', 'brand-inverse'],
    },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: { label: 'Brand', type: 'brand' },
};

export const Electric = {
  args: { label: 'Electric', type: 'electric' },
};

export const White = {
  args: { label: 'White', type: 'white' },
};

export const BrandInverse = {
  args: { label: 'Brand Inverse', type: 'brand-inverse' },
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag label="Brand"         type="brand" />
      <Tag label="Electric"      type="electric" />
      <Tag label="White"         type="white" />
      <Tag label="Brand Inverse" type="brand-inverse" />
    </div>
  ),
};
