import react, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from "react-native-paper";


export default function MathTests(){

    // different levels indicate if 0 are involved or not
    const [loading, setLoading] = useState(true);
    const [beginScreen, setBeginScreen] = useState(true);
    const [testLevel, setTestLevel] = useState(0);
    const [numberx, setNumber] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [number, onChangeNumber] = useState(null);
    const [ testLength, setTestLength] = useState(20);
    const [ score, setScore ] = useState(0);
    const [progress, setProgress] = useState(0);
    const [levelValue, setLevelValue] = useState('first');
    const [checked, setChecked] = useState('first');

    const StartTest = () => {
        setBeginScreen(false)
        TestLevels(levelValue)
        console.log(checked)
    }
    const TestLevels = (testLevel) => {
        switch(testLevel){
            case 0:
                setX(Math.floor(Math.random() * 10) + 1)
                setY(Math.floor(Math.random() * 10) + 1)
                break;
            case 1:
                setX(Math.floor(Math.random() * 10) + 0)
                setY(Math.floor(Math.random() * 10) + 0)
                break;
            case 2:
                setX(Math.floor(Math.random() * 100) + 1)
                setY(Math.floor(Math.random() * 100) + 1)
                break;
            case 3:
                setX(Math.floor(Math.random() * 1000) + 1)
                setY(Math.floor(Math.random() * 1000) + 1)
                break;
            case 4:
                setX(Math.floor(Math.random() * 10000) + 1)
                setY(Math.floor(Math.random() * 10000) + 1)
                break;
            default:
        }
    }

    const getNext = () => {
        TestLevels(0)
        onChangeNumber(null)
        checkCalculations()
    }
    const checkCalculations = () => {
        if(x * y == number){
            setScore(score + 100);
            setProgress(progress + 1)
            console.log(x + " + " + y + " = " + number + ' good job')
        }else{
            console.log(x + " + " +  y + " = " + number + ' nope')
        }
    }
    return(
        beginScreen?<View>  
            <RadioButton.Group onValueChange={newValue => setLevelValue(newValue)} value={levelValue}> 
             <RadioButton.Item label="0"value="0" color='blue' mode='android' status={ checked === 'first' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label="1"value="1" color='blue' mode='android' status={ checked === 'second' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label="2"value="2"  color='blue' mode='android' status={ checked === 'third' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label="3" value="3"  color='blue' mode='android' status={ checked === 'fourrth' ? 'checked' : 'unchecked' } position="trailing"/> 
         </RadioButton.Group> 
         
            <TouchableOpacity
                style={{
                    alignSelf: 'center',
                    backgroundColor: 'green',
                    marginTop:'30%',
                    padding: 22,
                    borderRadius: 15
                }}
                onPress={StartTest}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Begin Test</Text>
            </TouchableOpacity>
        </View>:
        <View>
             <View style={{ flexDirection: 'row', margin: 20 }}>
            <Text style={{flex: 1}}>{progress}/{testLength}</Text> 
            <Text style={{
                color: 'blue',
                fontFamily: 'Times New Roman',
                fontSize: 18,
                fontWeight: 'bold',
                flex:2, 
                textAlign: 'right'
            }}>{score}</Text>
            </View>
            <Text
                style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    padding: 36,
                    textAlign: 'center'
                }}>{x} + {y}</Text>
            <TextInput
                style={{
                    alignSelf: 'center',
                    fontSize: 36,
                    margin: 12,
                    padding: 22,
                }}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Your answer"
                keyboardType="numeric"></TextInput>
            <TouchableOpacity
                style={{
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    padding: 26,
                    radius: 25,
                }}
                onPress={getNext}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
});
