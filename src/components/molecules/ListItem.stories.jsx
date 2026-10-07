import { ListItem } from './ListItem';

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
  parameters: {
    docs: {
      description: {
        component:
          'Row de liste avec icône (slot), contenu (label + detail) et chevron. Hover/Active ajoutent un padding horizontal. Active passe le label en accent turquoise.',
      },
    },
  },
  argTypes: {
    state: { control: 'select', options: ['default', 'hover', 'active', 'disabled'] },
    label: { control: 'text' },
    description: { control: 'text' },
    onClick: { control: false },
    leading: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'List item label',
    description: 'Supporting detail',
    state: 'default',
  },
};

export const WithLeading = {
  args: {
    label: 'List item label',
    description: 'Supporting detail',
    leading: '◆',
    state: 'default',
  },
};

export const HoverState = {
  args: {
    label: 'List item label',
    description: 'Supporting detail',
    state: 'hover',
  },
};

export const ActiveState = {
  args: {
    label: 'List item label',
    description: 'Supporting detail',
    state: 'active',
  },
};

export const DisabledState = {
  args: {
    label: 'List item label',
    description: 'Supporting detail',
    state: 'disabled',
  },
};

export const AllStates = {
  render: () => (
    <div style={{ maxWidth: '320px' }}>
      <ListItem label="List item label" description="Supporting detail" state="default" />
      <ListItem label="List item label" description="Supporting detail" state="hover" />
      <ListItem label="List item label" description="Supporting detail" state="active" />
      <ListItem label="List item label" description="Supporting detail" state="disabled" />
    </div>
  ),
};
