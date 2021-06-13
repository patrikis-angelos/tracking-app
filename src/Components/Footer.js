import { logout } from '../logic/sessions';
import Icon from './Icon';

const Footer = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <footer className="flex fixed footer">
      <Icon path="/add" title="Add Measurement" />
      <Icon path="/" title="Home" />
      <Icon path="/progress" title="Progress" />
      <Icon path="/users/login" title="Logout" clickHandler={handleLogout} />
    </footer>
  );
};

export default Footer;
