import react from "react";
import { 
      StyleSheet, 
      Text, 
      TouchableOpacity,
      View
  } from 'react-native';

export default function LetsBeginScreen( {getTestQuestion} ){

    return <View style={{flex:1, alignItems: 'center', paddingTop: 150}}>
    <Text>Let's begin</Text>
    <TouchableOpacity style={{
         alignItems:'center',
         backgroundColor: 'teal', 
         height: 60,
         margin: 10,
         padding: 20,
         width: '45%'
         }}
         onPress={getTestQuestion}>
         <Text style={{color: 'lightgreen'}}>Begin</Text>
     </TouchableOpacity>
    </View>
}