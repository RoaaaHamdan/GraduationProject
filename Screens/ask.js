import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Dimensions,ScrollView,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ask extends Component {
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
     onPress={() => this.props.navigation.navigate('q10')} >
           <Text style={styles.txt}> Allowed and prohibited during pregnancy </Text>
        </TouchableOpacity>       
         </View>

             <View style={styles.flexview}> 
            <TouchableOpacity style={styles.num1}
     onPress={() => this.props.navigation.navigate('q20')}  >
          <Text style={styles.txt}> What do you know about childbirth? </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q30')} >
          <Text style={styles.txt}> What do you know about your child's health?</Text>
        </TouchableOpacity>
          </View>
        
          <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
         onPress={() => this.props.navigation.navigate('q40')} 
        >
         <Text style={styles.txt}>How to take your child's temperature?</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q50')} >
          <Text style={styles.txt}> How to deal with my child's high temperature? </Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
         onPress={() => this.props.navigation.navigate('q60')}  >
         <Text style={styles.txt}>Is my baby normal?</Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q70')}  >
          <Text style={styles.txt}> What do you know about teething? </Text>
        </TouchableOpacity>
          </View>
          
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('pregnant2')} >
                     <Icon name="chevron-left" size={30} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:30
                     }}
                      />
         </TouchableOpacity>
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
            fontSize: 27,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
اختبر نفسك
        </Text>
      </View>
     
              <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('q10')} >
           <Text style={styles.txt}> المسموح والممنوع خلال الحمل </Text>
        </TouchableOpacity>       
         </View>

             <View style={styles.flexview}> 
            <TouchableOpacity style={styles.num1}
     onPress={() => this.props.navigation.navigate('q20')}  >
          <Text style={styles.txt}> ماذا تعرفين عن الولادة؟ </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q30')} >
          <Text style={styles.txt}> ماذا تعرف عن صحة طفلك؟</Text>
        </TouchableOpacity>
          </View>
        
          <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
         onPress={() => this.props.navigation.navigate('q40')} 
        >
         <Text style={styles.txt}>كيفية قياس درجة حرارة طفلك؟</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q50')} >
          <Text style={styles.txt}> كيف أتعامل مع ارتفاع درجة حرارة طفلي؟ </Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
         onPress={() => this.props.navigation.navigate('q60')}  >
         <Text style={styles.txt}>هل طفلي طبيعي؟</Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('q70')}  >
          <Text style={styles.txt}> ماذا تعرف عن التسنين؟</Text>
        </TouchableOpacity>
          </View>
          
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('pregnant2')} >
                     <Icon name="chevron-left" size={30} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:30
                     }}
                      />
         </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    backgroundColor: 'midnightblue',
    width: '100%',
    height: 60 ,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },
  num: {
    width: '100%', 
    borderWidth:1,
    borderColor: 'grey',
     height: 80,
   backgroundColor: 'lightgrey',
    justifyContent: 'center',
     marginTop:20,
     borderRadius:5
  },
  num1: { alignItems:'center',
  flexDirection:'row' ,
    width: '100%', 
    borderWidth:1,
    borderColor: 'midnightblue',
     height: 50,
   backgroundColor: 'lavender',
    justifyContent: 'center',
     marginTop:20,
     borderRadius:5
  },
  txt: {
  textAlign: 'center', 
   fontSize: 21,
   fontFamily: 'Amiri-BoldItalic',
  },
});
