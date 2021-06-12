const GET_UNITS = 'GET_UNITS';
const GET_MEASUREMENTS = 'GET_MEASUREMENTS';
const ADD_VALUE = 'ADD_VALUE';
const CHANGE_DATE = 'CHANGE_DATE';
const actions = {
  GET_UNITS, GET_MEASUREMENTS, ADD_VALUE, CHANGE_DATE,
};

const getUnits = (units) => (
  {
    type: GET_UNITS,
    units,
  }
);

const getAllMeasurements = (measurements) => (
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

const changeDate = (date) => (
  {
    type: CHANGE_DATE,
    date,
  }
);

export default actions;
export {
  getUnits, getAllMeasurements, addValue, changeDate,
};
