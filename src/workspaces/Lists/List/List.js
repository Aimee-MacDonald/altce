import React from 'react'
import styled from 'styled-components'

export const List = ({ title, items, addListItem, destroyListItem, destroyList }) => {
  const addItem = e => {
    e.preventDefault()
    addListItem(e.target.newItem.value)
    e.target.newItem.value = ''
  }

  return (
    <StyledList>
      <h1>{ title }</h1>
      <button onClick={destroyList}>X</button>

      <ul>
        {items && items.map(listItem => (
          <li key={listItem._id}>
            <p>{ listItem.value }</p>
            <button onClick={() => destroyListItem(listItem._id)}>X</button>
          </li>
        ))}
      </ul>

      <form onSubmit={ addItem }>
        <input id='newItem'/>
        <button type='submit'>+</button>
      </form>
    </StyledList>
  )
}

const StyledList = styled.div`
  background-color: green;
`

export default List