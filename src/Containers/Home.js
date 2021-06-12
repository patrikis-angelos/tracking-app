import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllMeasurements } from '../logic/api';
import { loadToken } from '../logic/storage';
import MainInfo from '../Components/MainInfo';
import newDate from '../logic/months';

const Home = (props) => {
  const {
    measurements, getAllMeasurements, date, changeDate, //eslint-disable-line
  } = props;

  useEffect(() => {
    const token = loadToken();
    fetchAllMeasurements(token).then((measurements) => {
      getAllMeasurements(measurements);
    });

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    changeDate({ day, month: month + 1, year });
  }, []);

  const handleDateChange = (dir) => {
    const [day, month, year] = newDate(dir, date.day, date.month, date.year);
    changeDate({ day, month, year });
  };

  const [mainInfo, list] = measurements.reduce(([m, l], measurement) => {
    const main = ['weight', 'energy', 'energy burned'].includes(measurement.unit.title);
    const result = main ? [[...m, measurement], l] : [m, [...l, measurement]];
    return result;
  }, [[], []]);

  const main = mainInfo.map((elem) => (
    <MainInfo key={elem.unit.id} unit={elem.unit} measurements={elem.measurements} />
  ));

  const nutrient = list.map((elem) => (
    <div key={elem.unit.id}>{elem.unit.title}</div>
  ));

  return (
    <div>
      <button type="button" onClick={() => handleDateChange(-1)}>&lt;</button>
      <button type="button" onClick={() => handleDateChange(1)}>&gt;</button>
      <p>{`${date.day}-${date.month}-${date.year}`}</p>
      {main}
      {nutrient}
    </div>
  );
};

Home.propTypes = {
  measurements: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default Home;
