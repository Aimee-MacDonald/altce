import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ modal, setModal ] = useState(0)

  const modalOptions = newModal => ([
      'default',
      'create_list'
    ].indexOf(newModal)
  )

  const state = {
    modal: { modal, setModal, modalOptions }
  }

  return(
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

const GlobalStateContext = createContext(null)
export { GlobalStateContext }