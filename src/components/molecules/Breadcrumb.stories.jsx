import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Navigation trail. Ancestors en text-secondary soulignés, page courante en text-primary. Séparateur "/" fixe.',
      },
    },
  },
  tags: ['autodocs'],
};

export const Depth2 = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projets' },
    ],
  },
};

export const Depth3 = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projets', href: '/projects' },
      { label: 'Store Efficiency' },
    ],
  },
};

export const DeepNesting = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'Case Studies', href: '/work/cases' },
      { label: 'Brand Identity' },
    ],
  },
};
