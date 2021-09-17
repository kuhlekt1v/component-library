import React from 'react';
import { SubMenu } from './SubMenu';
import { MenuData } from './MenuData';
import { MenuItem } from './MenuItem';

export const NavMenu = () => {
  return (
    <>
      {MenuData.map((navItem, navIndex) => {
        if (navItem.subMenu !== undefined) {
          return (
            <>
              <MenuItem key={navIndex} text={navItem.text} iconvar={navItem.icon} />
              {navItem.subMenu.map((subItem, subIndex) => {
                return <SubMenu key={subIndex} text={subItem.text} path={subItem.path} />;
              })}
            </>
          );
        } else {
          return <MenuItem key={navIndex} text={navItem.text} iconvar={navItem.icon} />;
        }
      })}
    </>
  );
};
