import React, { useContext } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import { GlobalStateContext } from '../util/GlobalState'

export const CreateList = () => {
  const globalState = useContext(GlobalStateContext)
  const { setModal } = globalState.modal
  const { toggleRefreshLists } = globalState.lists

  const createList = e => {
    e.preventDefault()

    const lists = JSON.parse(localStorage.getItem('lists')) || []
    localStorage.setItem('lists', JSON.stringify([
      ...lists, {
        _id: v4(),
        title: e.target.listName.value,
        items: []
      }
    ]))

    e.target.listName.value = ''
    toggleRefreshLists()
    setModal(0)
  }

  return (
    <StyledCreateList onSubmit={createList}>
      <h1>Create List</h1>
      <input id='listName'/>
      <button type='submit'>+</button>
    </StyledCreateList>
  )
}

const StyledCreateList = styled.form`
  background-color: purple;
`

export default CreateList