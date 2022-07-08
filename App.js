
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from "react-redux";

// 1. Set up Redux


// View -> UIView
export default function App() {
  
  // This is the main App component
  return (
    // Provider adds a data layer to App which allows to store Client location information that can be used throughout the app
    <Provider store = {store}>
      <SafeAreaView style={styles.container}>
        <Text>THe Charlotte Driver</Text>
      </SafeAreaView>
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
