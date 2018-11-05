/* eslint react/jsx-filename-extension: [0] */

import Enzyme, {
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<Toolbar /> Functionality', () => {
  test('should have rendered dom elements as defined in app jsx', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
