import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  mother4  extends Component{
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
                  }}> Your health in the forth month </Text>
                      <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                    display:this.state.display2
                  }}>  صحتك في الشهر الرابع</Text>
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
              this.setState({flag:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag:'none'})
           };
            }}
            >
         <Text style={styles.txt}>Your health↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>
This month you will start to feel the first movements of the fetus, a beautiful feeling, right?
          </Text>
             <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                 }}>
- You may feel pain at your sides, especially when moving suddenly, due to the expansion of the fibrous tissue that connects the uterus to the pelvic bones and back, in case the pain increases, consult a doctor.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){
              this.setState({flag1:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag1:'none'})
           };
            }}
            
            
            
            >
          <Text style={styles.txt}>Tips and warnings↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>
- Take vitamins for pregnancy such as iron, calcium and vitamin B6, which help improve anemia.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- It is good to do some simple sports such as yoga, swimming, and walking, because this improves the psychological and physical state of you, but avoid strenuous sports.
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
              this.setState({flag:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag:'none'})
           };
            }}
            >
         <Text style={styles.txt}> صحتك↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>

هذا الشهر ستبدئين في الشعور بأول حركات للجنين ، شعور جميل ، أليس كذلك؟


          </Text>
             <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                 }}>

- قد تشعرين بألم في جانبيك ، خاصة عند التحرك بشكل مفاجئ ، بسبب تمدد النسيج الليفي الذي يربط الرحم بعظام الحوض والظهر ، وفي حالة زيادة الألم ، يجب استشارة الطبيب.

          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){
              this.setState({flag1:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag1:'none'})
           };
            }}
            
            
            
            >
          <Text style={styles.txt}>نصائح و تحذيرات↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>


- تناولي فيتامينات للحمل مثل الحديد والكالسيوم وفيتامين ب 6 التي تساعد في تحسين فقر الدم.
        </Text>




          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
       - من الجيد القيام ببعض الرياضات البسيطة مثل اليوجا والسباحة والمشي ، لأن هذا يحسن حالتك النفسية والجسدية ، لكن تجنب الرياضات الشاقة.
       
       
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
// mother4;