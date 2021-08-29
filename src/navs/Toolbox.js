import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../util/GlobalState'

export const Toolbox = () => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <StyledToolbox
      isOpen={isOpen}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      {isOpen && <h1>Toolbox</h1>}
    </StyledToolbox>
  )
}

const StyledToolbox = styled.nav`
  background-color: ${({ isOpen }) => isOpen ? 'black' : 'transparent'};
  width: ${({ isOpen }) => isOpen ? '16rem' : '0.2rem'};
  height: 100vh;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transition: 0.4s;
`

export default Toolbox