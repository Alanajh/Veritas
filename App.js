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
      <TouchableOpacity style={theme} id={3}
      onPress={() => plumTheme()}
      >
        <Text style={styles.txt}>Plum</Text>
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
  textOlive:{
    color: 'green',
  },
  textPleasant:{
    color: 'rgb(239, 217, 193)',
  },
  textPlum:{
    color: 'rgb(73, 39, 74)',
  },
  textPowder: {
    border: '2px solid rgb(223, 116, 74)',
    color: 'rgb(143, 216, 210)',
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
    margin: 15,
    padding: 25
  },
  themePowder: {
    alignSelf: 'center',
    backgroundColor:'rgb(220, 178, 57)',
    margin: 15,
    padding: 25
  }
});
