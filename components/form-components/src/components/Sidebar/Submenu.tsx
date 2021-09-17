import React from 'react';
import { SidebarData } from './SidebarData';
import { NavLinkLt } from '../../Styles/StyledComponents';

type Props = {
  handleSubmenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Submenu = ({ handleSubmenuOpen }: Props) => {
  const submenuHandler = () => handleSubmenuOpen(true);

  return (
    <>
      {SidebarData.map((item) => {
        if (item.subMenu !== undefined) {
          return item.subMenu.map((item, index) => {
            return (
              <li key={index} className="drawer-container">
                <NavLinkLt
                  to={item.path}
                  className="drawer-link"
                  style={{ marginLeft: '17px' }}
                  onClick={submenuHandler}
                >
                  <span style={{ paddingLeft: '24px', marginBottom: '10px' }}>{item.title}</span>
                </NavLinkLt>
              </li>
            );
          });
        }
      })}
    </>
  );
};
