import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLinkLt } from '../../../Styles/StyledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import './SideDrawer.css';

type Props = {
  key: number;
  text: string;
  submenu: boolean;
  iconvar?: IconProp;
  handleSubmenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuItem = ({ key, text, submenu, iconvar, handleSubmenuOpen }: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState<boolean>(false);

  const openSubmenuHandler = () => {
    if (!submenuOpen) {
      handleSubmenuOpen(true);
      setSubmenuOpen(true);
    } else {
      handleSubmenuOpen(false);
      setSubmenuOpen(false);
    }
  };

  let itemIcon;

  if (iconvar !== undefined) itemIcon = <FontAwesomeIcon icon={iconvar} />;

  return (
    <li key={key} className="drawer-container">
      <NavLinkLt to="#" className="drawer-link" onClick={openSubmenuHandler}>
        <div className={'link-item link-icon ' + ({ itemIcon } === undefined ? 'icon-spacer' : null)}>{itemIcon}</div>
        <span className="link-item">{text}</span>
        <div>{submenu && <FontAwesomeIcon icon={submenuOpen ? faSortUp : faSortDown} />}</div>
      </NavLinkLt>
    </li>
  );
};
