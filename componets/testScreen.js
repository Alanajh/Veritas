import react, { useState, useEffect } from "react";
import { 
    FlatList, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

export default  function TestScreen ()  {
    const [titles, setTitles] = useState([]);
    
    const getAPI = async () => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/testing_test_titles.json')
        .then(response => response.json())
        .then (data2 => setTitles(data2.data.tests))
    };

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
        <SafeAreaView>
            <View     >
                <Text style={styles.titleTxt}> Tests </Text>
            </View>
            
            <View style={styles.input}>
            <TextInput 
               underlineColorAndroid = "transparent"
               placeholder = "Search"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>
               <TouchableOpacity 
                    onPress={getAPI}
                    style={ styles.flat }>
              <Text style={styles.txtStyle}>search</Text>
               </TouchableOpacity>

               <FlatList
                style={styles.flat}
                data={titles}
                renderItem={({ item }) => <Text style={styles.listTxt}> {item.title}</Text>}
               // keyExtractor={(index) => index.toString()}
                ItemSeparatorComponent={ItemDivider}
                 />
            </View>
               
               
        
        </SafeAreaView>
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
    flat: {
        padding: 15,
    },
    input:{
        backgroundColor: 'lightgray',
        padding: 8
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
        backgroundColor: 'lightblue',
        fontWeight: '500',
        width: '100%'
    }
})