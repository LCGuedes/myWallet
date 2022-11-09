import { StatusBar } from "expo-status-bar";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
