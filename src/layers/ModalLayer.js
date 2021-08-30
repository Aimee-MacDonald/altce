import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../util/GlobalState'

import CreateList from '../modals/CreateList'

export const ModalLayer = () => {
  const [ isOpen, setOpen ] = useState(false)
  const { modal, modalOptions } = useContext(GlobalStateContext).modal
  useEffect(() => setOpen(!!modal), [ modal ])

  return (
    <StyledModalLayer isOpen={isOpen}>
      {modal === modalOptions('create_list') && <CreateList/>}
    </StyledModalLayer>
  )
}

const StyledModalLayer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: ${({ isOpen }) => isOpen ? '100%' : '0'};
  background-color: ${({ isOpen }) => isOpen ? 'pink' : 'transparent'};
  transition: 0.4s;
  overflow: hidden;
  display: grid;
  place-items: center center;
`

export default ModalLayer