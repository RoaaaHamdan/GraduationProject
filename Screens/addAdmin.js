import React ,{Component} from 'react'
import {View,Text,TouchableOpacity,TextInput,ScrollView,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
export default class AddAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      passCode:'',
      userName:'',
      type:'admin',
      flag:'',
      flagFirstName:'',
      flagLastName:'',
    }

  }
  addUser = () => {
    if (this.state.firstName==''||this.state.lastName==''||this.state.email==''||
    this.state.passCode==''||this.state.userName==''){
alert('please fill all field')
    }
         const url = 'http://192.168.1.209:8082/checkifAvilabile2/' +
             this.state.userName;
    fetch(url, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          if (json.result.length >= 1) {
            alert('plase choose another user Name ');
          } else {
        let SendURL =
            'http://192.168.1.209:8082/addUser/' + this.state.firstName + '/' + this.state.lastName + '/' + this.state.type
            + '/' + this.state.phoneNumber + '/' + this.state.email + '/' + this.state.userName + '/' +
            this.state.passCode +"/1/1/1/1";
      fetch(SendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
          }
          alert('Done')

        });
          }
        }
      });
    };
    





   render () {
     return(
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
                        color:'white',
                fontFamily:'SyneMono-Regular'

                }}>
                Add Admin
                </Text>
            </View>
            
                <View
                    style={{
                }}>
                    
                    <View style={{
                         justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',                     
                        flexDirection: 'row',
                        marginTop:50,
                        
                       // width:'100%'
                    }}>
                        <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}


                        onChangeText={
                      (val)=>{

 
                        if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(val) ||
      !/^[A-Z]/.test(val) ||
      /\d+/g.test(val)
    ) {
      // alert('dd');
console.log('dd') 
this.setState({flagFirstName:true})

   }
else{
  this.setState({flagFirstName:false,firstName:val})
}


                      }

                        }
                        onBlur={()=>{
                      
                      if(this.state.flagFirstName){
                      alert ('Wrong Sentx')
                      }
                                          }}
                        ></TextInput>
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
                       // marginTop:50
                       // width:'100%'
                    }}>
                            <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}

                        onChangeText={
                      (val)=>{

 
                        if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(val) ||
      !/^[A-Z]/.test(val) ||
      /\d+/g.test(val)
    ) {
      // alert('dd');
console.log('dd') 
this.setState({flagLastName})

   }
else{
  this.setState({flagLastName:false,lastName:val})
}


                      }

                        }
                        onBlur={()=>{
                      
                      if(this.state.flagLastName){
                      alert ('Wrong Sentx')
                      }
                                          }}
                        ></TextInput>
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
                    //    marginTop:50
                       // width:'100%'
                    }}>
                            <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}
                        keyboardType="numeric"
 onChangeText={(val)=>{
  this.setState({phoneNumber:val})

 }}
                        ></TextInput>
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
                       // marginTop:50
                       // width:'100%'
                    }}>
                          <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}
                    onChangeText={(val)=>{

                  
                      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (re.test(val)) {
console.log('tt');
this.setState({flag:false,email:val})

}
 else {
  console.log('sdtt')
;
   this.setState({flag:true})
 // setEmail(val);
 // set3(true)
 }
                    }  }

                    onBlur={()=>{
                      
if(this.state.flag){
alert ('Wrong Sentx')
}
                    }}
                        ></TextInput>
                        <Text>E-mail : {'  '}</Text>
                     
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
                       // marginTop:50
                       // width:'100%'
                    }}>
                          <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}
                        onChangeText={(val)=>{
  this.setState({passCode:val})

 }}
                        ></TextInput>
                        <Text>PassCode : {'  '}</Text>
                     
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
                        //marginTop:50
                       // width:'100%'
                    }}>
                            <TextInput
                            style={{
                            borderBottomColor:'midnightblue',
                            borderBottomWidth:3,
                            width:'50%',
                            marginBottom:40
                        }}

                        onChangeText={(val)=>{
  this.setState({userName:val})

 }}
                        ></TextInput>
                        <Text>UserName : {'  '}</Text>
                     
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
                        onPress={this.addUser}
                >
                   <Text
                      style={{
                        color:'white',
                        fontFamily:'Amiri-Bold'

                    }}>Add</Text> 
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
               this.state.email
              ],
              null,
              null,
              'Hello '+this.state.firstName + ' '+this.state.lastName,
              'your PassCode is =>'+this.state.passCode+' and Your user name is =>'+this.state.userName,
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
     )
   }
}