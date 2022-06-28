import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ArrowBackIos from '@material-ui/icons'

export default function App() {
  const [titles, setTitles] = useState([]);
 
 const getAPI = () => {
   fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
   .then(res => res.json())
   .then(data => console.log(data.data[0].Nation));
 }
 const getLocalAPI = () => {
   fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/testing.json')
   .then(response => response.json())
   .then (data2 => setTitles(data2.data.tests))
 }
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
 /* fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data)); */
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn2} onPress={getLocalAPI}>
        <Text style={styles.btnTxt}>TRY ME</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.flat}
        data={titles}
        renderItem={({ item }) => <Text style={styles.listTxt}> {item.title}</Text>}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemDivider}
        
      />
      
      <TouchableOpacity style={styles.btn} onPress={getAPI}>
        <Text style={styles.btnTxt}>FILTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightblue",
    justifyContent: "center"
  },
  btn:{
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: '10px'
  },
  btn2:{
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: '10px'
  },
  btnTxt:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  flat: {
    padding: 15,
  },
  listTxt:{
    border: '2px solid blue',
    paddingBottom: 5,
    paddingTop: 15,
    width: '100%',
  }
});
