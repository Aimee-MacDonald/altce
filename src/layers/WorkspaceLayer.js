import React, { useContext } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../util/Settings'

import Lists from '../workspaces/Lists/Lists'

export const WorkspaceLayer = () => {
  const settings = useContext(SettingsContext)

  return (
    <StyledWorkspaceLayer baseColor={settings.baseColor}>
      <Lists/>
    </StyledWorkspaceLayer>
  )
}

const StyledWorkspaceLayer = styled.div`
  background-color: ${({ baseColor }) => baseColor};
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default WorkspaceLayer