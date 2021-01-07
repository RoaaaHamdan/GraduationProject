import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby8 extends Component {
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
    <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
      <ScrollView 
      
      style={{
        display:this.state.display1
      }}
      >
        
        <View style={styles.flexview}>
        <View>
        <Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:12 ,
                  marginTop:15 ,
                }}>The fetus in the eighth month </Text>
       <Image source={require('../assets/baby8.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview}> 
             <Text style={styles.txt}>    Size</Text>
             <View style={styles.flexview}>
         <TouchableOpacity style={{ 
          width: '7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }} >
      </TouchableOpacity>
      </View>
           
           <Text style={styles.txt}>Weight</Text>
          <View style={styles.flexview}>
         <TouchableOpacity style={{ width:'7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }}  >
      </TouchableOpacity>
      </View>

           <Text style={styles.txt}>Length      </Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>Pineapple    </Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>2 kg     </Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 40 cm</Text>
      </View>

            <View >
            <TouchableOpacity 
         style={styles.num}
           onPress={() => {
              if (this.state.flag == 'none'){
                this.setState({flag:'flex'})
             //    stFlag('flex');
                 }
             else{ 
              this.setState({flag:'none'})
             
             };
              }}>
         <Text style={styles.txt1}>Fetal health↴</Text>
         </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
        backgroundColor: 'pink',
          fontSize: 23,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         // display:this.state.display1
          }}>
- The sense of hearing becomes more developed, so that the fetus will be able to distinguish sounds if it hears it repeatedly for a long enough time.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
- Most of the internal organs are fully developed except for the lungs, and the fetus continues to mature and develop the body's fat reserves.
             </Text>
            </View>
      
     </ScrollView>
   
   
     <ScrollView 
      
      style={{
        display:this.state.display2
      }}
      >
        
        <View style={styles.flexview}>
        <View>
        <Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:12 ,
                  marginTop:15 ,
                }}>الجنين في الشهر الثامن </Text>
       <Image source={require('../assets/baby8.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview}> 
             <Text style={styles.txt}>الحجم</Text>
             <View style={styles.flexview}>
         <TouchableOpacity style={{ 
          width: '7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }} >
      </TouchableOpacity>
      </View>
           
           <Text style={styles.txt}>الوزن</Text>
          <View style={styles.flexview}>
         <TouchableOpacity style={{ width:'7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }}  >
      </TouchableOpacity>
      </View>

           <Text style={styles.txt}>الطول</Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>Pineapple    </Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>2 كغم</Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 40سم</Text>
      </View>

            <View >
            <TouchableOpacity 
         style={styles.num}
           onPress={() => {
              if (this.state.flag == 'none'){
                this.setState({flag:'flex'})
             //    stFlag('flex');
                 }
             else{ 
              this.setState({flag:'none'})
             
             };
              }}>
         <Text style={styles.txt1}>صحة الجنين↴</Text>
         </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
        backgroundColor: 'pink',
          fontSize: 23,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         // display:this.state.display1
          }}>

- تزداد حاسة السمع تطوراً بحيث يتمكن الجنين من تمييز الأصوات إذا سمعها بشكل متكرر ولفترة طويلة.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
               - معظم الأعضاء الداخلية متطورة بشكل كامل ماعدا الرئتين ، ويستمر الجنين في النضوج ويطور مخزون الدهون في الجسم.
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
     marginBottom:20,
     borderRadius:20
  },

  txt: {
    textAlign: 'center', 
   color: 'mediumvioletred',
   fontSize: 25,
   fontFamily: 'Lalezar-Regular',
   marginTop:25,
  },

  txt1: {
  textAlign: 'center', 
   color: 'white',
   fontSize: 27,
   fontFamily: 'Grandstander-bold',
  },
});
//export default baby8;