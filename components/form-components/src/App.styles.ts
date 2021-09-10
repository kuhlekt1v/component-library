import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Constants';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  #root {
    height: 100%;
    background-color: ${COLORS.light};
  }

  html, body {
    height: 100%;
  }
  /* Text */
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 66px;
    letter-spacing: 1px;
  }

  h2 {

    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 1px;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;
    letter-spacing: 1px;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }

  .bold {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 34px;
  }

  label {
    color: ${COLORS.title};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 34px;
  }

  /* Text Alignment */
  .center {
    text-align: center;
  }
`;
