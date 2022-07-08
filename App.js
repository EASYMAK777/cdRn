
import React from "react";
import { StyleSheet, Text, View, } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";

// 1. Set up Redux


// View -> UIView
export default function App() {
  
  
  return (
   
    <Provider store={store}>
      <Text>

       <HomeScreen/>
      </Text>
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
