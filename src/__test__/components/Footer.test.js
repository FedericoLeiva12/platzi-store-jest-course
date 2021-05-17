import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  it('should render', () => {
    expect(footer.length).toEqual(1);
  });

  it('should render the title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('should render correctly', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
