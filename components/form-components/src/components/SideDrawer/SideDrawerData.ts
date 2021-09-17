import { IconType } from 'react-icons/lib';
import { RiHome3Fill, RiClipboardFill, RiUserAddFill } from 'react-icons/ri';

interface ISideDrawerItem {
  text: string;
  path: string;
  icon?: IconType;
}

export const SideDrawerData: ISideDrawerItem[] = [
  {
    text: 'Home',
    path: '/',
    icon: RiHome3Fill,
  },
  {
    text: 'Register',
    path: '/register',
    icon: RiUserAddFill,
  },
  {
    text: 'Sample Forms',
    path: '/form-banner',
    icon: RiClipboardFill,
  },
];
