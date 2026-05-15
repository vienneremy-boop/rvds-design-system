import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Switch } from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

const Interactive = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Switch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

export const Off = {
  render: (args) => <Interactive {...args} />,
  args: { checked: false },
};

export const On = {
  render: (args) => <Interactive {...args} />,
  args: { checked: true },
};

export const Disabled = {
  args: { checked: false, disabled: true, label: 'Disabled toggle' },
};

export const ToggleInteraction = {
  render: (args) => <Interactive {...args} />,
  args: { checked: false, label: 'Activer les notifications' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox');
    await expect(toggle).not.toBeChecked();
    await userEvent.click(canvas.getByText('Activer les notifications'));
    await expect(toggle).toBeChecked();
    await userEvent.click(canvas.getByText('Activer les notifications'));
    await expect(toggle).not.toBeChecked();
  },
};

export const WithLabel = {
  render: (args) => <Interactive {...args} />,
  args: { checked: true, label: 'Enable notifications' },
};
