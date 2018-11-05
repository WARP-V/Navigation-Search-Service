/* eslint react/jsx-filename-extension: [0] */

import Enzyme, {
  shallow, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Search from '../Search';

Enzyme.configure({ adapter: new Adapter() });

const dummyValue = 'moto';
const dummyShoes = ['', '', '', '', ''];

describe('<Search /> Functionality', () => {
  test('should have recorded the setState value', () => {
    const wrapper = shallow(<Search value={dummyValue} />);
    wrapper.setState({ value: 'moto' });
    expect(wrapper.state('value')).toBe(dummyValue);
  });
  test('should have recorded the setState shoes array', () => {
    const wrapper = shallow(<Search value={dummyValue} />);
    wrapper.setState({ shoes: ['', '', '', '', ''] });
    expect(wrapper.state('shoes')).toEqual(dummyShoes);
  });
  test('should call onChange property with input value', () => {
    const objectValue = { target: { value: 'air jordan' } };
    const wrapper = mount(<Search />);
    wrapper.find('input').simulate('change', objectValue);
    expect(wrapper.state('value')).toEqual('air jordan');
  });
});

// test
