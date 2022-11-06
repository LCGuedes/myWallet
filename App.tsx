import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import SignUp from './src/screens/auth/signUp';

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <SignUp />
    </View>
  );
}

