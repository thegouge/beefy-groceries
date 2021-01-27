import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppList } from '../components/AppList';
import { GroceryItem } from '../lib/types';

interface Props {
	navigation: NavigationProp<any>;
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
			<Button title="To Todos" onPress={() => navigation.navigate('ToDo')} />
			<AppList
				dataList={groceryList}
				toggleChecked={toggleGrocery}
				addFunction={addItem}
			/>
		</View>
	);
};
