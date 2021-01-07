import React,{Component} from 'react'
import {Text,TextInput,View , ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ChangePass extends Component{
constructor(props){
    super(props);
    this.state={
        email:this.props.route.params.email,
        ResetCode:'',
        newPass:''

    }
}
 
sendInf=()=>{
    if(this.state.ResetCode==''|| this.state.newPass==''){
        alert('Please fill all field ');
    }
    else {

        const url = 'http://192.168.1.209:8082/checkifexistResetCode/' +
        this.state.email+'/'+this.state.ResetCode;
fetch(url, {method: 'GET', body: null})
 .then((response) => response.json())
 .then((json) => {
   {
     if (json.result.length == 0) {
       alert(' Wrong Reset Code ! ');
     } else
     
     {
        let UpdateURL =
        'http://192.168.1.209:8082/upadatepasswordUserr/' +
        this.state.email +
        '/' +
        this.state.newPass;
      fetch(UpdateURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          alert('Changed Successfully');
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
 placeholder={'Reset Code'}
 onChangeText={(val)=>{
     this.setState({ResetCode:val})
 }}

  />

<TextInput
 style={{
     borderBottomColor:'midnightblue',
     borderBottomWidth:1,
     width:'70%',
     
 }}
 placeholder={'New PassCode'}
 secureTextEntry={true}

 onChangeText={(val)=>{
     this.setState({newPass:val})
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
   onPress={this.sendInf}
  
  
   >
  <Text
  style={{
      color:'lavender'
  }}
  >
      Change PassCode!
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
