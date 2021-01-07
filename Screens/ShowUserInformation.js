import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import Communications from 'react-native-communications';

export default class showUserInfo extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
        firstname: this.props.route.params.Firstname,
        lastName: this.props.route.params.LastName,
           phoneNumber: this.props.route.params.phoneNumber,
        emailadd: this.props.route.params.emailAddrss,
        Type: this.props.route.params.type,
        Location: this.props.route.params.Location,

        userName:'',

     
    };
    }




     addUser = () => {
    //   alert('hell9');
         const url =
             'http://192.168.1.209:8082/checkifAvilabile2/' +
             this.state.userName;
   
    fetch(url, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        // alert('hell');
        {
          if (json.result.length >= 1) {
            alert('plase choose another user Name ');
          } else {
                 
        let SendURL =
            'http://192.168.1.209:8082/addUser/' + this.state.firstname + '/' + this.state.lastName + '/' + this.state.Type
            + '/' + this.state.phoneNumber + '/' + this.state.emailadd + '/' + this.state.userName + '/' +
            this.state.passCode +'/'+this.state.child+'/'+this.state.wei+'/'+this.state.games
            +'/'+this.state.pre;
        
        //this.state.emailadd
       
      fetch(SendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        });
          }
        }
      });
    };
    
    
     addUser1= () => {
         if (
             this.state.passCode == '' ||
             this.state.userName == ''
   
         ) {
             alert('لو سمحت املأ جميع الفراغات');
    
         }
    
    
    
    
    
    
         else {
                         
             
        let SendURL =
            'http://192.168.1.209:8082/addUser/' + this.state.firstname + '/' + this.state.lastName + '/' + this.state.Type
            + '/' + this.state.phoneNumber + '/' + this.state.emailadd + '/' + this.state.userName + '/' +
            this.state.passCode;
        
        //this.state.emailadd
       
      fetch(SendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        });
      alert('تم');
    }
  };
  


    render() {
        return (
            <ScrollView
            style={{
                backgroundColor:'lavender'
            }}
            >
            <View style={{
                backgroundColor: 'midnightblue',
                width: '100%',
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent:'center',
            }}>
                <Text
                    style={{
                        fontSize: 15,
                      //  fontFamily: 'CourierPrime-Italic',
                        color:'white',
                fontFamily:'SyneMono-Regular'

                }}>
                    Infomation of {this.state.firstname} {this.state.lastName}
                </Text>
            </View>
            
                <View
                    style={{
                     //   justifyContent: 'center',
                       // alignContent: 'center',
                        //alignItems:'center',

                }}>
                    
                    <View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:70,
                        
                       // width:'100%'
                    }}>
                        <Text
                            style={{
                            
                        }}
                        >{this.state.firstname}</Text>
                        <Text> First name : {'  '}</Text>
                     
                    </View>
                       <Text
                            style={{
                                borderBottomColor: 'midnightblue',
                                borderBottomWidth:2,
                              
                        }}
                    ></Text>
                    




<View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:50
                       // width:'100%'
                    }}>
                        <Text
                            style={{
                            
                        }}
                        >{this.state.lastName}</Text>
                        <Text> Last name : {'  '}</Text>
                     
                    </View>
                       <Text
                            style={{
                                borderBottomColor: 'midnightblue',
                                borderBottomWidth:2
                        }}
                    ></Text>
                    


                    <View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:50
                       // width:'100%'
                    }}>
                        <Text
                            style={{
                            
                        }}
                        >{this.state.Type}</Text>
                        <Text>Type : {'  '}</Text>
                     
                    </View>
                       <Text
                            style={{
                                borderBottomColor: 'midnightblue',
                                borderBottomWidth:2
                        }}
                        ></Text>
         
         

                    <View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:50
                       // width:'100%'
                    }}>
                        <Text
                            style={{
                            
                        }}
                        >{this.state.phoneNumber}</Text>
                        <Text>Phone Number : {'  '}</Text>
                     
                    </View>
                       <Text
                            style={{
                                borderBottomColor: 'midnightblue',
                                borderBottomWidth:2
                        }}
                        ></Text>
         
                    

   <View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:50
                       // width:'100%'
                    }}>
                        <Text
                            style={{
                            
                        }}
                        >{this.state.emailadd}</Text>
                        <Text>E-mail : {'  '}</Text>
                     
                    </View>
                       <Text
                            style={{
                                borderBottomColor: 'midnightblue',
                                borderBottomWidth:2
                        }}
                        ></Text>
         
                    







               
                    
         

                    
                    

                  
         

                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent:'space-around'
                }}>
              
                


                    <TouchableOpacity
                    style={{
                        marginTop: 60,
                        width: 100,
                        height: 50,
                        borderRadius: 200,
                        backgroundColor: 'midnightblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center'
                        }}
                        
                         onPress={
            () => Communications.phonecall(this.state.phoneNumber,true)
          }
                >
                    <Text
                    style={{
                        color:'white',
                        fontFamily:'Amiri-Bold'

                    }}
                    >Make A{'\n'}{'   '} Call</Text> 
                </TouchableOpacity>
                

                    <TouchableOpacity
                    style={{
                        marginTop: 60,
                        width: 100,
                        height: 50,
                        borderRadius: 200,
                        backgroundColor: 'midnightblue',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'center'
                        }}
                        
                         onPress={() =>
            Communications.email(
              [
               this.state.emailadd
              ],
              null,
              null,
              ' ALLO DOCTOR app',
              'Hello =>'+this.state.userName,
            )
          }
                >
                   <Text
                      style={{
                        color:'white',
                        fontFamily:'Amiri-Bold'
                    }}
                    
                    >Send E-mail</Text> 
            </TouchableOpacity>


                </View>
                <Text style={{
                    marginTop:60
                }}>

                </Text>
                            
                  
</ScrollView>
        );
      }
  }

