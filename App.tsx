import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import store from './src/redux/store';
import { Provider } from 'react-redux';

import SignUp from './src/screens/auth/signUp';
import SignIn from './src/screens/auth/signIn';

import Wallet from './src/screens/wallet';

export default function App() {
  return (
    <Provider store={store}>
      <View >
      <StatusBar style="auto" />
      <Wallet />
    </View>
    </Provider>
  );
}

