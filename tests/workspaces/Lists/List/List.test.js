import React from 'react'
import { shallow } from 'enzyme'

import { List } from '../../../../src/workspaces/Lists/List/List'

test('Render Main Layer', () => {
  const wrapper = shallow(<List/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})