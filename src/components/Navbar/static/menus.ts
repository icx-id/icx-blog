export type NavbarMenu = {
  id: number;
  name: string;
  pathname: string;
};

export const navbarMenus: NavbarMenu[] = [
  {
    id: 3,
    name: 'About Us',
    pathname: '/about',
  },
  {
    id: 4,
    name: 'ICX Connect',
    pathname: '/icx-connect',
  },
];
