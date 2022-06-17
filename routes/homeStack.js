import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ThemeScreen from "../componets/themePage";
import TestScreen from "../componets/testScreen";
import Landing from "../componets/landingPage";
import Tests from "../componets/tests";
import RoomReach from "../componets/roomReach";

const screens = {
    Home: {
        screen: Landing
    },
    Theme: {
        screen: ThemeScreen
    }, 
    Test: {
        screen: Tests
    },
    RoomReach: {
        screen: RoomReach
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);