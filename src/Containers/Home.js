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

  const getMeasurementsByDate = (measurements) => {
    const { day, month, year } = date;
    const measurementsByDate = measurements.filter((m) => {
      const mDate = new Date(m.created_at);
      return (
        mDate.getDate() === day
        && mDate.getMonth() === month - 1
        && mDate.getFullYear() === year);
    });
    return measurementsByDate;
  };

  const total = (measurements) => {
    const total = measurements.reduce((value, m) => {
      const newValue = m.value + value;
      return newValue;
    }, 0);
    return total;
  };

  const last = (measurements) => {
    const last = measurements.reduce((l, m) => {
      if (m.created_at > l.created_at) return m;
      return l;
    }, { created_at: '' });
    return last.value;
  };

  const [mainInfo, list] = measurements.reduce(([m, l], measurement) => {
    const main = ['weight', 'energy', 'energy burned'].includes(measurement.unit.title);
    const result = main ? [[...m, measurement], l] : [m, [...l, measurement]];
    return result;
  }, [[], []]);

  const main = mainInfo.map((elem) => {
    const reduceMethod = elem.unit.title === 'weight' ? last : total;
    return (
      <MainInfo
        key={elem.unit.id}
        unit={elem.unit}
        measurements={elem.measurements}
        selectedDate={date}
        getMeasurementsByDate={getMeasurementsByDate}
        reduceMethod={reduceMethod}
      />
    );
  });

  const nutrient = list.map((elem) => (
    <Nutrient
      key={elem.unit.id}
      unit={elem.unit}
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
