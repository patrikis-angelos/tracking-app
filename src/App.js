import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={SignUp} />
        <PrivateRoute />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
