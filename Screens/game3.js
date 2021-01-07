import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ImageBackground,TouchableOpacity
} from 'react-native';

export default class game3 extends Component { 
  constructor(props) { 
    super(props);
    this.state = {
      randomNumber: 0,
      displayNumber: 'none',
      display1: 'flex',
      display2: 'flex',
      display3: 'none',
      display4: 'none',
      newVlaue: 0,

      
    }
  }
 
  render() { 
    return (
    <View>
      
      
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
            alignItems: 'center',
        }}
        source={ require( '../assets/images/kk.jpg')}>
  
        <TextInput
          style={{
            display: this.state.displayNumber,
            borderBottomWidth: 1,
            width: 200,
            paddingLeft: 40,
            textAlign:'center'          
            
        }}>
           {this.state.randomNumber} 
        </TextInput>




            <TextInput
          style={{
            display: this.state.display3,
            borderBottomWidth: 1,
            width: 200,
            paddingLeft: 40,
            textAlign: 'center',
          //  display: this.state.display4,
          
            
          }}
          //value={''}
          onChangeText={(b) => this.setState({newVlaue:b})}
          placeholder={"ادخل اجابتك"}
          
         
        />
                
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            width: 100,
            height: 30,
            //textAlign:'center'
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
                        display:this.state.display2

          }}
          
          onPress={() => alert(
            'هذه اللعبة لاختبار ذاكرة الطفل عن طريق حفظه للرقم الظاهر ثم اعادة ادخاله'
          )}
        >
          <Text>
          ما هي اللعبة؟ 

          </Text>
         </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            width: 100,
            height: 30,
            //textAlign:'center'
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            display: this.state.display2,
            marginTop:20
            
          }}
          onPress={
            () => {
              this.setState({ display2: 'none', display1: 'none', display3: 'flex', displayNumber: 'flex' })
                this.setState({ randomNumber: Math.floor(Math.random() * 100) + 1 }); 
    //  this.setState({displayNumber:'none'})

 setInterval(
    () => { this.setState({displayNumber:'none',display4:'flex'})}
,10000);
            }
        }
        >
          <Text>
          أبدأ

          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            width: 100,
            height: 30,
            //textAlign:'center'
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            display: this.state.display3,
            marginTop: 20
          }}
        
          onPress={() => { 
            if (this.state.randomNumber == this.state.newVlaue) {
              alert('طفل ذكي :)');
               this.setState({ display2: 'flex', display1:'flex',display3:'none',displayNumber:'none',display4:'none' })
    this.setState({ randomNumber: Math.floor(Math.random() * 100) + 1 }); 

             }
          }}
        
        
        >
          <Text>
          أجب

          </Text>
        </TouchableOpacity>
      </ImageBackground>

        </View>


    );
  }

}