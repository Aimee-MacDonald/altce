import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import List from './List/List'

export const Lists = () => {
  const [ lists, setLists ] = useState([])

  useEffect(() => {
    if(typeof localStorage.lists === 'undefined'){
      setLists([{
        _id: '9898',
        title: 'List 1',
        items: []
      }, {
        _id: '4343',
        title: 'List 2',
        items: []
      }])
    }
  }, [])

  const addListItem = (listId, newListItem) => {
    setLists(lists.map(list => list._id !== listId ? list : {
      ...list,
      items: [
        ...list.items, {
          _id: v4(),
          value: newListItem
        }
      ]
    }))
  }

  return (
    <StyledLists>
      {lists.map(list => (
        <List
          key={list._id}
          title={list.title}
          items={list.items}
          addListItem={newListItem => addListItem(list._id, newListItem)}
        />
      ))}
    </StyledLists>
  )
}

const StyledLists = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-around;
  align-items: center;
`

export default Lists