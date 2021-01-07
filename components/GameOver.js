import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import {vw, vh, vmin, vmax} from './../s1/viewport';


export default class GameOver extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View style={{ position : 'absolute', left : 25 * vmin, top : 30 * vmax  }}  >
				<Image resizeMode="stretch"  source ={ require('../imgs/flappybird_gameover.png')}
				    />
			</View>
		);
	}

}