import { LabNav } from './LabNav';

export default {
  title: 'Molecules/LabNav',
  component: LabNav,
  parameters: {
    docs: {
      description: {
        component:
          'Navigation entre playgrounds Lab. Gradient dark purple, deux blocs prev/next côte à côte. Si un seul bloc, centré pleine largeur. Badge "Bientôt" si nextComingSoon.',
      },
    },
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    prevTitle:      { control: 'text' },
    prevHref:       { control: 'text' },
    nextTitle:      { control: 'text' },
    nextHref:       { control: 'text' },
    nextComingSoon: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export const BothDirections = {
  args: {
    prevTitle: 'Design System',
    prevHref: '/lab/design-system',
    nextTitle: 'Benchmark UX Auto',
    nextHref: '/lab/benchmark',
    nextComingSoon: false,
  },
};

export const NextOnly = {
  args: {
    nextTitle: 'Benchmark UX Auto',
    nextHref: '/lab/benchmark',
    nextComingSoon: false,
  },
};

export const ComingSoon = {
  args: {
    prevTitle: 'Design OS',
    prevHref: '/lab/design-os',
    nextTitle: 'Prompt Library',
    nextHref: '/lab/prompt-library',
    nextComingSoon: true,
  },
};
