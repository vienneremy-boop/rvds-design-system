import { CaseStudy } from './CaseStudy';

export default {
  title: 'Organisms/CaseStudy',
  component: CaseStudy,
  parameters: {
    docs: {
      description: {
        component:
          "Template case study complet : hero dark (client, type, tags, tagline, meta strip), barre KPIs, 4 sections (Contexte / Processus accordéon / Solution / Impact). Fidèle au CaseStudyTemplate du site web.",
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    onBack:   { control: false },
    client:   { control: 'text' },
    type:     { control: 'text' },
    tags:     { control: 'object' },
    tagline:  { control: 'text' },
    role:     { control: 'text' },
    duration: { control: 'text' },
    team:     { control: 'text' },
    stack:    { control: 'text' },
    kpis:     { control: 'object' },
    context:  { control: 'object' },
    process:  { control: 'object' },
    solution: { control: 'object' },
    impact:   { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Decathlon = {
  args: {
    client: 'Decathlon',
    type: 'PRODUCT DESIGN',
    tags: ['UX', 'DS', 'UI', 'Product'],
    tagline: "3 ans chez Decathlon, 3 équipes différentes, des centaines de livrables. Trois exemples concrets — un par équipe — tous construits avec la même exigence : terrain d'abord, design system toujours.",
    role: 'Senior Product Designer',
    duration: '3 ans',
    team: "POP · Stock'N Business · Cube in Store Goods",
    stack: 'Figma · Vitamin Play · Amplitude · Datadog · Jira',
    kpis: [
      { value: '×24',   label: 'Inventaire fiscal accéléré (1 sem → 3h)', color: 'electric' },
      { value: '÷4',    label: 'Temps renseignement client — Supply',      color: 'brand' },
      { value: '100k+', label: 'Utilisateurs actifs en magasin',            color: 'brand' },
      { value: '500+',  label: 'Tickets Jira traités — 3 équipes, 3 ans',  color: 'brand' },
    ],
    context: {
      heading: "3 ans, 3 équipes, des centaines de livrables.",
      desc: "Chez Decathlon, j'ai travaillé successivement sur trois équipes produit — POP, Stock'N Business, puis Cube in Store Goods. Les produits sont des outils internes utilisés par 100 000+ collaborateurs terrain.",
    },
    process: {
      heading: 'Terrain → Discovery → Ateliers → Design → Tests → Prod → Mesure',
      steps: [
        {
          num: '01',
          title: "Équipe POP — Inventaire Fiscal, de 1 semaine à 3 heures",
          desc: "Immersion terrain de 2 semaines, shadowing des équipes pendant les inventaires réels. Résultat mesuré via Amplitude : 1 semaine → 3 heures, ×24. Récompensé d'un Product Award.",
          tools: ['Figma', 'Notion', 'Amplitude'],
        },
        {
          num: '02',
          title: "Équipe Stock'N Business — Intégration de la seconde vie",
          desc: "Intégration des parcours occasion dans l'ensemble des flux existants. Ateliers co-conception avec les équipes terrain et les PM. Application du Design System Vitamin Play.",
          tools: ['Figma', 'Vitamin Play'],
        },
        {
          num: '03',
          title: "Équipe Cube in Store Goods — Page Supply, refonte complète",
          desc: "Refonte bout en bout de la page Supply. Tests utilisateurs en conditions réelles — 12 collaborateurs sur 3 magasins. KPI principal : temps de renseignement client ÷4.",
          tools: ['Figma', 'Vitamin Play', 'Amplitude'],
        },
        {
          num: '04',
          title: 'Design System Vitamin — contribution active',
          desc: "En parallèle des 3 projets : contribution au DS Vitamin Play. Documentation des patterns mobiles (scan, liste infinie, états offline), création de variantes.",
          tools: ['Figma', 'Vitamin Play', 'Storybook'],
        },
      ],
    },
    solution: {
      heading: "3 ans, 3 équipes, des résultats mesurés sur le terrain.",
      desc: "Ces trois exemples sont représentatifs de ma façon de travailler : terrain d'abord, design system toujours, impact mesuré avant de valider. Les gains ne sont pas estimés : ×24 sur l'inventaire fiscal, ÷4 sur le temps de renseignement client.",
    },
    impact: {
      heading: "Des résultats mesurés — pas estimés.",
      lessons: [
        "×24 sur l'inventaire fiscal : 1 semaine → 3 heures",
        "÷4 sur le temps de renseignement client (Page Supply)",
        "L'intégration de la seconde vie a révélé que les flux neuf/occasion étaient plus imbriqués qu'anticipé",
        "La contrainte physique (gants, luminosité, mobilité) guide chaque décision UI",
        "Un design system partagé multiplie la vélocité des squads",
      ],
    },
  },
};

export const CFN = {
  args: {
    client: 'Carte Familles Nombreuses',
    type: 'PRODUCT DESIGN',
    tags: ['UX Research', 'DSFR', 'Gov', 'Mobile First'],
    tagline: "Refonte complète du portail gouvernemental de la Carte Familles Nombreuses pour IN Groupe — 1,3 million de nouveaux bénéficiaires en 2 ans.",
    role: 'Product Designer',
    duration: '8 mois',
    team: 'PM · Lead Tech · IN Groupe',
    stack: 'Figma · DSFR · React · Amplitude',
    kpis: [
      { value: '+1,3M', label: 'Nouveaux bénéficiaires en 2 ans', color: 'electric' },
      { value: '500k→', label: 'Cartes émises/an dépassé',         color: 'brand' },
      { value: 'AA',    label: 'Conformité WCAG 2.2',              color: 'brand' },
      { value: '100%',  label: 'Mobile First DSFR',                 color: 'brand' },
    ],
    context: {
      heading: "Un portail gouvernemental bloqué sous 500k cartes/an.",
      desc: "L'ancien système stagnait sous 500k cartes/an. Pas Mobile First, pas accessible, pas DSFR compliant. Mission : refonte complète du portail grand public de la Carte Familles Nombreuses.",
    },
    process: {
      heading: 'Discovery → DSFR Research → Design Mobile First → Tests → Livraison',
      steps: [
        { num: '01', title: 'Discovery & Research', desc: "Interviews usagers, audit de l'existant, benchmark portails gouvernementaux.", tools: ['Figma', 'Notion'] },
        { num: '02', title: 'DSFR & Accessibilité', desc: "Étude du Design System de l'État (DSFR). Mise en conformité WCAG 2.2 AA.", tools: ['DSFR', 'Figma'] },
        { num: '03', title: 'Design Mobile First', desc: "Conception des flux principales : inscription, renouvellement, gestion carte.", tools: ['Figma'] },
        { num: '04', title: 'Tests & Livraison', desc: "Tests utilisateurs avec 8 familles. Itérations, livraison et suivi post-lancement.", tools: ['Figma', 'Amplitude'] },
      ],
    },
    solution: {
      heading: "1,3 million de nouveaux bénéficiaires.",
      desc: "Un portail refait de zéro, Mobile First, conforme DSFR et accessible AA. Les inscriptions ont explosé dès le lancement.",
    },
    impact: {
      heading: "Impact mesuré en millions d'usagers.",
      lessons: [
        "+1,3 million de nouveaux bénéficiaires en 2 ans",
        "Conformité WCAG 2.2 AA atteinte — accessibilité non négociable en contexte gouvernemental",
        "Le DSFR impose un cadre rigoureux mais accélère la cohérence",
      ],
    },
  },
};

export const ASES = {
  args: {
    client: 'ASES Électricité',
    type: 'DESIGN ENGINEER',
    tags: ['Branding', 'Web', 'Dev', 'Figma Make'],
    tagline: "Un projet end-to-end : identité visuelle, charte graphique, site web livré via Figma Make — pour un électricien ardéchois qui voulait une présence digitale à la hauteur de son savoir-faire.",
    role: 'Design Engineer',
    duration: '3 mois',
    team: 'Solo (design + dev)',
    stack: 'Figma · Figma Make · Next.js · Vercel',
    kpis: [
      { value: '×2',   label: 'Prospects dès J+7',   color: 'electric' },
      { value: '100',  label: 'Lighthouse performance', color: 'brand' },
      { value: '3',    label: 'Mois de mission',       color: 'brand' },
      { value: '0,12', label: 'g CO₂e / vue',          color: 'brand' },
    ],
    context: {
      heading: "Un artisan expert sans présence digitale.",
      desc: "ASES Électricité : spécialiste IRVE, domotique et installations électriques en Ardèche. Aucune présence en ligne. Objectif : une identité pro et un site qui convertit.",
    },
    process: {
      heading: 'Identité → Charte → Maquettes → Figma Make → Lancement',
      steps: [
        { num: '01', title: 'Identité visuelle', desc: "Création du logo, palette, typographie. Positionnement expert local.", tools: ['Figma'] },
        { num: '02', title: 'Charte graphique', desc: "Documentation complète de l'identité visuelle. Templates réutilisables.", tools: ['Figma'] },
        { num: '03', title: 'Maquettes & Figma Make', desc: "Design des pages clés, puis génération du code via Figma Make. Itérations rapides.", tools: ['Figma', 'Figma Make'] },
        { num: '04', title: 'Lancement & SEO', desc: "Déploiement Vercel, optimisation Lighthouse 100, SEO local. ×2 prospects dès J+7.", tools: ['Next.js', 'Vercel'] },
      ],
    },
    solution: {
      heading: "Un site qui tourne à 100/100 et convertit dès J+7.",
      desc: "Identité professionnelle + site Lighthouse 100 + SEO local — livré en 3 mois, solo, design to code.",
    },
    impact: {
      heading: "×2 prospects dès la première semaine.",
      lessons: [
        "×2 prospects dès J+7 après le lancement",
        "Figma Make permet de passer du design au code production en quelques heures",
        "Lighthouse 100 obtenu dès le premier audit grâce à Next.js + Vercel",
      ],
    },
  },
};
