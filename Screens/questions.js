import React ,{Component} from  'react'
import {ScrollView,View,Text,TextInput,TouchableOpacity} from 'react-native' 
import {Dropdown} from 'react-native-material-dropdown';
import {RadioButton} from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  class qusetions extends Component {
 constructor(props){
   super(props);
   this.state={
     type1:'',
     display1:'none',
     display2:'none',
     checked:-1,
     flagPreg:-1,
     checked2:'',
     flaghaveChaild:'',
     checked3:'',
     flagGame:-1,//falgWei
     checked4:'',
     falgWei:-1,
     firstName:this.props.route.params.firstName,
     secondName:this.props.route.params.secondName,
     Email:this.props.route.params.Email,
     phoneNumbe:this.props.route.params.phoneNumbe,
     type:this.props.route.params.type,
     backgroudColor:'black',
     backgroudColor2:'lavender',
     display11:'flex',
     display22:'none'



   }
 }
 componentDidMount()
 {
  global.flagA='Eng'
 }

send=()=>{
  if (this.state.type1=='female'){
    if(this.state.falgGame==-1|| this.state.falgWei==-1||this.state.flagPreg==-1||this.state.flaghaveChaild==-1){

      alert('Please fill in all the blanks');
    }
    else {


      let SendURL =
          'http://192.168.1.209:8082/UserSendInformation/' +
          this.state.firstName +
          '/' +
          this.state.secondName +
          '/' +
          this.state.Email +
          '/' +
          this.state.phoneNumbe +
          '/' +
          this.state.type +
          '/' +this.state.flagGame +
          '/' +this.state.falgWei +
          '/' +this.state.flagPreg +
          '/' +this.flaghaveChaild;
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
    }

  }
  else {
    if(this.state.falgGame==-1|| this.state.falgWei==-1){

      alert('Please fill in all the blanks');
  }
  else {


    let SendURL =
        'http://192.168.1.209:8082/UserSendInformation/' +
        this.state.firstName +
        '/' +
        this.state.secondName +
        '/' +
        this.state.Email +
        '/' +
        this.state.phoneNumbe +
        '/' +
        this.state.type +
        '/' +this.state.flagGame +
        '/' +this.state.falgWei +
        '/' +this.state.flagPreg +
        '/' +this.flaghaveChaild;
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
  }
  }
 
}

  setSelectedStateValue = (value) => {
  this.setState({type1:value});
  if (this.state.type1=='male'){
    this.setState({display2:'flex',display1:'none',backgroudColor:'midnightblue',backgroudColor2:'lavender'})
  }else {
    this.setState({display1:'flex',display2:'none',backgroudColor:'pink',backgroudColor2:'mistyrose'})

  }
};

 render(){
  let myFavouriteActors = [
    {
      label: 'female',
      value: 'female',
    },
    {
      label: 'male',
      value: 'male',
    },
  ];
   return(
   <ScrollView
   style={{
     width:'100%',
     height:'100%',
     backgroundColor:this.state.backgroudColor2,
   }}
   >

 <View 

 style={{

   width:'100%',
   height:70,
   backgroundColor:this.state.backgroudColor,
   justifyContent:'center',
   alignItems:'center',
  display:this.state.display11

 }}>
   <Text
   style={{
     fontSize:25,
     color:'white',
     fontFamily:'Amiri-BoldItalic'
   }}>
qusetions
   </Text>
 </View>

 <ActionButton buttonColor="midnightblue"
         verticalOrientation='down'
          
          style={{
           // alignSelf:'flex-end'
          }}
          >
       
          <ActionButton.Item buttonColor='#3498db' title="Arabic" onPress={() => {
               if(global.flagA =='Eng'){
            global.flagA='Arab';
            global.display11 ='none';
            global.display22 ='flex';

            this.setState({display11:'none',display22:'flex'})

          }
          else   if(global.flagA =='Arab'){
            global.flagA='Eng';
            global.display22 ='none';
            global.display11 ='flex';
            this.setState({display22:'none',display11:'flex'})

          }
             
               // alert(global.flagA)
          }}>
            <Icon name="language"  />
          </ActionButton.Item>
    
        </ActionButton>
      
      
      
  <View

  
  style={{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:70,
    //alignContent:'space-around',
    display:this.state.display11

  }}
  >

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:130,
  borderRadius:10,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center'
}}
>
<Text>

</Text>
<TextInput>
  My jender is {this.state.type1}
</TextInput>
<View
style={{
  width:'40%',
  marginBottom:20
}}>
<Dropdown
          data={myFavouriteActors}
          value={this.state.type1}
          label="My Jebder"
          itemColor={'pink'}
          useNativeDriver={true}
          onChangeText={(value, index, data) => this.setSelectedStateValue(value)}
       
        />
</View>
   

</View>


<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
  Are you pregnant and intrested in tracking your pregnancy details?
</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-end'

            }}>
            <Text> yes</Text>
            <RadioButton
              value="first"
              status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked:'first',flagPreg:1});
              //alert(this.state.flagPreg)
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-end'

            }}>
            <Text>no</Text>

            <RadioButton
              value="second"
              status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked:'second',flagPreg:0});
                //alert(this.state.flagPreg)
              }}
            />
          </View>
          
         


</View>

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
Do you have a newborn baby and you are intested in tracking his details</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-end'

            }}>
            <Text> yes</Text>
            <RadioButton
              value="first"
              status={this.state.checked2 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked2:'first',flaghaveChaild:1});
              //alert(this.state.flagPreg)
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-end'

            }}>
            <Text>no</Text>

            <RadioButton
              value="second"
              status={this.state.checked2 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked2:'second',flaghaveChaild:0});
                //alert(this.state.flagPreg)
              }}
            />
          </View>
          
         


</View>

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  //display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
Do you have a child  and  would you like to develop his memory and skills through games?</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-end'

            }}>
            <Text> yes</Text>
            <RadioButton
              value="first"
              status={this.state.checked3 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked3:'first',flagGame:1});
              //alert(this.state.flagPreg)
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-end'

            }}>
            <Text>no</Text>

            <RadioButton
              value="second"
              status={this.state.checked3 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked3:'second',falgGame:0});
                //alert(this.state.flagPreg)
              }}
            />
          </View>
          
         


</View>


<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  //display:this.state.display1,
  marginTop:70,
  padding:10,
  marginBottom:50
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
Are you interested in losing weight and calculating your calories?</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-end'

            }}>
            <Text> yes</Text>
            <RadioButton
              value="first"
              status={this.state.checked4 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked4:'first',falgWei:1});
              //alert(this.state.flagPreg)
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-end'

            }}>
            <Text>no</Text>

            <RadioButton
              value="second"
              status={this.state.checked4 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked4:'second',falgWei:0});
                //alert(this.state.flagPreg)
              }}
            />
          </View>
          
         


</View>

<TouchableOpacity onPress={()=>this.send()}
style={{
  borderColor:'black',
  borderWidth:2,
  width:'30%',
  height:60,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  marginBottom:50
}}
>
  <Text>
    Send
  </Text>
</TouchableOpacity>
  </View>



  <View 
 style={{

   width:'100%',
   height:70,
   backgroundColor:this.state.backgroudColor,
   justifyContent:'center',
   alignItems:'center',
  display:this.state.display22

 }}>
   <Text
   style={{
     fontSize:25,
     color:'white',
     fontFamily:'Amiri-BoldItalic'
   }}>
أسئلة   </Text>
 </View>

 <ActionButton buttonColor="midnightblue"
         verticalOrientation='down'
          
          style={{
           // alignSelf:'flex-end'
          }}
          >
       
          <ActionButton.Item buttonColor='#3498db' title="Arabic" onPress={() => {
               if(global.flagA =='Eng'){
            global.flagA='Arab';
            global.display11 ='none';
            global.display22 ='flex';

            this.setState({display11:'none',display22:'flex'})

          }
          else   if(global.flagA =='Arab'){
            global.flagA='Eng';
            global.display22 ='none';
            global.display11 ='flex';
            this.setState({display22:'none',display11:'flex'})

          }
             
               // alert(global.flagA)
          }}>
            <Icon name="language"  />
          </ActionButton.Item>
    
        </ActionButton>
  <View

  
  style={{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:70,
    //alignContent:'space-around',
    display:this.state.display22

  }}
  >

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:130,
  borderRadius:10,
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center'
}}
>
<Text>

</Text>
<TextInput>
ذكر\انثى {this.state.type1}
</TextInput>
<View
style={{
  width:'40%',
  marginBottom:20
}}>
<Dropdown
          data={myFavouriteActors}
          value={this.state.type1}
          label="My Jebder"
          itemColor={'pink'}
          useNativeDriver={true}
          onChangeText={(value, index, data) => this.setSelectedStateValue(value)}
       
        />
</View>
   

</View>


<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
هل أنت حامل ومهتم بمتابعة تفاصيل الحمل؟</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-start'

            }}>         
              <RadioButton
              value="first"
              status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked:'first',flagPreg:1});
              //alert(this.state.flagPreg)
              }}
            />
            <Text> نعم</Text>
 
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-start'

            }}>   
               <RadioButton
              value="second"
              status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked:'second',flagPreg:0});
                //alert(this.state.flagPreg)
              }}
            />
            <Text>لا</Text>

      
          </View>
          
         


</View>

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
هل لديك مولود جديد وأنت مهتم بمتابعة تفاصيله

</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-start'

            }}>   
                   <RadioButton
              value="first"
              status={this.state.checked2 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked2:'first',flaghaveChaild:1});
              //alert(this.state.flagPreg)
              }}
            />
            <Text> نعم</Text>
  
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-start'

            }}> 
                <RadioButton
              value="second"
              status={this.state.checked2 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked2:'second',flaghaveChaild:0});
                //alert(this.state.flagPreg)
              }}
            />
            <Text>لا</Text>

       
          </View>
          
         


</View>

<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  //display:this.state.display1,
  marginTop:70,
  padding:10
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
هل لديك طفل وترغب في تنمية ذاكرته ومهاراته من خلال الألعاب؟
</Text>




<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-start'

            }}>    
                <RadioButton
              value="first"
              status={this.state.checked3 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked3:'first',flagGame:1});
              //alert(this.state.flagPreg)
              }}
            />
            <Text> نعم</Text>
    
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-start'

            }}>  
               <RadioButton
              value="second"
              status={this.state.checked3 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked3:'second',falgGame:0});
                //alert(this.state.flagPreg)
              }}
            />
            <Text>لا</Text>

       
          </View>
          
         


</View>


<View
style={{
  borderColor:'black',
  borderWidth:2,
  width:'80%',
  height:180,
  borderRadius:10,
  //display:this.state.display1,
  marginTop:70,
  padding:10,
  marginBottom:50
  //justifyContent:'center',
  //alignItems:'center'
}}
>

<Text
style={{
  alignSelf:'center',
  fontFamily:'Amiri-BoldItalic',
  fontSize:14
}}>
هل أنت مهتم بفقدان الوزن وحساب السعرات الحرارية؟ 

</Text>

<View
            style={{
                flexDirection: 'row',
                   //  paddingTop:20,
                     alignSelf:'flex-start'

            }}>     
             <RadioButton
              value="first"
              status={this.state.checked4 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked4:'first',falgWei:1});
              //alert(this.state.flagPreg)
              }}
            />
            <Text> نعم</Text>
      
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf:'flex-start'

            }}>        
              <RadioButton
              value="second"
              status={this.state.checked4 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked4:'second',falgWei:0});
                //alert(this.state.flagPreg)
              }}
            />
            <Text>لا</Text>

  
          </View>
          
         


</View>

<TouchableOpacity onPress={()=>this.send()}
style={{
  borderColor:'black',
  borderWidth:2,
  width:'30%',
  height:60,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  marginBottom:50
}}
>
  <Text>
    ارسال
  </Text>
</TouchableOpacity>
  </View>

   </ScrollView>

   )
 }

}