import base from './baseUrl';

const fetchUnits = async (token) => {
  const units = await fetch(`${base}/units`, {
    mode: 'cors',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json());
  return units;
};

export default fetchUnits;
