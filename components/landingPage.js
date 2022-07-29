import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "../css/mainTheme";

const Landing = ({ navigation }) => {
  return (
      
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <TouchableOpacity  onPress={() => navigation.navigate('Screen')}
        style={{ flex: 2, backgroundColor: "lightgray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>TESTS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Theme')}
          style={{ flex: 2, backgroundColor: "gray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>THEMES</Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.container, {
      flexDirection: "row"
    }]}>
        <TouchableOpacity onPress={() => navigation.navigate('RoomReach')}
          style={{ flex: 2, backgroundColor: "gray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>ROOM REACH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 2, backgroundColor: "lightgray", border: " 2px solid white" }}>
            <Text style={styles.txtStyleLanding}>LIVE</Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}
        style={{ flex: 2, backgroundColor: "lightgray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 2, backgroundColor: "gray", border: " 2px solid white" }}>
          <Text style={styles.txtStyleLanding}> [EMPTY] </Text>
          </TouchableOpacity>
      </View>
      <View style={[styles.container, {
      flexDirection: "row"
    }]}>
         <TouchableOpacity style={{ flex: 2, backgroundColor: "gray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>ABOUT US</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 2, backgroundColor: "lightgray", border: " 2px solid white" }}>
              <Text style={styles.txtStyleLanding}>CREDITS</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    txtStyleLandingLanding: {
      alignSelf: 'center',
      fontSize: 18,
      //fontWeight: 900,
      margin: 50,
      paddingTop: 30
    }
}); */

export default Landing;