/* eslint react/jsx-filename-extension: [0] */


import Enzyme, {
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ShoeList from '../ShoeList';

Enzyme.configure({ adapter: new Adapter() });


const dummyShoeList = [{
  name: '',
  imageUrls: [''],
},
{
  name: '',
  imageUrls: [''],
},
{
  name: '',
  imageUrls: [''],
},
{
  name: '',
  imageUrls: [''],
},
{
  name: '',
  imageUrls: [''],
},
{
  name: '',
  imageUrls: [''],
}];

describe('<ShoeList /> Functionality', () => {
  it('should have rendered six result containers', () => {
    const wrapper = shallow(<ShoeList shoes={dummyShoeList} />);
    expect(wrapper.find('.search-result-container').length).toBe(6);
  });
});
