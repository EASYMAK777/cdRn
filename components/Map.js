import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const Map = () => {
  // USING REACT REDUX TO PULL FROM DATALAYER FROM STORE JS TO SHOW MAP OF USERS LOCATION
  const origin = useSelector(selectOrigin);
  return (
    // MAPVEW COMPONENET FROM  REACT-NATIVVE-MAPS DEPENDENCU
    <MapView
      // STYLING CONTAINER SO MAP CAN RENDER
      style={tw`flex-1`}
      //   MUTED STANDARD TYPE MAP REMOVES ALL IRRELEVANT ICONS
      mapType="mutedStandard"
      //   USES GOOGLE LOCATION API INFORMATION STORED IN STORE.JS FILE TO PULL FROM DATALAYER USING REACT REDUX RECUDUERS AND USESELECTOR FUNCTIONS TO DISPLAY USERS ORIGIN LONG AND LAT ON A MAP
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        // BRINGS ZOOM LEVEL TO A CLOSER STREETVIEW LOOK OF THE MAPSCREEN
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/* OPTIONAL CHAINING USED SO APP DOESNT CRASH WHEN A PIN CANT BE DROPPED IN A LOCATION */}
      {origin?.location && (
        <Marker
          // RENDER MAP MARKER USING STORE.JS DATA LAYER WITH REACT REDUX AS ANOTHER OBJECT
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          //   ADDS IDENTIFIER TO ORIGIN PIN INCLUDING ADDRESS INFORMATION
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});