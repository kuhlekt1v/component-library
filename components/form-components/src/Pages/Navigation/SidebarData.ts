interface ISideBarItem {
  text: string;
  cName: string;
  path: string;
}

export const SidebarData: ISideBarItem[] = [
  {
    text: 'Home',
    path: '/',
    cName: 'nav-text',
  },
  {
    text: 'Register',
    path: '/register',
    cName: 'nav-text',
  },
  {
    text: 'FormBanner',
    path: '/form-banner',
    cName: 'nav-text',
  },
];
