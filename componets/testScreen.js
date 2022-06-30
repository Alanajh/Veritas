import react, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { 
    FlatList, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default  function TestScreen ()  {
    const [titles, setTitles] = useState([]);
    
   useEffect (() => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/testing_test_titles.json')
        .then(response => response.json())
        .then (data2 => setTitles(data2.data.tests))
    });

      const ItemDivider = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "blue",
            }}
          />
        );
      }

    return (  
            <View style={styles.container}>

            <TextInput 
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"/>
              
               <TouchableOpacity 
                   // onPress={getAPI}
                    style={{ 
                    backgroundColor: "green", 
                    alignSelf: 'right',
                    padding: 8,
                    width: '100%' }}>
              <Text style={styles.txtStyle}>search</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                   // onPress={getAPI}
                    style={{ 
                    backgroundColor: "green", 
                    alignSelf: 'right',
                    padding: 8,
                    width: '100%' }}>
              <Text style={styles.txtStyle}></Text>
               </TouchableOpacity>

               <FlatList
                    style={styles.flat}
                    data={titles}
                    renderItem={({ item }) => <Text style={styles.listTxt}> 
                        <Icon name="chevron-back-outline" size={15} color="blue" />
                        {item.title}
                        </Text>}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemDivider}
                />
                
            </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        backgroundColor: 'orange',
        justifyContent: 'space-between',
        margin: 15,
        padding: 25
    },
    container:{
        backgroundColor: 'lightgray',
        height: '95%',
        padding: 8,
    },
    container2: {
        flex: 1,
        padding: 20,
      },
    flat: {
        paddingBottom: 15,
    },
    l: {
        borderColor: 'lightgray',
        borderWidth: 2,
        margin: 5,
        padding: 5,
    },
    listTxt:{
       // border: '2px solid blue',
        paddingBottom: 5,
        paddingTop: 15,
        width: '100%',
    },
    title: {
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        margin: 15
    },
    titleTxt: { 
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        fontWeight: '500',
        padding: 10,
        width: '100%'
    },
    txtStyle:{
        color: 'lightgray',
    }
})