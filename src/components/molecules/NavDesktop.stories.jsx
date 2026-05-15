import { useState } from 'react';
import { NavDesktop } from './NavDesktop';

export default {
  title: 'Molecules/NavDesktop',
  component: NavDesktop,
  parameters: {
    docs: {
      description: {
        component:
          'Barre de navigation desktop. Fond glass (backdrop-blur 30px, rgba blanc 50%), border-radius 100px, 1232px. Logo-button à gauche · Tabs (Projets, Expertise, Lab, Contact) au centre · CTA secondary + lang toggle + dark mode à droite.',
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'hero',
      values: [
        { name: 'hero', value: 'linear-gradient(135deg, #f0eeff 0%, #e8f5e9 100%)' },
        { name: 'white', value: '#ffffff' },
        { name: 'deep', value: '#1d0a3d' },
      ],
    },
  },
  argTypes: {
    tabs:            { control: 'object' },
    activeTab:       { control: { type: 'number', min: 0, max: 3 } },
    ctaLabel:        { control: 'text' },
    lang:            { control: 'text' },
    onTabClick:      { control: false },
    onLogoClick:     { control: false },
    onCtaClick:      { control: false },
    onLangClick:     { control: false },
    onDarkModeClick: { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    activeTab: 0,
    ctaLabel: "Discuter d'un projet",
    lang: 'FR / EN',
    tabs: [
      { label: 'Projets' },
      { label: 'Expertise' },
      { label: 'Lab' },
      { label: 'Contact' },
    ],
  },
};

export const Interactive = {
  render: (args) => {
    const [active, setActive] = useState(0);
    return (
      <NavDesktop
        {...args}
        activeTab={active}
        onTabClick={(i) => setActive(i)}
      />
    );
  },
  args: {
    ctaLabel: "Discuter d'un projet",
    lang: 'FR / EN',
    tabs: [
      { label: 'Projets' },
      { label: 'Expertise' },
      { label: 'Lab' },
      { label: 'Contact' },
    ],
  },
};
