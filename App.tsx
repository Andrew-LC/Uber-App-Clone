import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <HomeScreen />
            </NativeBaseProvider >
        </Provider >
    );
}
