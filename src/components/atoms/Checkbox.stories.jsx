import { useState } from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Checkbox } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

const Interactive = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
};

export const Default = {
  render: (args) => <Interactive {...args} />,
  args: { label: 'Accept terms', checked: false },
};

export const Checked = {
  render: (args) => <Interactive {...args} />,
  args: { label: 'Accept terms', checked: true },
};

export const Disabled = {
  args: { label: 'Disabled option', checked: false, disabled: true },
};

export const Error = {
  render: (args) => <Interactive {...args} />,
  args: { label: 'Required field', checked: false, error: true },
};

export const ToggleInteraction = {
  render: (args) => <Interactive {...args} />,
  args: { label: 'Accepter les conditions', checked: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(canvas.getByText('Accepter les conditions'));
    await expect(checkbox).toBeChecked();
    await userEvent.click(canvas.getByText('Accepter les conditions'));
    await expect(checkbox).not.toBeChecked();
  },
};

export const Group = {
  render: () => {
    const [values, setValues] = useState({ a: true, b: false, c: false });
    const toggle = (key) => setValues((v) => ({ ...v, [key]: !v[key] }));
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox label="Option A" checked={values.a} onChange={() => toggle('a')} />
        <Checkbox label="Option B" checked={values.b} onChange={() => toggle('b')} />
        <Checkbox label="Option C" checked={values.c} onChange={() => toggle('c')} />
        <Checkbox label="Option D (disabled)" checked={false} disabled />
        <Checkbox label="Option E (error)" checked={false} error />
      </div>
    );
  },
};
