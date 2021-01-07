import React,{Component} from 'react'
import {View ,Text,TextInput,ScrollView,Image,TouchableOpacity} from 'react-native'

export default class GamesHome extends Component {
  constructor(props){
    super(props);
    this.state={
      display1:'flex',
      display2:'none'
    }
  }
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

  render(){
    return(
 <ScrollView
 style={{
   width:'100%',
   height:'100%',
   backgroundColor:'lavender'
 }}
 >


 <View
 style={{
   width:'100%',
   height:70,
   backgroundColor:'midnightblue',
   justifyContent:'center',
   alignItems:'center',
   
 }}
 >
 <Text
 style={{
   color:'white',
   fontSize:30,
   fontFamily:'Lobster-Regular',
   display:this.state.display1
 }}
 >
 Our Games
 </Text>
 <Text
 style={{
   color:'white',
   fontSize:30,
   fontFamily:'Lobster-Regular',
   display:this.state.display2
 }}
 >
 الالعاب
 </Text>
 </View>


 <View
 
 style={
   {
     width:'100%',
     height:200,
     justifyContent:'space-around',
     flexDirection:'row',
     marginTop:60
   }
 }
 
 >

<TouchableOpacity

onPress={
  ()=>  this.props.navigation.navigate('SnakeGame')
}
>
<Image  source={require('../assets/images/snackGame.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}
  />
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
display:this.state.display1    
  }}
  >
    Snacke
  </Text>
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
display:this.state.display2   
  }}
  >
    الثعبان
  </Text>
</TouchableOpacity>

<TouchableOpacity
 onPress={()=>  this.props.navigation.navigate('GamesMem')}
>
 <Image  source={require('../assets/images/game1.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}
  />

<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Memory
  </Text>
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
    الذاكرة
  </Text>
</TouchableOpacity>
  
  <TouchableOpacity
  onPress={()=>  this.props.navigation.navigate('GamesRela')}
  > 
   <Image  source={require('../assets/images/game2.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}
  />
  
  
<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Related {'\n'}Things
  </Text>
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
الأشياء المترابطة  </Text>
  </TouchableOpacity>


 </View>





 <View
 
 style={
   {
     width:'100%',
     height:200,
     justifyContent:'space-around',
     flexDirection:'row',
     marginTop:0
   }
 }
 
 >

<TouchableOpacity
  onPress={()=>  this.props.navigation.navigate('ColorsGame')}

>
<Image  source={require('../assets/images/colors.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}
  />
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Colors
  </Text>

  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
    الألوان
  </Text>
</TouchableOpacity>

<TouchableOpacity
 onPress={()=>this.props.navigation.navigate('GamesNumbers')}

>
 <Image  source={require('../assets/images/game3.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}

  />

<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Numbers Game
  </Text>
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
 الأرقام   </Text>
</TouchableOpacity>
  
  <TouchableOpacity
 onPress={()=>this.props.navigation.navigate('GameScreen')}
  
  > 
   <Image  source={require('../assets/images/tic.png')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}

  />
  
  
<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Tic-Tac-Toe 
  </Text>

  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
اكس او  </Text>
  </TouchableOpacity>







 </View>













 <View
 
 style={
   {
     width:'100%',
     height:200,
     justifyContent:'space-around',
     flexDirection:'row',
     marginTop:0
   }
 }
 
 >

<TouchableOpacity
  onPress={()=>  this.props.navigation.navigate('flayingbird')}

>
<Image  source={require('../assets/images/flayingbird.jpg')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}
  />
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    flayingbird
  </Text>
  <Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
الطيور  </Text>
</TouchableOpacity>

<TouchableOpacity
 onPress={()=>this.props.navigation.navigate('Main')}

>
 <Image  source={require('../assets/images/tetris.png')}
 style={{
   borderRadius:200,
   width:100,
   height:100,
   borderColor:'pink',
   borderWidth:6
 }}

  />

<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display1
  }}
  >
    Tetris
  </Text>
  
<Text
  style={{
    alignSelf:'center',
   fontSize:20 ,
   marginTop:10,
    fontFamily:'Lobster-Regular',
    display:this.state.display2
  }}
  >
    بناء 
  </Text>
</TouchableOpacity>
  








 </View>


 </ScrollView>

    )
  }
  

}
