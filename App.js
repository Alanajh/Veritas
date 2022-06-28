
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './routes/homeStack'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Navigator/>
  );
}