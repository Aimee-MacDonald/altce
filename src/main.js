import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import GlobalStyle from './util/GlobalStyle'
import GlobalStateProvider from './util/GlobalState'

import WorkspaceLayer from './layers/WorkspaceLayer'
import NavigationLayer from './layers/NavigationLayer'
import ModalLayer from './layers/ModalLayer'

const MainComponent = () => (
  <GlobalStateProvider>
    <StyledMainComponent>
      <GlobalStyle/>
      <WorkspaceLayer/>
      <NavigationLayer/>
      <ModalLayer/>
    </StyledMainComponent>
  </GlobalStateProvider>
)

const StyledMainComponent = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<MainComponent />, document.getElementById('root'))