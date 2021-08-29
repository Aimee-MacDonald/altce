import React from 'react'
import styled from 'styled-components'

export const List = ({ title, items, addListItem }) => {
  const addItem = e => {
    e.preventDefault()
    addListItem(e.target.newItem.value)
    e.target.newItem.value = ''
  }

  return (
    <StyledList>
      <h1>{ title }</h1>

      <ul>
        {items && items.map(listItem => (
          <li key={listItem._id}>{ listItem.value }</li>
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