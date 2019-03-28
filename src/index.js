import Heroe from './components/Heroe';
import Profile from './components/Profile';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Heroe: {
    screen: Heroe
  },
  Profile: {
    screen: Profile
  }
});

export default { StackNavigator };
