import PropTypes from 'prop-types';

const MainInfo = (props) => {
  const {
    unit, measurements, getMeasurementsByDate, reduceMethod,
  } = props;
  const measurementsByDate = getMeasurementsByDate(measurements);
  const displayedValue = reduceMethod(measurementsByDate);

  return (
    <div>{`${unit}: ${displayedValue}`}</div>
  );
};

MainInfo.propTypes = {
  unit: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurementsByDate: PropTypes.func.isRequired,
  reduceMethod: PropTypes.func.isRequired,
};

export default MainInfo;
