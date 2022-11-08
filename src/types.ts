export interface signUpTypes  {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface signInTypes  {
  email: string;
  password: string;
};

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Wallet: undefined;
  Expenses: undefined;
};
