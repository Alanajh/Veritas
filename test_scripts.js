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

    // StyleSheet
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
