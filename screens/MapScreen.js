import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/native-stack";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        {/* RENDERS MAP ON TOP HALF OF SCREEN */}
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        {/* RENDERS RIDE OPTIONS ON BOTTOM HALF OF SCREEN USING REACT-NAVIGATION  */}
        <Stack.Navigator>
          {/* CREATING A STACK OF SCREENS CALLED NAVIGATE CARD */}
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
