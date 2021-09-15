import React from 'react';
import IconLogo from '../../Assets/IconLogo';
import { RiMenuFoldLine } from 'react-icons/ri';
import { SideDrawerData } from './SideDrawerData';
import { NavLinkLt } from '../../Styles/StyledComponents';

import './SideDrawer.css';
import { Subtitle, Title } from '../../Styles/StyledComponents';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideDrawer = ({ handleDrawerOpen }: Props) => {
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
        {SideDrawerData.map((item, index) => {
          return (
            <li key={index} className="drawer-container">
              <NavLinkLt to={item.path} className="drawer-link" onClick={closeDrawerHandler}>
                <item.icon size={24} />
                <span>{item.text}</span>
              </NavLinkLt>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideDrawer;
