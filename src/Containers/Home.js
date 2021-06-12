import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllMeasurements } from '../logic/api';
import { loadToken } from '../logic/storage';
import MainInfo from '../Components/MainInfo';
import Nutrient from '../Components/Nutrients';
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

  // Remove the below from here
  const getMeasurementsByDate = (measurements) => {
    const { day, month, year } = date;
    const measurementsByDate = measurements.filter((m) => { //eslint-disable-line
      const mDate = new Date(m.created_at);
      return (
        mDate.getDate() === day
        && mDate.getMonth() === month - 1
        && mDate.getFullYear() === year);
    });
    return measurementsByDate;
  };

  const total = (measurements) => {
    const total = measurements.reduce((value, m) => { //eslint-disable-line
      const newValue = m.value + value;
      return newValue;
    }, 0);
    return total;
  };

  const last = (measurements) => {
    const last = measurements.reduce((l, m) => { //eslint-disable-line
      if (m.created_at > l.created_at) return m;
      return l;
    }, { created_at: '' });
    return last.value;
  };
  // Remove the above from here

  const [mainInfo, list] = Object.keys(measurements).reduce(([m, l], key) => {
    const main = ['weight', 'energy', 'energy burned'].includes(key);
    const result = main
      ? [[...m, { title: key, measurements: measurements[key] }], l]
      : [m, [...l, { title: key, measurements: measurements[key] }]];
    return result;
  }, [[], []]);

  const main = mainInfo.map((elem) => {
    const reduceMethod = elem.title === 'weight' ? last : total;
    return (
      <MainInfo
        key={elem.title}
        unit={elem.title}
        measurements={elem.measurements}
        selectedDate={date}
        getMeasurementsByDate={getMeasurementsByDate}
        reduceMethod={reduceMethod}
      />
    );
  });

  const nutrient = list.map((elem) => (
    <Nutrient
      key={elem.title}
      unit={elem.title}
      measurements={elem.measurements}
      selectedDate={date}
      getMeasurementsByDate={getMeasurementsByDate}
      reduceMethod={total}
    />
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
  measurements: PropTypes.shape({}).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  date: PropTypes.shape({
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default Home;
