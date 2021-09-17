import React from 'react';
import { IconType } from 'react-icons/lib';
import { RiHome3Fill, RiClipboardFill, RiUserAddFill, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

interface ISideBarItem {
  text: string;
  path: string;
  icon?: IconType;
  iconClosed: IconType;
  iconOpen: IconType;
  subMenu?: {
    title: string;
    path: string;
  }[];
}

export const SidebarData: ISideBarItem[] = [
  {
    text: 'Home',
    path: '/',
    iconClosed: RiArrowDownSFill,
    iconOpen: RiArrowUpSFill,
  },
  {
    text: 'Register',
    path: '/register',
    icon: RiUserAddFill,
    iconClosed: RiArrowDownSFill,
    iconOpen: RiArrowUpSFill,
  },
  {
    text: 'Sample Forms',
    path: '/form-banner',
    icon: RiClipboardFill,
    iconClosed: RiArrowDownSFill,
    iconOpen: RiArrowUpSFill,
    subMenu: [
      { title: 'Inline', path: '/form-banner' },
      { title: 'Register', path: '/register' },
      { title: 'Login', path: '/login' },
    ],
  },
];
