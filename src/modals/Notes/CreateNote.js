import React, { useContext } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import { GlobalStateContext } from '../../util/GlobalState'
import { SettingsContext } from '../../util/Settings'
import { StatusContext } from '../../util/Status'

const CreateNote = () => {
  const globalState = useContext(GlobalStateContext)
  const { setModal } = globalState.modal
  const { toggleRefreshNotes } = globalState.notes
  const { serverURL } = useContext(SettingsContext).server
  const { flashMessage } = useContext(StatusContext)

  const createNote = e => {
    e.preventDefault()

    let newNote = {
      _id: v4(),
      _storage: 'local',
      title: e.target.title.value,
      content: e.target.content.value
    }

    fetch(`${serverURL}/api/notes`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newNote)
    }).then(res => res.json())
      .then(result => {if(result.status === 'ok') newNote._storage = 'database'})
      .catch(error => flashMessage('Connection Error'))
      .finally(() => {
        const localNotes = JSON.parse(localStorage.getItem('notes')) || []
        localStorage.setItem('notes', JSON.stringify([...localNotes, newNote]))
        toggleRefreshNotes()
      })

    setModal(0)
  }

  return (
    <StyledCreateNote onSubmit={createNote}>
      <input
        id='title'
        placeholder='Title'
      />

      <textarea
        id='content'
        placeholder='Content'
      />

      <div className='buttons'>
        <button type='reset' onClick={() => setModal(0)}>-</button>
        <button type='submit'>+</button>
      </div>
    </StyledCreateNote>
  )
}

const StyledCreateNote = styled.form`
  display: flex;
  flex-flow: nowrap column;

  textarea {
    width: 64rem;
    height: 32rem;
  }

  .buttons {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-evenly;
  }
`

export default CreateNote