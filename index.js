import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createAppContainer } from "react-navigation";
import Navigator from './src';
const App = createAppContainer(Navigator.StackNavigator);

AppRegistry.registerComponent(appName, () => App);
