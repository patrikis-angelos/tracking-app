import renderer from 'react-test-renderer';
import Nutrients from '../../Components/Nutrients';

describe('Nutrients', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Nutrients
      unit=""
      measurements={[{}]}
      getMeasurementsByDate={() => {}}
      reduceMethod={() => {}}
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
