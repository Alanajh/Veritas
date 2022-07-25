import react, { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
    const [txtInput, setInput] = useState('');

   useEffect (() => {
        fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/testing_test_titles.json') // Download the Data
        .then(response => response.json()) // Convert the response to JSON object
        .then (data2 => setTitles(data2.data.tests)); 
    },[]);

    // Dividing lines on the test list
      const ItemDivider = () => {
        return (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'blue',
            }}
          />
        );
      }

    // Filter the test list  based on the search object
      const GetFilterTest = () => {
        titles.filter((item) => {
            if(txtInput == ''){
                return item
            } else if (item.title.toLowerCase().includes(txtInput.toLocaleLowerCase())){
                return item
            }
        }).map((item, key) => {
            //return console.log(item.title)
            setTitles([item])
        })
      }

      // Display the icon that comes before each test .... to be upgraded to a differrent icon based on the subject/genre
      const RenderItem = ({testTitle}) => {
        return <Text style={styles.listTxt}> 
            <Icon name='chevron-back-outline' size={15} color='blue' />
            {testTitle}
        </Text>
      }

    return (  
            <View style={styles.container}>
           
           <View style={[styles.container, {
            flexDirection: 'row',
            height: 50,
            }]}>
            <TouchableOpacity 
                style={{ 
                backgroundColor: 'steelblue', 
                padding: 8,
                borderRadius: 10,
                height: 40,
                width: '75%' }}>
              <TextInput 
                placeholder='category search'
                placeholderTextColor="rgba(255,255,255, 0.5)"
                style={styles.txtStyle}
                value={txtInput}
                onChangeText={text => setInput(text)}
                /> 
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={GetFilterTest}
                    style={{ 
                    backgroundColor: 'steelblue', 
                    padding: 8,
                    borderRadius: 10,
                    height: 40,
                    marginLeft: 'auto',
                    width: '22%' }}>
              <Text style={{
                alignSelf: 'center',
                color: 'mintcream',
                fontWeight: 'bold'
                }}>Search</Text>
                </TouchableOpacity>
            </View>

               <FlatList
                    style={styles.flat}
                    data={titles}
                    renderItem={({ item }) => <RenderItem testTitle={item.title + ': ' + item.key} />}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={titles}
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
        color: 'mintcream',
        paddingLeft: 5,
        width: 200,
    }
})