// CHECKBOX //
import { CheckBox, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        </View>
        <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

// FILTERING //
import react, { useState, useEffect, useRef } from 'react';


import { 
  Alert,
    FlatList, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View
} from 'react-native';

export default  function TestScreen ()  {

  const [ titles, setTitles ] = useState([])
  const [ len, setLen ] = useState(0)

   useEffect (() => {
     setTitles(['ava', 'nick', 'alicia', 'rose','ed', 'vada', 'jo'])
   })

    
      const ItemDivider = () => {
        return (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'blue',
            }}
          />
        )}
 const RenderItem = ({testTitle, len}) => {
        return <Text style={styles.names}>{testTitle} </Text>
      }

      const Filtering = () => {
        const newTests = titles.filter((i) => {
          return i !== 'jo'
        })
        setTitles(newTests)
        console.log(titles)
      }

    return (  
      <View>
                  <FlatList
                        data={titles}
                        renderItem={({ item }) => <View>
                          <RenderItem 
                          testTitle={item}/>
                          len={titles.length}
                          </View>}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={titles}
                        ItemSeparatorComponent={ItemDivider}
                    />
                    <TouchableOpacity 
                      style={styles.btn}
                      onPress={Filtering}>
                      <Text>Touch</Text>
                      </TouchableOpacity>
                </View>
            )
          }

    const styles = StyleSheet.create({
      btn:{
        alignSelf: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 15,
        padding: 20,
      },
       names: {
         alignSelf: 'center',
         margin: 10
       }
    })
    
    --------------------------------------------------------------------------------------------
    
    PASSING PARAMETERS:

function TestScreen({navigation}){
      const [ testTitle, setTestTitle] = useState('THis is a test title that has been set from the button below")

return(
<View>
     <Button
          title: "button"
          onPress={() => { navigation.navigate('LetsBegin', {
	testTitle: ' testTitleHookHere',
                    anotherParameter: 'something',
           });
}}
</View>
)

      *********************** NEW FUNCTION BELOW TO PASS TO ***************************

function LetsBeginScreen({ route, navigation }) {
     const [testTitle, setTestTitle] = route.params;

return(
     <View>
          <Text> Test Title:  {JSON>stringify(testTitle)}
     </View>
)


