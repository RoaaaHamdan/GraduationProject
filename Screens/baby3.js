import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby3  extends Component {

 constructor(props){
    super(props);
    this.state = {
    
      flag: 'none' ,

      display1:'flex',
      display2:'none'
    }
  }
  componentDidMount =()=>{
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }}

    render(){
      return (
        <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
          <ScrollView >
            
            <View style={styles.flexview}>
            <View>
            <Text style={{ textAlign: 'center',
                      fontSize: 28,
                      fontFamily: 'Amiri-BoldItalic',
                      marginBottom:12 ,
                      marginTop:15 ,
                      display:this.state.display1
                    }}>The fetus in the third month </Text>
                         <Text style={{ textAlign: 'center',
                      fontSize: 28,
                      fontFamily: 'Amiri-BoldItalic',
                      marginBottom:12 ,
                      marginTop:15 ,
                      display:this.state.display2
                    }}> الجنين في الشهر الثالث</Text>
           <Image source={require('../assets/baby3.jpg')}
                style={{width:390, height:200, borderRadius:50}} />
                </View>
                </View>
  
                <View style={styles.flexview
                ,{
                  display:this.state.display1,  flexDirection: 'row',
    justifyContent: 'space-around',
                }}> 
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
  
            <View style={styles.flexview
                ,{
                  display:this.state.display2,   flexDirection: 'row',
    justifyContent: 'space-around',
                }}> 
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
  
               <View style={styles.flexview,
               {
                display:this.state.display1,  flexDirection: 'row',
    justifyContent: 'space-around',
               }
               }>
               <Text style={{ color: 'white',
                fontSize: 20,
             //   fontFamily: 'Grandstander-bold',
             fontWeight: 'bold',
              marginBottom:30, 
              }}>   Lemon</Text>
  
               <Text style={{ color: 'white',
                fontSize: 20,
            //    fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
               }}>   21gram</Text>
  
            <Text style={{ color: 'white',
                fontSize: 20,
             //  fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
              }}> 5.5cm</Text>
          </View>
  

          <View style={
               {
                display:this.state.display2,   flexDirection: 'row',
    justifyContent: 'space-around',
               }
               }>
               <Text style={{ color: 'white',
                fontSize: 20,
             //   fontFamily: 'Grandstander-bold',
             fontWeight: 'bold',
              marginBottom:30, 
              }}>ليمون</Text>
  
               <Text style={{ color: 'white',
                fontSize: 20,
            //    fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
               }}>21غم </Text>
  
            <Text style={{ color: 'white',
                fontSize: 20,
             //  fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
              }}> 5.5سم</Text>
          </View>
  



                <View
                style={
                  {
                    display:this.state.display1
                  }
                }
                 >
                <TouchableOpacity 
             style={styles.num}
             onPress={() => {
                if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };
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
              }}>
   - The fetus continues to grow in the third month of pregnancy until it becomes consistent with the size of the head.
               </Text>
               <Text style={{display:this.state.flag ,
                    color: 'white',
                    backgroundColor: 'pink',
                      fontSize: 23,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center', 
                   }}>
   - All body systems have been formed and nerves and muscles begin to work, but the mother still does not feel its movement.
                 </Text>
                </View>
          

                <View
                style={
                  {
                    display:this.state.display2
                  }
                }
                 >
                <TouchableOpacity 
             style={styles.num}
             onPress={() => {
                if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };
                }}>
             <Text style={styles.txt1}> صحة الجنين↴</Text>
             </TouchableOpacity>
  
            <Text style={{display:this.state.flag , 
             color: 'white',
            backgroundColor: 'pink',
              fontSize: 23,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:10,
              }}>
- يستمر نمو الجنين في الشهر الثالث من الحمل حتى يتناسب مع حجم الرأس.


               </Text>
               <Text style={{display:this.state.flag ,
                    color: 'white',
                    backgroundColor: 'pink',
                      fontSize: 23,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center', 
                   }}>
- تم تشكيل جميع أجهزة الجسم وتبدأ الأعصاب والعضلات في العمل لكن الأم ما زالت لا تشعر بحركتها.

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
// baby3;