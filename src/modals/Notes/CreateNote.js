import React, { useContext } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import { GlobalStateContext } from '../../util/GlobalState'

const CreateNote = () => {
  const globalState = useContext(GlobalStateContext)
  const { setModal } = globalState.modal
  const { toggleRefreshNotes } = globalState.notes

  const createNote = e => {
    e.preventDefault()

    const notes = JSON.parse(localStorage.getItem('notes')) || []
    localStorage.setItem('notes', JSON.stringify([
      ...notes, {
        _id: v4(),
        title: e.target.title.value,
        content: e.target.content.value
      }
    ]))

    toggleRefreshNotes()
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