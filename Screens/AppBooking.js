import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  // TimePickerAndroid,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class app4 extends Component {
  constructor(props) {
    super(props);
    //this.data = [];
    this.state = {/// global.firstName
      pAname: global.firstName,
      pLname:   global.lastName,
      doctorname:global.user2,
      date: new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate(),
      selectedHours: 0,
      pana: '',
      selectedMinutes: 0,
      patiantName:global.firstName+' '+global.lastName,
      date2:new Date(),
      show2:false,
      hour2 :'',
      display1:'flex',
      display2:'none'
    };
  }
  // data = [];
  componentDidMount =()=>{
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }
    else if(global.flagA=='Eng'){
      this.setState({display2:'none',display1:'flex'})
    
     // global.display1='flex';
      //global.display1='none';
    
    }
      }
  AppointmentBooking = () => {
    if ( this.state.selectedHours == 0  || this.state.selectedMinutes != 0 ) {
      alert('please fill all data We take one  Appaoiintment each hour !');
    } 
    
    else if (this.state.selectedHours >15 || this.state.selectedHours ==0 ){
      alert('Ooops! We close After 3 pm !');

    }
    else if (this.state.selectedHours >=3 && this.state.selectedHours <=8 ){
      alert('Ooops! We close After 3 pm !');

    }
   
    else {
      if (this.state.selectedHours.toString().length == 1 || this.state.selectedMinutes.toString().length == 1
     
      ) {
        if (this.state.selectedHours.toString().length == 1) {
          this.setState({ selectedHours: '0' + this.state.selectedHours })
        }
     
        if (this.state.selectedMinutes.toString().length == 1) {
          this.setState({ selectedMinutes: '0' + this.state.selectedMinutes })
        }
        if (this.state.hour2.toString().length == 1) {
          this.setState({ hour2: '0' + this.state.hour2 })
        }
     
      }
    const url =
      'http://192.168.1.209:8082/checkifAvilabile/' +
      this.state.doctorname +
      '/' +
      this.state.selectedHours +
  
      '/' +
      this.state.selectedMinutes +
      '/' +
      this.state.date;
 
    fetch(url, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          if (json.result.length >= 1) {
            alert('plase choose another date ');
          } else {

            let url =
              'http://192.168.1.209:8082/AppointmentBooking/' +
              this.state.patiantName +
              '/' +
              this.state.pLname +     '/' +
              this.state.doctorname +
              '/' +
              this.state.date +
              '/' +
              this.state.selectedHours +
              '/' +
              this.state.hour2 +
              '/' +
              this.state.selectedMinutes; //+
            fetch(url, {method: 'POST', body: null})
              .then((response) => response.json)
              .then((json) => {
            alert('Done');
                if (json.result === 'failed') {
                } else if (json.result == 'success') {
                  //   alert('Done');
                }
              });
          }
        }
      });
    
    }
  };
  /**
 *  if (this.state.doctors.length > 0) {
            alert('please choose another time ');
          } else if (this.state.doctors.length == 0) {
            let url =
              'http://192.168.1.209:8082/AppointmentBooking/' +
              this.state.pAname +
              '/' +
              this.state.pLname +
              '/' +
              this.state.doctorname +
              '/' +
              this.state.date +
              '/' +
              this.state.selectedHours +
              '/' +
              this.state.selectedMinutes; //+
            fetch(url, {method: 'POST', body: null})
              .then((response) => response.json)
              .then((json) => {
                if (json.result === 'failed') {
                  alert('Done');
                } else if (json.result == 'success') {
                  alert('Done');
                }
              });
          }
 */
  render() {
    const {selectedHours, selectedMinutes} = this.state;
    return (
      <View
      style={{
        backgroundColor:'lavender',
        flex:1
      }}
      
      >
        <View
          style={{
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'midnightblue',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Lobster-Regular',
              color:'white',
              display:this.state.display1
            }}>
            Make Appoiintment
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Lobster-Regular',
              color:'white',
              display:this.state.display2
            }}>
حجز موعد          </Text>
        </View>

        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'lig',
          }}>

        
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <DatePicker
            style={{width: 240}}
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
        <TouchableOpacity style={styles.container}
        
        onPress={
            ()=>this.setState({show2:true})
          }
        >
          <Text>
            {selectedHours}:{selectedMinutes}
          </Text>
          {this.state.show2 && (<DateTimePicker
          testID="dateTimePicker"
          value={this.state.date2}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate)=>
          {
          let currentDate = selectedDate || this.state.date1;
  this.setState({show2:false})

    this.setState({date1:currentDate})
    this.setState({selectedHours:this.state.date1.getHours(),selectedMinutes:this.state.date1.getMinutes()
    ,hour2:this.state.date1.getHours()+1
    });

          }
          }
        />)}
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={this.AppointmentBooking}>
            <Text
              style={{
                fontSize: 30,
                color: 'midnightblue',
                marginTop: 50,
                fontFamily: 'CourierPrime-Bold',
                display:this.state.display1
              }}>
              SEND
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: 'midnightblue',
                marginTop: 50,
                fontFamily: 'CourierPrime-Bold',
                display:this.state.display2
              }}>
              ارسل
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '64%',
    // flex: 1,

    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 65,
    marginTop: 40,


    borderColor: 'midnightblue',
    borderWidth: 1,
    height:50,
  },
});
