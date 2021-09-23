import React from 'react';
import { NavLinkLt } from '../../../Styles/StyledComponents';

import './SideDrawer.css';

type Props = {
  id: number;
  text: string;
  path: string;
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SubMenu = ({ id, text, path, handleDrawerOpen }: Props) => {
  const closeDrawerHandler = () => {
    if (handleDrawerOpen !== undefined) {
      handleDrawerOpen(false);
    }
  };

  return (
    <li key={id} className="drawer-container">
      <NavLinkLt to={path} className="drawer-link" onClick={() => closeDrawerHandler()}>
        <div className="link-item link-icon"></div>
        <span className="link-item">{text}</span>
      </NavLinkLt>
    </li>
  );
};
