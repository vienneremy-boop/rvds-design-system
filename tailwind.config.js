/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          page: 'var(--color-surface-page)',
          raised: 'var(--color-surface-raised)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)',
          disabled: 'var(--color-text-disabled)',
        },
        action: {
          primary: 'var(--color-action-primary)',
          'primary-hover': 'var(--color-action-primary-hover)',
          deep: 'var(--color-action-deep)',
          'deep-hover': 'var(--color-action-deep-hover)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
        body: ['var(--font-body)'],
      },
      borderRadius: {
        btn: 'var(--radius-btn)',
        card: 'var(--radius-card)',
        default: 'var(--radius-default)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        modal: 'var(--shadow-modal)',
      },
    },
  },
  plugins: [],
};
