import { Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../logic/sessions';
import { saveToken } from '../logic/storage';

const Login = () => {
  const [redirect, setRedirect] = useState();
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const signUp = path !== 'login';
  const submitValue = path === 'login' ? 'Login' : 'Sign Up';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    const rPassword = e.target.parentElement[2].value;
    if (signUp && password !== rPassword) return;
    let endpoint = 'login';
    if (signUp) endpoint = 'users';
    const response = await login(name, password, endpoint);
    if (response.token) {
      saveToken(response.token);
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } else {
      // display error message
    }
  };

  const validatePassword = signUp ? <input id="rPassword" type="password" placeholder="reapeat password" /> : <div />;

  return (
    <>
      {redirect}
      <form>
        <input id="name" type="text" placeholder="username" />
        <input id="password" type="password" placeholder="password" />
        {validatePassword}
        <input type="submit" value={submitValue} onClick={(e) => handleSubmit(e)} />
      </form>
    </>
  );
};

export default Login;
