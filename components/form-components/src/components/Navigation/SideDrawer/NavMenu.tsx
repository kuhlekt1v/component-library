import React, { useState } from 'react';
import { SubMenu } from './SubMenu';
import { MenuData } from './MenuData';
import { MenuItem } from './MenuItem';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavMenu = ({ handleDrawerOpen }: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
    handleDrawerOpen(false);
  };

  return (
    <>
      {MenuData.map((navItem) => {
        if (navItem.subMenu !== undefined) {
          return (
            <>
              <li onClick={closeDrawerHandler}>close-test</li>
              <MenuItem
                id={navItem.id}
                path={navItem.path}
                text={navItem.text}
                iconvar={navItem.icon}
                handleDrawerOpen={setDrawerOpen}
                handleSubmenuOpen={setSubmenuOpen}
                submenu={true}
              />

              {navItem.subMenu.map((subItem, subIndex) => {
                let submenu;
                if (submenuOpen) {
                  submenu = <SubMenu id={subIndex} text={subItem.text} path={subItem.path} />;
                }
                return submenu;
              })}
            </>
          );
        } else {
          return (
            <MenuItem
              id={navItem.id}
              path={navItem.path}
              text={navItem.text}
              iconvar={navItem.icon}
              submenu={false}
              handleDrawerOpen={setDrawerOpen}
            />
          );
        }
      })}
    </>
  );
};
