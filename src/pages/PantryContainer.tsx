import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppList } from '../components/AppList';
import { GroceryItem } from '../lib/types';

interface Props {
	navigation: NavigationProp<any>;
}

export const PantryContainer = ({ navigation }: Props) => {
	const [pantryList, setPantryList] = useState<GroceryItem[]>([]);

	function addItem(itemToAdd: string) {
		setPantryList([
			{ id: Date.now(), text: itemToAdd, checked: false },
			...pantryList,
		]);
	}

	function toggleItem(id: number) {
		const indexToToggle = pantryList.findIndex((item) => item.id === id);
		setPantryList(
			pantryList.map((item, index) => {
				if (index === indexToToggle) {
					return { ...item, checked: !item.checked };
				}
				return item;
			})
		);
	}

	return (
		<View>
			<Button
				title="To Groceries"
				onPress={() => navigation.navigate('Groceries')}
			/>
			<AppList
				dataList={pantryList}
				toggleChecked={toggleItem}
				addFunction={addItem}
			/>
		</View>
	);
};
