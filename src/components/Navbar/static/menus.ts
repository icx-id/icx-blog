export type NavbarMenu = {
  id: number;
  name: string;
  pathname: string;
};

export const navbarMenus: NavbarMenu[] = [
  {
    id: 1,
    name: 'Sign Up',
    pathname: '/register',
  },
  {
    id: 2,
    name: 'Login',
    pathname: '/login',
  },
  {
    id: 3,
    name: 'About Us',
    pathname: '/about',
  },
];
