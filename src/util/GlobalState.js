import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ modal, setModal ] = useState(0)
  const [ workspace, setWorkspace ] = useState(0)

  const modalOptions = newModal => ([
      'default',
      'create_list'
    ].indexOf(newModal)
  )

  const workspaceOptions = newWorkspace => ([
    'lists',
    'settings'
  ].indexOf(newWorkspace))

  const state = {
    workspace: { workspace, setWorkspace, workspaceOptions },
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