import { Logo } from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  args: { variant: 'compact', height: 40 },
  argTypes: { variant: { control: 'inline-radio', options: ['compact', 'full', 'picto'] } },
};

export const Compact = {};
export const Complet = { args: { variant: 'full', height: 96 } };
export const Picto = { args: { variant: 'picto', height: 64 } };
export const SurBleu = {
  args: { variant: 'full', height: 96 },
  decorators: [(Story) => (
    <div style={{ background: '#0C364E', color: '#F2F2EE', padding: 32, display: 'inline-block', '--rv-logo-point': '#D7FC41' }}>
      <Story />
    </div>
  )],
};
