import React, {Component} from 'react';
import {View, Text, ScrollView,TouchableOpacity,TextInput,Dimensions} from 'react-native';

class gameNum extends Component {
  constructor(props) {
    super(props);
    this.state={
      x:'roaa',
      random1:'',
      random2:'',
      random3:'',
      display1:'flex',
      display2:'none',
      array:[
        'column-reverse',
        'column',
        'row-reverse',
        'row'
      ],
answer:'',
mar1:'column-reverse',
mar2:'column',
mar3:'row-reverse',
mar4:'row',
dis1:true

    }
  }


 

  startGame=()=>{

    this.setState({
      random1:'',random2:'',random3:'',display2:'none',display1:'flex',dis1:true
     // ;

    })

var r2 = Math.floor(Math.random() *9);
var r3 = Math.floor(Math.random() *9);
var r4 = Math.floor(Math.random() *9);


while(r2 == r3  ||  r3 ==r4||r2==r4){

  var r2 = Math.floor(Math.random() *9);
var r3 = Math.floor(Math.random() *9);
var r4 = Math.floor(Math.random() *9);

}

var r11 =Math.floor(Math.random() *4);
var r12 =Math.floor(Math.random() *4);
var r13 =Math.floor(Math.random() *4);
var r14 =Math.floor(Math.random() *4);
while(r12 == r11||r13 ==r11||r12==r13||r11==r14||r12==r4||r13==r14){
var r11 =Math.floor(Math.random() *4);
var r12 =Math.floor(Math.random() *4);
var r13 =Math.floor(Math.random() *4);
var r14 =Math.floor(Math.random() *4);
}

this.setState({mar1:this.state.array[r14],mar2:this.state.array[r12],mar3:this.state.array[r13],
  mar4:this.state.array[r14]});
  this.setState({random1:r2,display1:'flex',random2:r3,
random3:r4,display2:'none'});
  setTimeout(() => {
     this.setState({display1:'none',display2:'flex',dis1:false})
   }, 5000);

  }
/*
  componentDidMount() {
    setTimeout(() => {
    //  Alert.alert('I am appearing...', 'After 5 seconds!');
this.setState({random1:Math.floor(Math.random() *9)}) }, 5000);



    setTimeout(() => {
     // Alert.alert('I am appearing...', 'After 5 seconds!');
      this.setState({x:'roaa1kdd'})
    }, 10000);
    
    setTimeout(() => {
      // Alert.alert('I am appearing...', 'After 5 seconds!');
       this.setState({x:''})
     }, 10500);
  }
*/
  render() {
    return (
      <ScrollView>


<View
     style={{
       height:70,
       backgroundColor:'palevioletred',
justifyContent:'center',
alignItems:'center',

     }}
     
     >
   <Text
   style={{
     color:'white',
     fontFamily:'Itim-Regular',
     fontSize:20
   }}
   >
     Numbers Game
   </Text>



     </View>
     <View

style={{
width:'50%',
height:150,
backgroundColor:'palevioletred',
opacity:.7,
alignSelf:'center',
marginTop:50,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.77,
shadowRadius: 16.00,

elevation: 50,
justifyContent:'center',
alignItems:'center'

}}

>


<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:80,
  display:this.state.display1
}}
>
  {this.state.random1}
</Text>
</View>

<View

style={{
  flexDirection:this.state.mar1,
 justifyContent:'center',
// / alignSelf:'center'
alignItems:'center'
}}
>
<TouchableOpacity

style={{
width:'30%',
height:150,
backgroundColor:'palevioletred',
opacity:.7,
marginTop:50,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.77,
shadowRadius: 16.00,

elevation: 50,
justifyContent:'center',
alignItems:'center'
//justifyContent:'center',
//alignItems:'center',


}}
disabled={this.state.dis1}
onPress={()=>
{
  alert('good boy');
  this.startGame();

}
}
>


<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:80,
  display:this.state.display2
}}
>
  {this.state.random1}
</Text>
</TouchableOpacity>
















  <TouchableOpacity
disabled={this.state.dis1}

style={{
width:'30%',
height:150,
backgroundColor:'palevioletred',
opacity:.7,
marginTop:50,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.77,
shadowRadius: 16.00,

elevation: 50,
justifyContent:'center',
alignItems:'center'


}}

>


<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:80,
  display:this.state.display2
}}
>
  {this.state.random2}
</Text>
</TouchableOpacity>
  <TouchableOpacity
disabled={this.state.dis1}

style={{
width:'30%',
height:150,
backgroundColor:'palevioletred',
opacity:.7,
marginTop:50,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.77,
shadowRadius: 16.00,
elevation: 50,
justifyContent:'center',
alignItems:'center'
}}
>

<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:80,
  display:this.state.display2
}}
>
  {this.state.random3}
</Text>
</TouchableOpacity>

</View>



<TouchableOpacity
style={{
backgroundColor:'palevioletred',
width:'30%',
height:60,
alignSelf:'center',
marginTop:20,
borderRadius:25,
justifyContent:'center',
alignItems:'center',
display:this.state.display
}}
onPress={()=>
this.startGame()}
>
<Text

style={{
  color:'white'
}}
>
  Start
</Text>
</TouchableOpacity>



      </ScrollView>

   );
  }
}

export default gameNum;