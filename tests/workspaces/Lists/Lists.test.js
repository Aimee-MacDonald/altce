import React from 'react'
import { shallow } from 'enzyme'

import { Lists } from '../../../src/workspaces/Lists/Lists'

test('Render Main Layer', () => {
  const wrapper = shallow(<Lists lists={[]}/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})