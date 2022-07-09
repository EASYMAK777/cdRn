
import React from "react";
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";


// 1. Set up Redux


// View -> UIView
export default function App() {
  
  
  return (
   
    <Provider store={store}>
    <NavigationContainer>

      <SafeAreaProvider>

       <HomeScreen/>
      </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
      

      
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
