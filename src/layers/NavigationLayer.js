import React from 'react'
import styled from 'styled-components'

export const NavigationLayer = () => (
  <StyledNavigationLayer>
    <h1>Navigation Layer</h1>
  </StyledNavigationLayer>
)

const StyledNavigationLayer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default NavigationLayer