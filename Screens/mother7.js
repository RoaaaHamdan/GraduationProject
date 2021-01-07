import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default  class mother7  extends Component {
  
  
  constructor(props){
    super(props);
    this.state={
      flag:'none',
      flag1:'none',
      display1:'flex',
      display2:'none'
    }
  }
  componentDidMount =()=>{
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }
    else if(global.flagA=='Eng'){
      this.setState({display2:'none',display1:'flex'})
    
     // global.display1='flex';
      //global.display1='none';
    
    }
      }
  
  render(){

    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        
          <View style={styles.flexview}>
          <View>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                  }}> Your health in the seventh month </Text>
         <Image source={require('../assets/pree.jpg')}
         style={{width:390, height:200, borderRadius:20,  marginBottom:20}}/>
              </View>
              </View>

            <ScrollView >
             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (this.state.flag == 'none'){
              this.setState({flag:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag:'none'})
           };
            }}>
         <Text style={styles.txt}>Your health↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>
= In this month, you will be calm and comfortable mentally and physically, and you will want to have children as soon as possible, this is very normal, because during this period you feel all the movements of your fetus.
          </Text>
            
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){
              this.setState({flag1:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag1:'none'})
           };
            }}>
          <Text style={styles.txt}>Tips and warnings↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>
- Avoid sitting in the sun for long periods of time, if you suffer from melasma.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Avoid carrying heavy things, and make sure to get enough rest throughout the day.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Avoid traveling long distances in the last trimester of pregnancy for fear of premature labor, and if you have to, you must stand and walk several steps every hour at least to stimulate blood circulation.
          </Text>
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
  num: {
    width: '100%', 
    borderWidth:1,
    borderColor: 'mediumvioletred',
    height: 50,
   backgroundColor: 'palevioletred',
    justifyContent: 'center',
    marginBottom:10,
    borderRadius:20,
    marginTop:15,
    },

  txt: {
  textAlign: 'center', 
   color: 'white',
   fontSize: 26,
   fontFamily: 'Grandstander-bold',
  },
});
// mother7;