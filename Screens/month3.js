import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class month3 extends Component {
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
    
    }
    } 
    
    
    render(){


      return (
        <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
          <ScrollView>
            <View style={styles.flexview}>
            <View>
           <Image source={require('../assets/month3.jpg')}
  style={{width:400, height:220, borderRadius:30, marginTop:20 }} />
                      
        <Text style={{ textAlign: 'center',
                      fontSize: 30,
                      marginTop:20,
                      fontFamily: 'Itim-Regular',
                      display:this.state.display1
                    }}>Third Month </Text>
                           <Text style={{ textAlign: 'center',
                      fontSize: 30,
                      marginTop:20,
                      fontFamily: 'Itim-Regular',
                      display:this.state.display2
                    }}>الشهر الثالث </Text>
                </View>
                </View>
  
                <View style={styles.flexview
                }> 
          <TouchableOpacity style={styles.num}
       onPress={() =>  this.props.navigation.navigate('baby3')} >
             <Text style={styles.txt,{
               display:this.state.display1,      alignItems: 'center',
   color: 'white',
   fontSize: 18,
   fontFamily: 'Amiri-BoldItalic',
             }}> Your fetus</Text>
                 <Text style={styles.txt,{
               display:this.state.display2,
               alignItems: 'center',
   color: 'white',
   fontSize: 23,
   fontFamily: 'Amiri-BoldItalic',
             }}> جنينك</Text>
          </TouchableOpacity>       
           </View>
  
               <View style={styles.flexview}> 
              <TouchableOpacity style={styles.num}
       onPress={() =>  this.props.navigation.navigate('mother3')} >
            <Text style={styles.txt,{
              display:this.state.display1,     alignItems: 'center',
   color: 'white',
   fontSize: 18,
   fontFamily: 'Amiri-BoldItalic',
            }}> Your health care </Text>

<Text style={styles.txt,{
              display:this.state.display2,   alignItems: 'center',
   color: 'white',
   fontSize: 23,
   fontFamily: 'Amiri-BoldItalic',
            }}> حالتك الصحية </Text>
          </TouchableOpacity>
          </View>
  
          <View style={styles.flexview}>
            <TouchableOpacity style={styles.num}
           onPress={() =>  this.props.navigation.navigate('check3')} >
            <Text style={styles.txt,{
              display:this.state.display1,      alignItems: 'center',
   color: 'white',
   fontSize: 18,
   fontFamily: 'Amiri-BoldItalic',
            }}> Your checks</Text>
                <Text style={styles.txt,{
              display:this.state.display2,   alignItems: 'center',
   color: 'white',
   fontSize: 23,
   fontFamily: 'Amiri-BoldItalic',
            }}>فحوصاتك</Text>
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
// month3;

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
