
import React,{Component} from 'react';
import { View, Text, TouchableOpacity,ScrollView,ImageBackground,Dimensions  } from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

export default class chartBaby extends Component {
  constructor(props){
    super(props);
    this.data = [];
    this.data2 = [];

    this.state={
      drinkValues:this.props.route.params.drinkValues,
      drinkValues1:this.props.route.params.drinkValues1,
      userName:'roaa1'


    }
  }
 /* componentDidMount=()=>{
    let url23 = 'http://192.168.1.209:8082/getdrinkValues/' + this.state.userName;
    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          for (t = 0; t < json.result.length; t++) {
            {
          this.data2.push(t);
              this.data.push(json.result[t].drinkValue);
             // alert (this.data[t])
            }

          }
          this.setState({ drinkValues: this.data});

          this.setState({ drinkValues1: this.data2 });

          
        //  alert(this.state.drinkValues[1])

             // alert(this.state.events[0].end);

          // alert(this.state.posts[0].post);
        }
      });

  }*/
  render(){
    return (
      <View>
      <View 
      style={{
        backgroundColor:'pink',
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center'


      }}>    
        <Text
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Grandstander-VariableFont_wght'
        }}
        >Baby drink chart</Text>
 </View>
  <View
  style={{
    marginTop:100
  }}
  > 
  <LineChart
        data={{
          labels:this.state.drinkValues1,
          datasets:          
            [   {
              data:this.state.drinkValues,
              }
            ]
                     
        }}
        width={Dimensions.get("window").width } // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "pink",
          backgroundGradientFrom: "pink",
          backgroundGradientTo: "hotpink",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
  </View>
     
    </View>
    
    )
  }
}