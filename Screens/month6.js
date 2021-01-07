import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  class month6  extends Component{

  constructor(props){
    super(props);
    this.state={
      display1:'flex',
      display2:'none',
      flag:'none'
    }
  }
  componentDidMount =()=>{
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'});}
      else {

        this.setState({display2:'none',display1:'flex'});

      //global.display1='none';
      //global.display1='flex';
    
    }}
render(){

  return (
    <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
      <ScrollView
      style={{
        display:this.state.display1
      }}
      >
        <View style={styles.flexview}>
        <View>
       <Image source={require('../assets/month6.jpg')}
style={{width:400, height:220, borderRadius:30, marginTop:20 }} />
                  
    <Text style={{ textAlign: 'center',
                  fontSize: 30,
                  marginTop:20,
                  fontFamily: 'Itim-Regular',
                }}>Sixth Month </Text>
            </View>
            </View>

            <View style={styles.flexview}> 
      <TouchableOpacity style={styles.num}
   onPress={() =>  this.props.navigation.navigate('baby6')} >
         <Text style={styles.txt}> Your fetus</Text>
      </TouchableOpacity>       
       </View>

           <View style={styles.flexview}> 
          <TouchableOpacity style={styles.num}
   onPress={() =>  this.props.navigation.navigate('mother6')} >
        <Text style={styles.txt}> Your health care </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
       onPress={() =>  this.props.navigation.navigate('check6')} >
        <Text style={styles.txt}> Your checks</Text>
      </TouchableOpacity>
        </View>
     
   


        <View style={styles.flexview}>
        <TouchableOpacity
         onPress={() =>  this.props.navigation.navigate('pregnant2')} >
                   <Icon name="chevron-left" size={40} color="black"
                   style={{
                     width:50,
                     height:50,
                     marginTop:40,
                     alignItems:'flex-end',
                     marginRight:Dimensions.get('window').width-100,
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
        <View style={styles.flexview}>
        <View>
       <Image source={require('../assets/month6.jpg')}
style={{width:400, height:220, borderRadius:30, marginTop:20 }} />
                  
    <Text style={{ textAlign: 'center',
                  fontSize: 30,
                  marginTop:20,
                  fontFamily: 'Itim-Regular',
                }}>الشهر السادس </Text>
            </View>
            </View>

            <View style={styles.flexview}> 
      <TouchableOpacity style={styles.num}
   onPress={() =>  this.props.navigation.navigate('baby6')} >
         <Text style={styles.txt}>  جنينك</Text>
      </TouchableOpacity>       
       </View>

           <View style={styles.flexview}> 
          <TouchableOpacity style={styles.num}
   onPress={() =>  this.props.navigation.navigate('mother6')} >
        <Text style={styles.txt}> حالتك الصحية </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
       onPress={() =>  this.props.navigation.navigate('check6')} >
        <Text style={styles.txt}> فحوصاتك</Text>
      </TouchableOpacity>
        </View>
   


        <View style={styles.flexview}>
        <TouchableOpacity
         onPress={() =>  this.props.navigation.navigate('pregnant2')} >
                   <Icon name="chevron-left" size={40} color="black"
                   style={{
                     width:50,
                     height:50,
                     marginTop:40,
                     alignItems:'flex-end',
                     marginRight:Dimensions.get('window').width-100,
                    }}
                    />
       </TouchableOpacity>
      </View>
      </ScrollView>
   
    </SafeAreaView>
  );
} 

}
//month6;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '74%', 
    borderWidth:1,
    borderColor: 'mediumvioletred',
    height: 50,
   backgroundColor: 'mediumvioletred',
    alignItems: 'center',
    justifyContent: 'center',
     marginTop:20,
     borderRadius:50
  },
  txt: {
   alignItems: 'center',
   color: 'white',
   fontSize: 18,
   fontFamily: 'Amiri-BoldItalic',
  },
});
