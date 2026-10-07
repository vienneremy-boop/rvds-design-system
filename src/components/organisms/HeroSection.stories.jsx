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
    badge: 'Disponible 2027',
    roleTitle: 'Senior Product Designer × Design Engineer',
    roleLocation: 'Freelance · Lille',
    eyebrow: 'Expert Retail, B2B & SaaS',
    titleMain: 'Je transforme la complexité métier en interfaces digitales',
    titleAccent1: 'fluides',
    titleConnector: 'et',
    titleAccent2: 'performantes',
    subtitle: "De la conception initiale au lancement du produit, en passant par votre identité visuelle ; Je livre des interfaces mesurables axées sur votre ROI, grâce à un workflow optimisé par l'IA.",
    primaryCta: 'Découvrez mes projets',
    secondaryCta: 'Contactez-moi',
  },
};
