import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { RegisterPage } from './Pages/RegisterPage';

import { FormBanner } from './Pages/Forms/FormBanner';

import { NotFoundPage } from './Pages/NotFoundPage';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
// import { SideBar } from './Pages/Navigation/SideBar';

export const Router = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  let sideDrawer;
  let backDrop;

  if (drawerOpen) {
    sideDrawer = <SideDrawer handleDrawerOpen={setDrawerOpen} />;
    backDrop = <Backdrop />;
  }
  return (
    <BrowserRouter>
      {/* <SideBar /> */}
      <Toolbar handleDrawerOpen={setDrawerOpen} />
      {sideDrawer}
      {backDrop}
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/form-banner" component={FormBanner} />
        <Route path="/notfound" component={NotFoundPage} />
        {/* Page not found. */}
        <Route component={() => <Redirect to="/notfound" />} />
      </Switch>
    </BrowserRouter>
  );
};
