import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ThemeScreen from "../componets/themePage";
import TestTemplate1 from "../componets/test_template_1";
import Landing from "../componets/landingPage";
import RoomReach from "../componets/roomReach";
import TestScreen from "../componets/testScreen";
import MultipleOptions from "../testTypes/multipleOptions"

const screens = {
    Home: {
        screen: Landing
    },
    Theme: {
        screen: ThemeScreen
    }, 
    Test: {
        screen: TestTemplate1
    },
    RoomReach: {
        screen: RoomReach
    },
    Screen: {
        screen: TestScreen
    },
    Profile: {
        screen: MultipleOptions
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);