import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameg51 = ({navigation}) => {
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
    const [flag11, stFlag11] = React.useState('none');
    const [flag12, stFlag12] = React.useState('none');
    const [flag13, stFlag13] = React.useState('none');
    const [flag14, stFlag14] = React.useState('none');
    const [flag15, stFlag15] = React.useState('none');
    const [flag16, stFlag16] = React.useState('none');

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
            if (flag == 'none'){
              stFlag('flex'); }
           else{stFlag('none'); };
            }}>
                    <Text style={styles.txt1}>آن</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عبري محرف من حنة، إسم والدة النبي صموئيل، ويوحي بالبراءة.
               </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>إيثار</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             أصل الاسم عربي
الاختيار ، التفضيل ، والإكرام .
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
                    <Text style={styles.txt1}>أجوان</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         أصل الاسم عربي
جمع جُون: الخليج الصغير.
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
                    <Text style={styles.txt1}>أجياد</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
الخيول النجيبة السريعة الجري ، الأعناق الحسنة الطويلة ، واسم جبل بمكّة المكرّمة .
         </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>أحلام</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
الرؤى أثناء النوم ، الصابرون العاقلون مع امتلاكهم القدرة ، العقول ، الآمال
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>أرجوان</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
الصباغ الأحمر، الثوب المصبوغ فيه، وشجيرة تُزرع للزينة من فصيلة القرنيّات، زهرها شديد الحُمرة حسن المظهر
                  </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>أريام</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
إسم عربي. جمع كلمة ريم أي الغزال، وبالتالي أريام تعني غزلان، ومن المعروف عن الغزالة جمالها وعيونها الواسعة.
                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>أسرار</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
ما يكتمه الإنسان وما يُظهره "من الأضداد"، الأفراح، خطوط الكفّ والجبهة
                    </Text>
        </View>
             
        <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>أسماء</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
جمع كلمة اسم، وتعني اللفظ الذي يطلق على شخص أو شيء، ويوحي بعلو الشأن أو السمو
                           </Text>
              </View>

             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                <Text style={styles.txt1}>أشجان</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
الأحزان وهوى النفس ، الأغصان المتشابكة ، والحاجات أينما كانت .
</Text>
              </View>
             
              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>أصالة</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي
         العراقة النسب والجودة، فيقال هذا الشخص أصيل أي أنه ذو أصل جيد وحسن التربية
                           </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag11 == 'none'){ stFlag11('flex'); }
           else{stFlag11('none'); };
            }}>
                <Text style={styles.txt1}>أفنان</Text>
                </TouchableOpacity>

          <Text style={{display:flag11 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
الأفنان جمع فنن والفنن الغصن واسم أفنان يوحي بالرفعة والسمو، والأفنان مصدر الخير
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag12 == 'none'){ stFlag12('flex'); }
           else{stFlag12('none'); };
            }}>
                    <Text style={styles.txt1}>إليان</Text>
                </TouchableOpacity>

          <Text style={{display:flag12 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عبري يعني إستجابة الله، وله معنى آخر وهو شجرة النخيل.
                           </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag13 == 'none'){ stFlag13('flex'); }
           else{stFlag13('none'); };
            }}>
                    <Text style={styles.txt1}>أماني</Text>
                </TouchableOpacity>

          <Text style={{display:flag13 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
الرغبات وكل ما يشتهيه المرء ويتمنى الحصول عليه، سؤال الله في الحوائج
        </Text>
        </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag14 == 'none'){ stFlag14('flex'); }
           else{stFlag14('none'); };
            }}>
                    <Text style={styles.txt1}>أمينة</Text>
                </TouchableOpacity>

          <Text style={{display:flag14 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
من ابرز اسماء بنات قديمة ورائجة حتى الآن، ويعني المرأة التي تؤتمن، والتي تتعامل مع الناس بأمانة، ويثقون فيها
</Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag15 == 'none'){ stFlag15('flex'); }
           else{stFlag15('none'); };
            }}>
                <Text style={styles.txt1}>أميمة</Text>
                </TouchableOpacity>

          <Text style={{display:flag15 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
هو تصغير "أمّ"، أي الأم الصغيرة، ومعنى أميمة في لسان العرب: الحجارة التي تُشدخ بها الرؤوس.
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag16 == 'none'){
              stFlag16('flex'); }
           else{stFlag16('none'); };
            }}>
                    <Text style={styles.txt1}>أوركيد</Text>
                </TouchableOpacity>

          <Text style={{display:flag16 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم أجنبي. وهو لزهرة الأوركيد الشهيرة، والتي تتمتع بالشكل الجميل والغريب في نفس الوقت، وترمز للجمال والسحر.
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
       // backgroundColor: 'mediumvioletred',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom:20,
      },
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '50%', 
    borderColor: 'pink',
     height: 50,
   backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
     marginTop:20,
     alignSelf:'center',
    borderRadius: 50,
  },
  txt1: {
   color: 'mediumvioletred',
   fontSize: 25,
   fontFamily: 'Amiri-BoldItalic',
   textAlign: 'center',
  },
});
export default nameg51;