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
    const [flag8, stFlag8] = React.useState('none');
    const [flag9, stFlag9] = React.useState('none');
    const [flag10, stFlag10] = React.useState('none');
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
            fontFamily: 'Amiri-BoldItalic',
             }}>
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
                <Text style={styles.txt1}>أحمد</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>
إسم عربي مشتق من الحمد، ويعني الأكثر حمداً، وهو صاحب صفات حسنة لذا يحمده الناس، وهو أحد أسماء الرسول صلى الله عليه وسلم
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                    <Text style={styles.txt1}>أدهم</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي. الليل الدامس ، الأسوَد ،والدهماء: الآثار، والعدد الكبير من الناس
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag2 == 'none'){ stFlag2('flex'); }
           else{stFlag2('none'); };
            }}>
                    <Text style={styles.txt1}>اياس</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
العوض والعطاء ، القنوط واليأس وانقطاع الرجاء .
     </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag3 == 'none'){ stFlag3('flex'); }
           else{stFlag3('none'); };
            }}>
                    <Text style={styles.txt1}>أشرف</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي. الأسمى في الدين والدنيا، من كاد أن يصل، والأشْرَفَان: اللوح والقلم.
         </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                <Text style={styles.txt1}>أكرم</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.الأكثر سخاءً وجوداً ، الذي يأتي بأولاد كرام ، والمكرِّم نفسه عن المعاصي .
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>أمجد</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
الشريف الأصل ، والغالب في المجد والفخر والمنزلة العالية.
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                    <Text style={styles.txt1}>أمير</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
مَن تولى أمر القوم، الآمر، الملك ، وابن الملك ، أمير المؤمنين لقب الخليفة عند المسلمين .
     </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>إياد</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize:18,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
 من كلمة أيد وتعني القوة، أو الشيء الذي يقوم به الشخص من ناحيته. 
         </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>أيسر</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
الأسد ، السَّهل، المستغني والميسور ، مَنْ في الجهة اليسرى ، ومَنْ يعمل بيده اليسرى .
</Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                    <Text style={styles.txt1}>أيمن</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي.
من اليمن والبركة، وهو اليمين، أي القوة والقدرة والمكانة. 
     </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>أيهم</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         الرجل الشجاع المقدام الجريء الذي لا يُستطاع عليه، الجبل الشَّامخ الذي لا يمكن الوصول إليه.
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
    //    backgroundColor: 'cornflowerblue',
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