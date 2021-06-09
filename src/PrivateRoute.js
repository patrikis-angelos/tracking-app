import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = () => {
  const authorized = false;
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
