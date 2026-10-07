import { Footer } from './Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component:
          'Footer pleine largeur sur Surface/deep. Titre héro Outfit Bold, tags inverse, deux CTA (email + Calendly), liste disponibilité. Footer bar : LogoButton + nav + copyright.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    email:          { control: 'text' },
    calendlyUrl:    { control: 'text' },
    year:           { control: 'number' },
    onEmailClick:   { control: false },
    onCalendlyClick: { control: false },
    onLogoClick:    { control: false },
    onNavClick:     { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    email: 'studio@remyvienne.fr',
    calendlyUrl: '#',
    year: 2026,
  },
};
