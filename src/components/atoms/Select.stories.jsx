import Select from './Select';

const sampleOptions = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
];

export default {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

export const Default = {
  args: {
    placeholder: 'Select a role',
  },
};

export const WithOptions = {
  args: {
    label: 'Department',
    options: sampleOptions,
    placeholder: 'Choose a department',
    helperText: 'Select your team.',
  },
};

export const Filled = {
  args: {
    label: 'Department',
    options: sampleOptions,
    value: 'design',
    state: 'filled',
  },
};

export const Error = {
  args: {
    label: 'Department',
    options: sampleOptions,
    state: 'error',
    errorText: 'Please select a department.',
  },
};

export const Disabled = {
  args: {
    label: 'Department',
    options: sampleOptions,
    value: 'design',
    state: 'disabled',
  },
};
