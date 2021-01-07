import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class  baby9 extends Component {
  constructor(props){
    super(props);
  this.state={
    
    flag:'none',
    display1:'flex',
    display2:'none'
  }
}
UNSAFE_componentWillMount =()=>{

  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }

}
     // const [, stFlag] = React.useState('none');
render(){
  return (
    <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
      <ScrollView
      style={{
        display:this.state.display1

      }}
       >
        
        <View style={styles.flexview,{
        }}>
        <View>
        <Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:12 ,
                  marginTop:15 ,

                }}>
                
                The fetus in the ninth month
                
                 </Text>
       <Image source={require('../assets/baby9.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview}> 
             <Text style={styles.txt}>    Size</Text>
             <View style={styles.flexview}>
         <TouchableOpacity style={{ 
          width: '7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }} >
      </TouchableOpacity>
      </View>
           
           <Text style={styles.txt}>Weight</Text>
          <View style={styles.flexview}>
         <TouchableOpacity style={{ width:'7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }}  >
      </TouchableOpacity>
      </View>

           <Text style={styles.txt}>Length      </Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 19,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>Bunch of grapes          </Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>3.5 kg         </Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 48 cm     </Text>
      </View>

            <View >
            <TouchableOpacity 
         style={styles.num}
           onPress={() => {
              if (this.state.flag == 'none'){ 
                this.setState({flag:'flex'})
                //stFlag('flex');
                }
             else{ 
                this.setState({flag:'none'})
             
             };
              }}>
         <Text style={styles.txt1}>Fetal health↴</Text>
         </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
          fontSize: 23,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
          }}>
- It is the last stage of fetal development, where the subcutaneous fat growth and the nervous system are fully developed, and the child can yawn, and it becomes so large in the uterus that the remaining space does not give him freedom of movement and reduces his movement.
           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>
- His brain grows greatly, which leads to the consistency of the responses of the fetus, as it can blink and close its eyes, turn its head, and clench its hands tightly, as the fetus responds to various influences, such as sounds, light and touch, and the position of the fetus changes in the uterus in preparation for the stages of labor and birth; As it moves down towards the pelvis, its head is usually directed down towards the birth tract
             </Text>
            </View>
      
     </ScrollView>
 

     <ScrollView
      style={{
        display:this.state.display2

      }}
       >
        
        <View style={styles.flexview,{
        }}>
        <View>
        <Text style={{ textAlign: 'center',
                  fontSize: 28,
                  fontFamily: 'Amiri-BoldItalic',
                  marginBottom:12 ,
                  marginTop:15 ,

                }}>
                
                الجنين في الشهر التاسع                
                 </Text>
       <Image source={require('../assets/baby9.jpg')}
            style={{width:390, height:200, borderRadius:50}} />
            </View>
            </View>

            <View style={styles.flexview}> 
             <Text style={styles.txt}>    الحجم</Text>
             <View style={styles.flexview}>
         <TouchableOpacity style={{ 
          width: '7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }} >
      </TouchableOpacity>
      </View>
           
           <Text style={styles.txt}>الوزن</Text>
          <View style={styles.flexview}>
         <TouchableOpacity style={{ width:'7%', 
          borderColor: 'mediumvioletred',
          height: 45,
         backgroundColor: 'mediumvioletred',
          marginTop:28,
        }}  >
      </TouchableOpacity>
      </View>

           <Text style={styles.txt}>الطول      </Text>
        </View>

           <View style={styles.flexview}>
           <Text style={{ color: 'white',
            fontSize: 19,
         //   fontFamily: 'Grandstander-bold',
         fontWeight: 'bold',
          marginBottom:30, 
          }}>حزمة عنب         </Text>

           <Text style={{ color: 'white',
            fontSize: 20,
        //    fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
           }}>3.5 كغم        </Text>

        <Text style={{ color: 'white',
            fontSize: 20,
         //  fontFamily: 'Amiri-BoldItalic',
          fontWeight: 'bold',
          }}> 48 سم   </Text>
      </View>

            <View >
            <TouchableOpacity 
         style={styles.num}
           onPress={() => {
              if (this.state.flag == 'none'){ 
                this.setState({flag:'flex'})
                //stFlag('flex');
                }
             else{ 
                this.setState({flag:'none'})
             
             };
              }}>
         <Text style={styles.txt1}>↴ صحة الجنين</Text>
         </TouchableOpacity>

        <Text style={{display:this.state.flag , 
         color: 'white',
          fontSize: 23,
          fontFamily: 'Itim-Regular',
          textAlign: 'center',
          marginBottom:10,
          }}>

- إنها المرحلة الأخيرة من نمو الجنين ، حيث يتم نمو الدهون تحت الجلد والجهاز العصبي بشكل كامل ، ويمكن للطفل أن يتثاءب ، ويصبح كبيرًا جدًا في الرحم لدرجة أن المساحة المتبقية لا تمنحه حرية الحركة وتقلل حركته.



           </Text>
           <Text style={{display:this.state.flag ,
                color: 'white',
                  fontSize: 23,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center', 
               }}>

- ينمو دماغه بشكل كبير مما يؤدي إلى تناسق استجابات الجنين ، حيث يمكنه أن يرمش ويغلق عينيه ويدير رأسه ويقبض يديه بقوة ، حيث يستجيب الجنين لتأثيرات مختلفة مثل الأصوات والضوء واللمس ، ويتغير وضع الجنين في الرحم استعدادًا لمراحل المخاض والولادة ؛ عندما يتحرك لأسفل نحو الحوض ، عادة ما يتم توجيه رأسه لأسفل باتجاه قناة الولادة             </Text>
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
     marginBottom:20,
     borderRadius:20
  },
  txt: {
    textAlign: 'center', 
   color: 'mediumvioletred',
   fontSize: 25,
   fontFamily: 'Lalezar-Regular',
   marginTop:25,
  },
  txt1: {
  textAlign: 'center', 
   color: 'white',
   fontSize: 27,
   fontFamily: 'Grandstander-bold',
  },
});
// baby9;