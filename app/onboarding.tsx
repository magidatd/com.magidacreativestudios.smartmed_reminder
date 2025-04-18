import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Colours } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { setItem } from '@/utils/async-storage';

export default function OnboardingScreens() {
	const animation = useRef<LottieView>(null);

	const router = useRouter();

	const handleDone = () => {
		router.replace('/login/create-account');
		setItem('@smartmed:onboarded', '1');
	};

	const nextButton = ({ ...props }) => {
		return (
			<TouchableOpacity
				style={styles.rightButton}
				{...props}
			>
				<Text style={styles.navigationText}>Next</Text>
			</TouchableOpacity>
		);
	};

	const skipButton = ({ ...props }) => {
		return (
			<TouchableOpacity
				style={styles.leftButton}
				{...props}
			>
				<Text style={styles.navigationText}>Skip</Text>
			</TouchableOpacity>
		);
	};

	const doneButton = ({ ...props }) => {
		return (
			<TouchableOpacity
				style={styles.rightButton}
				{...props}
			>
				<Text style={styles.navigationText}>Done</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Onboarding
				onDone={handleDone}
				onSkip={handleDone}
				NextButtonComponent={nextButton}
				SkipButtonComponent={skipButton}
				DoneButtonComponent={doneButton}
				bottomBarHighlight={false}
				pages={[
					{
						backgroundColor: Colours.PRIMARY_LIGHT,
						image: (
							<View>
								<LottieView
									autoPlay
									ref={animation}
									style={styles.lottieViewContainer}
									source={require('../assets/lottie-annimations/tracking-tasks.json')}
								/>
							</View>
						),
						title: 'Track your medicine routine',
						subtitle: 'Stay consistent and organized. Monitor your doses,and keep your health on track.',
					},
					{
						backgroundColor: Colours.PRIMARY_LIGHT,
						image: (
							<View>
								<LottieView
									autoPlay
									ref={animation}
									style={styles.lottieViewContainer}
									source={require('../assets/lottie-annimations/all-in-app-2.json')}
								/>
							</View>
						),
						title: 'All in your phone!',
						subtitle:
							'Everything you need to stay on top of your health: from setting reminders to tracking your doses.',
					},
					{
						backgroundColor: Colours.PRIMARY_LIGHT,
						image: (
							<View>
								<LottieView
									autoPlay
									ref={animation}
									style={styles.lottieViewContainer}
									source={require('../assets/lottie-annimations/all-in-app-1.json')}
								/>
							</View>
						),
						title: 'Welcome to SmartMed!',
						subtitle: 'Our app helps you track your medications, set reminders, and stay organized.',
					},
					{
						backgroundColor: Colours.PRIMARY_LIGHT,
						image: (
							<View>
								<LottieView
									autoPlay
									ref={animation}
									style={styles.lottieViewContainer}
									source={require('../assets/lottie-annimations/happy-person-jump.json')}
								/>
							</View>
						),
						title: "Let's Start",
						subtitle:
							"Sign in or create your account if you don't have one yet to start managing and tracking your medicines right away!",
					},
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	lottieViewContainer: {
		width: 300,
		height: 300,
		backgroundColor: 'rgba(255, 255, 255, 0)',
	},
	rightButton: {
		padding: 8,
		borderRadius: 10,
		marginRight: 8,
		backgroundColor: Colours.TRANSPARENT_BACKGROUND,
		alignSelf: 'flex-end',
	},
	leftButton: {
		padding: 8,
		borderRadius: 10,
		marginLeft: 8,
		backgroundColor: Colours.TRANSPARENT_BACKGROUND,
		alignSelf: 'flex-start',
	},
	navigationText: {
		fontSize: 16,
		color: Colours.TEXT_WHITE,
	},
});
