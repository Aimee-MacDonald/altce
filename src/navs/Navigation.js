import React, { useState } from 'react'
import styled from 'styled-components'

export const Navigation = () => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <StyledNavigation
      isOpen={isOpen}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      {isOpen && <h1>Navigation</h1>}
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  background-color: ${({ isOpen }) => isOpen ? 'black' : 'transparent'};
  width: ${({ isOpen }) => isOpen ? '16rem' : '0.2rem'};
  height: 100vh;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: 0.4s;
`

export default Navigation