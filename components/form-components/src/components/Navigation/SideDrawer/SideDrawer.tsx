import React, { useState } from 'react';
import IconLogo from '../../../Assets/IconLogo';
import { RiMenuFoldLine } from 'react-icons/ri';
import { Title, Subtitle, NavLinkLt } from '../../../Styles/StyledComponents';

// https://stackoverflow.com/questions/61481948/react-typescript-how-get-onclick-prop-from-child-to-parent

import './SideDrawer.css';
import { NavMenu } from './NavMenu';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideDrawer = ({ handleDrawerOpen }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const closeDrawerHandler = () => handleDrawerOpen(false);

  let navmenu;

  if (drawerOpen) {
    navmenu = (
      <NavMenu
        handleDrawerOpen={() => {
          setDrawerOpen(false);
          closeDrawerHandler();
        }}
      />
    );
  }

  return (
    <nav className="side-drawer">
      <ul className="drawer-content">
        {/* Header content area. */}
        <li className="drawer-header">
          <div>
            <IconLogo width="40" height="40" />
          </div>
          <div>
            <Title>React</Title>
            <Subtitle>Component Library</Subtitle>
          </div>
          <NavLinkLt to="/" className="drawer-close-icon">
            <RiMenuFoldLine size={32} onClick={closeDrawerHandler} />
          </NavLinkLt>
        </li>
        <hr className="drawer-divider" />
        {/* Navigation menu content area. */}
        {navmenu}
      </ul>
    </nav>
  );
};
