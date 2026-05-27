import { ClientBand } from './ClientBand';

export default {
  title: 'Organisms/ClientBand',
  component: ClientBand,
  parameters: {
    docs: {
      description: {
        component:
          "Bande clients sur fond Surface/card. Label mono uppercase + rangée de logos à opacité réduite, justify-content space-between. 5 clients : Decathlon, Leroy Merlin, IN Groupe, Easyence, Gènes Diffusion.",
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    label: { control: 'text' },
    logos: { control: 'object' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: "Ils m'ont fait confiance",
  },
};

export const EnVersion = {
  args: {
    label: 'Trusted by',
  },
};
