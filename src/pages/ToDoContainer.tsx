import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AddForm } from '../components/AddForm';
import { AppList } from '../components/AppList';
import { TodoItem } from '../lib/types';

interface Props {
	navigation: any;
}

export const ToDoContainer = ({ navigation }: Props) => {
	const [todoList, setTodoList] = useState<TodoItem[]>([]);

	function addItem(itemToAdd: string) {
		setTodoList([
			{ id: Date.now(), text: itemToAdd, checked: false },
			...todoList,
		]);
	}

	function toggleToDo(id: number) {
		const indexToToggle = todoList.findIndex((item) => item.id === id);
		setTodoList(
			todoList.map((item, index) => {
				if (index === indexToToggle) {
					return { ...item, checked: !item.checked };
				}
				return item;
			})
		);
	}

	return (
		<View>
			<Button onPress={() => navigation.navigate('Groceries')}>
				To Groceries
			</Button>
			<AddForm addFunction={addItem} />
			<AppList dataList={todoList} toggleChecked={toggleToDo} />
		</View>
	);
};
