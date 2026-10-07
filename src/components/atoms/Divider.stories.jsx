import { Divider } from './Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          'Séparateur visuel. 4 types : Default (gris), Brand (turquoise), Label (ligne + texte centré), Pill (étiquette coupée avec points carrés).',
      },
    },
  },
  argTypes: {
    type:  { control: 'select', options: ['default', 'brand', 'label', 'pill'] },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: { type: 'default' },
  decorators: [(Story) => <div style={{ padding: '16px 0', width: '100%' }}><Story /></div>],
};

export const Brand = {
  args: { type: 'brand' },
  decorators: [(Story) => <div style={{ padding: '16px 0', width: '100%' }}><Story /></div>],
};

export const Label = {
  args: { type: 'label', label: 'Section Label' },
  decorators: [(Story) => <div style={{ padding: '16px 0', width: '100%' }}><Story /></div>],
};

export const Pill = {
  args: { type: 'pill', label: 'Projets' },
  decorators: [(Story) => <div style={{ padding: '16px 0' }}><Story /></div>],
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <Divider type="default" />
      <Divider type="brand" />
      <Divider type="label" label="Section Label" />
      <div><Divider type="pill" label="Projets" /></div>
    </div>
  ),
};
