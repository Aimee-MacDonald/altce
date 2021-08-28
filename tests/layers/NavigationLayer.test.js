import React from 'react'
import { shallow } from 'enzyme'

import { NavigationLayer } from '../../src/layers/NavigationLayer'

test('Render Main Layer', () => {
  const wrapper = shallow(<NavigationLayer/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})