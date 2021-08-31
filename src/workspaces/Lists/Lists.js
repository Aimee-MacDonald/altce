import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import List from './List/List'

export const Lists = () => {
  const [ lists, setLists ] = useState([])
  const [ refresh, setRefresh ] = useState(false)

  useEffect(() => {
    if(typeof localStorage.lists !== 'undefined'){
      setLists(JSON.parse(localStorage.getItem('lists')))
    }
  }, [ refresh ])

  const addListItem = (listId, newListItem) => {
    const newLists = lists.map(list => list._id !== listId ? list : {
      ...list,
      items: [
        ...list.items, {
          _id: v4(),
          value: newListItem
        }
      ]
    })

    setLists(newLists)
    localStorage.setItem('lists', JSON.stringify(newLists))
  }

  const refreshLists = () => setRefresh(!refresh)

  const destroyList = listId => {
    const newLists = lists.filter(list => list._id !== listId)
    setLists(newLists)
    localStorage.setItem('lists', JSON.stringify(newLists))
  }

  const destroyListItem = (listId, itemId) => {
    const newLists = lists.map(list => list._id !== listId ? list : {
      ...list,
      items: list.items.filter(item => item._id !== itemId)
    })

    setLists(newLists)
    localStorage.setItem('lists', JSON.stringify(newLists))
  }

  return (
    <StyledLists>
      <button onClick={refreshLists}>Refresh</button>
      {lists.map(list => (
        <List
          key={list._id}
          title={list.title}
          items={list.items}
          addListItem={newListItem => addListItem(list._id, newListItem)}
          destroyListItem={itemId => destroyListItem(list._id, itemId)}
          destroyList={() => destroyList(list._id)}
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