import { Alert } from './Alert';

export default {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Feedback banner avec badge pill coloré (dot + label) et zone de contenu. Quatre types sémantiques : success, error, warning, info.',
      },
    },
  },
  argTypes: {
    type: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
    title: { control: 'text' },
    message: { control: 'text' },
  },
  tags: ['autodocs'],
};

export const Success = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Your changes have been saved.',
  },
};

export const Error = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please review your information.',
  },
};

export const Info = {
  args: {
    type: 'info',
    title: 'Info',
    message: 'Your session will expire in 5 minutes.',
  },
};

export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <Alert type="success" title="Success" message="Your changes have been saved." />
      <Alert type="error" title="Error" message="Something went wrong. Please try again." />
      <Alert type="warning" title="Warning" message="Please review your information." />
      <Alert type="info" title="Info" message="Your session will expire in 5 minutes." />
    </div>
  ),
};
