import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "react-native";
import Navigator from './routes/homeStack'

//SCREENS //
//import ThemeScreen from "./componets/themePage";
//import TestScreen from "./componets/testScreen";
//import Landing from "./componets/landingPage";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Navigator/>
   /*  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={({ navigation }) => ({
            title: 'Awesome app',
            headerLeft: () => (
              <Button  title={"< Back"} onPress={() => navigation.navigate('LandingPage')} />
            ),
          })}
          />
        <Stack.Screen
          name="LandingPage"
          component={TestScreen}
          options={{ title: 'Landing' }}
        />
    </Stack.Navigator>
  
    </NavigationContainer> */
  );
}