export interface HomeSideNav {
  icon?: string;
  svgIcon: string;
  name: string;
  navLink: string;
  items?: {
    name: string;
    navLink?: string;
    children?: {
      name: string;
      navLink: string;
    }[];
  }[];
}
