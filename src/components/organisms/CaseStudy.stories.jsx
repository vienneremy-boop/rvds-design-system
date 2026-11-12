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
    tagline: "Plus de 3 ans chez Decathlon : après un projet e-commerce, les applis mobiles des équipes en magasin, Stock'n Business et Cube in Store.",
    role: 'Senior Product Designer',
    duration: 'Déc. 2022 – mars 2026',
    team: "Stock'n Business · Cube in Store Goods",
    stack: 'Figma · Vitamin · Amplitude · Medallia · Jira',
    kpis: [
      { value: 'Jours → heures', label: 'Inventaire fiscal continu, Product Award 2025', color: 'electric' },
      { value: '2',        label: 'Applis mobiles magasin',            color: 'brand' },
      { value: 'Occasion', label: "Intégrée à l'inventaire",           color: 'brand' },
      { value: 'Trio',     label: 'PM, lead tech, design',             color: 'brand' },
    ],
    context: {
      heading: 'En rayon, une appli doit tenir le rythme.',
      desc: "Le produit vu sur le web doit être disponible en rayon, et le vendeur doit pouvoir le dire au client avec une donnée fiable. Les collaborateurs tiennent le stock depuis leur mobile, entre deux clients, parfois sans réseau.",
    },
    process: {
      heading: 'Terrain → Discovery → Ateliers → Design → Tests → Prod → Mesure',
      steps: [
        { num: '01', title: "Stock'n Business — Inventaire fiscal continu", desc: "Lead design de la refonte. L'inventaire prenait plusieurs jours, il se fait en quelques heures. Product Award 2025.", tools: ['Figma', 'Amplitude'] },
        { num: '02', title: "Stock'n Business — L'occasion dans l'inventaire", desc: "L'inventaire ne gérait que le neuf : parcours repris sur toute l'app pour intégrer les produits d'occasion.", tools: ['Figma', 'Vitamin'] },
        { num: '03', title: 'Cube in Store Goods — Retours, réassort et conseil client', desc: "Retours de produits, suivi du réapprovisionnement et stock du magasin en temps réel pour renseigner les clients en rayon.", tools: ['Figma', 'Vitamin', 'Amplitude'] },
        { num: '04', title: 'Design system Vitamin — contribution', desc: "Patterns mobiles (scan, listes, états hors ligne) documentés et versés au design system.", tools: ['Figma', 'Vitamin'] },
      ],
    },
    solution: {
      heading: 'Terrain d’abord, design system toujours.',
      desc: "Observer le travail en rayon, décider en trio avec le PM et le lead tech, tester avec les équipes en magasin, livrer avec les développeurs.",
    },
    impact: {
      heading: 'Ce qui a changé',
      lessons: [
        "Inventaire fiscal continu : de plusieurs jours à quelques heures, Product Award 2025",
        "L'occasion gérée dans tout l'inventaire, plus seulement le neuf",
        "Des vendeurs qui renseignent leurs clients depuis le stock du magasin",
        "Une méthode de design installée dans des équipes qui n'en avaient pas",
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
      { value: 'Logo',    label: 'Identité visuelle',      color: 'electric' },
      { value: 'Charte',  label: 'Couleurs, typographies', color: 'brand' },
      { value: 'Site',    label: 'Conçu et développé',     color: 'brand' },
      { value: '3',       label: 'Mois de mission',        color: 'brand' },
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
        { num: '04', title: 'Lancement & SEO', desc: "Déploiement Vercel, performance et SEO local soignés.", tools: ['Next.js', 'Vercel'] },
      ],
    },
    solution: {
      heading: "Une identité et un site, du logo à la mise en ligne.",
      desc: "Identité professionnelle, charte et site avec SEO local, livrés en 3 mois, seul, du design au code.",
    },
    impact: {
      heading: "Ce qui a changé",
      lessons: [
        "Un artisan qui a enfin une présence professionnelle en ligne",
        "Une charte réutilisable pour tous ses supports",
        "Figma Make pour passer vite des maquettes à un site testable",
      ],
    },
  },
};
