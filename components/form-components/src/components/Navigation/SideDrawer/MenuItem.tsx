import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLinkLt } from '../../../Styles/StyledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import './SideDrawer.css';

type Props = {
  id: number;
  text: string;
  path: string;
  submenu: boolean;
  iconvar?: IconProp;
  handleSubmenuOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  handleDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuItem = ({ id, path, text, submenu, iconvar, handleSubmenuOpen, handleDrawerOpen }: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const openSubmenuHandler = () => {
    if (handleSubmenuOpen !== undefined && !submenuOpen) {
      handleSubmenuOpen(true);
      setSubmenuOpen(true);
    } else if (handleSubmenuOpen !== undefined && submenuOpen) {
      handleSubmenuOpen(false);
      setSubmenuOpen(false);
    }
  };

  const closeDrawerHandler = () => {
    if (handleDrawerOpen !== undefined) {
      handleDrawerOpen(false);
    }
  };

  let itemIcon;
  if (iconvar !== undefined) itemIcon = <FontAwesomeIcon icon={iconvar} />;

  return (
    <li key={id} className="drawer-container">
      <NavLinkLt
        to={path}
        className="drawer-link"
        onClick={() => {
          openSubmenuHandler();
          closeDrawerHandler();
        }}
      >
        <div className={'link-item link-icon ' + ({ itemIcon } === undefined ? 'icon-spacer' : null)}>{itemIcon}</div>
        <span className="link-item">{text}</span>
        <div>{submenu && <FontAwesomeIcon icon={submenuOpen ? faSortUp : faSortDown} />}</div>
      </NavLinkLt>
    </li>
  );
};
