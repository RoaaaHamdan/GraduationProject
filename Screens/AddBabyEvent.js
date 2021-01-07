import React, { Component } from 'react';
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView } from 'react-native';
//import TimePicker from 'react-native-simple-time-picker';
import DatePicker from 'react-native-datepicker';
import Emoji from 'react-native-emoji';
import DateTimePicker from '@react-native-community/datetimepicker';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

//import { Tile } from 'react-native-elements';


export default class ToDoList extends Component {
  constructor(props) {
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
      //userName: 'roaa',
            selectedHours1: 0,
            selectedHours11:0,
      selectedMinutes1: 0,
      selectedHours3: 0,
      b1:'',
      b2:'',
    id: global.username,
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
  sendNotification(data, id) {
   
      if (this.state.selectedHours11 ==23){
      this.setState({selectedHours3:1})
    }
    else  if (this.state.selectedHours11 ==24){
      this.setState({selectedHours3:2})
    }
 
    else {
      this.setState({selectedHours3:this.state.selectedHours11+2})
     // alert (this.state.selectedHours3)

    }
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
        send_after:this.state.date + " "+this.state.selectedHours3+':'+this.state.selectedMinutes1+'GMT',
        headings: {en: 'Remeber'},
       contents: {en: data},
      }),
    };
    fetch(endpoint, params).then(res => console.log(res));
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
   
        
  }
  onOpened=()=>{
   //alert('hello');
   this.props.navigation.navigate('rem',{id:this.state.id}) ;
  }
  addEvent = () => {
 
    if (this.state.userName == '' || this.state.selectedHours == 0
      || this.state.selectedMinutes == 0 || this.state.title == '' || this.state.date == ""
        || this.state.selectedHours1 == 0      || this.state.selectedMinutes1==0  ) {
      alert('please fill all data');
    } else {
   
     // var h = this.state.selectedHours.toString;
      if (this.state.selectedHours.toString().length == 1 || this.state.selectedHours1.toString().length == 1
        || this.state.selectedMinutes.toString().length == 1
        || this.state.selectedMinutes1.toString().length == 1
      ) {
        if (this.state.selectedHours.toString().length == 1) {
          this.setState({ selectedHours: '0' + this.state.selectedHours })
        }
        if (this.state.selectedHours1.toString().length == 1) {
          this.setState({ selectedHours1: '0' + this.state.selectedHours1 })
        }
        if (this.state.selectedMinutes.toString().length == 1) {
          this.setState({ selectedMinutes: '0' + this.state.selectedMinutes })
        }

        if (this.state.selectedMinutes1.toString().length == 1) {
          this.setState({ selectedMinutes1: '0' + this.state.selectedMinutes1 })
        }
      }
        let url =
          'http://192.168.1.209:8082/addEvent/' +
        global.username +
          //  '/' +
          //    this.state.pLname +
          //  '/' +
          '/' +
          this.state.date +
          '/' +
          this.state.selectedHours +
          '/' +
          this.state.selectedMinutes
          + '/'
          + this.state.title +
          '/' +
          this.state.selectedHours1 +
          '/' +
          this.state.selectedMinutes1
          ; //+
        fetch(url, { method: 'POST', body: null })
          .then((response) => response.json)
          .then((json) => {
            this.sendNotification('You had an appointment, did you forget to enter it? \n '+this.state.title,global.username);
            if (json.result === 'failed') {
              alert('Done');
            } else if (json.result == 'success') {
              //   alert('Done');
            }
          });
        alert('Done');
      
    }//big
  } ;

      
  UNSAFE_componentWillMount =()=>{
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    else {
      this.setState({display2:'none',display1:'flex'})
    
    }
    if (this.state.gen =='f'){
        //alert(this.state.gen)
        this.setState({b1:'pink',b2:'mistyrose'});
      }else {
        //alert(this.state.gen)
      
        this.setState({b1:'midnightblue',b2:'lavender'});
      }
    }










  ShowCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() ;
      var year = new Date().getFullYear();

var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes();
//alert(date + '-' + month + '-' + year+'nn'+ hours+';;'+min);
    
     }

  render() { 
    return (
      <ScrollView
      style={{
          backgroundColor:'white'
      }}
      >
        <View
          style={{
            backgroundColor: this.state.b1,
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'row-reverse'
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Grandstander-VariableFont_wght',
              fontSize:30,
              display:this.state.display1
              
            }}
          >
            TO DO LIST
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Grandstander-VariableFont_wght',
              fontSize:30,
              display:this.state.display2
              
            }}
          >
قائمة اعمالي          </Text>
          <Image 
            style={{
                width: 30,
              height: 30,
            marginRight:30
            }}
            source={require('../assets/images/list.jpg')}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems:'center'
          }}
        
        >
          <Text
            style={{
              fontSize: 17,
              color: this.state.b1,
              fontFamily:'CourierPrime-BoldItalic',
              fontWeight:'bold',
              fontSize:20,
              display:this.state.display1
          }}
          >
            lets add new thing to your list
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: this.state.b1,
              fontFamily:'CourierPrime-BoldItalic',
              fontWeight:'bold',
              fontSize:20,
              display:this.state.display2
          }}
          >
هيا نضف شيئاً          </Text>
        </View>
     
        
        <View
          style={{
            marginTop: 70,
            alignItems:'center',
        }}>
          <View>
            <Text
              style={{
              color:this.state.b1,
              fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display1
            }}
            >
            Add title
          </Text>
          <Text
              style={{
              color:this.state.b1,
              fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display2
            }}
            >
اضف عنواناً          </Text>
          <TextInput
              style={{
                width: 200,
                marginTop: -15,
                borderBottomColor: this.state.b2,
                borderBottomWidth: 1
              }}
              onChangeText={(c) => this.setState({title:c})}
          >
            
          </TextInput>
          </View>
          <View
            style={{
            marginTop:60
          }}
          >
                   <Text
              style={{
                color: this.state.b1,
                marginBottom:30,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display1

            }}
            >
            Add Date
          </Text>

          <Text
              style={{
                color: this.state.b1,
                marginBottom:30,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display2

            }}
            >
اضف تاريخاُ          </Text>
             <DatePicker
            style={{width: 200}}
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
              //alert(this.state.date);
            }}
          />
         </View>

        </View>
                                  <Text
              style={{
                color: this.state.b1,
            marginTop: 30,
            //    marginRight:90,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display1
              //marginLeft:-85
                
            }}
            >
            Add Start Time
          </Text>

          <Text
              style={{
                color: this.state.b1,
            marginTop: 30,
            //    marginRight:90,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display2
              //marginLeft:-85
                
            }}
            >
اضف وقت البداية          </Text>
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
    marginTop: 40,
    alignSelf:'center',

    borderColor: this.state.b2,
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
       
                                  <Text
              style={{
                color: this.state.b1,
            marginTop: 30,
            //    marginRight:90,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display1
              //marginLeft:-85
                
            }}
            >
            Add End Time
          </Text>

          
          <Text
              style={{
                color: this.state.b1,
            marginTop: 30,
            //    marginRight:90,
                fontWeight:'bold',
              fontSize:15,
              alignSelf:'center',
              display:this.state.display2
              //marginLeft:-85
                
            }}
            >
وقت النهاية          </Text>
        <TouchableOpacity
               style={{
               width: '50%',
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  //  marginLeft: 65,
    marginTop: 40,
    alignSelf:'center',

    borderColor: this.state.b2,
    borderWidth: 1,
          }}
          onPress={
            ()=>this.setState({show2:true})
          }
        >

             <Text>
            {this.state.selectedHours1}:{this.state.selectedMinutes1}
          </Text>
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
    this.setState({selectedHours1:this.state.date2.getHours(),selectedHours11:this.state.date2.getHours(),selectedMinutes1:this.state.date2.getMinutes()});

          }
          }
        />)}

          
        </TouchableOpacity>
        <TouchableOpacity
        
          style={{
            backgroundColor: this.state.b2,
            width: 200,
            height: 50,
            opacity: .6,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            //marginRight: 20,
            borderRadius: 100,
            
            
            
          }}
          onPress={this.addEvent}
        >
   <Text>
          SEND
         </Text>
        </TouchableOpacity>




        <TouchableOpacity
        
        style={{
          backgroundColor: this.state.b2,
          width: 200,
          height: 50,
          opacity: .6,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 50,
          //marginRight: 20,
          borderRadius: 100,
          
          
          
        }}
        onPress={  ()=>this.props.navigation.navigate('babyEventCalendr')   
                }  

                     >
 <Text>
        See your List !
       </Text>
      </TouchableOpacity>








        <Text style={{
            marginTop:70
        }}>

        </Text>
     
        
      </ScrollView>
    )
  }
}