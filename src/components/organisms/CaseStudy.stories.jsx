import { CaseStudy } from './CaseStudy';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
  parameters: {
    docs: {
      description: {
        component:
          "Page case study : bouton retour, eyebrow + titre display 2 lignes, sous-titre mono, métrique KPI sur fond deep, méta rôle/durée/équipe, grille processus en 4 étapes.",
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

export const Decathlon = {
  args: {
    eyebrow: "PRODUCT DESIGN · RETAIL × DESIGN SYSTEM",
    title: '3 ans',
    titleLine2: '@ Decathlon',
    subtitle: "3 équipes (POP, Stock'N Business, Cube in Store Goods), 100 000+ collaborateurs terrain. Inventaire fiscal ×24, Page Supply ÷4 temps renseignement client.",
    metric: '×24',
    metricLabel: 'inventaire fiscal accéléré',
    role: 'Senior Product Designer',
    duration: '3 ans',
    team: "POP · Stock'N Business · Cube in Store Goods",
    steps: [
      { number: '01', title: 'Équipe POP' },
      { number: '02', title: "Stock'N Business" },
      { number: '03', title: 'Cube in Store Goods' },
      { number: '04', title: 'Vitamin Play' },
    ],
  },
};

export const CFN = {
  args: {
    eyebrow: 'PRODUCT DESIGN · GOV × MOBILE FIRST',
    title: 'Carte Familles',
    titleLine2: 'Nombreuses',
    subtitle: "Refonte complète du portail gouvernemental pour IN Groupe. Mobile First dans le cadre du DSFR. 1,3 million de nouveaux bénéficiaires en 2 ans.",
    metric: '+1,3M',
    metricLabel: 'nouveaux bénéficiaires',
    role: 'Product Designer',
    duration: '8 mois',
    team: 'PM · Lead Tech · IN Groupe',
    steps: [
      { number: '01', title: 'Discovery' },
      { number: '02', title: 'DSFR Research' },
      { number: '03', title: 'Design Mobile First' },
      { number: '04', title: 'Tests & Livraison' },
    ],
  },
};

export const ASES = {
  args: {
    eyebrow: 'DESIGN ENGINEER · BRANDING × WEB',
    title: 'ASES',
    titleLine2: 'Électricité',
    subtitle: "Projet end-to-end : identité visuelle, charte graphique, site web livré via Figma Make — pour un électricien ardéchois. ×2 prospects dès J+7.",
    metric: '×2',
    metricLabel: 'prospects dès J+7',
    role: 'Design Engineer',
    duration: '3 mois',
    team: 'Solo (design + dev)',
    steps: [
      { number: '01', title: 'Identité visuelle' },
      { number: '02', title: 'Charte graphique' },
      { number: '03', title: 'Figma Make' },
      { number: '04', title: 'Lancement' },
    ],
  },
};
