import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from './logic/sessions';

const PrivateRoute = () => {
  const authorized = isLoggedIn();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route exact path="/"><div>Tracking App</div></Route>
      </>
    );
  } else {
    routes = <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    routes
  );
};

export default PrivateRoute;
