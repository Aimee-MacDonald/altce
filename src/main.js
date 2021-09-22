import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import GlobalStyle from './util/GlobalStyle'
import GlobalStateProvider from './util/GlobalState'
import SettingsProvider from './util/Settings'
import StatusProvider from './util/Status'

import WorkspaceLayer from './layers/WorkspaceLayer'
import NavigationLayer from './layers/NavigationLayer'
import ModalLayer from './layers/ModalLayer'
import StatusLayer from './layers/StatusLayer'

const MainComponent = () => (
  <GlobalStateProvider>
    <SettingsProvider>
      <StatusProvider>
        <StyledMainComponent>
          <GlobalStyle/>
          <WorkspaceLayer/>
          <NavigationLayer/>
          <ModalLayer/>
          <StatusLayer/>
        </StyledMainComponent>
      </StatusProvider>
    </SettingsProvider>
  </GlobalStateProvider>
)

const StyledMainComponent = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<MainComponent />, document.getElementById('root'))