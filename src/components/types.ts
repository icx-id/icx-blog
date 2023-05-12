export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export type NavbarProps = {
  navbarSolid?: boolean;
  pathname?: string;
};

export type PageContainerProps = {
  navbarOptions: NavbarProps;
};
