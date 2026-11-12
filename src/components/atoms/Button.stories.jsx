import { within, userEvent, expect, fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Action principale ou secondaire. 3 variants × 3 tailles. Primary = turquoise #07786A, texte blanc (lime en dark). Secondary = contour bleu, fond blanc. Tertiary = ghost. Primary et Secondary portent la coupe du point (coin bas-droit, 60°). Option `arrow` : flèche à droite du libellé.\n\n**Motion (survol et focus clavier).** Primary et Secondary : la couleur de survol balaie le bouton depuis la gauche, en diagonale à 60°, l’angle de la coupe du point. La flèche sort à droite et une seconde flèche revient par la gauche. Durée et courbe : token `--motion-sweep` (500 ms, sortie expo `cubic-bezier(0.16, 1, 0.3, 1)`), ramené à 0 ms sous `prefers-reduced-motion`. Tertiary : simple changement de fond. Pas d’effet magnétique ni de rebond : le bouton reste là où on l’attend.',
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

export const WithArrow = {
  args: { label: 'Voir mes études de cas', variant: 'primary', size: 'large', arrow: true },
};

export const SecondaryWithArrow = {
  args: { label: 'Me contacter', variant: 'secondary', size: 'large', arrow: true },
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

/* Motion : survolez ou tabulez sur chaque bouton pour voir le balayage à 60° et la flèche qui boucle */
export const Motion = {
  name: 'Motion (survol et focus)',
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" size="large" label="Voir mes études de cas" arrow />
      <Button variant="secondary" size="large" label="Me contacter" />
      <Button variant="secondary" size="medium" label="En parler" arrow />
      <Button variant="tertiary" size="medium" label="Annuler" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Survol ou focus clavier : balayage de la couleur de survol en diagonale à 60° (token `--motion-sweep`), flèche qui sort à droite et revient par la gauche. Instantané si l’utilisateur réduit les animations.',
      },
    },
  },
};
