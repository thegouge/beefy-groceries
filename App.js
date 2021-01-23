// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { ToDoContainer } from './src/pages/ToDoContainer';

import { ToDoProvider } from './src/context/ToDoContext';

export default function App() {
	return (
		<PaperProvider>
			<View style={styles.container}>
				<ToDoProvider>
					<ToDoContainer />
				</ToDoProvider>
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
