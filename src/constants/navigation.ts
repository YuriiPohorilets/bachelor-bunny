import { NavigationItemType, PagePath } from '@/types/navigation';

const navigation: NavigationItemType[] = [
  { id: 'nav-01', label: 'Home', href: PagePath.Home },
  { id: 'nav-02', label: 'About us', href: PagePath.AboutUs },
  {
    id: 'nav-03',
    label: 'Services',
    subitems: [
      { id: 'nav-04', label: 'Grab & Go', href: PagePath.GrabAndGo },
      { id: 'nav-05', label: 'In-Home Executive Delivery', href: PagePath.Delivery },
      { id: 'nav-06', label: 'Catering & Events', href: PagePath.CateringAndEvents },
    ],
  },
  { id: 'nav-07', label: 'Contact us', href: PagePath.ContactUs },
];

const footerNavigation: NavigationItemType[] = [
  { id: 'nav-footer-01', label: 'Home', href: PagePath.Home },
  { id: 'nav-footer-02', label: 'Grab & Go', href: PagePath.GrabAndGo },
  { id: 'nav-footer-03', label: 'About us', href: PagePath.AboutUs },
  { id: 'nav-footer-04', label: 'In-Home Executive Delivery', href: PagePath.Delivery },
  { id: 'nav-footer-05', label: 'Contact us', href: PagePath.ContactUs },
  { id: 'nav-footer-06', label: 'Catering & Events', href: PagePath.CateringAndEvents },
];

export { navigation, footerNavigation };
