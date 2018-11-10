import React from 'react';
import { mount } from 'enzyme';
import App from './App';

jest.setTimeout(15000);

it('identifies as attached', () => {
  const wrapper = mount(<App />);
  wrapper.find('button').simulate('click');
  return new Promise(r => setTimeout(r, 10000)); // wait 10 seconds
});
