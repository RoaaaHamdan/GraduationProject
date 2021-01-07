import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class baby1 extends Component {
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
// const baby1 =({navigate})=> {
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
                  }}>The fetus in the first month </Text>
         <Image source={require('../assets/baby1.jpeg')}
              style={{width:390, height:200, borderRadius:50, alignSelf:'center'}} />
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
              fontSize: 18,
           //   fontFamily: 'Grandstander-bold',
           fontWeight: 'bold',
            marginBottom:30, 
            }}>Nigella</Text>

             <Text style={{ color: 'white',
              fontSize: 20,
          //    fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
             }}>1gram</Text>

          <Text style={{ color: 'white',
              fontSize: 20,
           //  fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
            }}>0.5cm</Text>
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
 - After the first two weeks, the heart, digestive and sensory systems begin to form.   
           </Text>
             <Text style={{display:this.state.flag ,
                  color: 'white',
                  backgroundColor: 'pink',
                    fontSize: 23,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center', 
                 }}>
- At the end of the first month, the fetus will be approximately the size of a black seed(nigella).
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
                  }}>الجنين في الشهر الاول </Text>
         <Image source={require('../assets/baby1.jpeg')}
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
            }}>حبة البركة  </Text>

             <Text style={{ color: 'white',
              fontSize: 20,
          //    fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
             }}>1غم </Text>

          <Text style={{ color: 'white',
              fontSize: 20,
           //  fontFamily: 'Amiri-BoldItalic',
            fontWeight: 'bold',
            }}> 0.5سم</Text>
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
   - بعد الأسبوعين الأوليين يبدأ القلب في التكوين والجهاز الهضمي والأجهزة الحسية
                       </Text>
             <Text style={{display:this.state.flag ,
                  color: 'white',
                  backgroundColor: 'pink',
                    fontSize: 23,
                    fontFamily: 'Itim-Regular',
                    textAlign: 'center', 
                 }}>
- في نهاية الشهر الأول يكون الجنين قد أصبح حجمه تقريبا بحجم حبة البركة(السوداء) 
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
 //   textAlign: 'center', 
   color: 'mediumvioletred',
   fontSize: 25,
   fontFamily: 'Lalezar-Regular',
   marginTop:25,
   alignSelf:'center'
  },
  txt1: {
  textAlign: 'center', 
   color: 'white',
   fontSize: 27,
   fontFamily: 'Grandstander-bold',
  },
});
