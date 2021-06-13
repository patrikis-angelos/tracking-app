import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Icon = (props) => {
  const { path, title, clickHandler } = props;

  const location = useLocation();
  const route = location.pathname.split('/')[1];

  const isActive = () => {
    if (`/${route}` === path) return 'blue';
    return 'gray';
  };
  const active = isActive();
  return (
    <a className={`icon background-${active} color-white`} href={path} onClick={clickHandler}>{title}</a>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

Icon.defaultProps = {
  clickHandler: () => {},
};

export default Icon;
