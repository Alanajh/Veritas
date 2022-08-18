import { useState } from 'react';
import react, {  Alert, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckBox from 'react-native-paper';

export default function Login (){
    const [checked, setChecked] = useState(false);
    const onLogin = () => {
        Alert.alert("logged in")
    }

    return (
        <View>
            <Text
                style={styles.title}>Veritas</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.txtInput}
                    placeholder='Enter your username ...' />
                <TextInput
                style={styles.txtInput}
                    placeholder='Enter your password ...'
                    secureTextEntry={true}/>
                {/*  CHECKBOX  */}
               {/*  <CheckBox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked)
                    }}/> */}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Sign in or create account
                    </Text>
               {/*  <Link><Text>Sign in or create account</Text></Link>
                 */}<TouchableOpacity
                    style={styles.btn}
                    onPress={onLogin}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        backgroundColor: 'darkgray',
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 3,
        height: 30,
        margin: 25,
        paddingTop: 2,
        width: 100,
    },
    btnText:{
        color: 'white',
        fontWeight: 'bold'
    },
    form:{
        alignItems: 'center',
        paddingTop: '10%'
    },
    title:{
        fontSize: 22,
        margin: '20%',
        textAlign: 'center',
    },
    txtInput:{
        fontSize: 14,
        paddingBottom: 15
    }
})