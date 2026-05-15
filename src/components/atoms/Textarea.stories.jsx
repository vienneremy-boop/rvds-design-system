import Textarea from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

export const Default = {
  args: {
    label: 'Message',
    placeholder: 'Write your message…',
  },
};

export const Filled = {
  args: {
    label: 'Bio',
    value: 'Product designer with 5 years of experience in UX and design systems.',
    state: 'filled',
  },
};

export const Error = {
  args: {
    label: 'Description',
    value: 'Too short',
    state: 'error',
    errorText: 'Description must be at least 50 characters.',
  },
};

export const Disabled = {
  args: {
    label: 'Notes',
    value: 'Read-only content here.',
    state: 'disabled',
  },
};
