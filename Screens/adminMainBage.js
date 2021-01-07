import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,Image,
  ImageBackground,TouchableOpacity
} from 'react-native';

export default class adminMainBage extends Component { 
  constructor(props) { 
    super(props);
    this.state={
        id:this.props.route.params.userName,
    }
 
  }
 
  render() { 
    return (
      <View>
      
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'thistle'
        }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily:'CourierPrime-Bold'
          }}
          >
          Welcome Our Kind  Admin :)  
          </Text>
       </View>
  
        <View
        style={{ width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems:'center'
       }}>
        <TouchableOpacity
            style={{
            
            backgroundColor: 'lightpink',
            width: '50%',
            justifyContent: 'center',
            alignContent: 'center',
              alignItems: 'center',
              marginTop: 100,
              height: 60,
            borderRadius:200

        }}
        >
            <Text
              style={{
                fontSize: 20,
                fontFamily:'Lobster-Regular'
            }}
            >
             Reset Information
          </Text>
          </TouchableOpacity>
          


            <TouchableOpacity
            style={{
            
            backgroundColor: 'lightpink',
            width: '50%',
            justifyContent: 'center',
            alignContent: 'center',
              alignItems: 'center',
              marginTop: 100,
              height: 60,
            borderRadius:200

        }}

     onPress={()=> this.props.navigation.navigate('getAllUsers')}
        >
            <Text
                 style={{
                fontSize: 20,
                fontFamily:'Lobster-Regular'
            }}>
            Show All Users
          </Text>
          </TouchableOpacity>
          



              <TouchableOpacity
            style={{
            
            backgroundColor: 'lightpink',
            width: '50%',
            justifyContent: 'center',
            alignContent: 'center',
              alignItems: 'center',
              marginTop: 100,
              height: 60,
            borderRadius:200

        }}
        >
            <Text
                 style={{
                fontSize: 20,
                fontFamily:'Lobster-Regular'
            }}>
              Show All Requests
          </Text>
        </TouchableOpacity>

        </View>

        <View
          style={{
            width: 50,
            height: 50,
            alignSelf: 'flex-end',
            marginRight: 20,
            marginTop:0
        }}
        >
          <Image  
            source={require('../assets/images/yy.png')
            }
             style={{
            width: 50,
            height:50
        }}
          /> 
        </View>
        </View>


    );
  }

}