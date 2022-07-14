// REACT AND NPM IMPORTS
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

// HOMESCREEN COMPONENT IS FUNTIONAL COMPONENT
const HomeScreen = () => {
  // USING REACT REDUX DISPATCH FUNCTION--->REFER TO LINE 38-40 AT THE ONPRESS EVENT
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* THIS IS THE PLACE WHERE THE LOGO SHOULD GO */}
      <Text style={tw`text-red-500 p-10`}>The Charlotte Driver Logo Here</Text>
      <View style={tw`p-5`}>
        {/* GOOGLE PLACES COMPONENT */}

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
