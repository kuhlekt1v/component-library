import React, { useState } from 'react';
import IconLogo from '../../Assets/IconLogo';
import { RiMenuFill, RiMenuFoldLine } from 'react-icons/ri';
import { StyleSheet, css } from 'aphrodite';
import { COLORS } from '../../Constants';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

export const SideBar = () => {
  const styles = StyleSheet.create({
    navbar: {
      backgroundColor: `${COLORS.blue}`,
      color: `${COLORS.white}`,
      height: '80px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    menuBars: {
      marginLeft: '2rem',
      fontSize: '2rem',
      background: 'none',
    },

    title: {
      color: `${COLORS.white}`,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 19,
      lineHeight: '24px',
      letterSpacing: '0.4px',
      marginLeft: 12,
    },

    subTitle: {
      color: `${COLORS.white}`,
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.4px',
      marginLeft: 12,
    },
  });

  // REF: https://www.youtube.com/watch?v=CXa0f4-dWi4

  const [sidebar, setSidebar] = useState(false);

  const handleShowSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={css(styles.navbar)}>
        <Link to="#" className={css(styles.menuBars)}>
          <RiMenuFill />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <RiMenuFoldLine onClick={handleShowSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
