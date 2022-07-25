import react, { useState } from 'react';
import { 
    FlatList, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default  function EndScreen ()  {

    return (  
        <View style={styles.container}>
            <View style={styles.container2}>
                <TouchableOpacity>
                   
            <Text
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}>
                THE END
            </Text>
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