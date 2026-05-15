import { useState } from 'react';
import { Radio } from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

export const Default = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? false);
    return <Radio {...args} selected={selected} onChange={() => setSelected(true)} />;
  },
  args: { label: 'Option A', selected: false, name: 'demo', value: 'a' },
};

export const Selected = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? true);
    return <Radio {...args} selected={selected} onChange={() => setSelected(true)} />;
  },
  args: { label: 'Option A', selected: true, name: 'demo', value: 'a' },
};

export const Disabled = {
  args: { label: 'Disabled option', selected: false, disabled: true, name: 'demo', value: 'b' },
};

export const Error = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return <Radio {...args} selected={selected} onChange={() => setSelected(true)} />;
  },
  args: { label: 'Required selection', selected: false, error: true, name: 'demo', value: 'c' },
};

export const RadioGroup = {
  render: () => {
    const [value, setValue] = useState('a');
    const opts = ['Option A', 'Option B', 'Option C'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {opts.map((label, i) => {
          const val = String.fromCharCode(97 + i);
          return (
            <Radio
              key={val}
              label={label}
              selected={value === val}
              onChange={() => setValue(val)}
              name="group"
              value={val}
            />
          );
        })}
        <Radio label="Option D (disabled)" selected={false} disabled name="group" value="d" />
      </div>
    );
  },
};
