import react, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function TestCode(){
    const [testDigit, setTestDigit] = useState(1)
    const [list, setList] = useState(true)
    const [normalTest, setNormalTest] = useState(false)
    const [score, setScore] = useState(false)

    const FigureItOut = ({testDigitX}) => {
        switch(testDigitX){
            case 1:
                return list?<View>
                <Text>Test list</Text>
                <TouchableOpacity onPress={setNormalTest(true)}><Text>Touch list</Text></TouchableOpacity>
            </View>: <View>
                <Text>Test list</Text>
                <TouchableOpacity onPress={setNormalTest(true)}><Text>Touch list</Text></TouchableOpacity>
            </View>
            break;
            case 2:
                return score? <View>
                <Text>Test Started</Text>
                <TouchableOpacity onPress={setList(true)}><Text>Touch start</Text></TouchableOpacity>
            </View>: <View>
                <Text>Test list</Text>
                <TouchableOpacity onPress={setNormalTest(true)}><Text>Touch list</Text></TouchableOpacity>
            </View>
            break;
            default: 
                return <View>
                <Text>Test list</Text>
                <TouchableOpacity onPress={setList(true)}><Text>Default</Text></TouchableOpacity>
            </View>
        }
      /*       
        if(testDigitX === 0){
            return<View>
                <Text>Test list</Text>
                <TouchableOpacity onPress={setTestDigit(1)}><Text>Touch list</Text></TouchableOpacity>
            </View>
        }else if(testDigitX === 1){
            return<View>
                <Text>Test Started</Text>
                <TouchableOpacity><Text>Touch start</Text></TouchableOpacity>
            </View>
        }else if(testDigitX === 2){
            return<View>
                <Text>Test score</Text>
                <TouchableOpacity><Text>Touch score</Text></TouchableOpacity>
            </View>
        } */
    }
    return(
        <View>
            {FigureItOut(testDigit)}
        </View>
    )
}