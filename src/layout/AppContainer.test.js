import React from 'react';
import { AppContainer } from 'layout/AppContainer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

it('AppContainer renders correctly', async () => {
  const props = {};
  const output = shallow(<AppContainer {...props} />);

  expect(shallowToJson(output)).toMatchSnapshot();
});
