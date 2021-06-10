const GET_UNITS = 'GET_UNITS';
const actions = { GET_UNITS };

const getUnits = (units) => (
  {
    type: GET_UNITS,
    units,
  }
);

export default actions;
export { getUnits };
