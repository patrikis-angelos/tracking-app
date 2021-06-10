import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/users/login', '/users/sign-up']} component={Login} />
        <PrivateRoute />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
