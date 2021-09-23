import React from 'react';
import { NavLinkLt } from '../../../Styles/StyledComponents';

import './SideDrawer.css';

type Props = {
  id: number;
  text: string;
  path: string;
};

export const SubMenu = ({ id, text, path }: Props) => {
  return (
    <li key={id} className="drawer-container">
      <NavLinkLt to={path} className="drawer-link">
        <div className="link-item link-icon"></div>
        <span className="link-item">{text}</span>
      </NavLinkLt>
    </li>
  );
};
