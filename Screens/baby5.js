import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  baby5 extends Component {
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
                      marginTop:15 ,display:this.state.display1
                    }}>The fetus in the fifth month </Text>
                           <Text style={{ textAlign: 'center',
                      fontSize: 28,
                      fontFamily: 'Amiri-BoldItalic',
                      marginBottom:12 ,
                      marginTop:15 ,display:this.state.display2
                    }}> صحة الجنين في الشهر الخامس </Text>
           <Image source={require('../assets/baby5.jpeg')}
                style={{width:390, height:200, borderRadius:50}} />
                </View>
                </View>
  
 
 
 
                <View style={styles.flexview}> 
               <Text style={styles.txt}>  الحجم </Text>
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

             <Text style={styles.txt}>الطول     </Text>
          </View>

 
 
                <View style={styles.flexview
                ,{
                  display:this.state.display1
                }
                }> 
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
         
         
 
               <View style={styles.flexview,
               {
                 display:this.state.display1
               }}>
               <Text style={{ color: 'white',
                fontSize: 20,
             //   fontFamily: 'Grandstander-bold',
             fontWeight: 'bold',
              marginBottom:30, 
              }}>Corn  </Text>
  
               <Text style={{ color: 'white',
                fontSize: 20,
            //    fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
               }}>300gram  </Text>
  
            <Text style={{ color: 'white',
                fontSize: 20,
             //  fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
              }}> 20cm</Text>
          </View>
  

          <View style={styles.flexview,
               {
                 display:this.state.display2, flexDirection: 'row',
    justifyContent: 'space-around',
               }}>
               <Text style={{ color: 'white',
                fontSize: 20,
             //   fontFamily: 'Grandstander-bold',
             fontWeight: 'bold',
              marginBottom:30, 
              }}>ذرة  </Text>
  
               <Text style={{ color: 'white',
                fontSize: 20,
            //    fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
               }}>300غم  </Text>
  
            <Text style={{ color: 'white',
                fontSize: 20,
             //  fontFamily: 'Amiri-BoldItalic',
              fontWeight: 'bold',
              }}> 20سم</Text>
          </View>
  
                <View
                
                style={{
                  display:this.state.display1
                }}
                 >
                <TouchableOpacity 
             style={styles.num}
             onPress={() => {
              if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
             else{ this.setState({flag:'none'}); };
              }}>
             <Text style={styles.txt1,{
               display:this.state.display1, textAlign: 'center', 
   color: 'white',
   fontSize: 27,
   fontFamily: 'Grandstander-bold',
             }}>Fetal health↴</Text>
       
             </TouchableOpacity>
  
            <Text style={{display:this.state.flag , 
             color: 'white',
            backgroundColor: 'pink',
              fontSize: 23,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:10,
              }}>
  - This month, the mother feels the movements of her fetus, as a result of the movement of the fetus to train its muscles, which have begun to grow.
               </Text>
               <Text style={{display:this.state.flag ,
                    color: 'white',
                    backgroundColor: 'pink',
                      fontSize: 23,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center', 
                   }}>
  - Hair begins at this stage to grow on the head of the fetus, and the shoulders, back and temples of the fetus are covered by a thin, fine hair called the fuzz. This hair helps protect the fetus, and it usually goes away at the end of the first week after birth.
                 </Text>
                </View>
          

                <View
                
                style={{
                  display:this.state.display2
                }}
                 >
                <TouchableOpacity 
             style={styles.num}
             onPress={() => {
              if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
             else{ this.setState({flag:'none'}); };
              }}>
             <Text style={styles.txt1,{
               display:this.state.display2, textAlign: 'center', 
   color: 'white',
   fontSize: 27,
   fontFamily: 'Grandstander-bold',
             }}>صحة الجنين↴</Text>
       
             </TouchableOpacity>
  
            <Text style={{display:this.state.flag , 
             color: 'white',
            backgroundColor: 'pink',
              fontSize: 23,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:10,
              }}>

- هذا الشهر ، تشعر الأم بحركات جنينها ، نتيجة حركة الجنين لتدريب عضلاته التي بدأت في النمو.
               </Text>
               <Text style={{display:this.state.flag ,
                    color: 'white',
                    backgroundColor: 'pink',
                      fontSize: 23,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center', 
                   }}>

- يبدأ الشعر في هذه المرحلة بالنمو على رأس الجنين ، ويتم تغطية كتفي وظهر الجنين وصدغه بشعر رقيق وناعم يسمى الزغب. يساعد هذا الشعر في حماية الجنين ، وعادة ما يزول في نهاية الأسبوع الأول بعد الولادة.

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
// baby5;