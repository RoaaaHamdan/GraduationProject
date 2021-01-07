import React ,{Component} from 'react'
import {Text,TextInput,View,TouchableOpacity,ScrollView,Alert}from 'react-native'

import CircularSlider from 'rn-circular-slider'

import CircleSlider from "react-native-circle-slider";

export default class addWater extends Component{
 m=new Date().getMonth()+1;

 constructor(props){

   super(props);
   this.state={
     water:0,
     per:0,
     display:'none',
     username :'Hyam',
     date : new Date().getFullYear()+'-'+this.m+'-'+new Date().getDate(),
     display1:'flex',
     display2:'none'
   }
   global.w=0;
 }
  createThreeButtonAlert = () =>
 Alert.alert(
   "",
   "Add a new Value",
   [
     {
       text: "250 ml",
       onPress: () => {
         global.w= global.w+250;
        // alert(global.w)
        this.setState({water:global.w})
        var x = Math.round((global.w/1800)*100);
       
      this.setState({per:x})
      this.addnewValue(this.state.water);
      } ,
     },
     {
       text: "1500 ml",
       onPress: () => {
        global.w= global.w+1500;
       // alert(global.w)
       this.setState({water:global.w})
       var x = Math.round((global.w/1800)*100);
      
     this.setState({per:x})
     this.addnewValue(this.state.water);
    }
     } ,

     {
      text: "another value",
      onPress: () => {
        this.setState({display:'flex'})


      },
     // style: "cancel"
    },
     { text: "OK", onPress: () => console.log("OK Pressed") }
   ],
   { cancelable: false }
 );



 UNSAFE_componentWillMount =() =>{
  var date = new Date ();
 //  alert(date);
  this.getWaterValue();
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  
  }

}




getWaterValue = () => {
  //   alert('hell9');
       const url =
           'http://192.168.1.209:8082/checkifexist/' +this.state.date+'/'+
           this.state.username;
 
  fetch(url, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      // alert('hell');
      {
        if (json.result.length == 0) {
         // alert('plase choose another user Name ');
            
         this.setState({water:0,per:0});
         global.w=0;



        } else {
               
    
this.setState({water:json.result[0].waterValues,per: Math.round((json.result[0].waterValues/1800)*100)});
global.w=json.result[0].waterValues;
        }
      }
    });
  };
  
  addnewValue=(wa)=>{
    
    const url =
    'http://192.168.1.209:8082/checkifexist/' +this.state.date+'/'+
    this.state.username;

fetch(url, {method: 'GET', body: null})
.then((response) => response.json())
.then((json) => {
// alert('hell');
{
 // if (json.result.length)
 //alert(json.result.length);
 if (json.result.length ==0) {
  let SendURL =
  'http://192.168.1.209:8082/addNewValue/' +
  this.state.date +
  '/' +
  this.state.username+'/'+wa
 ;
fetch(SendURL, {method: 'POST', body: null})
  .then((response) => response.json)
  .then((json) => {
    if (json.result === 'failed') {
      alert('Done');
    } else if (json.result == 'success') {
      alert('Done');
    }
  });


 } else {

  let UpdateURL1 =
  'http://192.168.1.209:8082/updateWaterValue/' +
  this.state.date +
  '/' +
  this.state.username
  +
  '/' +
  this.state.water;
fetch(UpdateURL1, {method: 'POST', body: null})
  .then((response) => response.json)
  .then((json) => {
  //  alert('xxmmmmmxxx',json.result.method)
    if (json.result == 'failed') {
      alert('Done');
    } else if (json.result == "Success") {
      alert('Done');
    }
   // alert('تم التحديث');
  }); }
}
});
  }

  render(){
    const {x} = this.state.per;
  return (

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
       alignItems:'center'
     }}
    >
      <Text
       style={{
         color:'white',
         fontSize:30,
         fontFamily:'Grandstander-Italic-VariableFont_wght',
         display:this.state.display1
       }}
      >
        Add a water !
      </Text>

      <Text
       style={{
         color:'white',
         fontSize:25,
         fontFamily:'Grandstander-Italic-VariableFont_wght',
         display:this.state.display2
       }}
      >
      أضف كمية جديدة!
      </Text>
    </View>
  <View 
  style={{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
    
  }}
   
  >
<Text
style={{
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}
>

I drank today
</Text>

<Text
style={{
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}
>

شربت اليوم </Text>
<Text
style={{
  marginTop:100,
  fontSize:30,
  alignSelf:'center'
}}>
  {this.state.per}%
</Text>

<View style={{ flex: 1, justifyContent: "center", alignItems: "center" , width:100,height:0 }}>
                <CircleSlider value={100} 
                 
                 onValueChange={()=>this.state.per}
                strokeColor={'midnightblue'} 
                xCenter={89}
             //   dialRadius={90}                 // onValueChange={()=>console.log(this.state.per)}
                />
                          </View>

<Text
style={{
  marginTop:130,
  fontFamily:'Amiri-Italic',
  fontSize:25,
  display:this.state.display1
}}>
  {this.state.water} from 1800 ml
</Text>
<Text
style={{
  marginTop:130,
  fontFamily:'Amiri-Italic',
  fontSize:25,
  display:this.state.display2
}}>
  {this.state.water} من 1800 مل
</Text>
<TouchableOpacity
style={{
  width:'40%',
  height:40,
  backgroundColor:'midnightblue',
  opacity:.7,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
  }}
  onPress={this.createThreeButtonAlert}
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Itim-Regular',
  display:this.state.display1


}}>
  Add +
</Text>
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Itim-Regular',
  display:this.state.display2


}}>
  اضف +
</Text>
</TouchableOpacity>


<TextInput 
  keyboardType="numeric"
  placeholder={'add new value'}

 style={{
borderBottomColor:'midnightblue',
borderBottomWidth:1,
width:'40%',
display:this.state.display,


 }}

  onBlur={()=>
    {  global.w=global.w+1500;
        var x = Math.round((global.w/1800)*100);
        this.setState({water:global.w});

      this.setState({per:x,display:'none'});
      this.addnewValue(this.state.water);


      }
     
  
  
  
  }
/>
  </View>

 
  <View
  style={{
    alignSelf:'center',
    width:'40%',

  }}
  >

<TouchableOpacity
style={{
  height:40,
  backgroundColor:'midnightblue',
  opacity:.7,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20
  }}
  onPress={()=>this.props. navigation.navigate('waterHistory')}
  >
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Itim-Regular',
  display:this.state.display1


}}>
 See My History
</Text>
<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Itim-Regular',
  display:this.state.display2


}}>
سجلي</Text>
</TouchableOpacity>

  </View>
      

    </ScrollView>
  )
     
  }
}