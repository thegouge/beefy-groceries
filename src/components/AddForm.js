import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export const AddForm = () => {
	const [newItemText, setNewItemText] = useState('');
	return (
		<View style={{ padding: 10 }}>
			<TextInput
				style={{ height: 40, width: 200 }}
				placeholder="new item"
				onChangeText={(text) => setNewItemText(text)}
				defaultValue={newItemText}
			/>
			<Text style={{ padding: 10, width: 200 }}>{newItemText}</Text>
		</View>
	);
};
