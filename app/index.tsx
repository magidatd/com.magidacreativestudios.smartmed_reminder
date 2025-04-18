import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, useAnimatedValue, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Colours } from '@/constants/Colors';
import { Text as DynamicText } from 'expo-dynamic-fonts';
import { getItem } from '@/utils/async-storage';

export default function Index() {
	const fadeAnim = useAnimatedValue(0);
	const scaleAnim = useAnimatedValue(0.5);
	const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

	const router = useRouter();

	useEffect(() => {
		const fadeAnimation = Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		});

		const scaleAnimation = Animated.spring(scaleAnim, {
			toValue: 1,
			tension: 10,
			friction: 2,
			useNativeDriver: true,
		});

		Animated.parallel([fadeAnimation, scaleAnimation]).start();

		checkIfAlreadyOnboarded();

		const timer = setTimeout(() => {
			if (showOnboarding) {
				router.replace('/onboarding');
			} else {
				router.replace('/login/signin');
			}
		}, 8000);

		return () => clearTimeout(timer);
	}, [showOnboarding]);

	const checkIfAlreadyOnboarded = async () => {
		const onboarded = await getItem('@smartmed:onboarded');

		if (onboarded === null) {
			setShowOnboarding(true);
		} else {
			setShowOnboarding(false);
		}
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.outerContainer}
				colors={[Colours.PRIMARY_LIGHT, Colours.PRIMARY_DARK]}
			>
				<View style={styles.innerContainer}>
					<View style={styles.iconContainer}>
						<Animated.View style={[styles.iconContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
							<Image
								source={require('../assets/images/smartmed.png')}
								style={styles.image}
							/>
						</Animated.View>
					</View>
				</View>

				<View style={styles.textContainer}>
					<DynamicText style={styles.textHeader}>SmartMed</DynamicText>
					<DynamicText style={styles.textSubHeader}>Reminder</DynamicText>
				</View>
				<DynamicText style={styles.textCopyright}>Magida Creative Studios © 2025</DynamicText>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	outerContainer: {
		flex: 1,
		alignItems: 'center',
	},
	iconContainer: {
		borderRadius: 100,
		backgroundColor: Colours.TRANSPARENT_BACKGROUND,
	},
	image: {
		width: 110,
		height: 100,
		objectFit: 'cover',
	},
	innerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textContainer: {
		paddingBottom: 50,
		alignItems: 'center',
	},
	textHeader: {
		textAlign: 'center',
		fontSize: 30,
		color: Colours.TEXT_OPACITY,
		textTransform: 'uppercase',
	},
	textSubHeader: {
		fontSize: 18,
		color: Colours.TEXT_WHITE,
	},
	textCopyright: {
		paddingBottom: 20,
		color: Colours.TEXT_WHITE,
		fontSize: 12,
	},
});
