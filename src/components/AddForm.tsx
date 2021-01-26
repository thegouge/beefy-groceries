import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';

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
			<Input
				style={{ margin: 5 }}
				label="new item"
				onChangeText={(text: string) => setNewItemText(text)}
				value={newItemText}
			/>
			<Button onPress={handleSubmit} style={{ margin: 10 }}>
				Submit
			</Button>
		</View>
	);
};
