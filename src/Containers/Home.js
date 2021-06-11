import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAllMeasurements } from '../logic/api';
import { loadToken } from '../logic/storage';

const Home = (props) => {
  const { measurements, getAllMeasurements } = props;
  useEffect(() => {
    const token = loadToken();
    fetchAllMeasurements(token).then((measurements) => {
      getAllMeasurements(measurements);
    });
  }, []);
  const list = measurements.map((measurement) => (
    <div key={measurement.unit.id}>{measurement.unit.title}</div>
  ));
  return (
    <div>{list}</div>
  );
};

Home.propTypes = {
  measurements: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
};

export default Home;
