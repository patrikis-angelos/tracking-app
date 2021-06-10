import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUnits } from '../actions/index';
import { fetchUnits, saveMeasurement } from '../logic/api';
import { loadToken } from '../logic/storage';
import AddCard from './AddCard';

const Add = (props) => {
  const { units, getUnits } = props;
  useEffect(() => {
    const token = loadToken();
    fetchUnits(token).then((units) => {
      getUnits(units);
    });
  }, []);

  const handleSubmit = (e, id) => {
    const { value } = e.target.previousSibling;
    const token = loadToken();
    saveMeasurement(id, value, token);
  };

  const unitList = units.map((unit) => (
    <AddCard key={unit.id} id={unit.id} title={unit.title} submitHandler={handleSubmit} />
  ));

  return (
    <div>{unitList}</div>
  );
};

Add.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUnits: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  units: state.units,
});

const mapDispatchToProps = (dispatch) => ({
  getUnits: (units) => dispatch(getUnits(units)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
