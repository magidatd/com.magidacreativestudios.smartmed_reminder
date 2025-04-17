import React, { useEffect } from 'react';
import { Animated, Text, StyleSheet, useAnimatedValue, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colours } from '@/constants/Colors';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}
