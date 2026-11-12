import { HeroSection } from './HeroSection';

export default {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  parameters: {
    docs: {
      description: {
        component:
          'Section hero portfolio. Badge electric lime, rôle + tiret accent, titre Outfit Bold 48px avec mots-clés en turquoise 56px, sous-titre Outfit, CTAs primary + secondary. Largeur fixe 956px.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    badge:          { control: 'text' },
    roleTitle:      { control: 'text' },
    roleLocation:   { control: 'text' },
    eyebrow:        { control: 'text' },
    titleMain:      { control: 'text' },
    titleAccent1:   { control: 'text' },
    titleConnector: { control: 'text' },
    titleAccent2:   { control: 'text' },
    subtitle:       { control: 'text' },
    primaryCta:     { control: 'text' },
    secondaryCta:   { control: 'text' },
    onPrimaryClick:  { control: false },
    onSecondaryClick: { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    badge: 'Disponible pour mission',
    roleTitle: 'Senior Product Designer × Design Engineer',
    roleLocation: 'Freelance · Lille',
    eyebrow: 'Retail, B2B & SaaS',
    titleMain: 'Transformons vos sites et applications en expériences',
    titleAccent1: 'claires',
    titleConnector: 'et',
    titleAccent2: 'mémorables',
    subtitle: "De l'audit au lancement : repérer ce qui bloque vos utilisateurs, repenser leurs parcours, tester avec eux, puis mesurer ce que ça vous rapporte. L'IA accélère chaque étape.",
    primaryCta: 'Voir mes études de cas',
    secondaryCta: 'Me contacter',
  },
};
