import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, CheckBox, Input, ListItem } from 'react-native-elements';
import { GroceryItem, TodoItem } from '../lib/types';

interface Props {
	dataList: TodoItem[] | GroceryItem[];
	toggleChecked: (arg: number) => void;
	addFunction: (arg: string) => void;
}

export const AppList = ({ dataList, toggleChecked, addFunction }: Props) => {
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
			<Button title="Submit" onPress={handleSubmit} style={{ margin: 10 }} />

			<ScrollView>
				{dataList.map((item: TodoItem | GroceryItem) => (
					<ListItem key={item.id}>
						<ListItem.Content>
							<ListItem.Title>
								<CheckBox
									checked={item.checked}
									onPress={() => toggleChecked(item.id)}
								/>
								{item.text} x 1
							</ListItem.Title>
							<ListItem.Subtitle>price</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				))}
			</ScrollView>
		</View>
	);
};
