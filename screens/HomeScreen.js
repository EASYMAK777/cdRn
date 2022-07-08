import React from "react";
import {  Text, SafeAreaView, View } from "react-native-web";
import tw from "twrnc";
import NavOptions from "../components/navOptions";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Text style={tw`text-red-500 p-10`}>The Charlotte Driver Logo Here</Text>
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

