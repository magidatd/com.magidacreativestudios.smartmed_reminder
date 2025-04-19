import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Colours } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { Text as DynamicText } from 'expo-dynamic-fonts';
import { Ionicons } from '@expo/vector-icons';

export default function CreateAccountSuccess() {
	const animation = useRef<LottieView>(null);
	const router = useRouter();

	return (
		<View style={styles.container}>
			<View style={styles.containerBackButton}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => router.replace('/login/create-account-password')}
				>
					<Ionicons
						name='chevron-back-outline'
						size={24}
						color={Colours.PRIMARY_DARK}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.lottieContainer}>
				<LottieView
					autoPlay
					ref={animation}
					style={styles.lottieViewContainer}
					source={require('../../assets/lottie-annimations/success.json')}
				/>
			</View>

			<View style={styles.innerSection}>
				<View style={styles.textContainer}>
					<DynamicText>Hurray!</DynamicText>
					<DynamicText>Your account is successfully created</DynamicText>
					<DynamicText>Thank you for registering, enjoy using the app.</DynamicText>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.continueButton}
						onPress={() => router.replace('/login/create-account-password')}
					>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	innerSection: {
		flex: 1,
		alignItems: 'center',
	},
	lottieContainer: {
		marginTop: 30,
		paddingHorizontal: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	lottieViewContainer: {
		width: 300,
		height: 300,
		backgroundColor: 'rgba(255, 255, 255, 0)',
	},
	containerBackButton: {
		paddingTop: 60,
		paddingLeft: 20,
	},
	backButton: {
		padding: 8,
		borderRadius: 10,
		marginLeft: 8,
		backgroundColor: Colours.BUTTON_BLUE_LIGHT,
		alignSelf: 'flex-start',
	},
	continueButton: {
		backgroundColor: Colours.PRIMARY_DARK,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		height: 50,
		borderRadius: 8,
		marginTop: 40,
	},
	textContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	buttonText: {
		color: Colours.TEXT_WHITE,
		fontSize: 16,
	},
	buttonContainer: {
		marginVertical: 50,
		width: '90%',
		alignItems: 'center',
	},
});
