import { Redirect } from 'react-router-dom';
import { useState } from 'react'
import { login } from './logic/sessions';
import { saveToken } from './logic/storage';

const SignUp = () => {
  const [redirect, setRedirect] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    const rPassword = e.target.parentElement[2].value;
    if (password !== rPassword) return
    const response = await login(name, password, 'users');
    if (response.token) {
      saveToken(response.token);
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } else {
      console.log(response.error)
    }
  };

  return (
    <>
      {redirect}
      <form>
        <input id="name" type="text" placeholder="username" />
        <input id="password" type="password" placeholder="password" />
        <input id="rPassword" type="password" placeholder="reapeat password" />
        <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
      </form>
    </>
  );
}

export default SignUp;