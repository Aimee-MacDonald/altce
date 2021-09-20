import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../util/GlobalState'
import { SettingsContext } from '../util/Settings'

import CreateList from '../modals/CreateList'
import CreateNote from '../modals/Notes/CreateNote'

export const ModalLayer = () => {
  const [ isOpen, setOpen ] = useState(false)
  const { modal, modalOptions } = useContext(GlobalStateContext).modal
  const { theme } = useContext(SettingsContext).theme
  useEffect(() => setOpen(!!modal), [ modal ])

  return (
    <StyledModalLayer isOpen={isOpen} theme={theme}>
      {modal === modalOptions('create_list') && <CreateList/>}
      {modal === modalOptions('create_note') && <CreateNote/>}
    </StyledModalLayer>
  )
}

const StyledModalLayer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: ${({ isOpen }) => isOpen ? '100%' : '0'};
  background-color: ${({ isOpen, theme }) => isOpen ? theme.modal : 'transparent'};
  transition: 0.4s;
  overflow: hidden;
  display: grid;
  place-items: center center;
`

export default ModalLayer