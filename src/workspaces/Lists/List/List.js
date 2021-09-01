import React, { useState } from 'react'
import styled from 'styled-components'

export const List = ({ title, items, addListItem, destroyListItem, destroyList }) => {
  const [ isOpen, setOpen ] = useState(false)

  const addItem = e => {
    e.preventDefault()
    addListItem(e.target.newItem.value)
    e.target.newItem.value = ''
  }

  return (
    <StyledList
      isOpen={isOpen}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      <div className='listHeader'>
        <h1>{ title }</h1>
        <button onClick={destroyList}></button>
      </div>

      <ul>
        {items && items.map((listItem, i) => (
          <li key={listItem._id} className={`${!(i % 2) ? 'odd' : 'even'}Row`}>
            <p>{ listItem.value }</p>
            <button onClick={() => destroyListItem(listItem._id)}></button>
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
  background-color: ${({ isOpen }) => isOpen ? 'green' : 'purple'};
  padding: ${({ isOpen }) => isOpen ? '1.6' : '0.4'}rem;
  border-radius: 0.4rem;
  transition: 0.4s;

  .listHeader, li {
    display: flex;
    justify-content: space-between;
    align-items: ${({ isOpen }) => isOpen ? 'flex-start' : 'center'};
  }

  .listHeader button, li button {
    background-color: red;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
  }

  ul {
    width: 16rem;
    height: ${({ isOpen }) => isOpen ? '8rem' : '0'};
    overflow-y: ${({ isOpen }) => isOpen ? 'scroll' : 'hidden'};
    margin: ${({ isOpen }) => isOpen ? '1rem 0' : '0'};
    transition: 0.4s;
  }

  ul .oddRow{
    background-color: lime;
  }

  li {
    align-items: center;
    margin: ${({ isOpen }) => isOpen ? '0.1rem 0' : '0'};
  }

  li button {
    margin: 0 0.4rem;
  }

  form {
    display: flex;
    height: ${({ isOpen }) => isOpen ? '1.6rem' : '0'};
    overflow-y: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: 0.4s;
  }

  input {
    width: 100%;
  }
`

export default List