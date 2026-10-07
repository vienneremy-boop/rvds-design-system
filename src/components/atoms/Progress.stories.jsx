import Progress from './Progress';

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: 'Barre de progression h=5px, 2 variantes : brand (turquoise) et electric (lime, sur fond bleu uniquement).',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['brand', 'electric'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
    showLabel: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export const Brand25 = {
  args: { value: 25, variant: 'brand', showLabel: true },
};

export const Brand60 = {
  args: { value: 60, variant: 'brand', showLabel: true },
};

export const Brand100 = {
  args: { value: 100, variant: 'brand', showLabel: true },
};

export const Electric25 = {
  args: { value: 25, variant: 'electric', showLabel: true },
};

export const Electric60 = {
  args: { value: 60, variant: 'electric', showLabel: true },
};

export const Electric100 = {
  args: { value: 100, variant: 'electric', showLabel: true },
};

export const NoLabel = {
  args: { value: 45, variant: 'brand', showLabel: false },
};
