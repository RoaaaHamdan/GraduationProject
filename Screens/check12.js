import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class check12 extends Component {
 constructor(props){
   super(props);
   
   this.state = {
    flagEn: global.flag ,
    flagAr: global.flag ,
    flag: 'none',
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
          
            <View style={styles.flexview,{display:this.state.display1}}>
            <View style={{ width:'100%',
          height:80,
          backgroundColor:'grey',
          marginBottom:220,
          alignSelf:'center'
        }}>
            <Text style={{ textAlign: 'center',
                      fontSize: 28,
                      fontFamily: 'Amiri-BoldItalic',
                      marginBottom:10 ,
                    }}> What is TORCH test? </Text>
           <Image source={require('../assets/c12.jpg')}
           style={{width:400, height:200, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
                </View>
                </View>
  
              <ScrollView style={{
                display:this.state.display1
              }} >
               <View>
                <TouchableOpacity style={styles.num}
             onPress={() => {
               
              if (this.state.flag == 'none'){this.setState({flag:'flex'}); }
             else{this.setState({flag:'none'}) };
              }}>
           <Text style={styles.txt}>TORCH test↴</Text>
              </TouchableOpacity>
  
            <Text style={{display:this.state.flag , 
             color: 'grey',
              fontSize: 20,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:5,
           }}>
  Antibodies to some factors that cause infection to the fetus are examined in the womb.
            </Text>
             </View>
             
            <View >
            <TouchableOpacity 
             style={styles.num}
             onPress={() => {
              if (this.state.flag1 == 'none'){this.setState({flag1:'flex'}); }
             else{this.setState({flag1:'none'}) };
              }}>
            <Text style={styles.txt}>Aggressive agents↴ </Text>
            </TouchableOpacity>
  
            <Text style={{display:this.state.flag1 , 
             color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
           }}>
  There are four main antagonistic factors that may lead to an infection in a fetus:
         </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>
  - Toxoplasmosis
           </Text>
                
          <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>
  - Rubella
            </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>
  - Cytomegalovirus
            </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>
  - Herpes virus
            </Text>
                </View>
         </ScrollView>
      
      



        
         <View style={styles.flexview,{display:this.state.display2}}>
            <View style={{ width:'100%',
          height:80,
          backgroundColor:'grey',
          marginBottom:220,
          alignSelf:'center'
        }}>
            <Text style={{ textAlign: 'center',
                      fontSize: 28,
                      fontFamily: 'Amiri-BoldItalic',
                      marginBottom:10 ,
                    }}>   ما هو اختبار TORCH؟ </Text>
           <Image source={require('../assets/c12.jpg')}
           style={{width:400, height:200, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
                </View>
                </View>
  
              <ScrollView style={{
                display:this.state.display2
              }} >
               <View>
                <TouchableOpacity style={styles.num}
             onPress={() => {
               
              if (this.state.flag == 'none'){this.setState({flag:'flex'}); }
             else{this.setState({flag:'none'}) };
              }}>
           <Text style={styles.txt}>اختبار TORCH↴</Text>
              </TouchableOpacity>
  
            <Text style={{display:this.state.flag , 
             color: 'grey',
              fontSize: 20,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:5,
           }}>


يتم فحص الأجسام المضادة لبعض العوامل التي تسبب العدوى للجنين في الرحم.

            </Text>
             </View>
             
            <View >
            <TouchableOpacity 
             style={styles.num}
             onPress={() => {
              if (this.state.flag1 == 'none'){this.setState({flag1:'flex'}); }
             else{this.setState({flag1:'none'}) };
              }}>
            <Text style={styles.txt}> العوامل العدوانية↴ </Text>
            </TouchableOpacity>
  
            <Text style={{display:this.state.flag1 , 
             color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
           }}>

هناك أربعة عوامل معادية رئيسية قد تؤدي إلى إصابة الجنين:

         </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>


- داء المقوسات
           </Text>
                
          <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>
- الحصبة الألمانية


            </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>


- فيروس مضخم للخلايا

            </Text>
  
            <Text style={{display:this.state.flag1 ,
                    color: 'grey',
                    fontSize: 20,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center',
                    marginBottom:5,
                   }}>

- فيروس الهربس
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
   fontSize: 25,
   fontFamily: 'Grandstander-bold',
  },
});
// check12;