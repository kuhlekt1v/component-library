import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLinkLt } from '../../../Styles/StyledComponents';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  key: number;
  text: string;
  iconvar?: IconProp;
};

export const MenuItem = ({ key, text, iconvar }: Props) => {
  /* Enables possibility of not using icons,
   * but margin will be off unless adjusted.
   */

  let itemIcon;
  if (iconvar !== undefined) {
    itemIcon = <FontAwesomeIcon icon={iconvar} />;
  }

  return (
    <li key={key} className="drawer-container">
      <NavLinkLt to="#" className="drawer-link">
        {itemIcon}
        <span>{text}</span>
      </NavLinkLt>
    </li>
  );
};
