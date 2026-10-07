import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      // Le thème est aussi posé sur <html> : body, modales et portails suivent le mode sombre.
      if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', theme);
      return (
        <div
          data-theme={theme}
          style={{
            backgroundColor: 'var(--color-surface-page)',
            color: 'var(--color-text-primary)',
            minHeight: '100vh',
            padding: '32px',
            transition: 'background-color 200ms ease',
          }}
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: undefined,
    },
    backgrounds: { disable: true },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
