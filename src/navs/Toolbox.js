import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../util/GlobalState'
import { SettingsContext } from '../util/Settings'

export const Toolbox = () => {
  const [ isOpen, setOpen ] = useState(false)
  const globalState = useContext(GlobalStateContext)
  const { setModal, modalOptions } = globalState.modal
  const { workspace, workspaceOptions } = globalState.workspace
  const { theme } = useContext(SettingsContext).theme

  return (
    <StyledToolbox
      isOpen={isOpen}
      theme={theme}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      {isOpen && (
        <div>
          {workspace === workspaceOptions('lists') && (
            <div>
              <button onClick={() => setModal(modalOptions('create_list'))}>Create List</button>
            </div>
          )}

          {workspace === workspaceOptions('notes') && (
            <div>
              <button onClick={() => setModal(modalOptions('create_note'))}>Create Note</button>
            </div>
          )}
        </div>
      )}
    </StyledToolbox>
  )
}

const StyledToolbox = styled.nav`
  background-color: ${({ isOpen, theme }) => isOpen ? theme.navs : 'transparent'};
  width: ${({ isOpen }) => isOpen ? '16rem' : '0.2rem'};
  height: 100vh;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transition: 0.4s;
`

export default Toolbox