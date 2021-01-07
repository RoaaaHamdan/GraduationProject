/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
 

//add this line to register the TrackPlayer
TrackPlayer.registerPlaybackService(() => require('./service.js'));