import React,{Component} from 'react'
import {Text,TextInput,View , ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import Communications from 'react-native-communications';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class forgotPass extends Component{
constructor(props){
    super(props);
    this.state={
     //   email:'roaahamdan985@gmail.com',
        ResetCode:'',
        display:'none'

    }
}
makeid(length) {
    length=7;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.setState({ResetCode:result})
    //return result;
    let SendURL ='http://192.168.1.209:8082/sendEmail/'+ this.state.email + '/' + this.state.ResetCode;
    fetch(SendURL, {method: 'POST', body: null})
      .then((response) => response.json)
      .then((json) => {
    
        alert('the Reset  code sent to your email')
   
      });
 }

sendResetCode =()=>{

    if (this.state.email==''){
        alert('Please enter Your Email')
    }
    else {

        const url = 'http://192.168.1.209:8082/checkEmailifexist/' +
        this.state.email;
fetch(url, {method: 'GET', body: null})
 .then((response) => response.json())
 .then((json) => {
   {
     if (json.result.length == 0) {
       alert('This email not exist ');
     } else
     
     {
      this.makeid();

     alert('We Send Pass Code To Your Email ');
const deleteUser = 'http://192.168.1.209:8082/deleteReqIn/'+this.state.email;

fetch(deleteUser, {method: 'delete', body: null})
   .then((response) => response.json)
 .then((json) => {
   let SendURL ='http://192.168.1.209:8082/addReq/'+ this.state.email + '/' + this.state.ResetCode;
 fetch(SendURL, {method: 'POST', body: null})
   .then((response) => response.json)
   .then((json) => {

       this.setState({display:'flex'})

   });
 });

     }

   }
 });
    }

}
render(){
    return(
        <SafeAreaView
        style={{
            backgroundColor:'lavender',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}
        
        >
 <TextInput
 style={{
     borderBottomColor:'midnightblue',
     borderBottomWidth:1,
     width:'70%',
     
 }}
 placeholder={'E-mail'}
 onChangeText={(val)=>{
     this.setState({email:val})
 }}

  />
  <TouchableOpacity
   style={{
       backgroundColor:'midnightblue',
       width:'50%',
       height:50,
       marginTop:40,
       opacity:.68,
       borderRadius:15,
       justifyContent:'center',
       alignItems:'center'
   }}
   onPress={this.sendResetCode}
  
  
   >
  <Text
  style={{
      color:'lavender'
  }}
  >
      Send Code!
  </Text>

   </TouchableOpacity>
   <TouchableOpacity
   style={{
      // backgroundColor:'midnightblue',
       width:'50%',
       height:50,
       marginTop:40,
       opacity:.68,
       borderRadius:15,
       justifyContent:'center',
       alignItems:'center',
       borderBottomColor:'midnightblue',
       borderBottomWidth:.7,
       display:this.state.display
   }}
  
   onPress={()=>  this.props.navigation.navigate('ChangePass',{
       email:this.state.email
   })   
                  }   >
  <Text
  style={{
      color:'midnightblue'
  }}
  >

      Chang PassCode!
  </Text>

   </TouchableOpacity>
   <TouchableOpacity

style={{
    marginTop:20,
alignSelf:'center'
}}
onPress={()=>  this.props.navigation.navigate('SignInScreen')}
>
<Icon name="chevron-left" size={30} color="black"
                     
                     style={{
                       width:50,
                       height:50,
            
                     }}
                      />
</TouchableOpacity>
        </SafeAreaView>
    )
}

}
