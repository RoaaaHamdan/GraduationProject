import React, {Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import DatePicker from 'react-native-datepicker';

export default class rem extends Component {
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
//id:'Hyam',
//      id: this.props.route.params.id,
id:global.username,
      time:'',
    time2:'',
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
  UNSAFE_componentDidMount(){
  //  alert(new Date())
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  }
  }
  sendNotification(data, id) {

//  alert(this.state.date + " "+this.state.selectedHours3+':'+this.state.selectedMinutes1);
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
      //delayed_option:'timezone',
      send_after:this.state.date + " "+this.state.selectedHours+':'+this.state.selectedMinutes+'GMT+0200 (IST)',
      headings: {en: 'Remeber'},
     contents: {en: data},
    }),
  };
  fetch(endpoint, params).then(res => console.log(res));
  alert('Done');
}


  render(){
    return(
      <ScrollView
      
      style={{
      backgroundColor:'white'

      }}
      >

  <View
  style={{
    width:'100%',
    height:70,
    backgroundColor:'midnightblue',
    justifyContent:'center',
    alignItems:'center'
  }}
  >
    <Text
    style={{
      fontSize:20,
      fontFamily:'Itim-Regular',
      color:'white',
      display:this.state.display1
    }}
    >
      Remeber Me !
    </Text>
    <Text
    style={{
      fontSize:20,
      fontFamily:'Itim-Regular',
      color:'white',
      display:this.state.display2
    }}
    >
    ذكرني !
    </Text>
  </View>
  
  <View
  
  
  style={{
    marginTop:40,
    justifyContent:'center',
    alignItems:'center'
  }}>
<Text
              style={{
                color: 'black',
            marginTop: 0,
            //    marginRight:90,
                //fontWeight:'bold',
              fontSize:15,
              fontFamily:'Lobster-Regular'
            //  alignSelf:'center',
            //  marginLeft:-85
                
            }}
            >
            Add Title
          </Text>
          <TextInput
          style={{
            width:'50%',
            borderBottomWidth:2,
            borderBottomColor:'midnightblue',
          }}
          onChangeText={(v)=>this.setState({title:v})}
          >

          </TextInput>
  </View>
<View
style={{
  justifyContent:'center',
  alignItems:'center'
}}
>

<Text
              style={{
                color: 'black',
            marginTop: 70,
            //    marginRight:90,
                //fontWeight:'bold',
              fontSize:15,
              fontFamily:'Lobster-Regular'
            //  alignSelf:'center',
            //  marginLeft:-85
                
            }}
            >
            Add Start Time
          </Text>
        <TouchableOpacity
        onPress={
          ()=>this.setState({show:true})
             }
               style={{
               width: '50%',
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
   // marginLeft: 65,
    marginTop: 20,
    alignSelf:'center',
    height:50,

    borderColor: 'lavender',
    borderWidth: 1,
          }}
        >

             <Text>
            {this.state.selectedHours}:{this.state.selectedMinutes}
          </Text>
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
    this.setState({selectedHours:this.state.date1.getHours(),selectedMinutes:this.state.date1.getMinutes()});

          }
          }
        />)}

          
        </TouchableOpacity>
</View>
 <View
            style={{
            marginTop:60,
            justifyContent:'center',
            alignItems:'center'
          }}
          >
                   <Text
                style={{
                color: 'black',
         //   marginTop: 20,
            //    marginRight:90,
                //fontWeight:'bold',
              fontSize:15,
              fontFamily:'Lobster-Regular',
              marginBottom:20
            //  alignSelf:'center',
            //  marginLeft:-85
                
            }}
            >
            Add Date
          </Text>
             <DatePicker
            style={{width: 195}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2020-05-01"
            maxDate="2022-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              this.setState({date: date});
            }}
          />
         </View>

      


        <TouchableOpacity

        style={{
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'center',
          width:'30%',
          height:40,
          backgroundColor:'midnightblue',
          marginTop:70,
          borderRadius:30
        }}
        onPress={()=>this.sendNotification(this.state.title,this.state.id)}
        >
          <Text
          style={{
            color:'white'
          }}
          >Send</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}