import React, { useState } from 'react';
import IconLogo from '../../Assets/IconLogo';
import { RiMenuFill, RiMenuFoldLine } from 'react-icons/ri';
import { css } from 'aphrodite';
import { styles, NavLink, ShowMenuIcon, HideMenuIcon, Title, Subtitle } from './Sidebar.Style';
import { SidebarData } from './SidebarData';

export const SideBar = () => {
  //REF: https:www.youtube.com/watch?v=CXa0f4-dWi4

  const [sidebar, setSidebar] = useState(false);

  const handleShowSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <ShowMenuIcon to="#" className={css(styles.navBarToggle)}>
        <RiMenuFill onClick={handleShowSidebar} />
      </ShowMenuIcon>

      <nav className={sidebar ? css([styles.navMenu, styles.active]) : css(styles.navMenu)}>
        <ul className={css(styles.navMenuItems)}>
          <li className={css(styles.navBarToggle)}>
            <div style={{ marginLeft: '2rem', scale: '80%' }}>
              <IconLogo />
            </div>

            <div>
              <Title>React</Title>
              <Subtitle>Component Library</Subtitle>
            </div>
            <HideMenuIcon to="#">
              <RiMenuFoldLine onClick={handleShowSidebar} />
            </HideMenuIcon>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={css(styles.navText)}>
                <NavLink to={item.path}>
                  <item.icon size={24} />
                  <span style={{ paddingLeft: '16px' }}>{item.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
