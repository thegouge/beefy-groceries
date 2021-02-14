import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
	Button,
	CheckBox,
	Icon,
	Input,
	ListItem,
	Overlay,
} from 'react-native-elements';
import { GroceryItem, TodoItem } from '../lib/types';

interface Props {
	dataList: (TodoItem | GroceryItem)[];
	toDos?: boolean;
	toggleChecked: (arg: number) => void;
	addFunction: (arg: string) => void;
	updateFunction: (arg: TodoItem | GroceryItem) => void;
}

const defaultItem = {
	id: 0,
	text: '',
	price: '',
	qty: 1,
	checked: false,
};

export const AppList = ({
	dataList,
	toDos = false,
	toggleChecked,
	addFunction,
	updateFunction,
}: Props) => {
	const [newItemText, setNewItemText] = useState('');
	const [overlay, toggleOverlay] = useState(false);
	const [itemToEdit, setItemToEdit] = useState<GroceryItem>(defaultItem);

	const handleSubmit = () => {
		if (newItemText === '') {
			return;
		}
		addFunction(newItemText);
		setNewItemText('');
	};

	const openEditor = (item: GroceryItem) => {
		setItemToEdit(item);
		toggleOverlay(true);
	};

	const closeEditor = () => {
		toggleOverlay(false);
		setItemToEdit(defaultItem);
	};

	const saveEdits = (newItem: GroceryItem) => {
		updateFunction(newItem);
		closeEditor();
	};

	return (
		<View style={{ padding: 5 }} testID="add-form-view">
			<View>
				<Input
					style={{ margin: 5 }}
					placeholder="new item"
					onChangeText={(text: string) => setNewItemText(text)}
					value={newItemText}
					rightIcon={<Icon name="check" onPress={handleSubmit} />}
				/>
			</View>

			<Overlay isVisible={overlay} onBackdropPress={closeEditor}>
				<View>
					<Input
						label="name"
						value={itemToEdit.text}
						onChangeText={(text: string) => {
							setItemToEdit({ ...itemToEdit, text: text });
						}}
					/>
					<Input
						label="price"
						value={itemToEdit.price}
						leftIcon={{ type: 'font-awesome', name: 'dollar' }}
						keyboardType="numeric"
						onChangeText={(text: any) => {
							console.log(text);
							setItemToEdit({ ...itemToEdit, price: text });
						}}
					/>
					<Input
						label="quantity"
						value={`${itemToEdit.qty}`}
						keyboardType="numeric"
						onChangeText={(text: any) => {
							console.log(text);
							setItemToEdit({ ...itemToEdit, qty: text });
						}}
					/>
					<Button title="save" onPress={() => saveEdits(itemToEdit)} />
				</View>
			</Overlay>

			<ScrollView>
				{dataList.map((item: TodoItem | GroceryItem) => (
					<ListItem
						key={item.id}
						onPress={() => (toDos ? null : openEditor(item))}>
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
