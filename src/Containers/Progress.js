import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadToken } from '../logic/storage';
import { fetchAllMeasurements } from '../logic/api';

const Progress = (props) => {
  const { measurements, getAllMeasurements, filter } = props;
  useEffect(() => {
    const token = loadToken();
    fetchAllMeasurements(token).then((data) => {
      getAllMeasurements(data);
    });
  }, []);

  const list = measurements[filter].map((m) => (
    <div key={`p${m.id}`}>{m.value}</div>
  ));

  return (
    <div>
      {filter}
      {list}
    </div>
  );
};

Progress.propTypes = {
  filter: PropTypes.string.isRequired,
  measurements: PropTypes.shape({}).isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
};

export default Progress;
