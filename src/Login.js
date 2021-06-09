import { login } from './logic/sessions';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    login(name, password);
  };

  return (
    <form>
      <input id="name" type="text" placeholder="username" />
      <input id="password" type="password" placeholder="password" />
      <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
    </form>
  );
};

export default Login;
