import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class check13 extends Component {
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
        
          <View style={styles.flexview,{
            display:this.state.display1
          }}>
          <View style={{ width:'100%',
        height:80,
        backgroundColor:'grey',
        marginBottom:220,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}> What is folic acid test? </Text>
         <Image source={require('../assets/c13.jpg')}
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
            if (this.state.flag == 'none'){this.setState({flag:'flex'}); }
           else{this.setState({flag:'none'}); };
            }}>
         <Text style={styles.txt}>Folic acid test↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
The stores of folic acid in the body are small, so malnutrition may lead to a short time of folic acid deficiency, especially during pregnancy, when the need for this acid increases.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){this.setState({flag1:'flex'}); }
           else{this.setState({flag1:'none'}); };
            }}>
          <Text style={styles.txt}>Analysis of the results↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- High level: caused by pernicious anemia, or when consuming large amounts of the vitamin.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
- Low level: caused by either malnutrition or poor absorption in the digestive system.
          </Text>
              </View>
       </ScrollView>
    
    
    

      
       <View style={styles.flexview,{
            display:this.state.display2
          }}>
          <View style={{ width:'100%',
        height:80,
        backgroundColor:'grey',
        marginBottom:220,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}> ما هو اختبار حمض الفوليك؟ </Text>
         <Image source={require('../assets/c13.jpg')}
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
            if (this.state.flag == 'none'){this.setState({flag:'flex'}); }
           else{this.setState({flag:'none'}); };
            }}>
         <Text style={styles.txt}>اختبار حمض الفوليك↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
مخازن حمض الفوليك في الجسم قليلة ، لذا فإن سوء التغذية قد يؤدي إلى فترة قصيرة من نقص حمض الفوليك ، خاصة أثناء الحمل ، عندما تزداد الحاجة إلى هذا الحمض.


          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none'){this.setState({flag1:'flex'}); }
           else{this.setState({flag1:'none'}); };
            }}>
          <Text style={styles.txt}>
          
          
          تحليل النتائج↴ 
          
          </Text>
          </TouchableOpacity>
          
          <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>

- عالي المستوى: يسببه فقر الدم الخبيث أو عند تناول كميات كبيرة من الفيتامين.
         </Text>
              
        <Text style={{display:this.state.flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>

- انخفاض المستوى: ناتج عن سوء التغذية أو سوء الامتصاص في الجهاز الهضمي.
          </Text>
              </View>
       </ScrollView>
    
    
    
    
    
      </SafeAreaView>
    );
  }}

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
// check13;