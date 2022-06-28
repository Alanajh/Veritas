import React from "react";
import { Button,  FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";

export default function TestTemplate1(){
    var answers = [
        {label: 'Raymond Gray Lewis', value: 0},
        {label: 'Jessie Owens', value: 1},
        {label: 'George Coleman Poage', value: 2},
        {label: 'Usain Bolt', value: 3},
    ]

  return(
    <View style={styles.fill}>
       <View style={styles.accountRow}>
          <Text style={styles.brand}> N * U * T* M * E * G </Text>
        </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      <View style={styles.titleRow}>
          <Text> Genre: Sports </Text>
          <Text> Title: Olympics </Text>
        </View>
      <View style={ styles.col1 }>
          <View style={ styles.col2 }>
              <Text> Which runner defeated the German Nazi party runner and long jumper, Luz Long
                in 1936 Olympics? </Text>
            </View>
      <View style={ styles.col3 }>
       <RadioForm
        radio_props={answers}
        onPress={(value) => {} }
        
        />
         
        </View>
    </View>
    <View style={styles.answerRow}>
        <Button color={'gray'} title={"submit"} style={styles.submitBtn}/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.copywrite}>copywrite Nutmeg, AAEnterprises @ 2022</Text>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  accountRow:{
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: '15%',
    justifyContent: 'center',
  },
  answerRow: {
    alignItems: 'center',
    border: '4px solid lightgray',
    justifyContent: 'center',
    padding: '3%',
  },  
  brand: {
    justifyContent: 'center',
  },
  col1: {
    border: '5px solid lightgray',
    flex: 1,
    flexDirection: "row",
    width: '100%',
  },
  col2: {
    alignSelf: 'left',
    flex: 1,
    flexDirection: "col",
    padding: '5%',
    width: '50%',
  },
  col3: {
    alignItems: 'center',
    alignSelf: 'right',
    border: '5px solid lightgray',
    flex: 1,
    justifyContent: 'center',
    paddingRight: '10%',
    width: '50%',
  },
  copywrite: {
    color: 'lightgray',
  },  
  fill:{
    flex: 1,
    border: '5px solid white',
    height: '100%'
  },
  footer: {
    backgroundColor: 'lightgray',
    height: '8%',
    alignItems: 'center',
  },
  itemss: {
    margin: '5%',
  },
  submitBtn: {
    justifyContent: 'center',
  },
  titleRow: {
    border: '5px solid lightgray',
    height: '10%',
    marginStart: '2%',
    padding: '4%'
  },
})