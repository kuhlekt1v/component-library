import { IconType } from 'react-icons/lib';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClipboard, faCheckSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import { RiClipboardFill, RiUserAddFill, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

interface IMenuItem {
  text: string;
  path: string;
  icon?: IconProp;
  subMenu?: {
    text: string;
    path: string;
  }[];
}

export const MenuData: IMenuItem[] = [
  {
    text: 'Home',
    path: '/',
    icon: faHome,
  },
  {
    text: 'Sample',
    path: '#',
    icon: faClipboard,
    subMenu: [
      { text: 'Inline', path: '/form-banner' },
      { text: 'Register', path: '/register' },
      { text: 'Login', path: '/login' },
    ],
  },
];
