import TabItem, { Tabs } from './TabItem';

export default {
  title: 'Atoms/TabItem',
  component: TabItem,
  tags: ['autodocs'],
  argTypes: {
    onClick: { control: false },
  },
};

export const Default = {
  args: {
    label: 'Overview',
    active: false,
  },
};

export const Active = {
  args: {
    label: 'Overview',
    active: true,
  },
};

export const TabsStory = {
  name: 'Tabs (compound)',
  render: () => (
    <Tabs
      defaultActive={0}
      items={[
        {
          label: 'Overview',
          content: (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
              This is the Overview tab content. It gives a high-level summary of the component.
            </div>
          ),
        },
        {
          label: 'Properties',
          content: (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
              This is the Properties tab. Here you would list all available props.
            </div>
          ),
        },
        {
          label: 'Usage',
          content: (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
              This is the Usage tab. Code examples and best practices go here.
            </div>
          ),
        },
      ]}
    />
  ),
};
