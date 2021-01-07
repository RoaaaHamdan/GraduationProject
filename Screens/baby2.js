import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby2 extends Component {
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
    render () {

        const {navigate} = this.props.navigation;
    return (

      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        <ScrollView >
         
        
        
        


        <View style={{display:this.state.display1 }}> 
          <View >
          <View >
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:12 ,
                    marginTop:15 ,
                  }}>The fetus in the second month </Text>
         <Image source={require('../assets/baby2.jpg')}
              style={{width:390, height:200, borderRadius:50, alignSelf:'center'}} />
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
            }}>Berry  </Text>

             <Text style={{ color: 'white',
              fontSize: 20,
          //    fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
             }}>3.9gram  </Text>

          <Text style={{ color: 'white',
              fontSize: 20,
           //  fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
            }}> 2.5cm</Text>
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
            }}>
- By the end of this month, the fetus will be slightly longer than the size of a finger and its shape clearly resembles a human.
           </Text>
             <Text style={{display:this.state.flag ,
                  color: 'white',
                  backgroundColor: 'pink',
                    fontSize: 23,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center', 
                 }}>
- Also, at the seventh week, it begins to move inside the womb without even realizing the mother.
               </Text>
              </View>
             </View>






             <View style={{display:this.state.display2 }}> 
          <View >
          <View >
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:12 ,
                    marginTop:15 ,
                  }}> الجنين في الشهر الثاني </Text>
         <Image source={require('../assets/baby2.jpg')}
              style={{width:390, height:200, borderRadius:50, alignSelf:'center'}} />
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

             <View style={styles.flexview}>
             <Text style={{ color: 'white',
              fontSize: 20,
           //   fontFamily: 'Grandstander-bold',
           fontWeight: 'bold',
            marginBottom:30, 
            }}>حبة توت  </Text>

             <Text style={{ color: 'white',
              fontSize: 20,
          //    fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
             }}>3.9غم </Text>

          <Text style={{ color: 'white',
              fontSize: 20,
           //  fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
            }}> 2.5سم</Text>
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
            }}>
   - بنهاية هذا الشهر يكون الجنين قد أصبح أطول بقليل من حجم الاصبع وأصبح شكله يشبه الانسان بشكل واضح.
                       </Text>
             <Text style={{display:this.state.flag ,
                  color: 'white',
                  backgroundColor: 'pink',
                    fontSize: 23,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center', 
                 }}>
- في الأسبوع السابع يبدأ بالحركة داخل الرحم دون أن تشعر الأم . 
               </Text>
              </View>
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
