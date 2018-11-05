/* eslint react/jsx-filename-extension: [0] */

import Enzyme, {
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Toolbar from '../Toolbar';

Enzyme.configure({ adapter: new Adapter() });


describe('<Toolbar /> Functionality', () => {
  test('should have rendered dom elements of class gnav-bar', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('.gnav-bar').exists()).toBe(true);
  });
  test('should have rendered dom elements of "ul"', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('ul').exists()).toBe(true);
  });
  test('should have rendered dom elements of "li"', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('li').exists()).toBe(true);
  });
  test('should have rendered dom elements of "li"', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('li').exists()).toBe(true);
  });
  test('should have rendered dom elements of "a"', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('a').exists()).toBe(true);
  });
  test('should have rendered dom elements of "span"', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find('span').exists()).toBe(true);
  });
});
