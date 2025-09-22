export enum PagePath {
  Home = '/',
  AboutUs = '/about-us',
  GrabAndGo = '/grad-and-go',
  Delivery = '/in-home-executive-delivery',
  CateringAndEvents = '/catering-and-events',
  ContactUs = '/contact-us',
}

export type NavigationItem = {
  id: string;
  label: string;
  href?: string;
  subitems?: NavigationItem[];
};
