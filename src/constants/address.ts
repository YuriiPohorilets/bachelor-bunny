import { EnvelopIcon, PhoneIcon } from '@/components/icons';
import { AddressItemType } from '@/types/address';

const addressList: AddressItemType[] = [
  {
    id: 'email',
    label: 'Food@BachelorBunny.com',
    href: 'mailto:food@bachelorbunny.com',
    Icon: EnvelopIcon,
  },
  {
    id: 'phone',
    label: '(866) 698-2607',
    href: 'tel:8666982607',
    Icon: PhoneIcon,
  },
  {
    id: 'fax',
    label: '312.722.2526',
    href: 'tel:3127222526',
  },
];

export { addressList };
