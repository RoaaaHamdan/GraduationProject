import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Game from './Game';
import Result from './Result';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  handleGameFinish = result => {
    this.setState({ result });
  };


  render() {
    return (
      <View style={styles.container}>
      <Text
      style ={{
        fontFamily:'Itim-Regular',
        fontSize:30
      }}
      >Tic-Tac-Toe</Text>
        <View pointerEvents={this.state.result ? 'none' : 'auto'}>
          <Game onFinish={this.handleGameFinish} />
        </View>
        {this.state.result && (
          <Result
            result={this.state.result}
            onRestartGameBtnClick={this.handleGameRestart}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});