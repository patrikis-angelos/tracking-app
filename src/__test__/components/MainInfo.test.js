import renderer from 'react-test-renderer';
import MainInfo from '../../Components/MainInfo';

describe('MainInfo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainInfo
      unit=""
      measurements={[{}]}
      getMeasurementsByDate={() => {}}
      reduceMethod={() => {}}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
