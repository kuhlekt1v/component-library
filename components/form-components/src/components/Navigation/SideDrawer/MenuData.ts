import { IconType } from 'react-icons/lib';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClipboard, faHome } from '@fortawesome/free-solid-svg-icons';

interface IMenuItem {
  id: number;
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
    id: 1,
    text: 'Home',
    path: '/',
    icon: faHome,
  },
  {
    id: 2,
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
