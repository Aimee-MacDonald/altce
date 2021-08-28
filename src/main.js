import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const MainComponent = () => (
  <StyledMainComponent>
    <h1>ALTCE</h1>
  </StyledMainComponent>
)

const StyledMainComponent = styled.div`
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<MainComponent />, document.getElementById('root'))