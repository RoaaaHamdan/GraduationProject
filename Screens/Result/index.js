import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { USER_FIGURE, AI_FIGURE, DRAW } from '../Game/constants';

export default class Result extends Component {
    constructor(props){
        super(props)
    }
  _getResultMessage() {
    const { result } = this.props;

    switch (result) {
      case USER_FIGURE:
        return 'Player won the game';
      case AI_FIGURE:
        return 'Phone won the game';
      case DRAW:
        return 'No one won';
    }
  }
  render() {
    const { onRestartGameBtnClick } = this.props;

    return (
      <View>
        <Text style={styles.result}>{this._getResultMessage()}</Text>
        <TouchableOpacity onPress={onRestartGameBtnClick}>
          <Text style={styles.instructions}>Touch here to play again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    fontSize: 24,
    margin: 18,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
  },
});