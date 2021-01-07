import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
//  import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'

//import {List, ListItem} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class doctorProfile extends Component {
  constructor(props) {
    super(props);
    this.data = [];

    this.state = {
      //  global.username=UserNmae;
     // global.phoneNumber=phoneNumber;
      //global.locatin=locatin;
      username:  '',

      typeSp: '',
      telNum:  global.phoneNumber,
      Location:global.locatin,
      avatorsource: '',
      newPostt: '',
      newPo: [],
      posts: [],
      avatarSource:null,
      immage:'',
      flag:0,
      id:'',
      display:'none'

    };
    
    OneSignal.setLogLevel(6, 0);
    OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
     OneSignal.addEventListener('received', this.onReceived);
     OneSignal.addEventListener('opened', this.onOpened);
     OneSignal.addEventListener('ids',this.onIds);
     OneSignal.sendTag("key",this.state.id);
  
  }
  data = [];
  newPP = [];
  UNSAFE_componentWillMount = () =>  {
if (   global.globalNormlUserFlag== true){
this.state.username=global.user2;
this.state.id=global.user2;
this.state.display='none';
//this.setState({id:global.user2,username:global.user2})

}
else{
  this.state.username=global.username;
  this.state.id=global.username;
  this.state.display='flex';


}
    let url272 = 'http://192.168.1.209:8082/Getphoto/'+this.state.id;
    
    fetch(url272, { method: 'GET',body:null})
    .then(response => response.json())
    .then(json => {{ var t;
      
 this.setState({ immage:json.result[0].photo,flag:0});
//alert(this.state.immage);


   }  })
   .catch(error=>{
     console.log(error)
   });
  





    this.getPosts();
  }

  addApost = () => {
    //this.setState({ newPostt: c });

    if (this.state.newPostt == '') {
      alert('Please enter a  post to publish it  ');
    } else {
      this.newPP.push(this.state.newPostt);
      //   alert(this.newPP);
      this.setState({newPo: this.newPP});
      let UpdateURL =
        'http://192.168.1.209:8082/addPost/' +
        this.state.newPostt +
        '/' +
        this.state.username; //+
      //  '/' +
      //    this.state.id;
      //const data = new FormData ();
      // data.append ('pass', this.state.newPass);
      fetch(UpdateURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        });
    }
    //this.getPosts();
  };

  // /getPostsg

  getPosts = async () => {
    let url23 = 'http://192.168.1.209:8082/getPosts/' + this.state.username;

    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              //  alert(json.result.length);
              this.data.push(json.result[t]);
            }
          }
          this.setState({posts: this.data});
          // alert(this.state.posts[0].post);
        }
      });

    let url235 = 'http://192.168.1.209:8082/getinfo/' + this.state.username;

    fetch(url235, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          // var t;

          this.state.typeSp = json.result[0].Type; // alert(this.state.posts[0].post);
        }
      });

    //alert(this.data[0]);
  };

  getType = async () => {
    // alert("hell");
    //alert(this.data[0]);
  };

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
  render() {
    //const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
      <View
      style={{
        backgroundColor:'midnightblue',
        height:60
      }}
      >
      <TouchableOpacity
      style={{
        alignSelf:'flex-end'
      }}
      onPress={() =>{
        AsyncStorage.clear();

        
         this.props.navigation.navigate('SignInScreen')}} >

                <Icon name="chevron-left" size={30} color="white"
                
                style={{
                  width:50,
                  height:50,
                  marginTop:20
                }}
                 />
    </TouchableOpacity>
      </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}></View>
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
      style={{
        position: 'absolute',
    bottom: 28,
    left: -20,
    padding: 4,
    height: 40,
    width: 40,
    borderRadius: 10,
    display:this.state.display,
      }}
      onPress={this.selectImage}>
    
    
    <Icon name="camera" size={30} color="black"
    
    style={{
      display:this.state.display
    }}
     />
    
      </TouchableOpacity>
    <View style={styles.add}>
    
    </View>
    
    </View>
    
    
    
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
              {this.state.username}
            </Text>
            <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
              {this.state.typeSp}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: '#DFD8C8',
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}>
              <Text style={[styles.text, {fontSize: 24}]}>
                {this.state.Location}
              </Text>
              <Text style={[styles.text, styles.subText]}>Location</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 24}]}>
                {this.state.telNum}
              </Text>
              <Text style={[styles.text, styles.subText]}>Telphone</Text>
            </View>
          </View>

          <TextInput
            style={{
              
              marginTop: 70,
    alignSelf: 'center',
    borderWidth: 0.5,
    width: '80%',
    height: 100,
    borderColor: 'lavender',
    display:this.state.display,
            }}
            placeholder="add a new Post"
            onChangeText={(value) => this.setState({newPostt: value})}
          />
          <View style={{
  

  color: '#41444B',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
      display:this.state.display,


           } }}>
            <TouchableOpacity
              //  title="add post "
              style={{
                marginTop: 20,
                backgroundColor: 'lightskyblue',
                shadowColor: 'rgba(0,0,0,1)',
                shadowOffset: {
                  width: 10,
                  height: -12,
                },
                elevation: 5,
                shadowOpacity: 0.5,
                shadowRadius: 0,
                borderRadius: 100,
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                display:this.state.display
              }}
              onPress={this.addApost}>
              <Text>Add new post</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={this.state.newPo}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
              <Text style={styles.itemP}>{` ${item} `}</Text>
            )}
          />
          <FlatList
            data={this.state.posts}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
              <Text
                style={[
                  styles.itemP,
                  {
                    shadowOffset: {
                      width: 10,
                      height: -12,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 77,
                    shadowColor: 'black',
                  },
                ]}>{` ${item.post} `}</Text>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
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
   // marginTop: 24,
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
    borderColor: 'lavender',
    
  },

  button: {

    
  },
  update: {
    color: '#fff',
  },
  itemP: {
    backgroundColor: 'lavender',
    marginTop: 30,
    width: '80%',
    height: 100,
    alignSelf: 'center',
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
