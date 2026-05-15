import Avatar from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" initials="RV" />
      <Avatar size="s" initials="RV" />
      <Avatar size="m" initials="RV" />
      <Avatar size="l" initials="RV" />
      <Avatar size="xl" initials="RV" />
    </div>
  ),
};

export const WithImage = {
  args: {
    src: 'https://i.pravatar.cc/150?img=32',
    alt: 'User avatar',
    size: 'm',
  },
};

export const XL = {
  args: {
    initials: 'RV',
    size: 'xl',
  },
};

export const S = {
  args: {
    initials: 'AB',
    size: 's',
  },
};
