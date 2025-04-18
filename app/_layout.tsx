import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';
import { SQLiteProvider, openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '@/drizzle/migrations';

export const DATABASE_NAME = 'smartmed_db';

export default function RootLayout() {
	const expoDb = openDatabaseSync(DATABASE_NAME);
	const db = drizzle(expoDb);
	const { success, error } = useMigrations(db, migrations);

	return (
		<Suspense fallback={<ActivityIndicator size='large' />}>
			<SQLiteProvider
				databaseName={DATABASE_NAME}
				options={{ enableChangeListener: true }}
				useSuspense
			>
				<StatusBar style='auto' />
				<Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
					<Stack.Screen name='(tabs)' />
					<Stack.Screen name='onboarding' />
				</Stack>
			</SQLiteProvider>
		</Suspense>
	);
}
