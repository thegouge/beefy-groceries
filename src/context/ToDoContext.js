import React, { useState, useContext } from 'react';

const ToDoContext = React.createContext();

export function ToDoProvider({ children }) {
	const [toDoList, setToDoList] = useState([]);

	function addToDo(itemToAdd) {
		setToDoList([itemToAdd, ...toDoList]);
	}

	return (
		<ToDoContext.Provider value={{ toDoList, addToDo }}>
			{children}
		</ToDoContext.Provider>
	);
}

export function useToDoContext() {
	return useContext(ToDoContext);
}
