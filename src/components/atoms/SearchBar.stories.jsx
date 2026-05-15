import SearchBar from './SearchBar';

export default {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
    onClear:  { control: false },
  },
};

export const Default = {
  args: {
    placeholder: 'Search components…',
    value: '',
  },
};

export const Filled = {
  args: {
    placeholder: 'Search components…',
    value: 'Button',
    state: 'filled',
  },
};

export const Disabled = {
  args: {
    placeholder: 'Search disabled',
    value: '',
    state: 'disabled',
  },
};
