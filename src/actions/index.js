const GET_UNITS = 'GET_UNITS';
const GET_MEASUREMENTS = 'GET_MEASUREMENTS';
const ADD_VALUE = 'ADD_VALUE';
const actions = { GET_UNITS, GET_MEASUREMENTS, ADD_VALUE };

const getUnits = (units) => (
  {
    type: GET_UNITS,
    units,
  }
);

const getMeasurements = (measurements) => (
  {
    type: GET_MEASUREMENTS,
    measurements,
  }
);

const addValue = (unit, value) => (
  {
    type: ADD_VALUE,
    unit,
    value,
  }
);

export default actions;
export { getUnits, getMeasurements, addValue };
