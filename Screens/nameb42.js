import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameb41 = ({navigation}) => {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
    const [flag2, stFlag2] = React.useState('none');
    const [flag3, stFlag3] = React.useState('none');
    const [flag4, stFlag4] = React.useState('none');
    const [flag5, stFlag5] = React.useState('none');
    const [flag6, stFlag6] = React.useState('none');
    const [flag7, stFlag7] = React.useState('none');
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
        <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
اسم طفلك
        </Text>
      </View>
      <ScrollView>
             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag == 'none'){ stFlag('flex'); }
           else{stFlag('none'); };
            }}>
                <Text style={styles.txt1}>باسل</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم لاتيني. ويعني الريحان والحبق، وهو إسم منتشر في العالم العربي والغربي أيضاً
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                    <Text style={styles.txt1}>باسم</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي. المُبتسم الذي يضحك بشكل خفيف من غير صوت.
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag2 == 'none'){ stFlag2('flex'); }
           else{stFlag2('none'); };
            }}>
                    <Text style={styles.txt1}>براء</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
جمع بريء : وهو الطاهر من الإثم والعي ، السَّليم من الخطر أو المرض ، أول أو آخر ليلة من الشهر العربي
     </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag3 == 'none'){ stFlag3('flex'); }
           else{stFlag3('none'); };
            }}>
                    <Text style={styles.txt1}>بسّام</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي. الكثير التبسُّم ، وهو أقل الضحك وأحسنه.
         </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                <Text style={styles.txt1}>بشّار</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             اسم عربي.
الذي يبشر غيره، ويضفي أجواء السعادة والبهجة عليهم، وتأتي على وزن فاعل لتدل على كثرة هذا الفعل.
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>بشير</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize:18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
مبلّغ البُشرى بأمرٍ خيراً كان أم شراً ، الجميل الوجه ، الريح التي تُبشِّر بالمطر، والناقة الكريمة.
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                    <Text style={styles.txt1}>بلال</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
 الماء ، الفوز ، الصلة والقرابة ، ما يُبَلُّ به الفم من ماء أو لبن أو غيره .بلال بن رباح: مؤذن رسول الله صلى الله عليه وسلم.
     </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>بهاء</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي مشتق من الفعل بها، أي حسُن ، وبهاء تعني الجمال أو الحسن، واللطف في الطباع.
         </Text>
              </View>

              <TouchableOpacity
           onPress={() => navigation.navigate('name1')} >
                     <Icon name="chevron-left" size={30} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:50
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
export default nameb41;