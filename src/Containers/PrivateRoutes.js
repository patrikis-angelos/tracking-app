import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../logic/sessions';
import Home from './Home';
import Add from './Add';
import Progress from '../Components/Progress';
import Unit from '../Components/Unit';
import { getUnits, getAllMeasurements, addValue } from '../actions/index';

const PrivateRoutes = (props) => {
  const {
    units, getUnits, values, addValue, measurements, getAllMeasurements,
  } = props;
  const authorized = isLoggedIn();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              measurements={measurements}
              getAllMeasurements={getAllMeasurements}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={() => (
            <Add
              units={units}
              values={values}
              getUnits={getUnits}
              addValue={addValue}
            />
          )}
        />
        <Route exact path="/progress" component={Progress} />
        <Route path="/unit" component={Unit} />
      </>
    );
  } else {
    routes = <Redirect to={{ pathname: '/users/login' }} />;
  }

  return (
    routes
  );
};

PrivateRoutes.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.shape({}).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  getUnits: PropTypes.func.isRequired,
  getAllMeasurements: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  units: state.units,
  measurements: state.measurements,
  values: state.values,
});

const mapDispatchToProps = (dispatch) => ({
  getUnits: (units) => dispatch(getUnits(units)),
  getAllMeasurements: (measurements) => dispatch(getAllMeasurements(measurements)),
  addValue: (unit, value) => dispatch(addValue(unit, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
