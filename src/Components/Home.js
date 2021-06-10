import fetchUnits from '../logic/api';
import { loadToken } from '../logic/storage';

const Home = () => {
  const token = loadToken();
  // This gets called twice here (on creation and on component update)
  fetchUnits(token);

  return (
    <div>Home</div>
  );
};

export default Home;
