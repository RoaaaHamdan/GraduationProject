import React,{Component} from 'react'
import {View,ScrollView,Text,TextInput,TouchableOpacity} from 'react-native'
export default class ColorsGame extends Component {
  constructor (props){
    
    super(props);
    this.state={
     rendomColor:'',
     result:'',
     colors:[
       'pink',
       'blue',
       'lightblue',
       'hotpink',
       'black',
       'white',
       'grey'
     ]
    }
   }
     componentDidMount=()=>{
      var random=Math.floor(
        Math.random()*7);

        this.setState({rendomColor:this.state.colors[random]})
     }




  render(){
    return(
  <ScrollView
  style={{
    width:'100%',
    height:'100%',
    backgroundColor:'white',

  }}
  >
  <View 
  style={{
    width:'100%',
    height:70,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:160
  }}
  >
   <Text
   style={{
     fontSize:20,
     color:'white',
     fontFamily:'Itim-Regular'
   }}
   >
     Colors Game 
   </Text>
 
  </View>
  <View
  style={{
    borderColor:'pink',
    borderWidth:3,
    width:'60%',
    height:240,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  }}
  >
  <View
  
  style={{
    width:'50%',
    height:100,
    backgroundColor:this.state.rendomColor,
    borderColor:'black',
    borderWidth:2
      }}
  >

    

  </View>
<TextInput  
style={{
  borderBottomColor:'pink',
  width:'60%',
  borderBottomWidth:2
}}
onChangeText={(c)=>this.setState({result:c})}
placeholder={'Your Answer'}
>

</TextInput>
  </View>

  
<TouchableOpacity
style={{
  backgroundColor:'pink',
  width:'30%',
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:100,
  height:50,
  marginTop:30
}}

onPress={()=>{
  if (this.state.result == ''){
 alert('please enter an answer')
  }else { 
  if (this.state.rendomColor == this.state.result){
    alert('good child ! try another time');
    var random=Math.floor( Math.random()*7);

        this.setState({rendomColor:this.state.colors[random]})
  }
  else {
    alert('Ooops , Wrong Answer ! lets try another time ?');
  }
}
}
}
>
  <Text
  style={{
    color:'white',
    fontSize:15,
    fontFamily:'Itim-Regular'
  }}
  >
   Answer
  </Text>
</TouchableOpacity>

  </ScrollView>

    )
  }
}