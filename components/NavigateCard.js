import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  // USING HOOK TO REACH DISPATCH OBJECT
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        {/* <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text> */}
        <View style={tw`border-t border-gray-200 flex-shrink`}>
          <View>
            {/* GOOGLE PLACES COMPONENT REFER TO HOMESCREEN.JS FOR ELABORATION*/}
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
                // console.log(data);
                // console.log(details);
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );
                navigation.navigate("RideOptionsCard");
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
            {/* onPress={(data, details = null) => {
                console.log(data);
                console.log(details);
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );
                navigation.navigate("RideOptionCard");
              }}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
            /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

// USING INLINE STYLES TO CHANGE NAVIGATE CARD INPUT FIELD PROPERTIES

// const toInputBoxStyles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     paddingTop: 20,
//     flex: 1,
//   },
//   textInput: {
//     backgroundColor: "#DDDDDF",
//     borderRadius: 0,
//     fontSize: 18,
//   },
//   textInputContainer: {
//     paddingHorizontal: 20,
//     paddingBottom: 0,
//   },
// });
