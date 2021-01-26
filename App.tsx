import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { GroceryContainer } from './src/pages/GroceryContainer';
import { ToDoContainer } from './src/pages/ToDoContainer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Stack = createStackNavigator();

export default function App() {
	return (
		<ThemeProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Groceries">
					<Stack.Screen name="ToDo" component={ToDoContainer} />
					<Stack.Screen
						name="Groceries"
						component={GroceryContainer}></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}
