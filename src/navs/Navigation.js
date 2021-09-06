import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../util/GlobalState'
import { SettingsContext } from '../util/Settings'

export const Navigation = () => {
  const [ isOpen, setOpen ] = useState(false)
  const { setWorkspace, workspaceOptions } = useContext(GlobalStateContext).workspace
  const { theme } = useContext(SettingsContext).theme

  return (
    <StyledNavigation
      isOpen={isOpen}
      theme={theme}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      {isOpen && (
        <div>
          <button onClick={() => setWorkspace(workspaceOptions('lists'))}>Lists</button>
          <button onClick={() => setWorkspace(workspaceOptions('settings'))}>Settings</button>
          <button onClick={() => setWorkspace(workspaceOptions('treasury'))}>Treasury</button>
          <button onClick={() => setWorkspace(workspaceOptions('notes'))}>Notes</button>
        </div>
      )}
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  background-color: ${({ isOpen, theme }) => isOpen ? theme.navs : 'transparent'};
  width: ${({ isOpen }) => isOpen ? '16rem' : '0.2rem'};
  height: 100vh;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: 0.4s;
`

export default Navigation