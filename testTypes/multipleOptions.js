import React from "react-native";
import { useState } from "react";
import styles from "../css/mainTheme"
import { Text, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

export default function MultipleOptions(){
    const [ questions, setQuestions ] = useState('');
    const radioButtonsData = [{
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1'
    }, {
        id: '2',
        label: 'Option 2',
        value: 'option2'
    }]

    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    
    const onPressRadioButton  =(radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }

    const getTestQuestion = () => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/tests/920-Flags_of_the_Americas.json')
        .then(res => res.json())
        .then(data => setQuestions(data.data.tests[0]))
    }
    return (
        <View style={[ styles.container, {flexDirection: 'row' }]}>
             <View style={[styles.container, {
            flex: 1, flexDirection: "column", backgroundColor: "white", alignSelf: 'left'
            }]}>
                <Text onPress={getTestQuestion}>Ads</Text>
            </View>
            <View style={[styles.containerMultiple, {
            flex: 5, flexDirection: "column", backgroundColor: "lightgray"
            }]}>
                <Text id='title'>{questions.title}</Text>
                 <RadioGroup 
                    style={styles.radioGroup}
                    radioButtons={radioButtons} 
                    onPress={onPressRadioButton} 
                />
                <Text style={[styles.containernow, 
                    {backgroundColor:'orange', 
                    color: 'black',
                    height: 70}]}>{}</Text>
            </View>
            <View style={[styles.container, {
            flex: 1, flexDirection: "column", backgroundColor: "white"
            }]}>
                <Text>Other Ads</Text>
            </View>
        </View>
    )
}