import React , {Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView,Image,Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
//import { or } from 'react-native-reanimated';

export default class reminderWater extends Component{
 constructor(props){
   super(props);
   this.state = {
    date1:new Date(1598051730000),
 show:false,
 date2:new Date(1598051730000),
 show2:false,
    date: '',
    selectedHours: 0,
    title: '',
    selectedMinutes: 0,
    userName: 'roaa',
          selectedHours1: 0,
          selectedHours11:0,
    selectedMinutes1: 0,
    selectedHours3: 0,
id:global.username,
   //id: this.props.route.params.id,
    time:'',
  time2:'',
 hours:0,
 h:'',
 h1:'',
 m:'',
 m1:'',
 display1:'flex',
 display2:'none'

  };
  OneSignal.setLogLevel(6, 0);
  OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids',this.onIds);
   OneSignal.sendTag("key",this.state.id);
 }



 sendNotification(x,r,w) {

//alert(this.state.date1 + " "+this.state.ss+':'+this.state.selectedMinutes+'GMT')
//this.x = this.state.selectedHours+2;

 // this.setState({ss:this.state.selectedHours-2})
//alert(this.state.date1 + " "+this.state.ss+':'+this.state.selectedMinutes+':00GMT')

let headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
};  let endpoint = 'https://onesignal.com/api/v1/notifications';  
let params = {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({
    app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
    filters: [   // Will send notification only to specific device
      {          // Optional
        field: 'tag',
        key: 'key',
        relation: '=',
        value:this.state.id,
      },
    ],
  //send_after :this.state.date1+ " "+ this.state.ss+':'+this.state.selectedMinutes+':00 ' +'GMT',
   //send_after:"2020-11-28 18:26:00GMT",
   delayed_option:'timezone',
        delivery_time_of_day:w +':'+this.state.selectedMinutes,
    headings: {en: 'Remember to derink!!'},
    contents: {en: x},
  }),
};
fetch(endpoint, params).then(res => console.log(res));
  
}


componentDidMount=()=>{
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  }
  let getWaterHistory = 'http://192.168.1.209:8082/getWaNot/' + global.username;

  fetch(getWaterHistory, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      {
 
        this.setState({h:json.result[0].startdate,h1:json.result[0].endDate,
        m:json.result[0].m1,m1:json.result[0].m2,hours:json.result[0].selectedhours
        });
      }
    });
 
 


}

 sendNotificationx=(data, id) => {
  //  OneSignal.postNotification('dsds','all')
    let headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
    };
  
    let endpoint = "https://onesignal.com/api/v1/notifications";

    let params = {

      //delayed_option:'timezone',
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        filters: [   // Will send notification only to specific device
          {          // Optional
            field: 'tag',
            key: 'key',
            relation: '=',
            value: id,
          },
        ],
      send_after:"20:15:34 GMT",

        app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
     //   included_segments: ["All"],
        contents: { en: data }
      })
    };
    fetch(endpoint, params).then(res => console.log(res));
  };
 sendNotification3(data, id,hr) {
    let headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
    };  let endpoint = 'https:/ /onesignal.com/api/v1/notifications';
      let params = {
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
        delivery_time_of_day:'15'+':'+'55',
        headings: {en: 'Remeber'},
       contents: {en: data},
      }),
    };
    fetch(endpoint, params).then(res => alert(res)
    );
  }
   

  sendData=()=>{

    if (this.state.selectedHours =='' || this.state.selectedHours1 == ''){
      alert ('اختار الساعات من فضلك');
    }
    else {


      const url =
      'http://192.168.1.209:8082/checkifAvilabilewa/' +
global.username;
  fetch(url, {method: 'GET', body: null})
  .then((response) => response.json())
  .then((json) => {
  // alert('hell');
  {
   if (json.result.length >= 1) {
    let SendURL =
    'http://192.168.1.209:8082/updatenotwa/' +this.state.selectedHours+'/'+this.state.selectedHours1
    +global.username+'/'+this.state.hours+'/'+this.state.selectedMinutes+'/'+this.state.selectedMinutes1;
 
 //this.state.emailadd
 
 fetch(SendURL, {method: 'POST', body: null})
 .then((response) => response.json)
 .then((json) => {
  if (json.result === 'failed') {
    alert('Done');
  } else if (json.result == 'success') {
    alert('Done');
  }
 });   } 
 
 else {
          
  let SendURL =
  'http://192.168.1.209:8082/addwanot/'+this.state.selectedHours+'/'+this.state.selectedHours1+'/'
  +global.username+'/'+this.state.hours+'/'+this.state.selectedMinutes+'/'+this.state.selectedMinute1;  
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




    }
  }



 render(){
   return(
     <ScrollView
      style={{
        backgroundColor:'lavender',

      }}
     >
<View
style={{
  width:'100%',
  height:70,
  backgroundColor:'midnightblue',
  justifyContent:'center',
  alignItems:'center',
}}>
 <Text
 style={{
   color:'white',
   fontSize:30,
   fontFamily:'Itim-Regular',
   display:this.state.display1
 }}
 >
Remeber Me !
 </Text>
 <Text
 style={{
   color:'white',
   fontSize:30,
   fontFamily:'Itim-Regular',
   display:this.state.display2
 }}
 >
نبهني !
 </Text>
</View>


<View
style={{
  flexDirection:'column',
  marginTop:100

}}
>
<View
style={{
  height:100,
  borderTopColor:'midnightblue',
  borderTopWidth:2,
  borderBottomColor:'midnightblue',
  borderBottomWidth:2,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'

}}
>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
onPress={
          ()=>this.setState({show:true})
             }
>


 
         {this.state.show && (<DateTimePicker
          testID="dateTimePicker"
          value={this.state.date1}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate)=>
          {
          let currentDate = selectedDate || this.state.date1;
    //setShow(Platform.OS === 'ios');
  this.setState({show:false})

    this.setState({date1:currentDate})
    this.setState({selectedHours:this.state.date1.getHours(),selectedMinutes:this.state.date1.getMinutes(),
      h:this.state.date1.getHours(),m:this.state.date1.getMinutes()});

          }
          }
        />)}
        <Image 
style={{
  width:50,
  height:50,borderRadius:50
}}
 source={require('../assets/images/clock.jpg')}/>
<Text
style={{
  display:this.state.display1
}}
>
  From
</Text>
<Text
style={{
  display:this.state.display2
}}
>
  من
</Text>
</TouchableOpacity>
<View>
<View
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
>

 <Text>
            {this.state.h}:{this.state.m}
          </Text>
</View>
</View>


</View>






<View
style={{
  height:100,
  borderBottomColor:'midnightblue',
  borderBottomWidth:2,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'

}}
>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
onPress={
          ()=>this.setState({show2:true})
             }
>


 
         {this.state.show2 && (<DateTimePicker
          testID="dateTimePicker"
          value={this.state.date2}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate)=>
          {
          let currentDate = selectedDate || this.state.date2;
    //setShow(Platform.OS === 'ios');
  this.setState({show2:false})

    this.setState({date2:currentDate})
    this.setState({selectedHours1:this.state.date2.getHours(),selectedMinutes1:this.state.date2.getMinutes(),
      h1:this.state.date2.getHours(),m1:this.state.date2.getMinutes()
    
    });

          }
          }
        />)}
        <Image 
style={{
  width:50,
  height:50,borderRadius:50
}}
 source={require('../assets/images/clock.jpg')}/>
<Text
style={{
  display:this.state.display1
}}
>
  To
</Text>
<Text
style={{
  display:this.state.display2
}}
>
  الى
</Text>
</TouchableOpacity>
<View>
<View
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
>

 <Text>
            {this.state.h1}:{this.state.m1}
          </Text>
</View>
</View>


</View>


<TouchableOpacity
style={{
  height:100,
  borderBottomColor:'midnightblue',
  borderBottomWidth:2,
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'

}}

onPress={()=>
{
  Alert.alert(
   "",
   "Add a new Value",
   [
     {
       text: "2 h",
       onPress: () => {
        this.setState({hours:2})
        var x = this.state.selectedHours1;
        //alert(x);
        for(var i =this.state.selectedHours; i!=x ;i=i+2 ){

          if (i==23){
            i = 1 ;
          }
          if (i==0){
            i = 2;
          }
          if (i==x-1){
break;          }
      
          this.sendNotification('dont forget to drink Water!','Hyam',i)
        }
      
        this.sendData();

        
      } ,
     },
     {
       text: "4 h",
       onPress: () => {
        this.setState({hours:4})
        var x = this.state.selectedHours1;
        for(var i =this.state.selectedHours; i!=x ; i=i+2 ){
          
          if (i==x-1){
break;          }
if (i==x-2){
break;          }
if (i==x-3){
break;          }
      
      
      
          if (i==23){
            i = 3 ;
          }
          if (i==24){
            i = 4;
          }
          if (i==22){
            i = 2;
          }
          if (i==21){
            i = 1;
          }
          this.sendNotification('dont forget to drink Water!',global.username,i)
        }
        this.sendData();
      
      
      },
       style: "cancel"
     },
     { text: "OK", onPress: () => console.log("OK Pressed") }
   ],
   { cancelable: false });
}
}

>

<Text
style={{
  fontFamily:'SyneMono-Regular',
  display:this.state.display1
}}
> Remeber me each {this.state.hours} hours!</Text> 

<Text
style={{
  fontFamily:'SyneMono-Regular',
  display:this.state.display2
}}
> ذكرني كل  {this.state.hours} !</Text> 
</TouchableOpacity>

</View>


     </ScrollView>
   )
 }
}