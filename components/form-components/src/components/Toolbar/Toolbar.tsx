import React from 'react';
import { NavLinkLt } from '../../Styles/StyledComponents';
import { RiMenuFill } from 'react-icons/ri';
import IconLogo from '../../Assets/IconLogo';
import './Toolbar.css';
import { Link } from 'react-router-dom';

type Props = {
  handleDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toolbar = ({ handleDrawerOpen }: Props) => {
  const openDrawerHandler = () => handleDrawerOpen(true);

  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        {/* Hamburger icon. */}
        <div>
          <RiMenuFill size={28} className="drawer-open-icon" onClick={openDrawerHandler} />
        </div>
        {/* Company logo. */}
        <div className="toolbar-logo">
          <a href="/">
            <IconLogo width="35" height="35" />
          </a>
        </div>
        <div className="spacer" />
        {/* Navigation items. */}
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <Link to="/" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
