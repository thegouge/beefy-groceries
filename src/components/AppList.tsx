import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Checkbox, Title } from 'react-native-elements';
import { GroceryItem, TodoItem } from '../lib/types';

interface Props {
	dataList: TodoItem[] | GroceryItem[];
	toggleChecked: (arg: number) => void;
}

export const AppList = ({ dataList, toggleChecked }: Props) => {
	return (
		<ScrollView>
			{dataList.map((item: TodoItem | GroceryItem) => (
				<View>
					<Card
						key={`todo-${item.id}`}
						onPress={() => {
							toggleChecked(item.id);
						}}>
						<Card.Content>
							<Title>
								<Checkbox status={item.checked ? 'checked' : 'unchecked'} />
								<Text>{item.text}</Text>
							</Title>
						</Card.Content>
					</Card>
				</View>
			))}
		</ScrollView>
	);
};
