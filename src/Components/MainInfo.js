import PropTypes from 'prop-types';
import { icons, measurementUnits } from '../logic/info';

const MainInfo = (props) => {
  const {
    unit, measurements, getMeasurementsByDate, reduceMethod,
  } = props;
  const measurementsByDate = getMeasurementsByDate(measurements);
  const displayedValue = reduceMethod(measurementsByDate);

  return (
    <div className="main-info">
      <p className="big m-b-10 color-dark-gray">{displayedValue}</p>
      <i className={`${icons[unit]} x-small color-gray`} />
      <p className="small color-gray">{unit}</p>
      <p className="x-small color-gray">{measurementUnits[unit]}</p>
    </div>
  );
};

MainInfo.propTypes = {
  unit: PropTypes.string.isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeasurementsByDate: PropTypes.func.isRequired,
  reduceMethod: PropTypes.func.isRequired,
};

export default MainInfo;
