import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {vw, vh, vmin, vmax} from './../s1/viewport';


export default class Start extends Component {

	constructor() {
		super();
	}
	
	pressMe(){
		
		this.props.onStart();
	}

	render() {
		return (
			<View style={{ position: 'absolute', left: 27 * vmin, top: 30 * vmax }}  >
				<Image resizeMode="stretch"  source ={ require('../imgs/flappybird-logo.png') }
					/>
				<TouchableOpacity activeOpacity={1} onPress={ this.pressMe.bind(this) } >
					<Image resizeMode="stretch"  style= {{ marginLeft : 26 }}    source ={ require('../imgs/flappybird-tab.png') }
						/>
				</TouchableOpacity>
			</View>
		);
	}

}