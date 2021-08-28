import React from 'react'
import styled from 'styled-components'

export const WorkspaceLayer = () => (
  <StyledWorkspaceLayer>
    <h1>Workspace Layer</h1>
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