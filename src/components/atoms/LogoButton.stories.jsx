import { LogoButton } from './LogoButton';

export default {
  title: 'Atoms/LogoButton',
  component: LogoButton,
  parameters: {
    docs: {
      description: {
        component:
          'Pill logo cliquable. "Rémy" en Fraunces SemiBold deep + "Vienne" en Fraunces Italic primary. Hover : fond electric (light) ou fond violet via --color-logo-hover-bg (dark). Textes via --color-logo-hover-text / --color-logo-hover-italic. Utilisé dans NavDesktop et Footer.',
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'glass',
      values: [
        { name: 'glass', value: 'rgba(200,200,220,0.4)' },
        { name: 'white', value: '#ffffff' },
        { name: 'deep', value: '#1d0a3d' },
      ],
    },
  },
  argTypes: {
    onClick: { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {};

export const OnDark = {
  parameters: {
    backgrounds: { default: 'deep' },
  },
};
