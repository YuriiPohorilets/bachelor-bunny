import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/icons';
import { SocialItemType } from '@/types/social';

const socialList: SocialItemType[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    Icon: FacebookIcon,
    href: 'https://www.facebook.com/Bachelorbunny',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/bachelorbunny',
  },
  {
    id: 'youtube',
    label: 'Youtube',
    Icon: YoutubeIcon,
    href: 'https://www.youtube.com/@SophiSummers',
  },
];

export { socialList };
