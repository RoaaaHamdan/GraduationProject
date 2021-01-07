//const { Component } = require("react")

import React ,{Component}from 'react'
import {View,Text,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//          <Icon name="chevron-left" size={30} color="lavender" />
export default class trackWeightSlep extends Component{
  constructor(props){

    super(props);
    this.data=[];
    this.data1=[];
    this.data2=[];
    this.data3=[];
    this.data4=[];
    this.data5=[];
    this.state={
      sleepH:0,
      newW:0,
      newTem:0,
      babyname:this.props.route.params.id,
      id:this.props.route.params.motherName,
      date:'',
      gen:this.props.route.params.gender,
      b1:'',
      b2:'',
      b3:'',
      b4:'',
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
 
 }}
  getHr = ()=>{
  
  }

  getNews=()=>{

    let url2 = 'http://192.168.1.209:8082/getHR/' + this.state.babyname;
    fetch(url2, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          if (json.result.length==0){
            this.data3.push(0,0,0,0);
            if (json.result.length==0){
              this.data2.push(0,0,0,0);
  
  
            }

          }
          else {
            this.data3=[];this.data2=[];
            for (t = 0; t < json.result.length; t++) {
              {
            this.data2.push(t);
                this.data3.push(json.result[t].hr);
              }
            }
          } 
        }
this.getT()
      });
  }
  getT=()=>{

       
    let url3 = 'http://192.168.1.209:8082/getTE/' + this.state.babyname;
    fetch(url3, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          if (json.result.length==0){
            this.data5.push(0,0,0,0);
            this.data4.push(0,0,0,0);


          }
          else {
            this.data4=[];this.data5=[];
            for (t = 0; t < json.result.length; t++) {
              {
            this.data4.push(t);
                this.data5.push(json.result[t].tem);
              }
            }
          }
     
        }
        this.nav();
      });
  }
  sendHis=()=>{
    let url1 = 'http://192.168.1.209:8082/getWES/' + this.state.babyname;
    fetch(url1, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          if (json.result.length==0){
            this.data1.push(0,0,0,0);
            this.data.push(0,0,0,0);


          }
          else {
          this.data1=[];this.data=[];
          for (t = 0; t < json.result.length; t++) {
            {
          this.data.push(t);
              this.data1.push(json.result[t].wes);
            }
          }
      
           
          }
        }
        this.getNews();
      });
    }
  nav=()=>{
    this.props.navigation.navigate('chartsBaby',{
        WValues:this.data,WValues1:this.data1,HValues:this.data2,HValues1:this.data3,
        TValues:this.data4,TValues1:this.data5,gender:this.state.gen
    })  
  }
  sendW = () => { 
  if (this.state.newW==0){
    alert('Fill in the value, please');
  }
  else {
    let send =
          'http://192.168.1.209:8082/We/' +
          this.state.babyname +
          '/' +
          this.state.newW; //+
       
        fetch(send, {method: 'POST', body: null})
          .then((response) => response.json)
          .then((json) => {
            if (json.result === 'failed') {
              alert('Done');
            } else if (json.result == 'success') {
              alert('Done');
            }
          });
        }
    }

navHistory=()=>{
  let url23 = 'http://192.168.1.209:8082/getWe/' + this.state.username;
  fetch(url23, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      {          var t;
        if (json.result.length==0){
          this.data.push(0,0,0,0);


        }
        for (t = 0; t < json.result.length; t++) {
          {
        this.data2.push(t);
            this.data.push(json.result[t].drinkValue);
                   }
        }
        this.setState({ drinkValues: this.data});
        this.setState({ drinkValues1: this.data2 });
           }
    });
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
 
  let getChildsdate = 'http://192.168.1.209:8082/getChildsdate/' + this.state.id+'/'+
  this.state.babyname;

   fetch(getChildsdate, {method: 'GET', body: null})
     .then((response) => response.json())
     .then((json) => {
       {
           
             //  alert(json.result.length);
           //  this.data.push({label:json.result[t].childname,value:json.result[t].childname});
          // alert(json.result[0].childdate);
         this.setState({date:json.result[0].childdate})
        // this.setState({posts: this.data});
         // alert(this.state.posts[0].post);
       }
     });

}

 sendH = () => { 
  if (this.state.sleepH==0){
    alert('Fill in the value, please');
  }
  else {
    let send =
          'http://192.168.1.209:8082/Hr/' +
          this.state.babyname +
          '/' +
          this.state.sleepH; //+
       
        fetch(send, {method: 'POST', body: null})
          .then((response) => response.json)
          .then((json) => {
            if (json.result === 'failed') {
              alert('Done');
            } else if (json.result == 'success') {
              alert('Done');
            }
          });
  
    }
  }
    sendT = () => { 
      if (this.state.newTem==0){
        alert('Fill in the value, please');
      }
      else {
  
      let send =
            'http://192.168.1.209:8082/Te/' +
            this.state.babyname +
            '/' +
            this.state.newTem; //+
         
          fetch(send, {method: 'POST', body: null})
            .then((response) => response.json)
            .then((json) => {
              if (json.result === 'failed') {
                alert('Done');
              } else if (json.result == 'success') {
                alert('Done');
              }
            });
    
      }
    }
  render(){
    return(
      <ScrollView
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:this.state.b2
      }}
      >
      <View
      style={{
        width:'100%',
        height:70,
        backgroundColor:this.state.b1,
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
 Keep tracking your baby
 </Text>


 <Text
 style={{
   color:'white',
   fontSize:25,
   fontFamily:'Amiri-Italic',
   display:this.state.display2
 }}
 >
تابعي مراقبة طفلك  </Text>
      </View>



      <TouchableOpacity
   style={{
   width:'50%',
   height:50,
   backgroundColor:this.state.b1,
 
   marginTop:70,
   alignSelf:'center',
   justifyContent:'center',
   alignItems:'center',
   borderRadius:100
   }}
   onPress={()=>this.sendHis()}
   >

<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}
>
  The record :) !
</Text>

<Text
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}
>
السجل</Text>
   </TouchableOpacity>

   <View
   style={{
     borderColor:this.state.b1,
     borderWidth:3,
     alignSelf:'center',
     width:'80%',
     height:250,
     marginTop:80,
     borderRadius:30,
     justifyContent:'center',
     alignItems:'center'
   }}
   >
    <Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display1
    }}>
The new weight
    </Text>
    <Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display2
    }}>
وزن جديد
    </Text>
<TextInput
placeholder={'in Kg'}
style={{
  borderBottomColor:this.state.b1,
  borderBottomWidth:2,
  width:'60%',

}}
onChangeText={(c)=>this.setState({newW:c})}
>

</TextInput>


<TouchableOpacity
style={{
  backgroundColor:this.state.b1,
  width:'40%',
  height:50,
  marginTop:20,
  borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
}}
onPress={()=>this.sendW()}
>
<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}

> Add</Text>
<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}

> أضف</Text>
</TouchableOpacity>
   
   </View>



   <View
   style={{
     borderColor:this.state.b1,
     borderWidth:3,
     alignSelf:'center',
     width:'80%',
     height:250,
     marginTop:80,
     borderRadius:30,
     justifyContent:'center',
     alignItems:'center'
   }}
   onPress={()=>this.sendH()}
   >
    <Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display1
    }}>
New sleep hours
    </Text>
    <Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display2
    }}>
ساعات نوم جديدة    </Text>
<TextInput
placeholder={'in hrs'}
style={{
  borderBottomColor:this.state.b1,
  borderBottomWidth:2,
  width:'60%',

}}
onChangeText={(c)=>this.setState({sleepH:c})}
>

</TextInput>

<TouchableOpacity
style={{
  backgroundColor:this.state.b1,
  width:'40%',
  height:50,
  marginTop:20,
  borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
}}
onPress={()=>this.sendH()}
>
<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}
> Add</Text>

<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}
> أضف</Text>
</TouchableOpacity>
   
   </View>


   <View
   style={{
     borderColor:this.state.b1,
     borderWidth:3,
     alignSelf:'center',
     width:'80%',
     height:250,
     marginTop:80,
     borderRadius:30,
     justifyContent:'center',
     alignItems:'center',
 //    marginBottom:100
   }}
   >
    <Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display1
    }}>


New temperature    </Text>

<Text 
    style={{
      color:'black',
      fontSize:20,
      fontFamily:'Amiri-BoldItalic',
      display:this.state.display2
    }}>


درجة حرارة جديدة    </Text>
<TextInput
placeholder={'Celsius'}
style={{
  borderBottomColor:this.state.b1,
  borderBottomWidth:2,
  width:'60%',

}}
onChangeText={(c)=>this.setState({newTem:c})}
>

</TextInput>

<TouchableOpacity
style={{
  backgroundColor:this.state.b1,
  width:'40%',
  height:50,
  marginTop:20,
  borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
}}
onPress={()=>this.sendT()}
>
<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display1

}}
> Add</Text>
<Text
style={{
  color:'white',
  fontSize:25,
  fontFamily:'Amiri-Italic',
  display:this.state.display2

}}
> اضف</Text>
</TouchableOpacity>
   
   </View>
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