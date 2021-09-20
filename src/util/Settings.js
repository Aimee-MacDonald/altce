import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ theme, setTheme ] = useState({
    background: '#000000',
    navs: '#000000',
    modal: '#000000',
    selected: '#000000',
    unselected: '#000000',
    positive_affirmation: '#000000',
    negative_affirmation: '#000000'
  })

  const [ serverURL, setServerURL ] = useState('')

  const settings = {
    theme: { theme, setTheme },
    server: { serverURL, setServerURL }
  }

  return(
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

const SettingsContext = createContext(null)
export { SettingsContext }