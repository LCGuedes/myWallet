import { NativeStackScreenProps } from "@react-navigation/native-stack";

export interface signUpTypes {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface signInTypes {
  email: string;
  password: string;
}

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Wallet: undefined;
  Expenses: undefined;
  addExpenses: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
