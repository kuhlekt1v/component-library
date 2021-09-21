import React from 'react';
import { NavLinkLt } from '../../../Styles/StyledComponents';

import './SideDrawer.css';

type Props = {
  key: number;
  text: string;
  path: string;
};

export const SubMenu = ({ key, text, path }: Props) => {
  return (
    <li key={key} className="drawer-container">
      <NavLinkLt to={path} className="drawer-link">
        <div className="link-item link-icon"></div>
        <span className="link-item">{text}</span>
      </NavLinkLt>
    </li>
  );
};
