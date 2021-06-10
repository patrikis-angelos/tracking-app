import { logout } from '../logic/sessions';

const Footer = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <footer>
      <a href="/add">Add Measurement</a>
      <a href="/">Home</a>
      <a href="/progress">Progress</a>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </footer>
  );
};

export default Footer;
