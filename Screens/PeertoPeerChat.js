import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Fire from './fire1';
import { GiftedChat } from 'react-native-gifted-chat';
import { Divider, Button,Header,CheckBox } from 'react-native-elements';


class chat extends Component {
  constructor(props) {
   super(props);
   this.array=[];

  }
    static navigationOptions = ({ navigation }) => ({
        title:  'Chat!',
    });

    state = {
        messages: [],
    };
    // 1.
    componentDidMount() {

        const chatee=global.user2;
      this.array=[];
        Fire.shared.on(chatee,(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            })))
        );
    }

    // 2.
    componentWillUnmount() {
        Fire.shared.off();

    }
    get user() {
     const chatee=global.user2;
     const  chater =  global.username;
if(chater!=0){
        // Return our name and our UID for GiftedChat to parse
        return {
            name:chater,
            user1:global.username,
            user2:global.user2,

            _id:global.username,
        };
    }
else{
    return {
        name:global.lastName,
        user1:global.username,
        user2:global.user2,

        _id:global.username,
    };

}
    }
    render() {
      var y=0;
      for(y;y<this.state.messages.length;y++){
    if(this.state.messages[y].text==undefined){
      this.state.messages.splice(y, 1);

    }
   
    }
    const sender = global.username;  
    //const name = navigation.getParam('name', 'NO-User');  
    const chateename =global.user2;  
    
        return (
            <View style={{flex:1,
backgroundColor:'lavender'
            }}>
       <Header
        backgroundColor='midnightblue'
centerComponent={{ text: chateename, style: { color: 'lavender',fontSize:20,fontWeight:'lavender' } }}

leftComponent={{ icon:'chevron-left', color: 'lavender',onPress:()=>this.props.navigation.navigate('ShowDoctorList')}}

/>
            <GiftedChat
        
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({});
export default chat;