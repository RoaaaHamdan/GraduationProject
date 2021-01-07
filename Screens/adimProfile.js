import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import AsyncStorage from '@react-native-community/async-storage'
export default class adminProfile  extends Component {
  constructor(props){
    super(props);
    this.state={
      adminName:'Roaa Hamdan',
      id:global.username,
     // avatarSource:null,
      immage:'',
      flag:0,
      avatarSource:''
      
    }

    OneSignal.setLogLevel(6, 0);
    OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
     OneSignal.addEventListener('received', this.onReceived);
     OneSignal.addEventListener('opened', this.onOpened);
     OneSignal.addEventListener('ids',this.onIds);
     OneSignal.sendTag("key",this.state.id);
  
  }
  componentDidMount=()=>{
    //alert(this.state.id)
    let url272 = 'http://192.168.1.209:8082/Getphoto/'+this.state.id;
    
    fetch(url272, { method: 'GET',body:null})
    .then(response => response.json())
    .then(json => {{ var t;
      
 this.setState({immage:json.result[0].photo,flag:0});
//alert(this.state.immage);


   }  })
   .catch(error=>{
     console.log(error)
   });
  }





  
  selectImage=()=>{
    const id=global.username;
  //const { navigation } = this.props;  
  ImagePicker.showImagePicker( (response) => {
    console.log('Response = ', response);
  if (response.didCancel) {
    console.log('User cancelled image picker');
  }else if (response.error) {
   console.log('ImagePicker Error: ', response.error);
  }else if (response.customButton) {
   console.log('User tapped custom button: ', response.customButton);
  }else {
   console.log('User selected a file form camera or gallery', response); 
   const data = new FormData();
   data.append('name', 'avatar');
   data.append('uri', response.uri);
   data.append('id', id);

   data.append('fileData', {
    uri : response.uri,
    type: response.type,
    name: response.fileName
   });
   const config = {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'multipart/form-data',
    },
    body: data,
   };
  fetch("http://192.168.1.209:8082/api/v1/upload",config)
   .then((checkStatusAndGetJSONResponse)=>{       
     console.log(checkStatusAndGetJSONResponse);
   }).catch((err)=>{console.log(err)});

   this.setState({avatarSource:response.uri,flag:1});
  // alert(this.state.avatarSource)
  }
  })

}
  render(){
    return(
      <ScrollView
      style={{
       // backgroundColor:'black'
      }}
      >
      <View
      style={{
        width:'100%',
        height:60,
        backgroundColor:'midnightblue',
        justifyContent:'center',
        alignItems:'center'

      }}
      >
       <Text
       style={{
         color:'white',
         fontSize:20,
         fontFamily:'Itim-Regular'
       }}>
         Welcome {global.firstName} {global.lastName}
       </Text>
      </View>
      <View
      style={{
        backgroundColor:'lavender',
        width:'100%',
        height:250      }}>
<View
style={{
    width:200,
    height:200,
    alignSelf:'center',
    marginTop:20
    
}}

>
         {this.state.flag? <Image  source={{uri:this.state.avatarSource}}    
             
   style={{
    width:'100%',
    height:200,
    alignSelf:'center',
    borderRadius:200

    
}}

	
  />:
  <Image  source={{ uri: encodeURI("http://192.168.1.209:8082/load_image?img=" +this.state.immage)}}     
 encod
   
   style={{
    width:'100%',
    height:200,
    alignSelf:'center',
    borderRadius:200
}}

/> }
<View style={styles.dm}>
</View>

<TouchableOpacity
  style={styles.active}
  onPress={this.selectImage}>


<Icon name="camera" size={30} color="black" />

  </TouchableOpacity>
<View style={styles.add}>

</View>

</View>



      </View>
<View>
  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={
    ()=>  this.props.navigation.navigate('addGlobalEvent')

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
  Add an event
</Text>
  </TouchableOpacity>



  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={
    ()=>  this.props.navigation.navigate('AddAdmin')

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
  Add an admin
</Text>
  </TouchableOpacity>


  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={
    ()=>  this.props.navigation.navigate('AddP')

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
  Add pharmacy
</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={
    ()=>  this.props.navigation.navigate('addtoCart')

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
  Add a product
</Text>
  </TouchableOpacity>




  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={
    ()=>  this.props.navigation.navigate('EditDocInf')

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
Edit Inf.</Text>
  </TouchableOpacity>



  <TouchableOpacity
  style={{
    width:'40%',
    height:50,
    backgroundColor:'midnightblue',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    opacity:.7,
    borderRadius:10,
    marginTop:40
  }}

  onPress={

    ()=>  {
      global.username= '';
      AsyncStorage.clear();
     this.props.navigation.navigate('SignInScreen');
              AsyncStorage.clear();

    }

  }
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Bold'
}}
>
LogOut</Text>
  </TouchableOpacity>
</View>



      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    text: {
      fontFamily: 'HelveticaNeue',
      color: '#52575D',
    },
    image: {
      flex: 1,
      height: undefined,
      width: undefined,
    },
    titleBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
      marginHorizontal: 16,
    },
    subText: {
      fontSize: 12,
      color: '#AEB5BC',
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: 'hidden',
    },
    dm: {
      backgroundColor: '#41444B',
      position: 'absolute',
      top: 20,
      width: 20,
      height: 20,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:15
    },
    active: {
      
      position: 'absolute',
      bottom: 28,
      left: -20,
      padding: 4,
      height: 40,
      width: 40,
      borderRadius: 10,
    },
    add: {
      backgroundColor: '#41444B',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 30,
      height: 30,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:20

    },
    infoContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 32,
    },
    statsBox: {
      alignItems: 'center',
      flex: 1,
    },
    newPost: {
      marginTop: 70,
      alignSelf: 'center',
      borderWidth: 0.5,
      width: '80%',
      height: 100,
      borderColor: 'hotpink',
    },
  
    button: {
      //marginTop: 20,
      color: '#41444B',
      shadowColor: 'rgba(0,0,0,1)',
      shadowOffset: {
        width: 3,
        height: 3,
      },
    },
    update: {
      // textAlign: 'center',
      color: '#fff',
    },
    itemP: {
      backgroundColor: 'lightpink',
      marginTop: 30,
      width: '80%',
      //justifyContent: 'center',
      // alignContent:'center',
      height: 100,
      alignSelf: 'center',
      //fontFamily: 'Arial',
      padding: 20,
      fontSize: 15,
      fontFamily: 'CourierPrime-Bold',
      shadowOffset: {
        width: 10,
        height: -12,
      },
      shadowOpacity: 0.7,
      shadowRadius: 6,
    },
  });