import React, { createContext } from 'react'

export default ({ children }) => {
  const settings = {
    baseColor: 'rgb(8, 4, 8)'
  }

  return(
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}

const SettingsContext = createContext(null)
export { SettingsContext }