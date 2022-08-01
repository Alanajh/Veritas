import react,{ useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function ScoreScreen(props){

    const [scores, setScores] = useState([]);
    const [date, setDate] = useState(date);
    const [testTitle, setTestTitle] = useState('');

    return <View>
        <Text>SCORES</Text>
        <Text>{props.score}</Text>
        <FlatList>

        </FlatList>
        <TouchableOpacity>
            <Text>Tests</Text>
        </TouchableOpacity>
    </View>
}