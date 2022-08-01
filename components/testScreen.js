import react, { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from "react-native-paper";

import { 
  Alert,
    FlatList, 
    Image,
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import ScoreScreen from './scoreScreen';

export default  function TestScreen ()  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [reload, setReload] = useState(true); // initiate fetch call to reload fresh page
    const [titles, setTitles] = useState([]);
    const [txtInput, setInput] = useState('');
    const [testSelected, setTestSelected] = useState(false); //if test is selected set this to true
    const [testSelectedTitle, setTestSelectedTitle] = useState('');
    const [filterTests, setTestFilter] = useState();
    const [startTest, setStartTest] = useState(false); // indicates the "Lets Begin" button
    const [scoreScreen, setScoreScreen] = useState(false);

    /////////////////////////////////////////////////////////////////////
    /* TEST OPTIONS */
    const [ questions, setQuestions ] = useState('');
    const [ options, setOptions ] = useState('');
    const [ testLength, setTestLength] = useState(null);
    const [ img, setImg ] = useState('');
    const [ score, setScore ] = useState(0);
    const [ fine, setFine ] = useState(false);
    const [ testUrl, setTestUrl ] = useState('');
      
    const [checked, setChecked] = useState('first');
    const [correct, setCorrect] = useState(false);
    const [value, setValue] = useState('first');
    const [progress, setProgress] = useState(0);
    const [testType, setTestType] = useState();

   useEffect (() => {
    reload? StartTesting() : null
   })

    const StartTesting = () => {
    // fetch the selected test
      fetch('https://raw.githubusercontent.com/Alanajh/Veritas/main/testing_test_titles.json') // Download the Data
        .then(response => response.json()) // Convert the response to JSON object
        .then (data2 => {
            setTitles(data2.data.tests)
            setIsLoaded(true);
            setReload(false);
            setOptions('');
            setProgress(0);
            setScore(0);
        (error) => {
            setIsLoaded(false);
            setError(error);
        }
      }); 
      
    }//,[]);
    // display error page if no test url
    /*   if(error){
        return <View>
          <Text> Damaged </Text>
        </View>
      } else {
 */
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

      const getTest = (testTitle, urlTest) => {
        if(urlTest){
          setTestSelected(true)
          setOptions('');
          setTestUrl(urlTest)
          setStartTest(true)
        }else{
          Alert.alert('No test found.')
        }
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
      const RenderItem = ({testTitle, testSelection}) => {
        return <Text 
                  style={styles.listTxt}
                  onPress={() => getTest(testTitle, testSelection)}> 
            <Icon name='chevron-back-outline' size={15} color='blue'/>
            {testTitle} - {testSelection}
            
        </Text>
      }
  
    /* TEST TAKING SCREEN */
    const getTestQuestion = () => {
      setTestSelected(true)
        fetch(testUrl)
        .then(res => res.json())
        .then(data2 =>{
          setTestLength(data2.data.tests[0].target.length)
          setOptions(data2.data.tests[0].target[progress]),
          setQuestions(data2.data.tests[0])
          setTestSelectedTitle(data2.data.tests[0].title)
        })   
        getNext();
    }
    const getNext = () => { 
        let done = false;
        if(progress < testLength && done == false){
          setStartTest(false)
          setProgress(progress + 1)
          console.log('getNext ran')
           console.log(value + " " + options.direct)
           if(value == options.direct){
                setScore(score + 100)
            }else{
              // do a count to compare wrong vs right and add a select button in the settings to negatively count wrong answers
            } 
        }else{
          done = true
          testDone()
        }
    }
    const testDone = () => {
      setScore(true)
      setTestSelected(false)
      setReload(true)
    }
    const scoreToMain = () => {
      setStartTest(true)
    }
    const getPrevious = () => { 
        if(progress > 0){
            setProgress(progress - 1) 
        }else(
            //PLACE ENDING SCREEN HERE
            console.log("the end mnm")
        )
    }
    return (  
      testSelected? 
      startTest? <View style={{flex:1, alignItems: 'center', paddingTop: 150}}>
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
      :<View style={[ styles.container, {flexDirection: 'row' }]}>
      <View style={[styles.container, {
     flex: 1, flexDirection: "column", backgroundColor: "white", alignSelf: 'left'
     }]}>
         <Text>Ads</Text>
     </View>
     <View style={[styles.containerMultiple, {
     flex: 5, flexDirection: "column", backgroundColor: "lightgray" 
     }]}>
         
       <Text>{progress}/{testLength}</Text> 
       <Text style={{
        color: 'blue',
        fontFamily: 'Times New Roman',
        fontSize: 24,
        fontWeight: 'bold'
       }}>{score}</Text>

      <Text style={{       
         fontFamily: 'Times New Roman'
      }}>{testSelectedTitle}</Text>
       <Image source={{
         uri: options.path}}
         style={{marginTop: 25, width: '100%', height: 200, resizeMode: 'contain'}}
         />

        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}> 
             <RadioButton.Item label={options.option_1} value="first" status={ checked === 'first' ? 'checked' : 'unchecked' } position="leading"/>
             <RadioButton.Item label={options.option_2} value="second" status={ checked === 'second' ? 'checked' : 'unchecked' } position="leading"/>
             <RadioButton.Item label={options.option_3} value="third" status={ checked === 'third' ? 'checked' : 'unchecked' } position="leading"/>
             <RadioButton.Item label={options.option_4} value="fourth" status={ checked === 'fourrth' ? 'checked' : 'unchecked' } position="leading"/> 
         </RadioButton.Group> 
         
         <View style={{
             flex:1,
             flexDirection: 'row',
             width: '100%'
         }}>
         <TouchableOpacity style={{
             alignItems:'center',
             backgroundColor: 'teal', 
             height: 60,
             margin: 10,
             padding: 20,
             width: '45%'
             }}
             onPress={getTestQuestion}>
             <Text style={{color: 'lightgreen'}}>Next</Text>
         </TouchableOpacity>
         </View>
     </View>
     <View style={[styles.container, {
     flex: 1, flexDirection: "column", backgroundColor: "white"
     }]}>
         <Text>Other Ads</Text>
     </View>
  </View>
  : 
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
                    renderItem={({ item }) => <View>
                      <RenderItem 
                      testTitle={item.title + ': ' + item.genre} testSelection={item.link}/>
                      </View>}
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