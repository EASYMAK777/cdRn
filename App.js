
import React from "react";
import { StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "../charlotteDriver/screens/MapScreen"
import FoodScreen from "../charlotteDriver/screens/FoodScreen"
import DriveMyCar from "../charlotteDriver/screens/DriveMyCar"

// 1. Set up Redux


// View -> UIView
export default function App() {
  const Stack = createNativeStackNavigator();
  
  
  return (
   
    <Provider store={store}>
    <NavigationContainer>

      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name='FoodScreen'
          component={FoodScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name='DriveMyCar'
          component={DriveMyCar}
          options={{
            headerShown: false,
          }}
          />
          
        </Stack.Navigator>

       
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
