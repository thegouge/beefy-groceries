import React from 'react';
import { View } from 'react-native';

import { AddForm } from '../components/AddForm';
import { AppList } from '../components/AppList';

import { useToDoContext } from '../context/ToDoContext';

export const ToDoContainer = () => {
	const { toDoList } = useToDoContext();
	return (
		<View>
			<AddForm />
			<AppList dataList={toDoList} />
		</View>
	);
};
