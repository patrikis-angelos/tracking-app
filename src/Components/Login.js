import { Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../logic/sessions';
import { saveToken } from '../logic/storage';

const Login = () => {
  const [redirect, setRedirect] = useState();

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const signUp = path !== 'login';
  const submitValue = signUp ? 'Sign Up' : 'Login';
  const endpoint = signUp ? 'users' : 'login';
  const validatePassword = signUp ? <input id="rPassword" type="password" placeholder="reapeat password" /> : <div />;
  const link = signUp ? <a href="/users/login">Login</a> : <a href="/users/sign-up">Sign Up</a>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    const rPassword = e.target.parentElement[2].value;
    if (signUp && password !== rPassword) return;
    const response = await login(name, password, endpoint);
    if (response.token) {
      saveToken(response.token);
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } else {
      // display error message
    }
  };

  return (
    <div className="login">
      {redirect}
      <form>
        <input id="name" type="text" placeholder="username" />
        <input id="password" type="password" placeholder="password" />
        {validatePassword}
        <input type="submit" value={submitValue} onClick={(e) => handleSubmit(e)} />
      </form>
      <p>or </p>
      {link}
    </div>
  );
};

export default Login;
