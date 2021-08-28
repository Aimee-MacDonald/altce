import React from 'react'
import { shallow } from 'enzyme'

import { Navigation } from '../../src/navs/Navigation'

test('Render Main Layer', () => {
  const wrapper = shallow(<Navigation/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})