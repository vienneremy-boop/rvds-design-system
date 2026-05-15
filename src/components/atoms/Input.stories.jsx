import { within, userEvent, expect } from 'storybook/test';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
  },
};

export const Default = {
  args: {
    placeholder: 'Enter text…',
  },
};

export const WithLabel = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
    helperText: 'We will never share your email.',
  },
};

export const Filled = {
  args: {
    label: 'Username',
    value: 'remyvienne',
    state: 'filled',
  },
};

export const Error = {
  args: {
    label: 'Password',
    type: 'password',
    value: '123',
    state: 'error',
    errorText: 'Password must be at least 8 characters.',
  },
};

export const Disabled = {
  args: {
    label: 'Username',
    value: 'remyvienne',
    state: 'disabled',
  },
};

export const TypeInteraction = {
  args: { label: 'Email', placeholder: 'you@example.com', type: 'email' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.click(input);
    await userEvent.type(input, 'studio@remyvienne.fr');
    await expect(input).toHaveValue('studio@remyvienne.fr');
  },
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '360px' }}>
      <Input label="Default" placeholder="Default state" state="default" />
      <Input label="Filled" value="remyvienne" state="filled" />
      <Input label="Error" value="bad input" state="error" errorText="This field is required." />
      <Input label="Disabled" value="disabled value" state="disabled" />
    </div>
  ),
};
