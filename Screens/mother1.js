import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class mother1 extends Component {
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
        
          
          <View style={styles.flexview,{display:this.state.display1}}>
          <View>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                  }}> Your health in the first month </Text>
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
         <Text style={styles.txt
       
         }>Your health↴</Text>
      
            </TouchableOpacity>

          <Text style={{
            display:this.state.flag , 
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         //   display:this.state.display1
         }}>
- At the end of the month, you will feel fullness in your lower abdomen, but your weight will not change.
          </Text>



             <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                  // display:this.state.display1
                 }}>
- Your mental state in this month will be unstable. You will feel anxious, intense tension and impulsivity at times, sadness and crying without reason at other times.
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
- Completely stop taking any medications except with the doctor's permission.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Immediately stop smoking and hookah.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- In the event of any bleeding in the uterus, a doctor should be consulted immediately.
          </Text>
              </View>
       </ScrollView>
    
    
    
















       
       <View style={styles.flexview,{
         display:this.state.display2
       }}>
          <View>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                  }}>   صحتك في الشهر الأول </Text>
         <Image source={require('../assets/pree.jpg')}
         style={{width:390, height:200, borderRadius:20,  marginBottom:20}}/>
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
            if (this.state.flag == 'none'){
              this.setState({flag:'flex'})
            //  stFlag('flex');
               }
           else{
            this.setState({flag:'none'})
           };
            }}>
    
             <Text style={styles.txt   
         }>صحتك↴</Text>
            </TouchableOpacity>



          <Text style={{
           display:this.state.flag ,
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
          //  display:this.state.display2&&, 
         }}>
- في نهاية الشهر ستشعرين بالامتلاء في أسفل بطنك لكن وزنك لن يتغير.          </Text>
         
          <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                 //  display:this.state.display2&&this.state.flag 
                 }}>
- ستكون حالتك العقلية في هذا الشهر غير مستقرة. ستشعر أحيانًا بالقلق والتوتر الشديد والاندفاع ، والحزن والبكاء دون سبب في أوقات أخرى.     
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
          <Text style={styles.txt}>  نصائح وتحذيرات↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>

- التوقف نهائياً عن تناول أي أدوية إلا بإذن الطبيب.
        </Text>




          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>

- التوقف عن التدخين والشيشة على الفور.
         </Text>


              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>


- في حالة حدوث أي نزيف بالرحم يجب استشارة الطبيب على الفور.     
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
// mother1;