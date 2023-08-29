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

export type LineNavigatorProps<T> = {
  data: T[];
  active: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  darkMode?: boolean;
  big?: boolean;
};

interface Testimony {
  author: string;
  authorImage: string;
  company: string;
  description: string;
  image: string;
}

export type TestimonyCarouselprops = {
  description: string;
  author: string;
  company: string;
  testimonies: Testimony[];
  active: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  image: string;
  hideWhatTheySaid?: boolean;
  authorImage?: string;
};
