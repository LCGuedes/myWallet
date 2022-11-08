import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import SignUp from './src/screens/auth/signUp';
import SignIn from './src/screens/auth/signIn';

import Wallet from './src/screens/wallet';
import Expenses from './src/screens/expenses';

export default function App() {
  return (
    <View >
      {/* <StatusBar style="auto" /> */}
      <Expenses />
    </View>
  );
}

