import React from 'react'
import { shallow } from 'enzyme'

import { WorkspaceLayer } from '../../src/layers/WorkspaceLayer'

test('Render Main Layer', () => {
  const wrapper = shallow(<WorkspaceLayer/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})