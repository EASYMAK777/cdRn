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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaView style={tw`bg-white flex-1`}>
        <View>
          {/* <Text style={tw`text-center py-5 text-xl`}>Good Morning, User</Text> */}
          <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
              {/* GOOGLE PLACES COMPONENT REFER TO HOMESCREEN.JS FOR ELABORATION*/}
              <GooglePlacesAutocomplete
                placeholder="Where to?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                  dispatch(
                    setDestination({
                      location: details.geometry.location,
                      description: data.description,
                    })
                  );
                  navigation.navigate("RideOptionsCard");
                }}
                enablePoweredByContainer={false}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NavigateCard;

// USING INLINE STYLES TO CHANGE NAVIGATE CARD INPUT FIELD PROPERTIES

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
