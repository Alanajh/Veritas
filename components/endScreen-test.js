import react, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

/* SCREENS */
import TestScreen from './testScreen';

export default  function EndScreen ()  {

    const [testScreenEnd, setTestScreenEnd] = useState(false) //if test is selected set this to true

    return (  
       testScreenEnd? <TestScreen/>:
        <View style={styles.container}>
            <View style={styles.container2}>
            <Text>The test is over. Thank you from AAEnterprise, LLC.</Text>
                <TouchableOpacity
                     style={{
                        padding: 15,
                        backgroundColor: 'orange',
                        color: 'blue',
                        border: '2px solid lightblue'
                    }}
                    onPress={() => setTestScreenEnd(true)} >
                    <Text
                        style={{
                            color: 'blue',
                        }}>Test List</Text>
                </TouchableOpacity>
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: 'lightgray',
        height: '95%',
        justifyContent: 'center'
    },
container2:{
    backgroundColor: 'teal',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 6,
    margin: 15,
    padding: 25
}
})