import React from 'react'
import styled from 'styled-components'

export const ModalLayer = () => (
  <StyledModalLayer>
    <h1>Modal Layer</h1>
  </StyledModalLayer>
)

const StyledModalLayer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default ModalLayer