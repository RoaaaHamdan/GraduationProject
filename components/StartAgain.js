import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from 'react-native';
import {vw, vh, vmin, vmax} from './../s1/viewport';


export default class StartAgain extends Component {

	constructor() {
		super();
	}
	
	pressMe(){
		this.props.onStartAgain();
	}

	render() {
		return (
			<View style={{ position: 'absolute', left: 35 * vmin, top: 40 * vmax }}  >
				<TouchableOpacity activeOpacity={1} onPress={ this.pressMe.bind(this) } >
					<Image resizeMode="stretch"  source ={ require('../imgs/flappybird_play.png') }
						/>
				</TouchableOpacity>
			</View>
		);
	}

}