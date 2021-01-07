import React,{Component} from 'react'
import {View , Text ,Image, TextInput,TouchableOpacity,ScrollView}from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class addGlobalEvent extends Component{
  constructor(props){
    super(props);
    this.x=0;
    this.state={
      title :'',
      descrption:'',
      location : ' ' ,
  date:new Date(),
      mode: 'date',
        show: false,
      id:'Hyam',
      selectedHours: 0,
      selectedMinutes: 0,
      date1:'',
      ss:0
    
    }
    onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({show:Platform.OS === 'ios'});
      this.setState({date:currentDate});
      this.setState({selectedHours:this.state.date.getHours(),ss:this.state.date.getHours()-2,selectedMinutes:this.state.date.getMinutes()});
      this.setState({date1:this.state.date.getFullYear()+'-'+this.state.date.getMonth()+'-'+this.state.date.getDate()});

    };
    showMode = (currentMode) => {

      this.setState({show:true});
      this.setState({mode:currentMode});

    };
    showDatepicker = () => {
showMode('date');
      this.setState({mode:'date'});

    };
    
    showTimepicker = () => {
      showMode('time');

      this.setState({mode:'time'});
    };
    
    OneSignal.setLogLevel(6, 0);
    OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
     OneSignal.addEventListener('received', this.onReceived);
     OneSignal.addEventListener('opened', this.onOpened);
     OneSignal.addEventListener('ids',this.onIds);
     OneSignal.sendTag("key",this.state.id);
  }


  
  sendNotification1 = data => {
    if(this.state.title==''|| this.state.date1==''||this.state.descrption==''){
      alert('fill all data')
    }

    else {
      alert
       //  OneSignal.postNotification('dsds','all')
       let headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
      };
    
      let endpoint = "https://onesignal.com/api/v1/notifications";
    
      let params = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({

          app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
          included_segments: ["All"],
          headings: {en: 'An Event is comming !=>'+this.state.title},

          contents: {en: this.state.descrption+'Time => '+this.state.selectedHours+':'+this.state.selectedMinutes
          +'Date=>' +this.state.date1},
            })
      };
      fetch(endpoint, params).then(res => console.log(res));
    }
   
    };
  sendNotification2() {
    if(this.state.title==''|| this.state.date1==''||this.state.descrption==''){
      alert('fill all data')
    }else{
      let headers = {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
      };  let endpoint = 'https:/ /onesignal.com/api/v1/notifications';  
      let params = {
        method: 'POST',
        headers: headers,
        included_segments: ["All"],
        body: JSON.stringify({
          app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
          headings: {en: 'An Event is comming !=>'+this.state.title},
         contents: {en: this.state.descrption+'Time => '+this.state.selectedHours+':'+this.state.selectedMinutes
        +'Date=>' +this.state.date1},
        }),
      };
      fetch(endpoint, params).then(res => console.log(res));
    }
 //   alert('hee');
 
  }

  sendNotification() {
    if(this.state.title==''|| this.state.date1==''||this.state.descrption==''){
      alert('fill all data')
    }else{
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
          value: 'Hyam',
        },
      ],
    send_after :this.state.date1+ " "+ this.state.ss+':'+this.state.selectedMinutes+':00 ' +'GMT',
    //  send_after:"2020-11-24 21:05:00GMT",
      headings: {en: 'An Event is comming !=>'},
      contents: {en: this.state.descrption+'Date=>'+this.state.date1 + " "+this.state.ss+':'+this.state.selectedMinutes+'GMT'},
    }),
  };
  fetch(endpoint, params).then(res => console.log(res));
    }
  }

  render(){
    return(
      <ScrollView
      style={
        {
          backgroundColor:'lavender'
        }
      }
      >
      <View
      style={{
        backgroundColor:'midnightblue',
        justifyContent:'center',
        alignItems:'center',
        height:70

      }}
      >
      <Text
      style={{
        fontSize:20,
        color:'white',
        fontFamily:'Itim-Regular'
      }}
      >
        Add an event 
      </Text>

      </View>

      <View
      style={{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'80%',
       // flexDirection:'row-reverse'


      }}
      >
     <Text
     style={{
       fontSize:20,
       fontFamily:'Amiri-Regular'
     }}
     >

Title
     </Text>
     <TextInput
      style={{
        borderBottomColor:'midnightblue',
        width:'60%',
        borderBottomWidth:2
      }}
      onChangeText={(v)=>this.setState({title:v})}
    />

      </View>


  


<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
onPress={
 showTimepicker
             }
>


 
 
       

      <View
      style={{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'80%',
        //flexDirection:'row-reverse',
        marginLeft:-25


      }}
      >
     <Text
     style={{
       fontSize:20,
       fontFamily:'Amiri-Regular'
     }}
     >

       Time
     </Text>
     <Text
      style={{
        borderBottomColor:'midnightblue',
        width:'60%',
        borderBottomWidth:2,
      //  marginTop:0
      }}
      //value={this.state.date1.getHours()}
      //onChangeText={(v)=>this.setState({descrption:v})}

    >

{this.state.selectedHours}:{this.state.selectedMinutes}

    </Text>

      </View>
      
      <View>

{this.state.show && (
  <DateTimePicker
    testID="dateTimePicker"
    value={this.state.date}
    mode={this.state.mode}
    is24Hour={true}
    display="default"
    onChange={onChange}
  />
)}
</View>


</TouchableOpacity>


<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
}}
onPress={
 showDatepicker
             }
>


 
 
       

      <View
      style={{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'80%',
       // flexDirection:'row-reverse',
        marginLeft:-25


      }}
      >
     <Text
     style={{
       fontSize:20,
       fontFamily:'Amiri-Regular'
     }}
     >

       Date
     </Text>
     <Text
      style={{
        borderBottomColor:'midnightblue',
        width:'60%',
        borderBottomWidth:2,
      //  marginTop:0
      }}
      //value={this.state.date1.getHours()}
      //onChangeText={(v)=>this.setState({descrption:v})}

    >
{this.state.date1}
    </Text>

      </View>
      
      <View>

{this.state.show && (
  <DateTimePicker
    testID="dateTimePicker"
    value={this.state.date}
    mode={this.state.mode}
    is24Hour={true}
    display="default"
    onChange={onChange}
  />
)}
</View>


</TouchableOpacity>
    <View
      style={{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:'80%',
       // flexDirection:'row-reverse',
        marginLeft:-25


      }}
      >
     <Text
     style={{
       fontSize:20,
       fontFamily:'Amiri-Regular'
     }}
     >

       Descrption
     </Text>
     <TextInput
      style={{
        borderColor:'midnightblue',
        width:'60%',
        borderWidth:2,
        
      //  marginTop:0
      }}
      
      onChangeText={(v)=>this.setState({descrption:v})}
      numberOfLines={10}
            multiline={true}
    />

      </View>


      <TouchableOpacity
      
      style={{
        backgroundColor:'midnightblue',
        width:'40%',
        height:50,
        alignSelf:'center',
        marginTop:30,
        marginBottom:100,
        opacity:.6,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'


      }}
      
      onPress={()=>{

        this.sendNotification1();
        this.sendNotification();
      }
      }
      >
      <Text
      style={{
        fontSize:15,
        color:'white'
      }}
      >
        Send notification
      </Text>

      </TouchableOpacity>
      </ScrollView>
    )
  }
}