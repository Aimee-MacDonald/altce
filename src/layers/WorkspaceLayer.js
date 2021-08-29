import React from 'react'
import styled from 'styled-components'

import Lists from '../workspaces/Lists/Lists'

export const WorkspaceLayer = () => (
  <StyledWorkspaceLayer>
    <Lists/>
  </StyledWorkspaceLayer>
)

const StyledWorkspaceLayer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default WorkspaceLayer