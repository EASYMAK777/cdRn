// REACT AND NPM IMPORTS
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

// HOMESCREEN COMPONENT IS FUNTIONAL COMPONENT
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* THIS IS THE PLACE WHERE THE LOGO SHOULD GO */}
      <Text style={tw`text-red-500 p-10`}>The Charlotte Driver Logo Here</Text>
      <View style={tw`p-5`}>
        {/* GOOGLE PLACES COMPONENT */}
        <GooglePlacesAutocomplete
          placeholder="Pick up address"
          styles={{
            container: {
              flex: 0,
            },
            // TEXT INPUT FIELD FOR CLIENT ADDRESS INFO
            textInput: {
              fontSize: 18,
            },
          }}
          // QUERY ATTRIBUTE TO PASS API KEY AND QUERTY GOOGLE
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          // ATTRIBUTE THAT USES NEARBY PLACES API TO AUTOFILL ADDRESSES CLOSE TO CLIENT
          nearbyPlacesAPI="GooglePlacesSearch"
          // TAKES 400MS AFTER CLIENT STOPS TYPING TO PULL UP THE VARIOUS LOCATIONS FOR AUTOFILL
          debounce={400}
        />
        {/* NAV MENU ITEMS */}
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
