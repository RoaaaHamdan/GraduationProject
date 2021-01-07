import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  mother6 extends Component {
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
                }}> Your health in the sixth month </Text>


<Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:10 ,
                  marginTop:10 ,
                  display:this.state.display2

                }}> صحتك في الشهر السادس </Text>
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
- You start to feel more and more muscle cramps in the legs and sometimes the arms, and the reason is the lack of calcium.
        </Text>
           <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>
- The closer to the third trimester, the faster you gain weight, because all the hormonal changes that happen to you have an effect on your weight.
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
- Try to raise your feet while sitting to avoid developing varicose veins.
      </Text>

        <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>
- Your eyes may become sensitive to light, and you may feel dry in them. This is normal during pregnancy. Use an artificial tears solution.
       </Text>
            
      <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>
- Sleep on your sides, because sleeping on your back puts pressure on the main arteries, which causes blockages in some veins and affects the normal blood flow to the heart.
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
- تبدأ في الشعور بتشنجات عضلية متزايدة في الساقين وأحيانًا في الذراعين ، والسبب هو نقص الكالسيوم.       
       
       
       
       
        </Text>
           <Text style={{display:this.state.flag ,
               color: 'white',
                 fontSize: 22,
                 fontFamily: 'Itim-Regular',
                 textAlign: 'center',
                 marginBottom:10,
               }}>
- كلما اقتربنا من الثلث الثالث من الحمل ، زاد وزنك بشكل أسرع ، لأن جميع التغيرات الهرمونية التي تحدث لك تؤثر على وزنك.      
      
      
      
      
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
        <Text style={styles.txt}>تحذيرات و نصائح↴ </Text>
        </TouchableOpacity>

        <Text style={{display:this.state.flag1 , 
         color: 'white',
        fontSize: 22,
        fontFamily: 'Itim-Regular',
        textAlign: 'center',
        marginBottom:10,
       }}>

- حاولي رفع قدميك أثناء الجلوس لتجنب الإصابة بالدوالي.

      </Text>

        <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>
- قد تصبح عيناك حساسة للضوء ، وقد تشعر بالجفاف فيها. هذا أمر طبيعي أثناء الحمل. استخدم محلول الدموع الاصطناعية.     
     
     
       </Text>
            
      <Text style={{display:this.state.flag1 ,
                color: 'white',
                fontSize: 22,
                fontFamily: 'Itim-Regular',
                textAlign: 'center',
                marginBottom:10,
               }}>

- النوم على جانبيك ، لأن النوم على ظهرك يضغط على الشرايين الرئيسية ، مما يتسبب في انسداد بعض الأوردة ويؤثر على تدفق الدم الطبيعي إلى القلب.

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
// mother6;