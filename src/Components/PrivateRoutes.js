import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../logic/sessions';

const PrivateRoutes = () => {
  const authorized = isLoggedIn();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route exact path="/" />
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
