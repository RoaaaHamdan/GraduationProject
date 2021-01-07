import React ,{Component} from 'react'
import {ScrollView, TouchableOpacity,View,Text,TextInput,Image,Dimensions} from 'react-native'

export default class Game3Level1 extends Component {
  constructor(props){
    super(props);
    this.state={
      random1:'',
      random2:'',
      result:'',
      answer:'',
      san:'',
      display:'none'
    }
  }
  componentDidMount=()=>
{
 this.setState({random1:Math.floor(Math.random() * 100) + 1 ,random2:Math.floor(Math.random() * 100) + 1,}) //this.setState({ });
 this.setState({result:this.state.random1+this.state.random2});
 alert('Welcome !');

}
  render(){
    return(
      <ScrollView
       style={{
         backgroundColor:'mistyrose'
       }}
      >
      <View
      style={{
        backgroundColor:'pink',
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center'
        
      }}
      >
 <Text
 style={{
   fontSize:30,
   fontFamily:'Itim-Regular'
 }}
 >
   Game 3 
 </Text>
      </View>
 

 <View
 // 
 style={{
   alignSelf:'center',
   justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width-100,
        height:200,
        borderColor:'pink',
        borderWidth:4,
        marginTop:100
      
 }}
 >
<Text>
  {this.state.random1} + {this.state.random2} = ?
</Text>
<TextInput
placeholder={'your answer !'}
style={{
  borderBottomColor:'pink',
  borderBottomWidth:2,
  width:'60%',

}}
onChangeText={(value)=> this.setState({answer:value})}
>

</TextInput>
 </View>

 <TouchableOpacity
 style={{
   backgroundColor:'pink',
   width:'30%',
   height:50,
   alignSelf:'center',
   marginTop:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:20
 }}

 onPress={()=>
 {
 /* this.setState({result:this.state.random1+this.state.random2});
alert(this.state.re)
  if (this.state.result == ''){
 alert('please enter an answer')
  } 
  


   if (this.state.answer == this.state.result){

   this.setState({san:'your are clever boy ! lets try another ONE! ',display:'flex'})
  
   }
   else if (this.state.answer != this.state.result) {
     alert('dsd'+this.state.answer+'sdd'+this.state.result)
    this.setState({san:'your are clever boy !but be more Focus before answer ! lets try another ONE! ',display:'flex'})

   }*/

   if (this.state.answer == ''){
 alert('please enter an answer')
  }else { 
  if (this.state.result == this.state.answer){
    alert('good child ! try another time');
    //var random=Math.floor( Math.random()*7);

     //   this.setState({rendomColor:this.state.colors[random]})
  }
  else {
    alert('Ooops , Wrong Answer ! lets try another time ?');
  }
}

 }}
 >
   <Text
   style={{
     fontSize:20,
     fontFamily:'Amiri-BoldItalic'
   }}
   >
     Answer!
   </Text>


 </TouchableOpacity>
 <View
  style={{
   marginTop:40,
   justifyContent:'center',
   alignItems:'center',
   display:this.state.display
 }}
 >
 <Text
style={{
  fontFamily:'SyneMono-Regular'
}}
 
 >
     your answer is {this.state.answer} and the right answer is {this.state.result}.

      {this.state.san}
   </Text>
 </View>
<TouchableOpacity
 style={{
   backgroundColor:'pink',
   width:'30%',
   height:50,
   alignSelf:'center',
   marginTop:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:20,
   display:this.state.display

 }}
 onPress={()=>{
  this.setState({random1:Math.floor(Math.random() * 100) + 1 ,random2:Math.floor(Math.random() * 100) + 1,display:'none'});//,result:this.state.random1+this.state.random2,display:'none'});
  this.setState({result:this.state.random1+this.state.random2});
  //alert(this.state.result);

 }}
>
<Text
   style={{
     fontSize:20,
     fontFamily:'Amiri-BoldItalic',
   }}
>
  Try Again
</Text>
</TouchableOpacity>
      </ScrollView>
    )
  }
}