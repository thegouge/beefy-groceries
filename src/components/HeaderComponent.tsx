import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Header } from 'react-native-elements';

export const HeaderComponent = () => {
	const route = useRoute();

	function goSettings() {}

	return (
		<Header
			leftComponent={{
				icon: 'settings',
				color: '#fff',
				onPress: goSettings,
			}}
			centerComponent={{
				text: `${route.name}`,
				style: { color: '#fff' },
			}}
		/>
	);
};
