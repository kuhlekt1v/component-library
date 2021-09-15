import React from 'react';
import { Link } from 'react-router-dom';
import { CenterContainer, PrimaryButton } from '../../../Styles/StyledComponents';
import img from '../../../Assets/404-Logo.png';

import './NotFound.css';

export const NotFound = () => {
  return (
    <CenterContainer>
      <div className="container">
        <img src={img} alt="404 page not found." />
        <h3>Page not found.</h3>
        <p>The page you are looking for might have been removed.</p>
        <Link to="/">
          <PrimaryButton>Return to home</PrimaryButton>
        </Link>
      </div>
    </CenterContainer>
  );
};
