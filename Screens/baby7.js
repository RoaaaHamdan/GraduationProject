import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby7 extends Component {
  constructor(props){
    super(props);
    this.state = {
    
      flag:'none' ,

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
                }}>The fetus in the seventh month </Text>
       <Image source={require('../assets/baby7.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview}> 
             <Text style={styles.txt}>Size</Text>
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

           <Text style={styles.txt}>Length</Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>Aubergine</Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>1 kg</Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 37 cm</Text>
      </View>

            <View >
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
- The fetus becomes more powerful in movement, and movement can sometimes be slightly painful, because as the fetus continues to grow, the space available for it to move will decrease.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
- The fetus’s brain and its taste buds have become sufficiently developed to notice the difference in flavors. It is also noticed this month that the fetus becomes able to hear and see, as the nervous system of the fetus grows greatly.
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
                }}> الجنين في الشهر السابع </Text>
       <Image source={require('../assets/baby7.jpg')}
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

           <Text style={styles.txt}>الطول</Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 20,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>باذنجان</Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>1 كغم     </Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 37 سم</Text>
      </View>

            <View >
            <TouchableOpacity 
         style={styles.num}
         onPress={() => {
                if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };
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
          }}>

- يصبح الجنين أكثر قوة في الحركة ، وقد تكون الحركة أحيانًا مؤلمة قليلاً ، لأنه مع استمرار نمو الجنين ، تقل المساحة المتاحة له للحركة.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                backgroundColor: 'pink',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>


- تطور دماغ الجنين وبراعم التذوق بشكل كافٍ لملاحظة اختلاف النكهات. كما لوحظ هذا الشهر أن الجنين يصبح قادرًا على السمع والرؤية ، حيث ينمو الجهاز العصبي للجنين بشكل كبير.
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
// baby7;