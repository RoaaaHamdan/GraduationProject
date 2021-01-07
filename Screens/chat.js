import { fromBase64 } from "js-base64";
import React, { Component } from 'react';
import { Text, View ,ScrollView} from 'react-native';
import firebaseSvc from './fireGlobal';
import { GiftedChat } from 'react-native-gifted-chat';
import fire from './fireGlobal';
import { Header } from 'react-native-elements';



export default class chatf extends Component {
    constructor(props) {
        super(props);
        this.array = [];

    }


    state = {
        messages: [],
        username:global.username,
        name :global.firstName,
        _id:global.username

    };


    componentDidMount() {
        this.array = [];
        firebaseSvc.refOn(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }


    componentWillUnmount() {
        firebaseSvc.refOff();

    }
    

    get user() {

          return {
              name:this.state.username,
              user:this.state.username,  
              _id: this.state._id,
              
 
  }
      }

    render() {

        return (

            <View style={{flex:1,backgroundColor:'lavender'}}>
            <View
            style={{
                width:'100%',
                height:70,
                backgroundColor:'midnightblue',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
          <Text
          
          style={{
              color:'white',
              fontSize:25,
              fontFamily:'Amiri-BoldItalic'
          }}
          >
              Public Chat 
          </Text>
            </View>
<GiftedChat

messages={this.state.messages}
onSend={firebaseSvc.send}
user={this.user}
/>
</View>
        

        );//class
    }//render
}//class