import { Icon, ICON_NAMES } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          '60+ icônes SVG issues de la page Atoms/Icons du Figma. Stroke par défaut, currentColor, size configurable. Utiliser `name` pour choisir l\'icône.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
    },
    size: { control: 'number' },
  },
  tags: ['autodocs'],
};

export const Default = {
  args: { name: 'ChevronRight', size: 24 },
};

export const Large = {
  args: { name: 'Sparkles', size: 48 },
};

export const AllIcons = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
        gap: '16px',
        padding: '16px',
      }}
    >
      {ICON_NAMES.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Icon name={name} size={24} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--color-text-secondary)',
              textAlign: 'center',
              wordBreak: 'break-word',
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
