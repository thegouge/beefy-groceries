import React, {useContext, useState} from 'react'

interface TodoContextInterface {
  list: [Object]
}

const TodoContext = React.createContext<TodoContextInterface | null>(null)

export const TodoProvider: React.FC<{}> = ({children}: {children?: ReactNode}) => {
  const [toDoList, setToDoList] = useState<[Object] | null>(null)

  return <TodoContext.Provider>{children}</TodoContext.Provider>
}

export function useToDoContext() {
  return useContext(TodoContext)
}