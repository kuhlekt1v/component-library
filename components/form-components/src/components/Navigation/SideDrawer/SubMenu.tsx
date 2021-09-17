import React from 'react';
import { NavLinkLt } from '../../../Styles/StyledComponents';

type Props = {
  key: number;
  text: string;
  path: string;
};

export const SubMenu = ({ key, text, path }: Props) => {
  return (
    <li key={key} className="drawer-container">
      <NavLinkLt to={path} className="drawer-link">
        <span>{text}</span>
      </NavLinkLt>
    </li>
  );
};
