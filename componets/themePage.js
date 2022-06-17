import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//SCREENS //
/* import IntroScreen from "./componets/introScreen";
import TestScreen from "./componets/testScreen";
import Landing from "./componets/landingPage";
 */
const Stack = createNativeStackNavigator();

export default function ThemeScreen() {
  const [theme, setTheme] = useState(styles.themeOlives);
  const [containerTheme, setContainerTheme] = useState(styles.containerOlives);
  const [btnTxt, setText] = useState(styles.textOlive);

  const oliveTheme = () => {
    setContainerTheme(styles.containerOlives);
    setTheme(styles.themeOlives);
    setText(styles.textOlive);
  };
  const pleasantTheme = () => {
    setContainerTheme(styles.containerPleasant);
    setTheme(styles.themePleasant);
    setText(styles.textPleasant);
  };
  const powderTheme = () => {
    setContainerTheme(styles.containerPowder);
    setTheme(styles.themePowder);
    setText(styles.textPowder);
  };
  const plumTheme = () => {
    setContainerTheme(styles.containerPlum);
    setTheme(styles.themePlum);
    setText(styles.textPlum);
  };

  const freshTheme = () => {
    setContainerTheme(styles.containerFresh);
    setTheme(styles.themeFresh);
    setText(styles.textFresh);
  };

  const chiliTheme = () => {
    setContainerTheme(styles.containerChili);
    setTheme(styles.themeChili);
    setText(styles.textChili);
  };

  const mutedTheme = () => {
    setContainerTheme(styles.containerMuted);
    setTheme(styles.themeMuted);
    setText(styles.textMuted);
  };

  const seaMintTheme = () => {
    setContainerTheme(styles.containerSeaMint);
    setTheme(styles.themeSeaMint);
    setText(styles.textSeaMint);
  };

  const daisyStemTheme = () => {
    setContainerTheme(styles.containerDaisyStem);
    setTheme(styles.themeDaisyStem);
    setText(styles.textDaisyStem);
  };

  const schoolTheme = () => {
    setContainerTheme(styles.containerSchool);
    setTheme(styles.themeSchool);
    setText(styles.textSchool);
  };
  return (
    <View style={containerTheme}>
      <Button title="back"/>
      {/* <TestScreen /> */}
      <TouchableOpacity style={theme} id={1} onPress={() => oliveTheme()}>
        <Text style={btnTxt}>Olives</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={theme} id={2} onPress={() => pleasantTheme()}>
        <Text style={btnTxt}>Pleasant</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={theme} id={3} onPress={() => powderTheme()}>
        <Text style={btnTxt}>Powder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={4} onPress={() => freshTheme()}>
        <Text style={btnTxt}>Fresh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={5} onPress={() => chiliTheme()}>
        <Text style={btnTxt}>Chili</Text>
      </TouchableOpacity>
     {/*  <TouchableOpacity style={theme} id={6} onPress={() => mutedTheme()}>
        <Text style={btnTxt}>Muted</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={theme} id={7} onPress={() => plumTheme()}>
        <Text style={btnTxt}>Plum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={8} onPress={() => seaMintTheme()}>
        <Text style={btnTxt}>Sea Mint</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={9} onPress={() => daisyStemTheme()}>
        <Text style={btnTxt}>Daisy Stem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={10} onPress={() => schoolTheme()}>
        <Text style={btnTxt}>School</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
    justifyContent: "center",
    height: '100%',
    width: '100%',
  },
  containerChili: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(98, 110, 96)",
    justifyContent: "center"
  },
  containerDaisyStem: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(205, 163, 79)",
    justifyContent: "center"
  },
  containerFresh: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(74, 189, 172)",
    justifyContent: "center"
  },
  containerMuted: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(221, 201, 193)",
    justifyContent: "center"
  },
  containerOlives: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(103, 67, 58)",
    justifyContent: "center", 
    width: '100%',
    height: '200%'
  },
  containerPleasant: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(169, 183, 192)",
    justifyContent: "center"
  },
  containerPlum: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(148, 97, 142)",
    justifyContent: "center"
  },
  containerPowder: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(254, 220, 210)",
    justifyContent: "center"
  },
  containerSchool: {},
  containerSeaMint: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(234, 227, 234)",
    justifyContent: "center"
  },
  // text color 
  textChili: {
    color: "rgb(175, 71, 60)",
    textAlign: 'center'
  },
  textDaisyStem: {
    color: 'rgb(233, 231,210)',
    textAlign: 'center'
  },
  textFresh: {
    color: 'white',
    textAlign: 'center'
  },
  textMuted: {
    color: "yellow",
    textAlign: 'center'
  },
  textOlive: {
    color: "green",
    textAlign: 'center'
  },
  textPleasant: {
    color: "rgb(239, 217, 193)",
    textAlign: 'center'
  },
  textPlum: {
    color: "rgb(73, 39, 74)",
    textAlign: 'center'
  },
  textPowder: {
    color: "rgb(143, 216, 210)",
    textAlign: 'center'
    
  },
  textSchool: {
    backgroundColor: "rgb(143, 216, 210)",
    textAlign: 'center'
  },
  textSeaMint: {
    color: "rgb(143, 216, 210)",
    textAlign: 'center'
  },
  // button colors
  themeChili: {
    alignSelf: "center",
    backgroundColor: "rgb(60, 60, 60)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themeDaisyStem: {
    alignSelf: "center",
    backgroundColor: "rgb(55, 63, 39)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themeFresh: {
    alignSelf: "center",
    backgroundColor: "rgb(247, 135, 51)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themeMuted: {
    alignSelf: "center",
    backgroundColor: "rgb(244, 244, 244)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themeOlives: {
    alignSelf: "center",
    backgroundColor: "rgb(64, 50, 33)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themePleasant: {
    alignSelf: "center",
    backgroundColor: "rgb(199, 216, 198)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themePlum: {
    alignSelf: "center",
    backgroundColor: "rgb(244, 222, 203)",
    color: "white",
    margin: 15,
    padding: 25,
    width: 200,
  }, 
  themePowder: {
    alignSelf: "center",
    backgroundColor: "rgb(220, 178, 57)",
    margin: 15,
    padding: 25,
    width: 200,
  },
  themeSchool: {},
  themeSeaMint: {
    alignSelf: "center",
    backgroundColor: "rgb(167, 179,165)",
    margin: 15,
    padding: 25,
    width: 200,
  },
});
