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
          // CLIENT PRESSES BUTTON AND DETAILS ABOUT THE LOCATION GETS CONSOLE LOGGED IN THE BACKGROUND
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
            // SENDS INFORMATION FROM THE OBJECT TO THE "DATA LAYER" USING REDUX
            dispatch(
              // APP SAVES ORIGIN LOCATION INFORMATION IN REDUX "DATA LAYER"
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          // GETS DETAILS ABOUT USERS LOCATION. CITY STATE COUNTY LONG LAT ETC
          fetchDetails={true}
          // PRESSING RETURN KEY CAN ALSO START SEARCH
          returnKeyType={"search"}
          // CLIENT MUST HAVE AT LEAST ENTERED TWO DIGITS UNTIL AUTOCOMPLETE STARTS
          minLength={2}
          // REMOVES "POWERED BY GOOGLE" LOGO
          enablePoweredByContainer={false}
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
