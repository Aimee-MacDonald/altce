import React from 'react'
import { shallow } from 'enzyme'

import { Toolbox } from '../../src/navs/Toolbox'

test('Render Main Layer', () => {
  const wrapper = shallow(<Toolbox/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})