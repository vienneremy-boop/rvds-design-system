import NavItem from './NavItem';

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 13 5.08C14.09 3.81 15.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 14.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M4 20C4 17 7.58 14 12 14C16.42 14 20 17 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    icon:    { control: false },
    onClick: { control: false },
  },
};

export const Default = {
  args: {
    icon: <HomeIcon />,
    label: 'Home',
    active: false,
  },
};

export const Active = {
  args: {
    icon: <HomeIcon />,
    label: 'Home',
    active: true,
  },
};

export const Row = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'var(--color-surface-raised)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4px',
        width: '360px',
        justifyContent: 'space-around',
      }}
    >
      <NavItem icon={<HomeIcon />} label="Home" active={true} />
      <NavItem icon={<SearchIcon />} label="Search" active={false} />
      <NavItem icon={<HeartIcon />} label="Saved" active={false} />
      <NavItem icon={<ProfileIcon />} label="Profile" active={false} />
    </div>
  ),
};
