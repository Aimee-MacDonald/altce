import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../util/Settings'
import { GlobalStateContext } from '../util/GlobalState'

import Lists from '../workspaces/Lists/Lists'
import Settings from '../workspaces/Settings/Settings'
import Treasury from '../workspaces/Treasury/Treasury'
import Notes from '../workspaces/Notes/Notes'

export const WorkspaceLayer = () => {
  const settings =  useContext(SettingsContext)
  const { theme, setTheme } = settings.theme
  const { serverURL, setServerURL } = settings.server
  const { workspace, workspaceOptions } = useContext(GlobalStateContext).workspace

  useEffect(() => {
    const userSettings = JSON.parse(localStorage.getItem('settings'))
    if(!!userSettings) {
      setTheme(userSettings.theme)
      setServerURL(userSettings.server.serverURL)
    }
  }, [])

  return (
    <StyledWorkspaceLayer theme={theme}>
      {workspace === workspaceOptions('lists') && <Lists/>}
      {workspace === workspaceOptions('settings') && <Settings/>}
      {workspace === workspaceOptions('treasury') && <Treasury/>}
      {workspace === workspaceOptions('notes') && <Notes/>}
    </StyledWorkspaceLayer>
  )
}

const StyledWorkspaceLayer = styled.div`
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center center;
`

export default WorkspaceLayer