import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { RegisterPage } from './Pages/RegisterPage';

import { FormBanner } from './Pages/Forms/FormBanner';

import { NotFoundPage } from './Pages/NotFoundPage';
import { SideBar } from './Pages/Navigation/SideBar';

export const Router = () => {
  return (
    <BrowserRouter>
      <SideBar />
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
