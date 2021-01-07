import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,Image,
  ScrollView, TouchableOpacity, TextInput,} from 'react-native';

  export default class  q10 extends Component {
    constructor(props){
      super(props);
    this.state={
      flag:'none',
      display1:'flex',
      display2:'none'
    }
  }
  UNSAFE_componentWillMount =()=>{
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
  }
  render(){
  return (
       <SafeAreaView>
      
      <ScrollView style={{ display:this.state.display1 }} >
        
        <View style={styles.flexview,{
        }}>

      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
Test yourself
        </Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num}
        >
          <Text style={styles.txt1}>Allowed and prohibited during pregnancy </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ color: 'black',
              fontSize: 25,
              fontFamily: 'Itim-Regular',
            marginBottom:10,
            textAlign: 'center',
            }}>
Test your knowledge about the things you can do and what you should avoid during pregnancy.
             </Text>
            </View>
          
            <View style={styles.flexview}> 
            <Text style={{ alignSelf:'center'
            }}>
              _____________________________________________ </Text>
            </View>

            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 40,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q11')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
Start
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 45,
            marginTop: 10,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => this.props.navigation.navigate('ask')} >
          <Text style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',
            }}>
List of questions
          </Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>





        <ScrollView
      style={{
        display:this.state.display2
      }}
       >
        <View style={styles.flexview,{
        }}>
<View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
اختبر نفسك
        </Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num}
        >
          <Text style={styles.txt1}>المسموح والممنوع أثناء الحمل </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ color: 'black',
              fontSize: 25,
              fontFamily: 'Itim-Regular',
            marginBottom:10,
            textAlign: 'center',
            }}>
اختبري معلوماتك حول الأمور التي يمكنك القيام بها وما يجب عليك تجنبه أثناء الحمل.
             </Text>
            </View>
          
            <View style={styles.flexview}> 
            <Text style={{ alignSelf:'center'
            }}>
              _____________________________________________ </Text>
            </View>

            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 80,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q11')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
البداية          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 20,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => this.props.navigation.navigate('ask')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
قائمة الأسئلة
          </Text>
        </TouchableOpacity>
        </View>

</View>
        </ScrollView>
    </SafeAreaView>
  );
};
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    alignSelf:'center',
    justifyContent: 'space-around',
    marginBottom:80,
  },
num: {
  width: '98%', 
  borderWidth:1,
  borderColor: 'grey',
   height: 70,
 backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf:'center',
  borderRadius: 20,
  marginBottom:30,
},
txt1: {
 color: 'midnightblue',
 fontSize: 22,
 fontFamily: 'Amiri-BoldItalic',
},
});