import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ThemeScreen from "../components/themePage";
import TestTemplate1 from "../components/test_template_1";
import Landing from "../components/landingPage";
import RoomReach from "../components/roomReach";
import TestScreen from "../components/testScreen";
import MultipleOptions from "../testTypes/multipleOptions"
import ScoreScreen from "../components/scoreScreen";
import MathTests from "../components/mathTests";
/* Purely for testing */
import TestCode from "../components/testingCode";

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
        screen: MathTests
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);