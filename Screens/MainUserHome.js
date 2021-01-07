import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  
} from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/Ionicons';
import  AsyncStorage from '@react-native-community/async-storage'

export default class  MainUserHome extends Component {


  constructor(props){
  super(props);
  this.state={// this.props.route.param
   // this.props.route.params.
    userName: this.props.route.params.userName,
    flagp:global.flagp,
    flagc:global.flagc,
    flaggames:global.flaggames,
    flagweight:global.flagweight,
    displayg:'none',
    displayc:'none',
    displayp:'none',
    displayw:'none',
    display1:'flex',
    display2:'none'
  }
  


  OneSignal.setLogLevel(6, 0);
  OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids',this.onIds);
   OneSignal.sendTag("key",global.username);

}

onIds = device => {
  // write logic to execute when device id is received
  };
componentDidMount=()=>{
if(this.state.flagc ==1 ){
  //alert(4)
  this.setState({displayc:'flex'})
}
if(this.state.flagp ==1 ){
  this.setState({displayp:'flex'})
}
if(this.state.flagweight ==1 ){
  this.setState({displayw:'flex'})
}
if(this.state.flaggames ==1 ){
  this.setState({displayg:'flex'})
}
//alert(this.state.displayc+''+this.state.displayg)

}
//}
/**
 * async getToken (){
  try {
    let userData = await AsyncStorage.getItem("user");
    let data=userData;
    if (data!=null){
      let d = data.toString();

    }
  }catch(error)
{
  console.log(error)
}}
 * 
 */


  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  sendNotification(data, id) {
    let headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
    };  let endpoint = 'https://onesignal.com/api/v1/notifications';  let params = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
        filters: [   // Will send notification only to specific device
          {          // Optional
            field: 'tag',
            key: 'key',
            relation: '=',
            value: id,
          },
        ],
        delayed_option:'timezone',
        delivery_time_of_day:"11:9:00",
        headings: {en: 'Your Heading'},
       contents: {en: data},
      }),
    };
    fetch(endpoint, params).then(res => console.log(res));
  }

   clearAppData = async function() {

   //     const keys = await AsyncStorage.getAllKeys();
     //   await AsyncStorage.multiRemove(keys);
      
       AsyncStorage.clear();
this.props.navigation.navigate('SignInScreen');

    //} catch (error) {
      //  console.error('Error clearing app data.');
    //}
}
  render() {
  return (
    <SafeAreaView
    style={{
      backgroundColor:'lavender',
      width:'100%',
      height:'100%'//lavender
    }}
    >
      <View
        style={{
          backgroundColor: 'midnightblue',
          marginBottom:50,
          height:80,
          flexDirection:'row',
          justifyContent:'center',
        }}>
        <Text style={styles.welcome}>WELCOME {global.username}</Text>
 
      </View>
      <ScrollView
      style={{
        display:this.state.display1
      }}
      >
  
      <View style={styles.flexview}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowDoctorList')}>
            <Image source={require('../assets/images/docto.jpg')} style={styles.img} />
            <Text style={styles.txt}> Consult a doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity
                     onPress={()=>   this.props.navigation.navigate('Artical') }
          
          
          >
            <Image source={require('../assets/images/maqalat.jpg')} style={styles.img} />
            <Text style={styles.txt}>Follow the latest{'\n'} health articles </Text>
          </TouchableOpacity>
          <TouchableOpacity
          
          // /showMap
          onPress={() => {
            //  alert('حافظ على مسافة 1 متر من الجهاز');
            this.props.navigation.navigate('showMap');
            }}
          
          >
            <Image source={require('../assets/images/ap.jpg')} style={styles.img} />
            <Text style={styles.txt}> Hospitals and{'\n '}
            Clinics</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.flexview}>
        <TouchableOpacity
            onPress={() => {
            //  alert('حافظ على مسافة 1 متر من الجهاز');
            this.props.navigation.navigate('Calculations');
            }}>
            <Image source={require('../assets/images/ee.jpg')} style={styles.img} />
            <Text style={styles.txt}>Some calculations{'\n'} and checks</Text>
          </TouchableOpacity>
        <TouchableOpacity
        style={{
          display:this.state.displayw
        }}
        onPress={()=>this.props.navigation.navigate('fitness')}
        >
            <Image source={require('../assets/images/Wei.jpg')} style={styles.img} />
            <Text style={styles.txt}>fitness</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
         // display:this.state.displayw
        }}
     
        //Montada
        onPress={()=>   this.props.navigation.navigate('Montada')   }

           >
            <Image source={require('../assets/images/caht.png')} style={styles.img} />
            <Text style={styles.txt}>ask a question</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexview}>
        <TouchableOpacity
          onPress={()=>   this.props.navigation.navigate('HomeBaby',{id:this.state.userName})   }
          style={{
          display:this.state.displayc
        }}
        
        >
            <Image source={require('../assets/images/baby.jpg')} style={styles.img} />
            <Text style={styles.txt}>Child care {'\n'}Section</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
          display:this.state.displayg
        }}
           onPress={()=>   this.props.navigation.navigate('GamesHome')   }
          >
            <Image source={require('../assets/images/games.png')} style={styles.img} />
            <Text style={styles.txt}>Develop your{'\n'} child's mind</Text>
          </TouchableOpacity>


       
          <TouchableOpacity
          
          style={{//pregnant1
          display:this.state.displayp
        }}
        onPress={()=>   this.props.navigation.navigate('pregnant1')   }

          >
            <Image source={require('../assets/images/pre.jpg')} style={styles.img} />
            <Text style={styles.txt}> Pregnant care {'\n'}section </Text>
          </TouchableOpacity>
        </View>
        
<View
style={styles.flexview}
>
  
<TouchableOpacity
          
          style={{//pregnant1
          display:this.state.displayp
        }}
        onPress={()=>   this.props.navigation.navigate('addtoCart')   }

          >
            <Image source={require('../assets/images/i.png')} style={styles.img} />
            <Text style={styles.txt}> Your order{'\n'}come to you </Text>
          </TouchableOpacity>
</View>
        <Text style={{marginTop:100}}></Text>
          <ActionButton buttonColor="midnightblue"
         // verticalOrientation='down'
          
          style={{
           // alignSelf:'flex-end'
          }}
          >
          <ActionButton.Item buttonColor='#9b59b6' title="Edit information" onPress={() => 
          
          this.props.navigation.navigate('EditDocInf')
          
          }>
            <Icon name="user-edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Arabic" onPress={() => {
               if(global.flagA =='Eng'){
            global.flagA='Arab';
            global.display1 ='none';
            global.display2 ='flex';

            this.setState({display1:'none',display2:'flex'})

          }
          else   if(global.flagA =='Arab'){
            global.flagA='Eng';
            global.display2 ='none';
            global.display1 ='flex';
            this.setState({display2:'none',display1:'flex'})

          }
             
               // alert(global.flagA)
          }}>
            <Icon name="language" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Contact List" onPress={() => {


this.props.navigation.navigate('contactList');

          }}>
            <Icon name="address-book" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="Log Out" onPress={() => {

//AsyncStorage.clear();
this.clearAppData()

          }}>
            <Icon name="sign-out" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      
      
      
      </ScrollView>
   
      <ScrollView
      style={{
        display:this.state.display2
      }}
      >
  
      <View style={styles.flexview}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShowDoctorList')}>
            <Image source={require('../assets/images/docto.jpg')} style={styles.img} />
            <Text style={styles.txt}> استشر طبيباً</Text>
          </TouchableOpacity>

          <TouchableOpacity
                     onPress={()=>   this.props.navigation.navigate('Artical') }
          
          
          >
            <Image source={require('../assets/images/maqalat.jpg')} style={styles.img} />
            <Text style={styles.txt}>تابع آخر{'\n'} المقالات الصحية </Text>
          </TouchableOpacity>
          <TouchableOpacity
          
          // /showMap
          onPress={() => {
            //  alert('حافظ على مسافة 1 متر من الجهاز');
            this.props.navigation.navigate('showMap');
            }}
          
          >
            <Image source={require('../assets/images/ap.jpg')} style={styles.img} />
            <Text style={styles.txt}>المستشفيات و {'\n '}
            الصيدليات</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.flexview}>
        <TouchableOpacity
            onPress={() => {
            //  alert('حافظ على مسافة 1 متر من الجهاز');
            this.props.navigation.navigate('Calculations');
            }}>
            <Image source={require('../assets/images/ee.jpg')} style={styles.img} />
            <Text style={styles.txt}>بعض الحسابات{'\n'} و الفحوصات</Text>
          </TouchableOpacity>
        <TouchableOpacity
        style={{
          display:this.state.displayw
        }}
        onPress={()=>this.props.navigation.navigate('fitness')}
        >
            <Image source={require('../assets/images/Wei.jpg')} style={styles.img} />
            <Text style={styles.txt}>قسم اللياقة البدنية </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
         // display:this.state.displayw
        }}
     
        //Montada
        onPress={()=>   this.props.navigation.navigate('Montada')   }

           >
            <Image source={require('../assets/images/caht.png')} style={styles.img} />
            <Text style={styles.txt}>المنتدى </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexview}>
        <TouchableOpacity
          onPress={()=>   this.props.navigation.navigate('HomeBaby',{id:this.state.userName})   }
          style={{
          display:this.state.displayc
        }}
        
        >
            <Image source={require('../assets/images/baby.jpg')} style={styles.img} />
            <Text style={styles.txt}>قسم العناية {'\n'}بالطفل</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
          display:this.state.displayg
        }}
           onPress={()=>   this.props.navigation.navigate('GamesHome')   }
          >
            <Image source={require('../assets/images/games.png')} style={styles.img} />
            <Text style={styles.txt}>طور عقل{'\n'} طفلك</Text>
          </TouchableOpacity>


       
          <TouchableOpacity
          
          style={{//pregnant1
          display:this.state.displayp
        }}
        onPress={()=>   this.props.navigation.navigate('pregnant1')   }

          >
            <Image source={require('../assets/images/pre.jpg')} style={styles.img} />
            <Text style={styles.txt}> قسم العناية  {'\n'}بالحامل </Text>
          </TouchableOpacity>
        </View>
        

        <View style={styles.flexview}>

       
          <TouchableOpacity
          
          style={{//pregnant1
          display:this.state.displayp
        }}
        onPress={()=>   this.props.navigation.navigate('addtoCart')   }

          >
            <Image source={require('../assets/images/i.png')} style={styles.img} />
            <Text style={styles.txt}> طلبك عندك </Text>
          </TouchableOpacity>
        </View>
        

        <Text style={{marginTop:100}}></Text>
          <ActionButton buttonColor="midnightblue"
          style={{
           // alignSelf:'flex-end'
          }}
          >
          <ActionButton.Item buttonColor='#9b59b6' title="تعديل معلوماتي" onPress={() => 
          
          this.props.navigation.navigate('EditDocInf')
          
          }>
            <Icon name="user-edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="الانجليزية" 



          onPress={() => {
          if(global.flagA=='Eng'){
            global.flagA='Arab';
            this.setState({display1:'none',display2:'flex'})

          }
          else{
            global.flagA='Eng';
            this.setState({display2:'none',display1:'flex'})

          }
          
          
          
          
          
          
               // alert(global.flagA)
          }}>
            <Icon name="language" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="قائمة التواصل" onPress={() => {


this.props.navigation.navigate('contactList');

          }}>
            <Icon name="address-book" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9b59b6' title="تسجيل الخروج" onPress={() => {

this.clearAppData()

this.props.navigation.navigate('SignInScreen');

          }}>
            <Icon name="sign-out" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </ScrollView>
   
    </SafeAreaView>
  )};
};

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 50,
    borderColor:'midnightblue',
    borderWidth:3,
  },
  txt: {
    //   justifyContent: 'center',
    // alignItems: 'center',
    //alignContent: 'center',
    textAlign: 'center',
    fontSize: 10,
  },
  welcome: {
    fontSize: 25,
   // marginTop: 20,
    fontFamily: 'Amiri-Bold',
   // textAlign: 'center',
    color: 'white',
    // backgroundColor: 'pink',
  },
});

