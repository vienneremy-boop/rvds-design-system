import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { NavMobile } from './NavMobile';

export default {
  title: 'Molecules/NavMobile',
  component: NavMobile,
  parameters: {
    docs: {
      description: {
        component:
          "Bottom bar mobile — 4 tabs pill 401×70px. Indicateur 2px violet en haut sur l'actif. Icons : Home, Terminal, Wireframe, Mail. Backdrop-filter blur + safe-area-inset-bottom.",
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    activeIndex: { control: { type: 'number', min: 0, max: 3 } },
    onItemClick: { control: false },
  },
  tags: ['autodocs'],
};

const Wrapper = (args) => {
  const [active, setActive] = useState(args.activeIndex ?? 0);
  return (
    <div style={{ height: '200px', background: 'var(--color-surface-page)', position: 'relative' }}>
      <NavMobile {...args} activeIndex={active} onItemClick={setActive} />
    </div>
  );
};

export const Default = {
  render: (args) => <Wrapper {...args} />,
  args: { activeIndex: 0 },
};

export const ActiveProjets = {
  render: (args) => <Wrapper {...args} />,
  args: { activeIndex: 1 },
};

export const ActiveLab = {
  render: (args) => <Wrapper {...args} />,
  args: { activeIndex: 2 },
};

export const ActiveContact = {
  render: (args) => <Wrapper {...args} />,
  args: { activeIndex: 3 },
};

export const TabInteraction = {
  render: (args) => <Wrapper {...args} />,
  args: { activeIndex: 0 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('button');
    // Clic Projets
    await userEvent.click(links[1]);
    await expect(links[1]).toHaveAttribute('aria-current', 'page');
    // Clic Contact
    await userEvent.click(links[3]);
    await expect(links[3]).toHaveAttribute('aria-current', 'page');
  },
};
