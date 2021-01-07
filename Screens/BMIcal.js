import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default  class claBMI extends Component {
  constructor(props){
    super(props);
    this.state={
      age:0,
      tall:0,
      We:0,
      BMI:0,
      display1:'flex',
      display2:'none'

    }

  }

  UNSAFE_componentWillMount = () => {
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
  else{

      this.setState({display2:'none',display1:'flex'})
  }
  }
   calculateBMI = () => {
    if (this.state.age == 0 || this.state.tall == 0 || this.state.We == 0) {
      alert('Please fill all fields');
    } else {
    //  alert((We / (tall * tall)) * 100 * 100);
     // nav(BMI);

     if((this.state.We / (this.state.tall * this.state.tall)) * 100 * 100 <17.5){
      if (global.flagA =='Arab'){
        alert('وزنك ضمن نطاق نقص الوزن')
      }
      else{
        alert('Your weight is within the underweight range')

      }
    }
    else if((this.state.We / (this.state.tall * this.state.tall)) * 100 * 100 > 18.5&&(this.state.We / (this.state.tall * this.state.tall)) * 100 * 100 <24.9 ){
      if (global.flagA =='Arab'){
        alert(  'Your weight is within the normal or healthy weight range')
      }
      else{
        alert('وزنك ضمن نطاق الوزن الطبيعي أو الصحي')

      }
    
    }  
    else if((this.state.We / (this.state.tall * this.state.tall)) * 100 * 100 >25&&(this.state.We / (this.state.tall * this.state.tall)) * 100 * 100 <29.9 ){
      if (global.flagA =='Arab'){
        alert('وزنك في نطاق زيادة الوزن')
      }
      else{
        alert('Your weight is within the range of being overweight')

      }
    
    }
    else {
      if (global.flagA =='Arab'){
        alert('وزنك ضمن نطاق السمنة')
      }
      else{
        alert(
          'Your weight is within the obesity range'
        )
      }
     
    }
    
    }
    //navigation.navigate('map');
  };
render(){
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:this.state.display1
          }}>
Calculate BMI
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:this.state.display2
          }}>
 حساب BMI
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
        }}>
        <Text>
          Your BMI = {(this.state.We / (this.state.tall * this.state.tall)) * 100 * 100}
        </Text>
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display1}}>
          Age
        </Text>
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display2}}>
           العمر
        </Text>


        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'In years'}
          onChangeText={(val) => this.setState({age:val})}
        />
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display1}}>
          Length
        </Text>
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display2}}>
          الطول
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'In cm'}
          onChangeText={(val) =>this.setState({tall:val})}
        />
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display1}}>
          Weight
        </Text>
        <Text
          style={{fontFamily: 'Amiri-Regular', fontSize: 25, color: 'midnightblue',display:this.state.display2}}>
          الوزن
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'In Kg'}
          onChangeText={(val) => this.setState({We:val})}
        />
        <TouchableOpacity
          style={{
            width: 150,
            borderWidth: 1,
            borderColor: 'white',
            height: 50,
            marginTop: 40,
            backgroundColor: 'midnightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
          }}
          onPress={this.calculateBMI}>
          <Text
            style={{
              //textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
              display:this.state.display1
            }}>
            Result !
          </Text>
          <Text
            style={{
              //textAlign: 'center',
              color: 'white',
              fontSize: 25,
              
              fontFamily: 'Amiri-BoldItalic',
              display:this.state.display2,
              alignSelf:'center'
            }}>
النتيجة          </Text>
        </TouchableOpacity>
     
      </View>
    </ScrollView>
  );
}
 
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

//export default claBMI;
