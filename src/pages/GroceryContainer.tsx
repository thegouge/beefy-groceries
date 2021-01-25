import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { AddForm } from '../components/AddForm';
import { AppList } from '../components/AppList';
import { GroceryItem } from '../lib/types';

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const GroceryContainer = ({ navigation }: Props) => {
	const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

	function addItem(itemToAdd: string) {
		setGroceryList([
			{ id: Date.now(), text: itemToAdd, checked: false },
			...groceryList,
		]);
	}

	function toggleGrocery(id: number) {
		const indexToToggle = groceryList.findIndex((item) => item.id === id);
		setGroceryList(
			groceryList.map((item, index) => {
				if (index === indexToToggle) {
					return { ...item, checked: !item.checked };
				}
				return item;
			})
		);
	}

	return (
		<View>
			<Button onPress={() => navigation.navigate('ToDo')} mode="contained">
				To Todos
			</Button>
			<AddForm addFunction={addItem} />
			<AppList dataList={groceryList} toggleChecked={toggleGrocery} />
		</View>
	);
};
