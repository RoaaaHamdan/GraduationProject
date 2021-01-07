import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  mother9  extends Component {
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
                  }}> Your health in the ninth month </Text>
                     <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                    display:this.state.display2
                  }}>  صحتك في الشهر التاسع </Text>
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
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
- You may have hyperactivity and energy, and this happens to many pregnant women.
          </Text>
            
          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
- You will feel cramps in your womb, which are called false alarm or Braxton Hicks.
          </Text>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
- The uterine cavity increases to the top until it reaches its maximum, which leads to the occurrence of some simple symptoms such as shortness of breath and some pressure. Do not fear it is very normal.
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
          fontSize: 20,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:5,
         }}>
- Get plenty of sleep and avoid staying up late.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>
- Do exercises that help the birth pass safely, such as: Kegel exercises.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>
- Take care of your psychological state, get away from excitement, tension and anxiety, and try to relax as much as possible.
          </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>
- Walk daily, as it improves blood circulation, reduces the feeling of bloating, constipation, and heartburn, and facilitates childbirth.
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
         <Text style={styles.txt}>صحتك ↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>

- قد يكون لديك فرط نشاط وطاقة ، وهذا يحدث لكثير من النساء الحوامل.
          </Text>


            
          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>

- ستشعرين بتشنجات في رحمك تسمى إنذار كاذب أو براكستون هيكس Braxton Hicks.
          </Text>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>

- يزداد تجويف الرحم إلى الأعلى حتى يصل إلى أقصى حد له مما يؤدي إلى حدوث بعض الأعراض البسيطة مثل ضيق التنفس وبعض الضغط. لا تخف من الطبيعي جدا.
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
          <Text style={styles.txt}> نصائح و تحذيرات ↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 20,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:5,
         }}>
- احصل على قسط وافر من النوم وتجنب السهر.

        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>

- قومي بالتمارين التي تساعد على الولادة بأمان مثل: تمارين كيجل.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>


- اعتني بحالتك النفسية ، وابتعد عن الإثارة والتوتر والقلق ، وحاول الاسترخاء قدر الإمكان.
          </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:5,
                 }}>

- المشي يومياً ، لأنه يحسن الدورة الدموية ، ويقلل من الشعور بالانتفاخ ، والإمساك ، والحموضة المعوية ، ويسهل عملية الولادة.

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
// mother9;