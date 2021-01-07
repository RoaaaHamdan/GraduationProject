import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class check11 extends Component{
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
    
    }}
  render(){
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        
          <View style={styles.flexview,{
            display:this.state.display1
          }
          
          }>
          <View style={{ width:'100%',
        height:90,
        backgroundColor:'grey',
        marginBottom:230,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}> What is a pregnancy test? </Text>
         <Image source={require('../assets/c11.jpg')}
         style={{width:400, height:200, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
              </View>
              </View>

            <ScrollView
            style={{
              display:this.state.display1
            }}
             >
             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };;
            }}>
         <Text style={styles.txt}>Home pregnancy test↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
There are alot of tests to find out if you are pregnant or not.
             One of these simple and cheap tests is a home pregnancy test.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){ this.setState({flag1:'flex'});}
               else{ this.setState({flag1:'none'}); };
            }}>
          <Text style={styles.txt}>after test↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'left',
          marginBottom:5,
         }}>
There are two results of the test:        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Negative: not pregnant.
But if you still have major doubts, wait two days and perform the test again, as more time passes after fertilization (if it has happened) to increase the accuracy of the test result.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Positive: pregnant. so you should go to a doctor to have a blood test to detect pregnancy and to receive advice about your pregnancy .. Congratulations
          </Text>
              </View>
       </ScrollView>
     
     


        
       <View style={styles.flexview,{
            display:this.state.display2
          }
          
          }>
          <View style={{ width:'100%',
        height:90,
        backgroundColor:'grey',
        marginBottom:230,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}> ما هو اختبار الحمل؟</Text>
         <Image source={require('../assets/c11.jpg')}
         style={{width:400, height:200, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
              </View>
              </View>

            <ScrollView
            style={{
              display:this.state.display2
            }}
             >
             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
               else{ this.setState({flag:'none'}); };;
            }}>
         <Text style={styles.txt}>اختبار الحمل المنزلي↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
هناك الكثير من الاختبارات لمعرفة ما إذا كنت حاملاً أم لا.
             أحد هذه الاختبارات البسيطة والرخيصة هو اختبار الحمل المنزلي.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){ this.setState({flag1:'flex'});}
               else{ this.setState({flag1:'none'}); };
            }}>
          <Text style={styles.txt}>بعد الاختبار↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'left',
          marginBottom:5,
         }}>
هناك نتيجتان للاختبار:      </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- سلبي: غير حامل.
ولكن إذا كانت لا تزال لديك شكوك كبيرة ، فانتظر يومين وقم بإجراء الاختبار مرة أخرى ، حيث يمر المزيد من الوقت بعد الإخصاب (إذا حدث ذلك) لزيادة دقة نتيجة الاختبار.     
        
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- إيجابي: حامل. لذلك يجب عليك الذهاب إلى الطبيب لإجراء فحص الدم لكشف الحمل والحصول على المشورة بشأن حملك .. مبروك          </Text>
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
// check11;