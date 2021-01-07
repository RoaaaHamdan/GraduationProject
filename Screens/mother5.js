import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class mother5 extends Component  {
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
                }}> Your health in the fifth month </Text>

<Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:10 ,
                  marginTop:10 ,
                  display:this.state.display2
                }}> صحتك في الشهر الخامس </Text>
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
- In this month, you will get rid of the feeling of nausea and fatigue that you experienced in the first trimester.
        </Text>
           <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>
- You will notice slight swelling in the face, feet and hands, as a result of water retention.
        </Text>

        <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>
- Back pain can affect you, as it affects half of pregnant women, and it may start at any time of pregnancy, but it is often between the fifth and seventh months.
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
-Eat foods rich in iron, to avoid anemia.
       </Text>

        <Text style={{display:this.state.flag1 , 
         color: 'white',
        fontSize: 22,
        fontFamily: 'Itim-Regular',
        textAlign: 'center',
        marginBottom:10,
       }}>
- Wear loose fitting clothes and stay away from tight clothes, especially in the stomach area.
      </Text>
            
      <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>
- Drink the equivalent of two liters of water a day, and eat light meals every two or three hours a day.
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
       <Text style={styles.txt}>  صحتك↴</Text>
          </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
          fontSize: 22,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
       }}>


- في هذا الشهر ، سوف تتخلصين من الشعور بالغثيان والتعب الذي عانيت منه في الأشهر الثلاثة الأولى.
        </Text>
           <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>
- ستلاحظ انتفاخ طفيف في الوجه والقدمين واليدين نتيجة احتباس الماء.

        </Text>

        <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>

- يمكن أن تؤثر آلام الظهر عليك ، حيث أنها تصيب نصف النساء الحوامل ، وقد تبدأ في أي وقت من الحمل ، ولكنها غالبًا ما تكون بين الشهر الخامس والسابع.
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
        <Text style={styles.txt}> نصائح و تحذيرات↴ </Text>
        </TouchableOpacity>

        <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>

- تناولي الأطعمة الغنية بالحديد ، لتفادي فقر الدم.
       </Text>

        <Text style={{display:this.state.flag1 , 
         color: 'white',
        fontSize: 22,
        fontFamily: 'Itim-Regular',
        textAlign: 'center',
        marginBottom:10,
       }}>

- ارتداء الملابس الفضفاضة والابتعاد عن الملابس الضيقة خاصة في منطقة البطن.
      </Text>



            
      <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>

- اشرب ما يعادل لترين من الماء يوميًا ، وتناول وجبات خفيفة كل ساعتين أو ثلاث ساعات يوميًا.

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
// mother5;