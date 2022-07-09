import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Text style={tw`text-red-500 p-10`}>The Charlotte Driver Logo Here</Text>
            <View style={tw`p-5`}>
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

