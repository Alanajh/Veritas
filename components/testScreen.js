import react, { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from "react-native-paper";
import DropDownPicker from 'react-native-dropdown-picker';

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
import LetsBeginScreen from './letsBegin';

export default  function TestScreen ()  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [reload, setReload] = useState(true); // initiate fetch call to reload fresh page
    const [titles, setTitles] = useState([]);
    const [txtInput, setInput] = useState('');
    const [testSelected, setTestSelected] = useState(false); //if test is selected set this to true
    const [testSelectedTitle, setTestSelectedTitle] = useState('');
    const [filterTests, setTestFilter] = useState();
    const [openFilter, setOpenFilter] = useState(false);
    const [startTest, setStartTest] = useState(false); // indicates the "Lets Begin" button
    const [scoreScreen, setScoreScreen] = useState(false);
    const [scoreScreenTitles, setScoreScreenTitles] = useState([])

    /////////////////////////////////////////////////////////////////////
    /* TEST OPTIONS */
    const [ questions, setQuestions ] = useState('');
    const [ options, setOptions ] = useState('');
    const [ testLength, setTestLength] = useState(null);
    const [ img, setImg ] = useState('');
    const [ score, setScore ] = useState(0);
    const [ scores, setScores] = useState([]);
    const [ genrw, setGenre] = useState([]);
    const [ date, setDate] = useState(date);

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
      const ItemDividerScore = () => {
        return (
          <View
            style={{
              height: 1,
              width: '45%',
              backgroundColor: 'blue',
            }}
          />
        );
      }
      const ItemDividerTitle = () => {
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
         // setTestSelected(false)
          setScore(0)
          setOptions('');
          setTestUrl(urlTest)
          setStartTest(true)
        }else{
          Alert.alert('No test found.')
        }
      }
    // Filter the test list  based on the search object
      const GetFilterTest = (searchValue) => {
        if(searchValue){
          console.log(searchValue)
        }else{

        }
       
       /* const filteredData = titles[0].title.filter((i) => {
          return Object.values(i).join('').toLowerCase().includes(txtInput.toLowerCase())
        }) */
        
        
         /* items !== 'Famous Medical Discoveries' */
       /*  titles.filter((item) => {
            if(txtInput == ''){
                return item
            } else if (item.title.toLowerCase().includes(txtInput.toLocaleLowerCase())){
                return item
            }
        }).map((item, key) => {
            //return console.log(item.title)
            setTitles([item])
        }) */
      }

      // Display the icon that comes before each test .... to be upgraded to a differrent icon based on the subject/genre
      const RenderItem = ({testTitle, testSelection, testGenre}) => {
        return <Text 
                  style={styles.listTxt}
                  onPress={() => getTest(testTitle, testSelection, testGenre)}> 
            <Icon name='chevron-back-outline' size={15} color='blue'/>
            {testTitle} 
            
        </Text>
      }
      // Renders the score visual to the view    
      const RenderScore = ({scores}) =>{
       // return <Text style={styles.listTxt}>{scores}</Text>
       
      }

      const RenderScoreTitle = ({scoreTitle}) => {
        return <Text style={styles.listTxt}
        >{scoreTitle}</Text>
      }

      const RenderScoreX = ({genre}) => {
        return <Text 
                  
                  /* onPress={() => } */> 
            <Icon name='chevron-down-outline' size={15} color='blue'/>
            {genre} 
            
        </Text>
      }
    /* TEST TAKING SCREEN */
    const getTestQuestion = () => {
      setTestSelected(true)
        fetch(testUrl)
        .then(res => res.json())
        .then(data2 =>{
          setTestLength(data2.data.tests[0].target.length)
          setOptions(data2.data.tests[0].target[progress])
          setQuestions(data2.data.tests[0])
          setTestSelectedTitle(data2.data.tests[0].title)
          setTestType(data2.data.tests[0].type)
        })   
        getNext();
    }

    const getNext = () => { 
        let done = false;
       setValue('first')
        if(progress < testLength            ){
          setStartTest(false)
          setProgress(progress + 1)
           if(value == options.direct){
                setScore(score + 100)
            }else{
              // do a count to compare wrong vs right and add a select button in the settings to negatively count wrong answers
             
            } 
        }else{
         // setProgress(progress + 0)
          done = true
        }
        if(progress == testLength){
          setScores(scores.concat(score))
          setScoreScreenTitles(scoreScreenTitles.concat(testSelectedTitle))
          setTestSelected(false)
        }
    }
    const getPrevious = () => { 
        if(progress > 0){
            setProgress(progress - 1) 
        }else(
            //PLACE ENDING SCREEN HERE
            console.log("the end mnm")
        )
    }
    // When TestType is selected show the correct format
    const GetTestType = ({testTypeSelected}) => {
      if(testType === 0){
        //multiple choice text
      return <View
        style={{
          backgroundColor: 'white', 
          borderRadius: 15, 
          margin: 15, 
          padding: 15}}>
      <Text style={{ lineHeight: 20,  padding: 5, fontWeight: 'bold'}} >{options.question}</Text></View>
    }else if(testType === 1){
      //multiple choice pic
      return <View
      style={{
        backgroundColor: 'white', 
        borderRadius: 15, 
        margin: 15, 
        paddingBottom: 25}}>
      <Image source={{
        uri: options.path}}
        style={{marginTop: 25, width: '100%', height: 200, resizeMode: 'contain'}}
        /></View>
    }else if ( testType === 2){
      //essay
    }else if (testType == 3){
      // true or false
    }else if (testType == 7){
      return <View>
          <Text style={{ lineHeight: 20,  padding: 25, fontSize: 22, fontWeight: 'bold', textAlign: 'center'}} >{options.question}</Text>
          <Image source={{
            uri: options.path}}
            style={{marginTop: 25, width: '100%', height: 200, resizeMode: 'contain'}}
            />
        </View>
    }else{
      return <View><Text> This test is unavailable, please choose another.</Text></View>
    }
    }
    // Determine if icon is selected for the dropdown or not
    const IconAdjustment = () => {
      console.log('Icon: ' + openFilter)
      if(openFilter === true){
        return <View><Icon name='chevron-down-circle-outline' size={22} style={styles.txtStyle}/></View>
      }else if (openFilter === false){
        return <View><Icon name='chevron-back-circle-outline' size={22} style={styles.txtStyle}/></View>
      }
    }

    return (  
      //testSelected? 
      startTest? <LetsBeginScreen getTestQuestion={getTestQuestion}/>
      : testSelected? <View style={[ styles.container, {flexDirection: 'row' }]}>
  
     <View style={[styles.containerMultiple, {
     flex: 5, flexDirection: "column", backgroundColor: "lightgray" 
     }]}>
         
         <View style={{ flexDirection: 'row' }}>
       <Text style={{flex: 1}}>{progress}/{testLength}</Text> 
       <Text style={{
        color: 'blue',
        fontFamily: 'Times New Roman',
        fontSize: 24,
        fontWeight: 'bold',
        flex:2, 
        textAlign: 'right'
       }}>{score}</Text>
       </View>

      <Text style={{ fontFamily: 'Times New Roman', fontSize: 18, textAlign: 'center' }}>{testSelectedTitle}</Text>
       
       {/* Test selection */}
        {GetTestType(testType)}

        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}> 
             <RadioButton.Item label={options.option_1} value="first" color='blue' mode='android' status={ checked === 'first' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label={options.option_2} value="second" color='blue' mode='android' status={ checked === 'second' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label={options.option_3} value="third"  color='blue' mode='android' status={ checked === 'third' ? 'checked' : 'unchecked' } position="trailing"/>
             <RadioButton.Item label={options.option_4} value="fourth"  color='blue' mode='android' status={ checked === 'fourrth' ? 'checked' : 'unchecked' } position="trailing"/> 
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

      </View>
      : // List of tests
      score? 
      <View style={styles.scoreStyles}>
        <View style={styles.scoreBoard}>
        <Text style={styles.scoreTxt}>SCORES</Text>
        </View>
        <View>
        <FlatList
            style={{
              textAlign: 'right'
            }}
            data={scoreScreenTitles}
            renderItem={({ item }) => <View>
              <RenderScoreTitle 
              scoreTitle={item} />
              </View>}
            keyExtractor={(item, index) => index.toString()}
            extraData={scoreScreenTitles}
            ItemSeparatorComponent={ItemDividerScore}/>
        <FlatList
           style={styles.flat}
           data={scores}
           renderItem={({ item }) => <View>
             <RenderScoreTitle 
             scoreTitle={item} />
             </View>}
           keyExtractor={(item, index) => index.toString()}
           extraData={titles}
           ItemSeparatorComponent={ItemDividerScore}/>
                </View>
        <TouchableOpacity
            style={styles.btnHome}
            onPress={() => {setReload(true)}}>
            <Text
                style={styles.btnTxt}>Tests</Text>
        </TouchableOpacity>
      </View>:
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
                    width: '65%' }}>
                  <TextInput 
                    placeholder='category search'
                    placeholderTextColor="rgba(255,255,255, 0.5)"
                    style={styles.txtStyle}
                    value={txtInput}
                    onChangeText={text => setInput(text)}
                    /> 
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setOpenFilter(!openFilter)}
                    style={{ 
                      backgroundColor: 'steelblue', 
                      padding: 8,
                      borderRadius: 10,
                      height: 40,
                      marginLeft: 'auto',
                      width: '11%' }}>
                        {IconAdjustment()}
                      {/* <Text >Filter</Text> */}
                      </TouchableOpacity>  
                    <TouchableOpacity 
                        onPress={() => GetFilterTest(txtInput, testGenre)}
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
                          testTitle={item.title + ' - ' + item.genre} testSelection={item.link}
                          testGenre={item.genre}/>
                          </View>}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={titles}
                        ItemSeparatorComponent={ItemDivider}
                    />
                </View>
            )
          }

    // StyleSheet
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
        },
        /* *****************  SCORES STYLES **************** */
        btnHome:{
          alignItems: 'center',
          backgroundColor: 'black',
          margin: 15,
      },
      btnTxt:{
          color: 'white',
          padding: 15
      },
      divider: {
          height: 1,
          width: '80%',
          backgroundColor: 'blue'
      },
      flatlistStyle:{
  
      },
      renderScoreStyle:{
        alignSelf: 'center',
        color: 'green',
        fontSize: 18,
        fontWeight: '900',
        padding: 25,
        letterSpacing: '5'
      },
      scoreBoard:{

      },
      scoreStyles: {
      },
      scoreTxt:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 80,
      }
    })