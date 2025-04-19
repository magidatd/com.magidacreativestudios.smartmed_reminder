import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	SafeAreaView,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
} from 'react-native';
import React from 'react';
import { Text as DynamicText } from 'expo-dynamic-fonts';
import { Ionicons } from '@expo/vector-icons';
import { Colours } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}
			>
				<ScrollView>
					<View style={styles.containerBackButton}>
						<TouchableOpacity style={styles.backButton}>
							<Ionicons
								name='chevron-back-outline'
								size={24}
								color={Colours.PRIMARY_DARK}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.innerSection}>
						<View style={styles.headerContainer}>
							<DynamicText style={styles.headerText}>Create Account</DynamicText>
							<DynamicText style={styles.subHeaderText}>
								Fill in information below to create your account.
							</DynamicText>
						</View>

						<View style={styles.card}>
							<View style={styles.inputContainer}>
								<Ionicons
									name='mail-outline'
									size={24}
								/>
								<TextInput
									placeholder='Email'
									style={styles.input}
									autoFocus={true}
									autoCapitalize='none'
									keyboardType='email-address'
									autoComplete='email'
									autoCorrect={false}
								/>
							</View>
							<TouchableOpacity
								style={styles.continueButton}
								onPress={() => router.replace('/login/create-account-password')}
							>
								<Text style={styles.buttonText}>Continue</Text>
							</TouchableOpacity>
						</View>
						<DynamicText style={styles.textSmall}>or</DynamicText>
						<View style={styles.card}>
							<TouchableOpacity style={styles.brandButton}>
								<Ionicons
									name='logo-google'
									size={24}
									color='black'
									style={styles.icon}
								/>
								<Text style={styles.buttonTextBrand}>Continue with Google</Text>
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity
						style={styles.textContainer}
						onPress={() => router.replace('/login/signin')}
					>
						<DynamicText style={styles.textHaveAccount}>Already have an account? </DynamicText>
						<DynamicText style={styles.textSignIn}>Sign in</DynamicText>
					</TouchableOpacity>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
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
	headerContainer: {
		paddingTop: 30,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: Colours.PRIMARY_DARK,
	},
	subHeaderText: {
		paddingTop: 10,
		fontSize: 16,
		color: Colours.TEXT_GRAY,
	},
	card: {
		marginVertical: 50,
		width: '90%',
		alignItems: 'center',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: 50,
		backgroundColor: Colours.INPUT_BLUE,
		borderRadius: 8,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	input: {
		flex: 1,
		height: '100%',
	},
	continueButton: {
		backgroundColor: Colours.PRIMARY_DARK,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		height: 50,
		borderRadius: 8,
	},
	buttonText: {
		color: Colours.TEXT_WHITE,
		fontSize: 16,
	},
	textSmall: {
		fontSize: 14,
		color: Colours.TEXT_GRAY,
	},
	brandButton: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		height: 50,
		borderRadius: 8,
		borderColor: Colours.PRIMARY_DARK,
		borderWidth: 1,
	},
	icon: {
		marginRight: 5,
	},
	buttonTextBrand: {
		color: Colours.TEXT_NORMAL,
		fontSize: 16,
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 20,
	},
	textHaveAccount: {
		fontSize: 16,
		color: Colours.TEXT_GRAY,
	},
	textSignIn: {
		fontSize: 16,
		color: Colours.PRIMARY_DARK,
	},
});
