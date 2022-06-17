import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ThemeScreen from "../componets/themePage";
import TestScreen from "../componets/testScreen";
import Landing from "../componets/landingPage";

const screens = {
    Home: {
        screen: Landing
    },
    Theme: {
        screen: ThemeScreen
    }, 
    Test: {
        screen: TestScreen
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);