import React from 'react';
import IconLogo from '../../Assets/IconLogo';
import { RiMenuFoldLine } from 'react-icons/ri';
import { NavLinkLt } from '../../Styles/StyledComponents';

import '../SideDrawer/SideDrawer.css';
import { Subtitle, Title } from '../../Styles/StyledComponents';
import { MenuItem } from './MenuItem';

// import { SidebarData } from './SidebarData';
// import { Submenu } from './Submenu';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ handleDrawerOpen }: Props) => {
  const closeDrawerHandler = () => handleDrawerOpen(false);

  return (
    <nav className="side-drawer">
      <ul className="drawer-content">
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
        <MenuItem handleDrawerOpen={closeDrawerHandler} />
      </ul>
    </nav>
  );
};

export default Sidebar;
