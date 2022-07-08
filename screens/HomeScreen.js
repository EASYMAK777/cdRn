import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native-web";
import tw from "twrnc";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                {/* <Image
                style={{
                    width:100, height:100, resizeMode:'contain'
                }}
                source={{
                    uri:"https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg"
                }}>

                </Image> */}
                <Text style={tw`text-red-500 p-10`}>The Charlotte Driver</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});