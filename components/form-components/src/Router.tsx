import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { RegisterPage } from './Pages/RegisterPage';

import { BannerForm } from './components/Forms/Banner/BannerForm';

import { NotFoundPage } from './Pages/NotFoundPage';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { LoginPage } from './Pages/LoginPage';

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
      <Toolbar handleDrawerOpen={setDrawerOpen} />
      {sideDrawer}
      {backDrop}
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/form-banner" component={BannerForm} />
        <Route path="/notfound" component={NotFoundPage} />
        {/* Redirect to not found page. */}
        <Route component={() => <Redirect to="/notfound" />} />
      </Switch>
    </BrowserRouter>
  );
};
