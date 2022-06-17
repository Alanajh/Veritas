import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

// SCREENS //
import TestScreen from "./testScreen";
import ThemeScreen from "./themePage";


const navigator = createNativeStackNavigator({
    Intro: TestScreen,
    Theme: ThemeScreen,
},
{
    initialRouteName: 'Intro',
}
);

export default createAppContainer(navigator);