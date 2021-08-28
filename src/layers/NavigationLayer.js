import React from 'react'
import styled from 'styled-components'

import Navigation from '../navs/Navigation'
import Toolbox from '../navs/Toolbox'

export const NavigationLayer = () => (
  <StyledNavigationLayer>
    <Navigation/>
    <Toolbox/>
  </StyledNavigationLayer>
)

const StyledNavigationLayer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 0;
  overflow-y: visible;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
`

export default NavigationLayer