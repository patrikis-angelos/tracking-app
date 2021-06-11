import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../logic/sessions';
import Home from '../Components/Home';
import Add from './Add';
import Progress from '../Components/Progress';
import Unit from '../Components/Unit';
import { getUnits, getMeasurements, addValue } from '../actions/index';

const PrivateRoutes = (props) => {
  const {
    units, getUnits, values, addValue,
  } = props;
  const authorized = isLoggedIn();
  let routes;
  if (authorized) {
    routes = (
      <>
        <Route exact path="/" component={Home} />
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
  getUnits: PropTypes.func.isRequired,
  getMeasurements: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  units: state.units,
  measurements: state.measurements,
  values: state.values,
});

const mapDispatchToProps = (dispatch) => ({
  getUnits: (units) => dispatch(getUnits(units)),
  getMeasurements: (measurements) => dispatch(getMeasurements(measurements)),
  addValue: (unit, value) => dispatch(addValue(unit, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
