import Chip from './Chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    onClick: { control: false },
  },
};

export const Default = {
  args: {
    label: 'Design',
    selected: false,
  },
};

export const Selected = {
  name: 'Selected (Light)',
  args: {
    label: 'Design',
    selected: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Group = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip label="All" selected={true} />
      <Chip label="Design" selected={false} />
      <Chip label="Engineering" selected={false} />
      <Chip label="Product" selected={true} />
      <Chip label="Marketing" selected={false} />
      <Chip label="Disabled" disabled />
    </div>
  ),
};

export const GroupDark = {
  name: 'Group (Dark)',
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ background: 'var(--color-surface-deep)', padding: '24px', borderRadius: '12px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip label="All" selected={true} />
      <Chip label="Design" selected={false} />
      <Chip label="Engineering" selected={false} />
      <Chip label="Product" selected={true} />
      <Chip label="Marketing" selected={false} />
      <Chip label="Disabled" disabled />
    </div>
  ),
};

export const SelectedDark = {
  name: 'Selected (Dark)',
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ background: 'var(--color-surface-deep)', padding: '24px', borderRadius: '12px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Design',
    selected: true,
  },
};
