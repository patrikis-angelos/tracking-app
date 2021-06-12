import PropTypes from 'prop-types';

const MainInfo = (props) => {
  const { unit, measurements } = props;
  console.log(measurements);
  return (
    <div>{unit.title}</div>
  );
};

MainInfo.propTypes = {
  unit: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainInfo;
