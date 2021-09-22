import React, { useState } from 'react';
import { SubMenu } from './SubMenu';
import { MenuData } from './MenuData';
import { MenuItem } from './MenuItem';

export const NavMenu = () => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  return (
    <>
      {MenuData.map((navItem) => {
        if (navItem.subMenu !== undefined) {
          return (
            <>
              <MenuItem
                key={navItem.id}
                path={navItem.path}
                text={navItem.text}
                iconvar={navItem.icon}
                handleSubmenuOpen={setSubmenuOpen}
                submenu={true}
              />

              {navItem.subMenu.map((subItem, subIndex) => {
                let submenu;
                if (submenuOpen) {
                  submenu = <SubMenu key={subIndex} text={subItem.text} path={subItem.path} />;
                }
                return submenu;
              })}
            </>
          );
        } else {
          return (
            <MenuItem key={navItem.id} path={navItem.path} text={navItem.text} iconvar={navItem.icon} submenu={false} />
          );
        }
      })}
    </>
  );
};
