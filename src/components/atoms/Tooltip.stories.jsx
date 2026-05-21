import Tooltip from './Tooltip';
import Button from './Button';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const Top = {
  render: () => (
    <Tooltip content="This is a tooltip" position="top">
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', cursor: 'default' }}>
        Hover me (top)
      </span>
    </Tooltip>
  ),
};

export const Bottom = {
  render: () => (
    <Tooltip content="Tooltip below" position="bottom">
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', cursor: 'default' }}>
        Hover me (bottom)
      </span>
    </Tooltip>
  ),
};

export const WithButton = {
  render: () => (
    <Tooltip content="Click to submit" position="top">
      <Button label="Submit" variant="primary" size="medium" />
    </Tooltip>
  ),
};
