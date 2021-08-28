import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalLayer = () => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <StyledModalLayer isOpen={isOpen}>
      <h1>Modal Layer</h1>
    </StyledModalLayer>
  )
}

const StyledModalLayer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: ${({ isOpen }) => isOpen ? '100%' : '0'};
  overflow: hidden;
  display: grid;
  place-items: center center;
`

export default ModalLayer