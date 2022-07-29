import React, { Alert } from "react-native";
import { useEffect, useState } from "react";
import styles from "../css/mainTheme"
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
/* Disable warnings */
import { LogBox } from 'react-native';

/* SCREENS */
import EndScreen from "../components/endScreen-test";

export default function MultipleOptions(){
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications
    const [ questions, setQuestions ] = useState('');
    const [ options, setOptions ] = useState('')
    const [ testLength, setTestLength] = useState();
    const [ img, setImg ] = useState('');
    const [ score, setScore] = useState(0);
    const [ fine, setFine ] = useState(false)
    
  const [checked, setChecked] = useState('first');
  const [correct, setCorrect] = useState(false);
  const [value, setValue] = useState('first');
  const [progress, setProgress] = useState(0);

useEffect(() => {
    getTestQuestion();
})
    const radioBtn = () => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/tests/920-Flags_of_the_Americas.json')
        .then(res => res.json())
        .then(data2 => 
            setOptions(data2.data.tests[0].target[progress])
        )
        getNext();
    }
    const getTestQuestion = () => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/tests/920-Flags_of_the_Americas.json')
        .then(res => res.json())
        .then(data =>{
            setQuestions(data.data.tests[0]),
            setTestLength(data.data.tests[0].target.length)
        })   
    }
    const getNext = () => { 
        let done = false;
        if(progress < testLength - 1 && done == false){
            setProgress(progress + 1)
            console.log(value + " " + options.direct)
           if(value == options.direct){
                console.log("true")
                setScore(score + 100)
            }else{
                console.log('false')
            } 
        }else(
            setFine(true)
        )
    }
    const getPrevious = () => { 
        if(progress > 0){
            setProgress(progress - 1) 
        }else(
            //PLACE ENDING SCREEN HERE
            console.log("the end mnm")
        )
    }
    return (
        fine? <EndScreen/> :
        <View style={[ styles.container, {flexDirection: 'row' }]}>
             <View style={[styles.container, {
            flex: 1, flexDirection: "column", backgroundColor: "white", alignSelf: 'left'
            }]}>
                <Text>Ads</Text>
            </View>
            <View style={[styles.containerMultiple, {
            flex: 5, flexDirection: "column", backgroundColor: "lightgray" 
            }]}>
                
              <Text>{progress}/{testLength}</Text> 
              <Text>{score}</Text>

              <Image source={{
                uri: options.path}}
                style={{marginTop: 25, width: '100%', height: 200}}
                />

           <Image source={options.path}/>
 
           <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
               {/*  <RadioButton.Group onValueChange={value => setValue(value)} value={value}> */}
                    <RadioButton.Item label={options.option_1} value="first" status={ checked === 'first' ? 'checked' : 'unchecked' } position="leading"/>
                    <RadioButton.Item label={options.option_2} value="second" status={ checked === 'second' ? 'checked' : 'unchecked' } position="leading"/>
                    <RadioButton.Item label={options.option_3} value="third" status={ checked === 'third' ? 'checked' : 'unchecked' } position="leading"/>
                    <RadioButton.Item label={options.option_4} value="fourth" status={ checked === 'fourrth' ? 'checked' : 'unchecked' } position="leading"/> 
                </RadioButton.Group>
                
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    width: '100%'
                }}>
              {/*  Side pocket until further notice 
              
              <TouchableOpacity style={{
                    alignItems:'center',
                    backgroundColor: 'teal', 
                    height: 60,
                    margin: 10,
                    padding: 20,
                    width: '45%'
                    }}
                    onPress={getPrevious}>
                    <Text style={{color: 'lightgreen'}}>Previous</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={{
                    alignItems:'center',
                    backgroundColor: 'teal', 
                    height: 60,
                    margin: 10,
                    padding: 20,
                    width: '45%'
                    }}
                    onPress={radioBtn}>
                    <Text style={{color: 'lightgreen'}}>Next</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container, {
            flex: 1, flexDirection: "column", backgroundColor: "white"
            }]}>
                <Text>Other Ads</Text>
            </View>
        </View>
    )
}