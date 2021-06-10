import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Login from './Login';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path={['/users/login', '/users/sign-up']} component={Login} />
          <PrivateRoutes />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
