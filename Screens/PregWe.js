//const { Component } = require("react")

import React ,{Component}from 'react'
import {View,Text,TextInput,ScrollView,TouchableOpacity ,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
export default class trackPre extends Component{
  constructor(props){

    super(props);
    this.data=[];
    this.data2=[];

    this.state={
      sleepH:0,
      username:global.username,
      //HValues1:this.props.route.params.HValues1,
     // T//Values:this.props.route.params.TValues,
      newW:0,
 data3:this.props.route.params.data3,
 data4:this.props.route.params.data4,
      display1:'flex',
      display2:'none'
     }
   }
 
   componentDidMount(){
    // alert(this.state.data3)
 if (global.flagA =='Arab'){
   this.setState({display1:'none',display2:'flex'})
 }
 else {
   this.setState({display2:'none',display1:'flex'})
 
 }

 //this.getWeiht();


}


sedWeight(){
    if(this.state.newW==''){
      if(this.state.display1=='none'){ 
      alert('أدخل وزناً من فضلك !');}
      else {
alert('Please enter a weight!')
      }
    }else {
     let addnewWightPreg ='http://192.168.1.209:8082/addnewWightPreg/' +
     this.state.username +
     '/' +
     this.state.newW; 
   fetch(addnewWightPreg, {method: 'POST', body: null})
     .then((response) => response.json)
     .then((json) => {
      // this.getWeiht();
       this.setState({newW:''})
       if (json.result === 'failed') {
         alert('Done');
       } else if (json.result == 'success') {
         alert('Done');
       }
     });
    
    }
 
}

 getWeiht(){
   
  let url2 = 'http://192.168.1.209:8082/getPreWe/' + this.state.username;
  fetch(url2, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      {          var t;
        if (json.result.length==0){
          this.data.push(0);
          if (json.result.length==0){
            this.data2.push(0);


          }

        }
        else {
          this.data=[];this.data2=[];
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push(t);
          this.data2.push(json.result[t].Value);
            }
          }
        } 
      }
    });
    this.setState({data3:[],data4:[]})
    this.setState({data3:this.data2,data4:this.data})
 }
  render(){
    return(
      <ScrollView
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:'pink'
      }}
      >
      <View
      style={{
        width:'100%',
        height:70,
        backgroundColor:'hotpink',
        justifyContent:'center',
        alignItems:'center',
      }}
      
      >
 <Text
 style={{
   color:'white',
   fontSize:25,
   fontFamily:'Amiri-Italic',
   display:this.state.display1
 }}
 >
 Keep tracking your weight
 </Text>

 <Text
 style={{
   color:'white',
   fontSize:25,
   fontFamily:'Amiri-Italic',
   display:this.state.display2
 }}
 >
استمري بتتبع وزنك </Text>


    
      </View>
<View

style={{
 marginTop:50
}}
>
<LineChart
        data={{
          labels:this.state.data4,
          datasets:          
            [   {
              data:this.state.data3,
              }
            ]
                     
        }}
        width={Dimensions.get("window").width -80} // from react-native
        height={220}
       // yAxisLabel="hr"
        xAxisSuffix="Kg"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'pink',
          backgroundGradientFrom: 'hotpink',
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
          borderRadius: 16,
          alignSelf:'center'
        }}
      />
</View>
<TextInput
value={this.state.newW}
style={{
  borderBottomColor:'hotpink',
  borderBottomWidth:1,
  width:'60%',
  alignSelf:'center',
  marginTop:20,


}}
placeholder={'add new value'}
onChangeText={(v)=>
this.setState({newW:v})
}
>

</TextInput>
  

      <TouchableOpacity
   style={{
   width:'50%',
   height:50,
   backgroundColor:'pink',
 
   marginTop:70,
   alignSelf:'center',
   justifyContent:'center',
   alignItems:'center',
   borderRadius:100,
   borderColor:'hotpink',
   borderWidth:2,
   justifyContent:'center',
   

   }}
   onPress={()=>this.sedWeight()}
   >

<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}
>
add</Text>

<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}
>
  اضف</Text>

   </TouchableOpacity>



<TouchableOpacity

          
onPress={()=>  this.props.navigation.navigate('HomeBaby')   
                  }
>
<Icon name="chevron-left" size={30} color={this.state.b1}
style={{
  alignSelf:'flex-end',
  marginBottom:20,
  
}}

 />


</TouchableOpacity>

      </ScrollView>
    )
  }

}