import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby6 extends Component {
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
                }}>The fetus in the sixth month </Text>
                    <Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:12 ,
                  marginTop:15 ,
                  display:this.state.display2
                }}>الجنين في الشهر السادس </Text>
       <Image source={require('../assets/baby6.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview,
            {display:this.state.display1,    flexDirection: 'row',
    justifyContent: 'space-around',}
            
            }> 
             <Text style={styles.txt}>Size</Text>
             <View style={styles.flexview

             
             ,{
               display:this.state.display1,    flexDirection: 'row',
    justifyContent: 'space-around',
             }}>
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

           <Text style={styles.txt}>Length</Text>
        </View>





        <View style={styles.flexview
        
        ,{
          display:this.state.display2,    flexDirection: 'row',
    justifyContent: 'space-around',
        }}> 
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












           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          display:this.state.display1
          }}>  Papaya</Text>
            <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          display:this.state.display2
          }}>بابايا  </Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          display:this.state.display1
           }}>          800gram</Text>
            <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          display:this.state.display2
           }}>800غم </Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          display:this.state.display1
          }}> 30cm</Text>
               <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          display:this.state.display2
          }}> 30سم</Text>
      </View>

            <View 
            style={{
              display:this.state.display1
            }}>
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
- The fetus begins to respond to external stimuli from the womb, such as sounds, and this is expressed through kicks and movements.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
- It also increases its activity and strength, and the movements in this month are very perceptible and more powerful.
             </Text>
            </View>
      

            <View 
            style={{
              display:this.state.display2
            }}>
            <TouchableOpacity 
         style={styles.num}
         onPress={() => {
                if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };
                }}>
         <Text style={styles.txt1}>صحة الجنين</Text>
         </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
        backgroundColor: 'pink',
          fontSize: 23,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
          }}>
- يبدأ الجنين في الاستجابة للمنبهات الخارجية من الرحم مثل الأصوات ، ويتم التعبير عن ذلك من خلال الركلات والحركات.

           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
               - كما أنها تزيد من نشاطها وقوتها ، وتكون الحركات في هذا الشهر محسوسة للغاية وأكثر قوة.
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
//baby6;