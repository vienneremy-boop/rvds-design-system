import { within, userEvent, expect, fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Action principale ou secondaire. 3 variants × 3 tailles. Primary = violet #5A14BF. Secondary = fond off-white + bordure violet. Tertiary = ghost.',
      },
    },
  },
  argTypes: {
    variant:      { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size:         { control: 'select', options: ['large', 'medium', 'small'] },
    label:        { control: 'text' },
    disabled:     { control: 'boolean' },
    fullWidth:    { control: 'boolean' },
    icon:         { control: 'text' },
    iconPosition: { control: 'select', options: ['left', 'right'] },
    onClick:      { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: { label: 'Button', variant: 'primary', size: 'large' },
};

export const Primary = {
  args: { label: 'Get started', variant: 'primary', size: 'large' },
};

export const Secondary = {
  args: { label: 'Learn more', variant: 'secondary', size: 'large' },
};

export const Tertiary = {
  args: { label: 'Cancel', variant: 'tertiary', size: 'large' },
};

export const Disabled = {
  args: { label: 'Unavailable', variant: 'primary', size: 'large', disabled: true },
};

export const WithIcon = {
  args: { label: 'Continue', variant: 'primary', size: 'large', icon: '→', iconPosition: 'right' },
};

export const FullWidth = {
  args: { label: 'Submit', variant: 'primary', size: 'large', fullWidth: true },
};

export const ClickInteraction = {
  args: { label: 'Confirmer', variant: 'primary', size: 'large', onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: /confirmer/i });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const DisabledDoesNotFire = {
  args: { label: 'Indisponible', variant: 'primary', size: 'large', disabled: true, onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: /indisponible/i });
    await userEvent.click(btn);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {['large', 'medium', 'small'].map((size) => (
        <div key={size} style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', width: '52px', textTransform: 'uppercase' }}>{size}</span>
          <Button label="Primary"   variant="primary"   size={size} />
          <Button label="Secondary" variant="secondary" size={size} />
          <Button label="Tertiary"  variant="tertiary"  size={size} />
        </div>
      ))}
    </div>
  ),
};
