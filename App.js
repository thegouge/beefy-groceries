import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AddForm } from './src/components/AddForm';
import { AppList } from './src/components/AppList';

export default function App() {
	return (
		<PaperProvider>
			<View style={styles.container}>
				<StatusBar style="auto" />
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
