import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import Wallet from "./screens/wallet";


const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Wallet' component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;
