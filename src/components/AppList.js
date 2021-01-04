import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});

export const AppList = ({ dataList }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={dataList}
				renderItem={({ item }) => {
					const { text, key } = item;

					return (
						<Text style={styles.item} key={key}>
							{text}
						</Text>
					);
				}}
			/>
		</View>
	);
};
