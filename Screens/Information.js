import React,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native'
export default class information extends Component {
  constructor(props){
    super(props);
    this.state={
     flag:this.props.route.params.flag,
     location:this.props.route.params.location,
     owner:this.props.route.params.owner,
     WH:this.props.route.params.WH,
     Tel:this.props.route.params.Tel,
     display1:'flex',
     display2:'none'
    }
  }

  componentDidMount(){
if (global.flagA =='Arab'){
  this.setState({display1:'none',display2:'flex'})
}
else {
  this.setState({display2:'none',display1:'flex'})

}
  }
  render(){
    return(
      <ScrollView
      style={{
        backgroundColor:'lavender'
      }}
      >
   <View
   style={{
     backgroundColor:'midnightblue',
     width:'100%',
     height:70,
     justifyContent:'center',
     alignItems:'center',display:this.state.display1
   }}
   >

  <Text
  style={{
    color:'white',
    fontSize:20,
    fontFamily:'Amiri-BoldItalic'
  }}
  >
    Information of {} Pharmacy
  </Text>
   

   </View>



   <View
   style={{
     backgroundColor:'midnightblue',
     width:'100%',
     height:70,
     justifyContent:'center',
     alignItems:'center',display:this.state.display2
   }}
   >

  <Text
  style={{
    color:'white',
    fontSize:20,
    fontFamily:'Amiri-BoldItalic'
  }}
  >
   معلومات الصيدلية
  </Text>
   

   </View>


   <View
   style={{
     flexDirection:'column',
     display:this.state.display1
   }}
   >
  <View
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    borderTopColor:'midnightblue',
    borderTopWidth:1,
    marginTop:100,
    justifyContent:'center',
    alignItems:'center'
  }}
  
  >
  <Text>
    Owner => {this.state.owner}
  </Text>
 
  </View>




  <View
      style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
    Owner Number  => {this.state.Tel}
  </Text>
  </View>


  <View
      style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
    Location => {this.state.location}
  </Text>
  </View>

  <View
  
  
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
  Licensed => {this.state.flag}
  </Text>
  </View>
  <View
  
  
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
  Working hours => {this.state.WH}
  </Text>
  </View>
   </View>
   







   
   <View
   style={{
     flexDirection:'column',
     display:this.state.display2
   }}
   >
  <View
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    borderTopColor:'midnightblue',
    borderTopWidth:1,
    marginTop:100,
    justifyContent:'center',
    alignItems:'center'
  }}
  
  >
  <Text>
    المالك => {this.state.owner}
  </Text>
 
  </View>




  <View
      style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
    رقم المالك  => {this.state.Tel}
  </Text>
  </View>


  <View
      style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
    الموقع => {this.state.location}
  </Text>
  </View>

  <View
  
  
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
  مرخصة ؟  => {this.state.flag}
  </Text>
  </View>
  <View
  
  
  style={{
    width:'100%',
    height:80,
    borderBottomColor:'midnightblue',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center'
  }}
  >
  <Text>
 ساعات العمل => {this.state.WH}
  </Text>
  </View>
   </View>
   
      </ScrollView>
    )
  }
}