import { LogoButton } from './LogoButton';

export default {
  title: 'Atoms/LogoButton',
  component: LogoButton,
  parameters: {
    docs: {
      description: {
        component:
          'Logo vectoriel « le point final » (version compacte). Texte en couleur du texte, point turquoise ; sur fond sombre (onDark) : texte toile, point lime. Utilisé dans NavDesktop et Footer.',
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'glass',
      values: [
        { name: 'glass', value: 'rgba(242,242,238,0.6)' },
        { name: 'white', value: '#ffffff' },
        { name: 'deep', value: '#0C364E' },
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
