import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AlertDialog from './AlertDialog';

it('AlertDialog renders correctly', async () => {
  const props = {};
  const output = shallow(<AlertDialog {...props} />);

  expect(shallowToJson(output)).toMatchSnapshot();
});
