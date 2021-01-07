import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default  class  mother8 extends Component {
 
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
                    display:this.state.display1
                  
                  }}> Your health in the eighth month </Text>
                   <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                    display:this.state.display2
                  
                  }}>  صحتك في الشهر الثامن  </Text>
         <Image source={require('../assets/pree.jpg')}
         style={{width:390, height:200, borderRadius:20,  marginBottom:20}}/>
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
            if (this.state.flag == 'none'){
              this.setState({flag:'flex'});
           //   stFlag1('flex'); 
              }
           else{
            this.setState({flag:'none'});

          //   stFlag1('none');
              };
            }}
            
            
            >
         <Text style={styles.txt}>Your health↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>
- At this stage of pregnancy, the fetus’s head is turned downward in preparation for exit, which makes the uterine cavity up. Do not be afraid, the symptoms are minor.
          </Text>
            
          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>
- Because the expanding uterus pushes your lungs, stomach and diaphragm, causing shortness of breath and trips to the toilet. Do not worry, because your baby is very happy inside your womb, nourished with nutrients and oxygen.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){
              this.setState({flag1:'flex'});
           //   stFlag1('flex'); 
              }
           else{
            this.setState({flag1:'none'});

          //   stFlag1('none');
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
- Drink plenty of water and more foods rich in fiber, to avoid chronic constipation.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- See a doctor every two weeks to prepare for childbirth, monitor weight, blood pressure and swelling of the feet.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Make sure to gently massage your abdomen and not rub it with your nails, so that cracks do not appear after childbirth.
          </Text>
              </View>
       </ScrollView>
     
     
     
       <ScrollView 
            style={{
              display:this.state.display2
            }}
            >
             <View>
              <TouchableOpacity style={styles.num}
             onPress={() => {
            if (this.state.flag == 'none'){
              this.setState({flag:'flex'});
           //   stFlag1('flex'); 
              }
           else{
            this.setState({flag:'none'});

          //   stFlag1('none');
              };
            }}
            
            
            >
         <Text style={styles.txt}> صحتك ↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>

- في هذه المرحلة من الحمل ، ينقلب رأس الجنين إلى أسفل استعدادًا للخروج مما يؤدي إلى رفع تجويف الرحم. لا تخافوا ، الأعراض طفيفة.
          </Text>
            
          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>

- لأن الرحم المتسع يدفع رئتيك ومعدتك وحجابك الحاجز ، مما يسبب ضيق التنفس والرحلات إلى المرحاض. لا تقلقي ، لأن طفلك سعيد للغاية داخل رحمك ، ويتغذى بالمغذيات والأكسجين.

          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){
              this.setState({flag1:'flex'});
           //   stFlag1('flex'); 
              }
           else{
            this.setState({flag1:'none'});

          //   stFlag1('none');
              };
            }}>
          <Text style={styles.txt}> نصائح و تحذيرات ↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>

- شرب الكثير من الماء والأطعمة الغنية بالألياف ، لتفادي الإمساك المزمن.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
       
       - يجب مراجعة الطبيب كل أسبوعين للاستعداد للولادة ومراقبة الوزن وضغط الدم وتورم القدمين.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
         
         - احرصي على تدليك بطنك بلطف وعدم فركه بأظافرك حتى لا تظهر التشققات بعد الولادة.
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
//mother8;