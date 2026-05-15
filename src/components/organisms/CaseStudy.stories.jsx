import { CaseStudy } from './CaseStudy';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
  parameters: {
    docs: {
      description: {
        component:
          'Header de case study. Back button + overline avec tiret accent. Titre Fraunces Black Italic 64px sur 2 lignes. Badge métrique dark + meta RÔLE/DURÉE/ÉQUIPE. Steps processus en flex row.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    onBack:      { control: false },
    eyebrow:     { control: 'text' },
    title:       { control: 'text' },
    titleLine2:  { control: 'text' },
    subtitle:    { control: 'text' },
    metric:      { control: 'text' },
    metricLabel: { control: 'text' },
    role:        { control: 'text' },
    duration:    { control: 'text' },
    team:        { control: 'text' },
    steps:       { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    eyebrow: 'ÉTUDE DE CAS · RETAIL × DESIGN SYSTEM',
    title: 'Store Efficiency',
    titleLine2: '@ Decathlon',
    subtitle: "Refonte de l'outil opérationnel T-Rex, utilisé par 8 000 collaborateurs Decathlon pour gérer l'efficacité des rayons en temps réel.",
    metric: '+40%',
    metricLabel: 'efficacité tâches',
    role: 'Lead Design Engineer',
    duration: '14 mois',
    team: 'PM, 3 devs, Data',
    steps: [
      { number: '01', title: 'Recherche' },
      { number: '02', title: 'Idéation' },
      { number: '03', title: 'Prototype' },
      { number: '04', title: 'Livraison' },
    ],
  },
};
