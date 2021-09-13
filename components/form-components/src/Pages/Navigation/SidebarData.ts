import { IconType } from 'react-icons/lib';
import { RiHome3Fill, RiClipboardFill, RiUserAddFill } from 'react-icons/ri';

interface ISideBarItem {
  text: string;
  path: string;
  icon: IconType;
}

export const SidebarData: ISideBarItem[] = [
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
    text: 'Form Banner',
    path: '/form-banner',
    icon: RiClipboardFill,
  },
];
