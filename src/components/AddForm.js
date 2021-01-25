import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useToDoContext } from '../context/ToDoContext';

export const AddForm = () => {
	const [newItemText, setNewItemText] = useState('');

	const { addToDo } = useToDoContext();

	function handleSubmit() {
		addToDo({ text: newItemText, id: Date.now() });

		setNewItemText('');
	}

	return (
		<View style={{ padding: 10 }} testID="add-form-view">
			<TextInput
				style={{ height: 40, width: 200 }}
				placeholder="new item"
				onChangeText={(text) => setNewItemText(text)}
				value={newItemText}
			/>
			<Button title="submit" onPress={handleSubmit} />
		</View>
	);
};
