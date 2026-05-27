import { Accordion } from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'Accordéon single-select : ouvrir un item ferme automatiquement les autres. Utilise ChevronDown rotatif, tokens DS exclusivement.',
      },
    },
  },
  argTypes: {
    defaultOpen: { control: 'text', description: "id de l'item ouvert par défaut" },
  },
  tags: ['autodocs'],
};

const ITEMS = [
  {
    id: 'discovery',
    title: 'Découverte & cadrage',
    body: 'Audit de l'existant, interviews utilisateurs, cartographie des flows. On aligne les objectifs business et les besoins UX avant de poser le moindre pixel.',
  },
  {
    id: 'design',
    title: 'Design & prototypage',
    body: 'Wireframes, maquettes haute-fidélité sous Figma, composants Design System. Chaque décision de design est documentée et testable.',
  },
  {
    id: 'handoff',
    title: 'Handoff & intégration',
    body: 'Specs annotées, tokens exportés, composants React — le code suit le design. Pas de perte en ligne lors du passage aux développeurs.',
  },
  {
    id: 'iteration',
    title: 'Tests & itération',
    body: 'Tests d'utilisabilité, A/B testing, mesure des KPIs. On valide, on ajuste, on livre.',
  },
];

export const Default = {
  args: {
    items: ITEMS,
    defaultOpen: null,
  },
};

export const FirstOpenByDefault = {
  args: {
    items: ITEMS,
    defaultOpen: 'discovery',
  },
};

export const SingleItem = {
  args: {
    items: [ITEMS[0]],
    defaultOpen: 'discovery',
  },
};

export const AllClosed = {
  args: {
    items: ITEMS,
    defaultOpen: null,
  },
};
