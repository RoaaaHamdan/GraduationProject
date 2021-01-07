
import React,{Component} from 'react';
import { View, Text,TouchableOpacity,ScrollView,ImageBackground,Dimensions  } from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

export default class chartsBaby extends Component {
  constructor(props){
    super(props);

    this.state={
    WValues:this.props.route.params.WValues,
    WValues1:this.props.route.params.WValues1,
    HValues:this.props.route.params.HValues,
    HValues1:this.props.route.params.HValues1,
    TValues:this.props.route.params.TValues,
    TValues1:this.props.route.params.TValues1,
    gen:this.props.route.params.gender,
    display1:'flex',
    display2:'none'
    }
  }
  UNSAFE_componentWillMount=()=>{
    //alert('kk');
  if (this.state.gen =='f'){
    //alert(this.state.gen)
    this.setState({b1:'pink',b2:'mistyrose'});
  }else {
    //alert(this.state.gen)
  
    this.setState({b1:'midnightblue',b2:'lavender'});
  }


  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  
  }
  }
  render(){
    return (
      <ScrollView
      style={{
        backgroundColor:'white',
       // display:this.state.di
      }}
      >
      <View 
      style={{
        backgroundColor:this.state.b1,
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center'


      }}>    
        <Text
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Grandstander-VariableFont_wght',
          display:this.state.display1
        }}
        >Baby charts</Text>
             <Text
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Grandstander-VariableFont_wght',
          display:this.state.display2
        }}
        > منحيات الطفل</Text>
 </View>
 <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display1


 }}>
   Sleep Chart : 
 </Text>
 <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display2


 }}>
  منحنى النوم 
 </Text>
  <View

  style={{
    alignSelf:'center'
  }}
  > 
  <LineChart
        data={{
          labels:this.state.HValues,
          datasets:          
            [   {
              data:this.state.HValues1,
              }
            ]
                     
        }}
        width={Dimensions.get("window").width -80} // from react-native
        height={220}
       // yAxisLabel="hr"
        yAxisSuffix="hr"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: this.state.b1,
          backgroundGradientFrom: this.state.b1,
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








  <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display1


 }}>
   Weight Chart : 
 </Text>

 <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display2


 }}>
   منحنى الوزن
 </Text>

  <View
  style={{
      alignSelf:'center'
  }}
  > 
  <LineChart
        data={{
          labels:this.state.WValues,
          datasets:          
            [   {
              data:this.state.WValues1,
              }
            ]
                     
        }}
        width={Dimensions.get("window").width-80 } // from react-native
        height={220}
        //yAxisLabel="$"
        yAxisSuffix="kg"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: this.state.b1,
          backgroundGradientFrom: this.state.b1,
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


  

  <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display1  



 }}>
   Temppreatue Chart : 
 </Text>

 <Text
 style={{
  marginTop:100,
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:25,
  display:this.state.display2



 }}>
   منحنى الحرارة
 </Text>

  <View
  style={{
  
    alignSelf:'center'
  }}
  > 
  <LineChart
        data={{
          labels:this.state.TValues,
          datasets:          
            [   {
              data:this.state.TValues1,
              }
            ]
                     
        }}
        width={Dimensions.get("window").width -80} // from react-native
        height={220}
     //   yAxisLabel="$"
        yAxisSuffix="c"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: this.state.b1,
          backgroundGradientFrom: this.state.b1,
          backgroundGradientTo:"hotpink",
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


    </ScrollView>
    



    
    )
  }
}