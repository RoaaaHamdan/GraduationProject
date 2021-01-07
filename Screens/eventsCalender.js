import EventCalendar from 'react-native-events-calendar'
//let { width } = Dimensions.get('window')
import React, { Component } from 'react'
import { View, Text, TextInput,Image,TouchableOpacity,ScrollView,Dimensions } from 'react-native';

export default class babyEventCalendr extends Component{ 
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
    username:global.username,
      events :[],
      width:Dimensions.get('window').width,
    date :'',
    month:'',
    day:''

    }

  }
  UNSAFE_componentWillMount = () => { 
  //  alert(new Date())
    if (new Date().getMonth()== 1||new Date().getMonth()== 2
    ||new Date().getMonth()== 3||new Date().getMonth()== 4
    ||new Date().getMonth()== 5||new Date().getMonth()== 6
    ||new Date().getMonth()== 7||new Date().getMonth()== 8
    ||new Date().getMonth()== 9
    )

    {

          this.setState({month:'0'+new Date().getMonth()})

    }else {          this.setState({month:new Date().getDate()})
  }
    if (new Date().getDate()== 1||new Date().getDate()== 2
    ||new Date().getDate()== 3||new Date().getDate()== 4
    ||new Date().getDate()== 5||new Date().getDate()== 6
    ||new Date().getDate()== 7||new Date().getDate()== 8
    ||new Date().getDate()== 9
    )

    {

          this.setState({day:'0'+new Date().getDate()})

    }else {          this.setState({day:new Date().getDate()})
  }
 // alert(this.state.date)
    this.setState({data:new Date().getFullYear+'-'+this.state.month+'-'+this.state.day}) 
    let url23 = 'http://192.168.1.209:8082/getEvents/' + this.state.username;
    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push({
                start: json.result[t].date +' ' + json.result[t].hr + ":" + json.result[t].mi+':00' 
                , end: json.result[t].date + ' ' + json.result[t].hr1 + ':' + json.result[t].mi1 +':00',
                title: json.result[t].title,summary:''
              });
            }
          }
          this.setState({ events: this.data });
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