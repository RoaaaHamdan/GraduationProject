import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameg55 = ({navigation}) => {
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
                    <Text style={styles.txt1}>بُثينة</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
المرأة الحسناء البضَّة ، الأرض السَّهلة اللينة ، الزُّبدة ، الرمال الناعمة ، نوع من الحنطة .
               </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>براءة</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             اسم عربي.
          خلاف الذنب والتهمة ، الخلاص والسَّلامة ، الشهادة أو الإجازة ، الطهارة من الإثم والعيب ، والنقاوة .
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
                    <Text style={styles.txt1}>بشائر</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         طلائع الأمور وأوائلها ، وجمع بِشَارَة : ما يُبشَّر به ، الخبر المفرح ، العطيَّة التي تُعطى للمبشِّر .
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
                    <Text style={styles.txt1}>جوليا</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم لاتيني.
الصلابة، والقوة في الشخصية. كما أنه يشير إلى الفتاة التي لا تزال في ريعان شبابها. وأيضا بمعنى الفتاة الشابة في العقل والقلب.
                                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>جمانة</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
          الفضّة أو حبّة اللؤلؤ ، وتشير إلى غلاء قيمة الفتاة، وكأنها حبّة لؤلؤ أو مجوهرات برّاقة.
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>دالية</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
الناعورة التي يديرها الماء ، الكَرْمَة ، الأرض التي تُروى بدلوٍ أو ناعورة، وشجرة العنب .
                  </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>حوراء</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
المرأة البيضاء الرقيقة الناعمة ، البيِّنة الحَوَر، أي : ذات العينين التي بياض بياضها شديد وسواد سوادها شديد
                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>شيماء</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
هي الفتاة التي في جسدها شامة، وتوحي بالجمال والحُسن.
     </Text>
        </View>
             
        <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>كاترين</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم يوناني ومحرف من كاثرين، ويعني الطاهرة أو الخالصة والنقية.
        </Text>
              </View>

             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                <Text style={styles.txt1}>كارولين</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم لاتيني.
مأخوذ من اسم كارولينا، ويعني في اللغة اللاتينية الفتاة الجميلة.
</Text>
              </View>
             
              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>لمياء</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي
         مأخوذ من لمى، أي السواد في باطن الشفاه، كما يأتي بمعنى الفتاة الجميلة والحسناء.
                           </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag11 == 'none'){ stFlag11('flex'); }
           else{stFlag11('none'); };
            }}>
                <Text style={styles.txt1}>ليليان</Text>
                </TouchableOpacity>

          <Text style={{display:flag11 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم أعجمي.
مأخوذ من اسم ليليا بإضافة حرف النون له، وهو اسم مشتق من زهرة الليلي، وهي زهرة الزنبق.
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag12 == 'none'){ stFlag12('flex'); }
           else{stFlag12('none'); };
            }}>
                    <Text style={styles.txt1}>ماجدة</Text>
                </TouchableOpacity>

          <Text style={{display:flag12 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
صاحبة المجد، والأخلاق الحميدة، ويعني أيضاً في قمة الشهرة والنجاح.
                           </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag13 == 'none'){ stFlag13('flex'); }
           else{stFlag13('none'); };
            }}>
                    <Text style={styles.txt1}>مجدولين</Text>
                </TouchableOpacity>

          <Text style={{display:flag13 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم يوناني يعني الأرض الطيبة أو المرأة ذات الأخلاق الحميدة، وينسب إلى مجدل في فلسطين.
        </Text>
        </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag14 == 'none'){ stFlag14('flex'); }
           else{stFlag14('none'); };
            }}>
                    <Text style={styles.txt1}>مادلين</Text>
                </TouchableOpacity>

          <Text style={{display:flag14 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  

اسم يوناني يعني المرأة الفاتنة والمثيرة، وهو منسوب إلى مدينة مجدل الفلسطينية التي تعتبر أقدم وأكبر المدن الفلسطينية.
</Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag15 == 'none'){ stFlag15('flex'); }
           else{stFlag15('none'); };
            }}>
                <Text style={styles.txt1}>نادين</Text>
                </TouchableOpacity>

          <Text style={{display:flag15 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
           اسم روسي. يعني التمني والرجاء والأمل، كما يقال أنه مأخوذ من اسم ناديا، أو مأخوذ من ندى، وكلاهما بمعنى قطرات الندى.
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
                    <Text style={styles.txt1}>هايدي</Text>
                </TouchableOpacity>

          <Text style={{display:flag16 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
له أكثر من معنى في أكثر من لغة، والأبرز هو المعنى الألماني، ويعني الفتاة ذات الصفات النبيلة ويقال صاحبة الشكل الجميل.
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
        //backgroundColor: 'mediumvioletred',
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
export default nameg55;