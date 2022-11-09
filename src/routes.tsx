import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import Wallet from "./screens/wallet";
import Expenses from "./screens/expenses";
import addExpenses from "./screens/addExpenses";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Wallet"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="addExpenses" component={addExpenses} />
        <Stack.Screen name="Expenses" component={Expenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
