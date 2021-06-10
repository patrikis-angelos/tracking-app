import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../logic/sessions';
import Home from './Home';
import Add from './Add';
import Progress from './Progress';
import Unit from './Unit';

const PrivateRoutes = () => {
  const authorized = isLoggedIn();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/progress" component={Progress} />
        <Route path="/unit" component={Unit} />
      </>
    );
  } else {
    routes = <Redirect to={{ pathname: '/users/login' }} />;
  }

  return (
    routes
  );
};

export default PrivateRoutes;
