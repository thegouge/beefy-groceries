import { NavigationProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppList } from '../components/AppList';
import { HeaderComponent } from '../components/HeaderComponent';
import { GroceryItem } from '../lib/types';

interface Props {
	navigation: NavigationProp<any>;
}

export const PantryContainer = ({ navigation }: Props) => {
	const [pantryList, setPantryList] = useState<GroceryItem[]>([]);
	const route = useRoute();

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

	function goSettings() {}

	return (
		<View>
			<HeaderComponent />
			<AppList
				dataList={pantryList}
				toggleChecked={toggleItem}
				addFunction={addItem}
			/>
		</View>
	);
};
