import React, { useContext } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../util/Settings'
import { StatusContext } from '../util/Status'

const StatusLayer = () => {
  const { theme } = useContext(SettingsContext).theme
  const { isOpen, message } = useContext(StatusContext)

  return (
    <StyledStatusLayer isOpen={isOpen} theme={theme}>
      <p>{message}</p>
    </StyledStatusLayer>
  )
}

const StyledStatusLayer = styled.div`
  background-color: ${({ isOpen, theme }) => isOpen ? theme.selected : 'transparent'};
  position: fixed;
  z-index: 40;
  width: 100%;
  height: ${({ isOpen }) => isOpen ? '3.2' : '0'}rem;
  transition: 0.4s;
  overflow: hidden;
  display: grid;
  place-items: center center;
`

export default StatusLayer