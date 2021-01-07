import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView,Image,
  ScrollView, TouchableOpacity, TextInput,} from 'react-native';

  export default class  q70 extends Component {
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
          <Text style={styles.txt1}>What do you know about teething?</Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ color: 'black',
              fontSize: 25,
              fontFamily: 'Itim-Regular',
            marginBottom:10,
            textAlign: 'center',
            }}>
Test your knowledge of baby teething by answering the questions of this test.
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
          onPress={() => this.props.navigation.navigate('q71')} >
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
              fontSize: 15,
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
          <Text style={styles.txt1}>ماذا تعرف عن التسنين؟</Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ color: 'black',
              fontSize: 25,
              fontFamily: 'Itim-Regular',
            marginBottom:10,
            textAlign: 'center',
            }}>
اختبر معلوماتك عن تسنين الطفل من خلال الإجابة على أسئلة هذا الاختبار.
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
          onPress={() => this.props.navigation.navigate('q71')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
التالي
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 45,
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
              fontSize: 21,
              fontFamily: 'Amiri-BoldItalic',
            }}>
قائمة الاسئلة
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
    justifyContent: 'space-around',
    marginBottom:50,
  },
num: {
  width: '98%', 
  borderWidth:1,
  borderColor: 'grey',
   height: 60,
 backgroundColor: 'lightgrey',
 alignSelf:'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
  marginBottom:20,
},
txt1: {
 color: 'midnightblue',
 fontSize: 23,
 fontFamily: 'Amiri-BoldItalic',
},
});