import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLinkLt } from '../../../Styles/StyledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import './SideDrawer.css';

type Props = {
  key: number;
  text: string;
  path: string;
  submenu: boolean;
  iconvar?: IconProp;
  handleSubmenuOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export const MenuItem = ({ key, path, text, submenu, iconvar, handleSubmenuOpen }: Props) => {
  //const closeDrawerHandler = () => handleDrawerOpen(false);
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

  let itemIcon;

  if (iconvar !== undefined) itemIcon = <FontAwesomeIcon icon={iconvar} />;

  return (
    <li key={key} className="drawer-container">
      <NavLinkLt
        to={path}
        className="drawer-link"
        onClick={() => {
          openSubmenuHandler();
          //closeDrawerHandler();
        }}
      >
        <div className={'link-item link-icon ' + ({ itemIcon } === undefined ? 'icon-spacer' : null)}>{itemIcon}</div>
        <span className="link-item">{text}</span>
        <div>{submenu && <FontAwesomeIcon icon={submenuOpen ? faSortUp : faSortDown} />}</div>
      </NavLinkLt>
    </li>
  );
};
