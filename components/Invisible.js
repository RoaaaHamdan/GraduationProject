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


export default class Invisible extends Component{

	constructor(){
		super();
	}

	componentDidMount(){

	}

	componentWillUnMount(){
	}
	

	render(){
		return(
			<View  style={{  position : 'absolute', left : this.props.x , top : this.props.y*vmax  }}  >
				<Text style ={{ width : this.props.width * vmin, height : this.props.height  *vmax }}>  </Text>
			</View>
		);
	}

}