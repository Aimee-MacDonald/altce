import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { GlobalStateContext } from '../../util/GlobalState'

import Note from './Note/Note'

const Notes = () => {
  const [ notes, setNotes ] = useState([])
  const { refreshNotes } = useContext(GlobalStateContext).notes

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || []
    setNotes(savedNotes)
  }, [ refreshNotes ])

  const destroyNote = noteId => {
    const newNotes = notes.filter(note => note._id !== noteId)
    setNotes(newNotes)
    localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  return (
    <StyledNotes>
      {notes.map(note => (
        <Note
          key={note._id}
          title={note.title}
          content={note.content}
          destroyNote={() => destroyNote(note._id)}
        />
      ))}
    </StyledNotes>
  )
}

const StyledNotes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-around;
  align-items: center;
`

export default Notes