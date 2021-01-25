import React, { useState } from 'react'
import { View } from 'react-native'
import { AddForm } from '../components/AddForm'
import { AppList } from '../components/AppList'
import { TodoItem } from '../lib/types'

export const ToDoContainer = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  function addItem (itemToAdd: string) {
    setTodoList([{id: Date.now(), text: itemToAdd, checked: false}, ...todoList])
    
  }

  return (
    <View>
      <AddForm addFunction={addItem} />
      <AppList dataList={todoList} />
    </View>
  )
}
