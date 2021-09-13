import { COLORS } from '../../Styles/Constants';
import { StyleSheet } from 'aphrodite';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  navMenu: {
    backgroundColor: `${COLORS.blue}`,
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginRight: '2rem',
    paddingRight: '16px',
    position: 'fixed',
    top: 0,
    left: '-100%',
    transition: '850ms',
  },
  active: {
    left: 0,
    transition: '350ms',
  },
  navText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '60px',
    padding: '8px 0px 8px 16px',
    listStyle: 'none',
  },
  navMenuItems: {
    width: '100%',
  },
  navBarToggle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '80px',
  },
});

const TitleText = styled.p`
  color: ${COLORS.white};
  font-style: normal;
  line-height: 24px;
  margin-left: 12px;
  white-space: nowrap;
`;

export const Title = styled(TitleText)`
  font-weight: bold;
  font-size: 19px;
  letter-spacing: 0.4px;
`;

export const Subtitle = styled(TitleText)`
  font-weight: 300;
  font-size: 14px;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: '850ms';
`;

export const NavMenu = styled(Menu)`
  background-color: ${COLORS.blue};
  left: -100%;
`;

export const NavLink = styled(Link)`
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 18px;
  display: flex;
  opacity: 0.5;
  width: 95%;
  padding: 0 16px;

  &:hover {
    opacity: 1;
  }
`;

export const HideMenuIcon = styled(Link)`
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  opacity: 0.5;
  margin-left: 2rem;

  &:hover {
    opacity: 1;
  }
`;

export const ShowMenuIcon = styled(HideMenuIcon)`
  color: ${COLORS.dark};
  position: fixed;
  opacity: 1;

  &:hover {
    color: ${COLORS.primarylt};
  }
`;
