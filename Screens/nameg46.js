import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameg46 = ({navigation}) => {
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
            fontSize: 35,
            color: 'white',
            fontWeight: 'bold',
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
                    <Text style={styles.txt1}>تالا</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم يوناني.
      هو عبارة عن نبات من فصيلة الخبازيات، ومعناه نخلة بحجم صغير. وفي اللغة الفرنسية يعني الذهب
               </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>جوري</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             اسم عربي.
             هو أحد أنواع الورود الجميلة ذات الرائحة الطيبة، وكذلك جوري من أسماء الورد الدمشقي، والذي يتميز بجمال منظره وتنوع ألوانه
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
                    <Text style={styles.txt1}>حنين</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي، جاء بصيغة المصدر ويعني الشوق، والاشتياق.
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
                    <Text style={styles.txt1}>ثراء</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي يعني الغنى وكثرة المال، فثراء النفس أي غناها وكفايتها، وثراء العقل أي إمتلائه بالمعلومات والثقافات.
            </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>زينة</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي. ومعناه ما تتزين به المرأة، وقد ذُكِر في القرآن بأكثر من موضع
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>شادن</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم كردي يعني رؤية الفرح، كما يعني الشخص المنشد أو المغني، وفي اللغة العربية يعني الفرحة والسرور
                  </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>شجون</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
جمع شَجَن ، والشواجن : الأودية الكثيرة الشجر ، والشجنة : الشجرة .
                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>غادة</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
اسم شجرة غضة وكثيفة. وهي الفتاة الناعمة الجميلة المُتمايلة الرقيقة
                    </Text>
        </View>
             
        <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>لمار</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم فارسي.
         البريق و الشعاع والضوء، وكلها بمعاني قريبة ومتشابها، فيقال لمار الذهب أي بريق الذهب
         </Text>
              </View>

             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                <Text style={styles.txt1}>ليان</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي، مشتق من الفعل لان، فيقال يعيش في ليان أي يعيش في رخاء
</Text>
              </View>
             
              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>لجين</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي
         اللجين هو الفضّة، وقد ورد في اللغة العربية بهذه الصيغة المصغرة، ويعني ايضاً ماء الفضة.
                  </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag11 == 'none'){ stFlag11('flex'); }
           else{stFlag11('none'); };
            }}>
                <Text style={styles.txt1}>نايا</Text>
                </TouchableOpacity>

          <Text style={{display:flag11 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم فارسي.
هي إبنة الظبي وأحد أنواع الغزال، وهو أيضاً مأخوذ من كلمة ناي وهي الة موسيقية.
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag12 == 'none'){ stFlag12('flex'); }
           else{stFlag12('none'); };
            }}>
                    <Text style={styles.txt1}>نورة</Text>
                </TouchableOpacity>

          <Text style={{display:flag12 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي يعني المرأة المضيئة والمشرقة، ويعني الهدى إلى طريق الصواب عكس الضلال، فيقول نور إهتدى به الشخص
                           </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag13 == 'none'){ stFlag13('flex'); }
           else{stFlag13('none'); };
            }}>
                    <Text style={styles.txt1}>هاجر</Text>
                </TouchableOpacity>

          <Text style={{display:flag13 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
 اسم هيروغليفي. وينقسم إلى قسمين، كلمةها: وتعني (بالهيروغليفية: زهرة اللوتس). و(جر) معناها أرض جب
        </Text>
        </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag14 == 'none'){ stFlag14('flex'); }
           else{stFlag14('none'); };
            }}>
                    <Text style={styles.txt1}>هديل</Text>
                </TouchableOpacity>

          <Text style={{display:flag14 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي يعني صوت الحمام والغلام، ويعني الرجل الكثير الشعر، وكذلك الثقيل، وأيضا فرخ الحمام
</Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag15 == 'none'){ stFlag15('flex'); }
           else{stFlag15('none'); };
            }}>
                <Text style={styles.txt1}>يارا</Text>
                </TouchableOpacity>

          <Text style={{display:flag15 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
في اللغات القديمة كانت تعني في الفينيقية حبيبتي وكذلك في الكردية معناها الحبيبة و بحذف آلاف معناها الحبيب، وفي الأمزونية ابنة الغابات
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
                    <Text style={styles.txt1}>يانا</Text>
                </TouchableOpacity>

          <Text style={{display:flag16 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم فارسي يطلق على الإناث، ويعني فاعلة الخير أو الفتاة الكريمة.
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
        // /backgroundColor: 'mediumvioletred',
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
export default nameg46;