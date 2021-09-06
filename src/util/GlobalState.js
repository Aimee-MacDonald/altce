import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ modal, setModal ] = useState(0)
  const [ workspace, setWorkspace ] = useState(0)
  const [ refreshLists, setRefreshLists ] = useState(false)
  const [ refreshNotes, setRefreshNotes ] = useState(false)

  const modalOptions = newModal => ([
      'default',
      'create_list',
      'create_note'
    ].indexOf(newModal)
  )

  const workspaceOptions = newWorkspace => ([
    'lists',
    'settings',
    'treasury',
    'notes'
  ].indexOf(newWorkspace))

  const toggleRefreshLists = () => setRefreshLists(!refreshLists)
  const toggleRefreshNotes = () => setRefreshNotes(!refreshNotes)

  const state = {
    workspace: { workspace, setWorkspace, workspaceOptions },
    modal: { modal, setModal, modalOptions },
    lists: { refreshLists, toggleRefreshLists },
    notes: { refreshNotes, toggleRefreshNotes }
  }

  return(
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

const GlobalStateContext = createContext(null)
export { GlobalStateContext }