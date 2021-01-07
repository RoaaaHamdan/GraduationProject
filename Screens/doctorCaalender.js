import EventCalendar from 'react-native-events-calendar'
//let { width } = Dimensions.get('window')
import React, { Component } from 'react'
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView ,Dimensions} from 'react-native';

export default class doctorCalender extends Component{ 
  constructor(props) {
    super(props);
    this.data = [];

    this.state = {
    username:global.username,
    width:Dimensions.get('window').width,

      events :[],

    }
   // data: [];
  }
  componentDidMount = () => { 
    let url23 = 'http://192.168.1.209:8082/getDoctorEvents/' + this.state.username;
    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push({
                start: json.result[t].date +' ' + json.result[t].hour +':' + json.result[t].min+':00' 
                , end: json.result[t].date + ' ' + json.result[t].hour2 +':'+ json.result[t].min +':00',
                title: json.result[t].patiantname,summary:''
              
              });
            }
          }
          this.setState({events: this.data });
         // alert(this.state.events[4].start)
        }
      });
  }
  render() {
  return (
    <EventCalendar
      events={this.state.events}
      width={this.state.width}
      initDate={new Date()}
    />
  )
}
}