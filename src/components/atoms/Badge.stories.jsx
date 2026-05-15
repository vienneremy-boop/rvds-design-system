import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Étiquette courte h=22px, radius=20px. 8 types : neutral, brand, electric, success (• dot), error (• dot), warning, info, outline.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['neutral', 'brand', 'electric', 'success', 'error', 'warning', 'info', 'outline'],
    },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: { label: 'neutral', type: 'neutral' },
};

export const Brand = {
  args: { label: 'brand', type: 'brand' },
};

export const Electric = {
  args: { label: 'electric', type: 'electric' },
};

export const Success = {
  args: { label: 'success', type: 'success' },
};

export const Error = {
  args: { label: 'error', type: 'error' },
};

export const Warning = {
  args: { label: 'warning', type: 'warning' },
};

export const Info = {
  args: { label: 'info', type: 'info' },
};

export const Outline = {
  args: { label: 'outline', type: 'outline' },
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge label="neutral"  type="neutral" />
      <Badge label="brand"    type="brand" />
      <Badge label="electric" type="electric" />
      <Badge label="success"  type="success" />
      <Badge label="error"    type="error" />
      <Badge label="warning"  type="warning" />
      <Badge label="info"     type="info" />
      <Badge label="outline"  type="outline" />
    </div>
  ),
};
