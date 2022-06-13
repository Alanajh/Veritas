import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

//SCREENS //
import TestScreen from './componets/testScreen';

export default function App() {
  const [theme, setTheme]= useState(styles.themeOlives);
  const [containerTheme, setContainerTheme]= useState(styles.container);
  const [txt, setText]= useState(styles.textOlive);

  const oliveTheme = () => {
    setContainerTheme(styles.containerOlives);
    setTheme(styles.themeOlives);
    setText(styles.textOlive);
  }
  const pleasantTheme = () => {
    setContainerTheme(styles.containerPleasant);
    setTheme(styles.themePleasant)
    setText(styles.textPleasant);
  }
  const powderTheme = () => {
    setContainerTheme(styles.containerPowder);
    setTheme(styles.themePowder)
    setText(styles.textPowder);
  }
  const plumTheme = () => {
    setContainerTheme(styles.containerPlum);
    setTheme(styles.themePlum)
    setText(styles.textPlum);
  }
  
  // start here and down fixing themes
  const freshTheme = () => {
    setContainerTheme(styles.containerFresh);
    setTheme(styles.themeFresh)
    setText(styles.textFresh);
  }

  const chiliTheme = () => {
    setContainerTheme(styles.containerChili);
    setTheme(styles.themeChili)
    setText(styles.textChili);
  } 

  const mutedTheme = () => {
    setContainerTheme(styles.containerMuted);
    setTheme(styles.themeMuted)
    setText(styles.textMuted);
  }

  const seaMintTheme = () => {
    setContainerTheme(styles.containerSeaMint);
    setTheme(styles.themeSeaMint)
    setText(styles.textSeaMint);
  }

  const daisyStemTheme = () => {
    setContainerTheme(styles.containerDaisyStem);
    setTheme(styles.themeDaisyStem)
    setText(styles.textDaisyStem);
  }

  const schoolTheme = () => {
    setContainerTheme(styles.containerSchool);
    setTheme(styles.themeSchool)
    setText(styles.textSchool);
  }
  return (
    <View style={containerTheme}>
      {/* <TestScreen /> */}
      <TouchableOpacity style={theme} id={1} 
        onPress={() => oliveTheme()}
      >
        <Text style={styles.txt}>Olives</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={2} 
        onPress={() => pleasantTheme()}
      >
        <Text style={styles.txt}>Pleasant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={3}
      onPress={() => powderTheme()}
      >
        <Text style={styles.txt}>Powder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={4}
      onPress={() => freshTheme()}
      >
        <Text style={styles.txt}>Fresh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={5}
      onPress={() => chiliTheme()}
      >
        <Text style={styles.txt}>Chili</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={6}
      onPress={() => mutedTheme()}
      >
        <Text style={styles.txt}>Muted</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={7}
      onPress={() => plumTheme()}
      >
        <Text style={styles.txt}>Plum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={8}
      onPress={() => seaMintTheme()}
      >
        <Text style={styles.txt}>Sea Mint</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={9}
      onPress={() => daisyStemTheme()}
      >
        <Text style={styles.txt}>Daisy Stem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={10}
      onPress={() => schoolTheme()}
      >
        <Text style={styles.txt}>School</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  containerChili: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(98, 110, 96)',
    justifyContent: 'center',
  },
  containerDaisyStem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(205, 163, 79)',
    justifyContent: 'center',
  },
  containerFresh: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(74, 189, 172)',
    justifyContent: 'center',
  },
  containerMuted: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(221, 201, 193)',
    justifyContent: 'center',
  },
  containerOlives: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(103, 67, 58)',
    justifyContent: 'center',
  },
  containerPleasant: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(169, 183, 192)',
    justifyContent: 'center',
  },
  containerPlum: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(148, 97, 142)',
    justifyContent: 'center',
  },
  containerPowder: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(254, 220, 210)',
    justifyContent: 'center',
  },
  containerSchool: {

  },
  containerSeaMint: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(234, 227, 234)',
    justifyContent: 'center',
  },
  // text color not working
  textChili: {
    color: 'rgb(175, 71, 60)',
  },
  textDaisyStem: {

  },
  textFresh: {

  },
  textMuted: {
    backgroundColor: 'yellow',
  },
  textOlive:{
    color: 'green',
  },
  textPleasant:{
    color: 'rgb(239, 217, 193)',
  },
  textPlum:{
    backgroundColor: 'rgb(73, 39, 74)',
  },
  textPowder: {
    border: '2px solid rgb(223, 116, 74)',
    backgroundColor: 'rgb(143, 216, 210)',
  },
  textSchool: {
    border: '2px solid rgb(223, 116, 74)',
    backgroundColor: 'rgb(143, 216, 210)',
  },
  textSeaMint: {
    border: '2px solid rgb(223, 116, 74)',
    backgroundColor: 'rgb(143, 216, 210)',
  },
  // button colors
  themeChili: {
    alignSelf: 'center',
    backgroundColor: 'rgb(60, 60, 60)',
    margin: 15,
    padding: 25
  },
  themeDaisyStem: {
    alignSelf: 'center',
    backgroundColor: 'rgb(55, 63, 39)',
    margin: 15,
    padding: 25
  },
  themeFresh: {
    alignSelf: 'center',
    backgroundColor: 'rgb(247, 135, 51)',
    margin: 15,
    padding: 25
  }, 
  themeMuted: {
    alignSelf: 'center',
    backgroundColor: 'rgb(244, 244, 244)',
    margin: 15,
    padding: 25
  },
  themeOlives: {
    alignSelf: 'center',
    backgroundColor: 'rgb(64, 50, 33)',
    margin: 15,
    padding: 25
  },
  themePleasant: {
    alignSelf: 'center',
    backgroundColor: 'rgb(199, 216, 198)',
    margin: 15,
    padding: 25
  },
  themePlum: {
    alignSelf: 'center',
    backgroundColor: 'rgb(244, 222, 203)',
    color: 'white',
    margin: 15,
    padding: 25
  },
  themePowder: {
    alignSelf: 'center',
    backgroundColor:'rgb(220, 178, 57)',
    margin: 15,
    padding: 25
  }, 
  themeSchool: {

  },
  themeSeaMint: {
    alignSelf: 'center',
    backgroundColor: 'rgb(167, 179,165)',
    margin: 15,
    padding: 25
  },
});
