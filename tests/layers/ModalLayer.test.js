import React from 'react'
import { shallow } from 'enzyme'

import { ModalLayer } from '../../src/layers/ModalLayer'

test('Render Main Layer', () => {
  const wrapper = shallow(<ModalLayer/>)
  expect(wrapper.getElement()).toMatchSnapshot()
})