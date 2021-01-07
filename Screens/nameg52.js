import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameg52 = ({navigation}) => {
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
                    <Text style={styles.txt1}>تاليا</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
يعني من تتلو القرآن، ويعني الجنة أو نور الجنّة.
               </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>تاليدا</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
       اسم آرامي مشتق من تاليثا ويعني الفتاة الصغيرة.
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
                    <Text style={styles.txt1}>تالين</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم يوناني.
         يعني الفتاة الجميلة والمُزهِرة، ويتميز ببساطته ورقته التي تنعكس على صاحبته. 
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
                    <Text style={styles.txt1}>تولاي</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  

اسم تركي يعني ضوء القمر الخفيف، وهو مأخوذ من اسم تولين الذي يعني هالة القمر من حوله
               </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>تولين</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم فارسي يعني ضوء القمر وهالة نور حول القمر، وقيل أنه هناك زهرة بإسم تولين، كما أن هناك قرية في لبنان تحمل إسم تولين
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>توليب</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم تركي. زهرة تتمتع بألوان جميلة وحيوية، وهي من أشهر الأزهار ذات المظهر الخلّاب في العالم
                  </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>تيجان</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي يطلق على الإناث، وهو جمع تاج أي غطاء الرأس للملوك
                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>ترتيل</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
تعني الإحسان والتجويد والصوت الجميل في قراءة القرآن، وذكرت في القرآن
                    </Text>
        </View>
             
        <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>تمارا</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
إسم عبري. ويعني شجرة النخيل، وعربياً مأخوذ من كلمة "تمر" ويمكن أن ينتهي بحرف الألف "تمارا"، أو بالتاء المربوطة "تمارة".
           </Text>
              </View>

             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                <Text style={styles.txt1}>تميمة</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي مذكره تميم، ويعني المتحرزة بالتمائم من الحسد والعين والأذى.
</Text>
              </View>
             
              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>تاليان</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
    اسم عربي وهو مثنى تاليان، ويعني من تتلو القرآن.
       </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag11 == 'none'){ stFlag11('flex'); }
           else{stFlag11('none'); };
            }}>
                <Text style={styles.txt1}>تسنيم</Text>
                </TouchableOpacity>

          <Text style={{display:flag11 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
وهو عين من ماء الجنة، ويشربها المقربون من عباد الله الصالحين ومن أرفع شراب في الجنة.
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
    //    backgroundColor: 'mediumvioletred',
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
export default nameg52;