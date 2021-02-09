import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GroceryContainer } from './src/pages/GroceryContainer';
import { PantryContainer } from './src/pages/PantryContainer';
import { ToDoContainer } from './src/pages/ToDoContainer';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Tab = createBottomTabNavigator();

export default function App() {
	function goSettings() {}

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<NavigationContainer>
					<Tab.Navigator
						initialRouteName="Groceries"
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName = '';
								switch (route.name) {
									case 'ToDo':
										iconName = 'list';
										break;

									case 'Groceries':
										iconName = 'basket';
										break;

									case 'Pantry':
										iconName = 'home';
										break;

									default:
										break;
								}

								if (!focused) iconName += '-outline';

								return <Ionicons name={iconName} size={size} color={color} />;
							},
						})}>
						<Tab.Screen name="ToDo" component={ToDoContainer} />
						<Tab.Screen name="Pantry" component={PantryContainer} />
						<Tab.Screen name="Groceries" component={GroceryContainer} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
