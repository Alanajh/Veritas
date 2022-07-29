import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../css/mainTheme";

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
      <TouchableOpacity style={theme} id={3} onPress={() => powderTheme()}>
        <Text style={btnTxt}>Powder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={4} onPress={() => freshTheme()}>
        <Text style={btnTxt}>Fresh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={theme} id={5} onPress={() => chiliTheme()}>
        <Text style={btnTxt}>Chili</Text>
      </TouchableOpacity>
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

