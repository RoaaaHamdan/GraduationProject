import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameb51 = ({navigation}) => {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
    const [flag2, stFlag2] = React.useState('none');
    const [flag3, stFlag3] = React.useState('none');
    const [flag4, stFlag4] = React.useState('none');
    const [flag5, stFlag5] = React.useState('none');

    return (
      <LinearGradient
      colors={[ 'pink', 'lightblue' ]}
      style={styles.linearGradient,{
        width:'100%',
        height:'100%'
      }}
      start={{ x: 0.7, y: 0 }}
    >

        <View>
          <ScrollView>
        <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
اسم طفلك
        </Text>
      </View>
            
             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag == 'none'){ stFlag('flex'); }
           else{stFlag('none'); };
            }}>
                <Text style={styles.txt1}>ابراهيم</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
        اسم اعجمي من كلمة "أبرام"، أي الأب ذو المقام الرفيع، وله معنى كردي متعلق بسيدنا إبراهيم عليه السلام، فهو "بر" الأخ، وهام "الصخر"، هذا المعنى مأخوذ من حرفة والده وهي نحت الصخر وصناعة التماثيل
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){
              stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                    <Text style={styles.txt1}>ادريس</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم يوناني.
المعلم، وأوَّل نبي جاء بعد آدم لهداية نسل" قابيل"، ووصفه القرآن الكريم بالصبر والصدق ورفعة المنزلة.

</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag2 == 'none'){
              stFlag2('flex'); }
           else{stFlag2('none'); };
            }}>
                    <Text style={styles.txt1}>أركان</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي
أشراف القوم وساداتهم ، القوة والعِزَّة، الأهل والعشيرة ، الزوايا ، وأركان كل شيء : جوانبه التي يستند إليها ويقوم بها .
            </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag3 == 'none'){
              stFlag3('flex'); }
           else{stFlag3('none'); };
            }}>
                    <Text style={styles.txt1}>آريان</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم هندي يعني المحارب أو المشرف، وهو من الأسماء ذات المعاني المميزة وغير المنتشرة في العالم العربي.
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>ايهاب</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
إعداد الأمر والتمكين منه والقدرة علية، ويقال إهاب الفرس جلده، وهمته. يكون من يحمل اسم إيهاب مبدعاً وسيماً وذكياً
</Text>
              </View>
              
              <TouchableOpacity
           onPress={() => navigation.navigate('name1')} >
                     <Icon name="chevron-left" size={30} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:30
                     }}
                      />
         </TouchableOpacity>

        </ScrollView>
        </View>
</LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    header: {
      //  backgroundColor: 'cornflowerblue',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom:30,
      },
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '50%', 
    borderColor: 'lightblue',
     height: 50,
   backgroundColor: 'lightblue',
    justifyContent: 'center',
     marginTop:20,
     alignSelf:'center',
     borderRadius: 50,
  },
  txt1: {
   color: 'white',
   fontSize: 25,
   fontFamily: 'Amiri-BoldItalic',
   textAlign: 'center',
  },
});
export default nameb51;