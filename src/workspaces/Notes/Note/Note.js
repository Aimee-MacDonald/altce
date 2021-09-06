import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { SettingsContext } from '../../../util/Settings'

const Note = ({ title, content, destroyNote }) => {
  const [ isOpen, setOpen ] = useState(false)
  const { theme } = useContext(SettingsContext).theme

  return (
    <StyledNote
      isOpen={isOpen}
      theme={theme}
      onClick={() => setOpen(!isOpen)}
      >
      <div className='noteHeader'>
        <h1>{title}</h1>
        <button onClick={destroyNote}></button>
      </div>

      <p className='content'>{content}</p>
    </StyledNote>
  )
}

const StyledNote = styled.div`
  background-color: ${({ isOpen, theme }) => isOpen ? theme.selected : theme.unselected};
  padding: ${({ isOpen }) => isOpen ? '1.6' : '0.4'}rem;
  border-radius: 0.4rem;
  transition: 0.4s;

  .noteHeader {
    display: flex;
    justify-content: space-between;
    align-items: ${({ isOpen }) => isOpen ? 'flex-start' : 'center'};

    button {
      background-color: ${({ theme }) => theme.negative_affirmation};
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .content {
    width: ${({ isOpen }) => isOpen ? '32' : '16'}rem;
    height: ${({ isOpen }) => isOpen ? '16rem' : '0'};
    overflow-y: ${({ isOpen }) => isOpen ? 'scroll' : 'hidden'};
    margin: ${({ isOpen }) => isOpen ? '1rem 0' : '0'};
    transition: 0.4s;
  }
`

export default Note