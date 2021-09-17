import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLinkLt } from '../../Styles/StyledComponents';

import { SidebarData } from './SidebarData';
import { Submenu } from './Submenu';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
  margin-left: 24px;
  opacity: 0.5;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const MenuItem = ({ handleDrawerOpen }: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const closeDrawerHandler = () => handleDrawerOpen(false);
  const submenuHandler = () => {
    setSubmenuOpen(!submenuOpen);
    console.log(submenuOpen);
  };

  return (
    <>
      {SidebarData.map((item, index) => {
        if (item.icon !== undefined) {
          if (item.subMenu !== undefined) {
            // Nav item with submenu.
            return (
              <>
                <li key={index} className="drawer-container">
                  <NavLinkLt
                    to="#"
                    className="drawer-link"
                    style={{ opacity: submenuOpen ? '1' : '0.5' }}
                    onClick={submenuHandler}
                  >
                    <item.icon size={24} />
                    <span>{item.text}</span>
                    {/* Need way to make optional */}
                    {submenuOpen ? (
                      <item.iconOpen size={24} style={{ marginLeft: 'auto' }} />
                    ) : (
                      <item.iconClosed size={24} style={{ marginLeft: 'auto' }} />
                    )}
                  </NavLinkLt>
                </li>
                {submenuOpen && <Submenu handleSubmenuOpen={setSubmenuOpen} />}
              </>
            );
          } else {
            return (
              <li key={index} className="drawer-container">
                <NavLinkLt to={item.path} className="drawer-link" onClick={closeDrawerHandler}>
                  <item.icon size={24} />
                  <span>{item.text}</span>
                </NavLinkLt>
              </li>
            );
          }
        } else {
          return (
            <li key={index} className="drawer-container">
              <NavLinkLt to={item.path} className="drawer-link" onClick={closeDrawerHandler}>
                <span>{item.text}</span>
              </NavLinkLt>
            </li>
          );
        }
      })}
    </>
  );
};
