import react, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default  function TestScreen ()  {
    const [active, setIsActive] = useState(false);

    const handleClick =(v)=> {
        if( v = 'a'){

        }
        else if (v= 'b'){
            
        }
    }

    return (
        <View>
           {/*  <Text style={styles.btnStyle}>Hold Me</Text> */}
            {/* <Button title='holler' style={styles.btnStyle}/> */}
            <TouchableOpacity style={styles.btnStyle}>
                <Text>Hold Me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        backgroundColor: 'orange',
        margin: 15,
        padding: 25
    }
})