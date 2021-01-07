import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default  class  mother3 extends Component{
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
                  }}> Your health in the third month </Text>
                       <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                    marginTop:10 ,
                    display:this.state.display2
                  }}>  صحتك في الشهر الثالث </Text>
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
- By the end of the third month, the previous annoying symptoms will end and you will have more energy, but other symptoms will appear, such as back pain or swelling.
          </Text>
             <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                 }}>
- The hormonal change can cause a feeling of "lack of air". If you feel like it, breathe deeply and try to calm yourself down. It's just a feeling that physically you're not really short of air.
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
- Stay away from wearing high-heeled shoes, and move towards comfortable sports.
        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Doing all tests to find out the amount of iron in the blood, hormones, and detect diseases or problems that may be transmitted to the child.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Pay attention to exercising, especially the pelvic floor Because this area is the most exposed to pressure.
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
         <Text style={styles.txt}>صحتك↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'white',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:10,
         }}>

- بنهاية الشهر الثالث ستنتهي الأعراض السابقة المزعجة وستكون لديك طاقة أكثر ولكن ستظهر أعراض أخرى مثل آلام الظهر أو التورم.
          </Text>



             <Text style={{display:this.state.flag ,
                 color: 'white',
                   fontSize: 22,
                   fontFamily: 'Itim-Regular',
                   textAlign: 'center',
                   marginBottom:10,
                 }}>


- يمكن أن يسبب التغيير الهرموني الشعور "بنقص الهواء". إذا شعرت برغبة في ذلك ، تنفس بعمق وحاول تهدئة نفسك. إنه مجرد شعور جسديًا أنك لست تعاني من نقص في الهواء.

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
          <Text style={styles.txt}>نصائح و تحذيرات ↴ </Text>
          </TouchableOpacity>

          <Text style={{display:this.state.flag1 , 
           color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
         }}>



- الابتعاد عن ارتداء الأحذية ذات الكعب العالي ، والتوجه نحو الرياضات المريحة.

        </Text>

          <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>

- عمل كافة الفحوصات لمعرفة كمية الحديد في الدم والهرمونات والكشف عن الأمراض أو المشاكل التي قد تنتقل للطفل.

         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>

- الاهتمام بممارسة الرياضة وخاصة قاع الحوض لأن هذه المنطقة هي الأكثر تعرضًا للضغط.

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
//mother3;