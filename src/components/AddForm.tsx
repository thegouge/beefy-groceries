import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface Props {
	addFunction: (arg: string) => void;
}

export const AddForm = ({ addFunction }: Props) => {
	const [newItemText, setNewItemText] = useState('');

	const handleSubmit = () => {
		if (newItemText === '') {
			return;
		}
		addFunction(newItemText);
		setNewItemText('');
	};

	return (
		<View style={{ padding: 5 }} testID="add-form-view">
			<TextInput
				style={{ margin: 5 }}
				label="new item"
				onChangeText={(text: string) => setNewItemText(text)}
				value={newItemText}
			/>
			<Button onPress={handleSubmit} mode="contained" style={{ margin: 10 }}>
				Submit
			</Button>
		</View>
	);
};
