import React from 'react';

import { GlobalStyle } from './App.styles';
import { SideBar } from './Pages/Navigation/SideBar';
import { Router } from './Router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
