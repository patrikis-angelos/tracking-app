import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <PrivateRoute />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
