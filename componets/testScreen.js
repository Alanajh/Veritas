import react, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default  function TestScreen ()  {
    const [active, setIsActive] = useState(false);

    return (
        <View>
            <TouchableOpacity style={styles.btnStyle}>
                <Button title="Pagina tre"/>
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