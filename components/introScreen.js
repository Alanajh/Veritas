import react from "react";
import { Button, StyleSheet, View } from "react-native-web";

 const IntroScreen = ({ navigation}) => {

    return (
        <View>
            <Button 
                title="Pagina Due"
                onPress={() => 
                    navigation.navigate('Profile', { name: 'Jane'})
                }    
            />
        </View>
    )
};

const TestScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
}