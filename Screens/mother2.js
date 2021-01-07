import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  mother2 extends Component {

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
                      }}> Your health in the second month </Text>
                        <Text style={{ textAlign: 'center',
                        fontSize: 28,
                        fontFamily: 'Amiri-BoldItalic',
                        marginBottom:10 ,
                        marginTop:10 ,
                        display:this.state.display2
                      }}> صحتك في الشهر الثاني </Text>
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
            }}>
             <Text style={styles.txt}>Your health↴</Text>
                </TouchableOpacity>
    
              <Text style={{display:this.state.flag , 
               color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
             }}>
    - Because of changes in hormones and because of the beginning of the formation of the fetus, you begin to feel very tired and most symptoms associated with the first stage of pregnancy, which continue until the beginning of the fourth month.
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
            this.setState({flag:'none'})
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
    - It is necessary to diversify and regularize meals.
             </Text>
    
              <Text style={{display:this.state.flag1 , 
               color: 'white',
              fontSize: 22,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:10,
             }}>
     -The risk of miscarriage is very likely if you are carrying something heavy, smoking or traumatic during pregnancy.
            </Text>
                  
            <Text style={{display:this.state.flag1 ,
                      color: 'white',
                      fontSize: 22,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center',
                      marginBottom:10,
                     }}>
    - Completely avoiding exposure to any source of radiation and pollutants that lead to malformations in the fetus, God forbid.
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
            }}>
             <Text style={styles.txt}> صحتك↴</Text>
                </TouchableOpacity>
    
              <Text style={{display:this.state.flag , 
               color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
             }}>

- بسبب التغيرات في الهرمونات وبسبب بداية تكوين الجنين ، تبدأ في الشعور بالتعب الشديد ومعظم الأعراض المصاحبة للمرحلة الأولى من الحمل والتي تستمر حتى بداية الشهر الرابع.

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
            }}>
              <Text style={styles.txt}>  نصائح وتحذيرات↴ </Text>
              </TouchableOpacity>
    
              <Text style={{display:this.state.flag1 ,
                      color: 'white',
                      fontSize: 22,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center',
                      marginBottom:10,
                     }}>

- ضرورة تنويع وتنظيم الوجبات.
             </Text>
    
              <Text style={{display:this.state.flag1 , 
               color: 'white',
              fontSize: 22,
              fontFamily: 'Itim-Regular',
              textAlign: 'center',
              marginBottom:10,
             }}>

- من المحتمل جدًا حدوث الإجهاض إذا كنت تحمل شيئًا ثقيلًا أو تدخن أو يسبب صدمة أثناء الحمل.
            </Text>
                  
            <Text style={{display:this.state.flag1 ,
                      color: 'white',
                      fontSize: 22,
                      fontFamily: 'Itim-Regular',
                      textAlign: 'center',
                      marginBottom:10,
                     }}>


- الابتعاد التام عن التعرض لأي مصدر إشعاعي وملوثات تؤدي إلى تشوهات في الجنين لا قدر الله.
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
//mother2;