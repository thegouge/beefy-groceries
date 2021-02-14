import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppList } from '../components/AppList';
import { HeaderComponent } from '../components/HeaderComponent';
import { GroceryItem } from '../lib/types';

interface Props {
	navigation: NavigationProp<any>;
}
export const GroceryContainer = ({ navigation }: Props) => {
	const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

	function addItem(itemToAdd: string) {
		setGroceryList([
			{
				id: Date.now(),
				text: itemToAdd,
				checked: false,
				qty: 1,
				price: '0.00',
			},
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

	function updateGroceryItem(newItem: GroceryItem) {
		setGroceryList(
			groceryList.map((item) => {
				if (newItem.id === item.id) {
					return newItem;
				}
				return item;
			})
		);
	}

	return (
		<View>
			<HeaderComponent />
			<AppList
				dataList={groceryList}
				toggleChecked={toggleGrocery}
				addFunction={addItem}
				updateFunction={updateGroceryItem}
			/>
		</View>
	);
};
