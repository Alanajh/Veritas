import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';

// SCREENS //
import TestScreen from "./testScreen";
import ThemeScreen from "./themePage";
import MultipleOptions from "../testTypes/multipleOptions"


const navigator = createNativeStackNavigator({
    Intro: TestScreen,
    Theme: ThemeScreen,
    Profile: MultipleOptions,
},
{
    initialRouteName: 'Intro',
}
);

export default createAppContainer(navigator);