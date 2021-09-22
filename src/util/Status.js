import React, { createContext, useState } from 'react'

export default ({ children }) => {
  const [ isOpen, setOpen ] = useState(false)
  const [ message, setMessage ] = useState('')

  const flashMessage = newMessage => {
    setMessage(newMessage)
    setOpen(true)
    setTimeout(() => setOpen(false), 2000)
  }

  const status = {
    isOpen: isOpen,
    message: message,
    flashMessage: flashMessage
  }

  return(
    <StatusContext.Provider value={status}>
      {children}
    </StatusContext.Provider>
  )
}

const StatusContext = createContext(null)
export { StatusContext }