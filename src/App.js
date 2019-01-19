import { createStackNavigator, createAppContainer } from 'react-navigation';
import Anecdotes from './components/Anecdotes'
import HomeScreen from './components/HomeScreen'

const RootStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Anecdotes: {screen: Anecdotes},
});

const App = createAppContainer(RootStack);

export default App;