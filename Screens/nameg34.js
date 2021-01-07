import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameg34 = ({navigation}) => {
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
            if (flag == 'none'){
              stFlag('flex'); }
           else{stFlag('none'); };
            }}>
                    <Text style={styles.txt1}>مجد</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
          اسم عربي
        مؤنث ومذكر يعني العزة، والرفعة، والكرم، وأيضا الأرض المرتفعة كالنجد.
                            </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>مدى</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             اسم عربي.
يعني الغاية أو المنتهى، فيقال بلغ المدى أي بلغ الحد الأقصى
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
                    <Text style={styles.txt1}>مرح</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         شدَّة الفرح والنشاط حتى يُجاوز قدره ، الخفَّة والنشاط ، التبختر والاختيال.
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
                    <Text style={styles.txt1}>ملك</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         مفرد ملائكة، أي واحدة منهم، وقد ذكر اسم ملك في القرآن
                           </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>مُنى</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
         اسم عربي. 
         جمع كلمة أمنية، أي الرغبات التي يتمناها الإنسان، ومُنى يعني الفتاة التي يتمناها الجميع
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>مها</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         يعني البقرة الوحشية، والتي تتسم بوسع عينيها، فيقال عيون المها، أي صاحبة العيون الواسعة والجميلة
         </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>موج</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
          اسم عربي.
          يشير إلى موج البحر، وهي جمع موجة، وهو ما علا على سطح البحر ويتتابع في حركة متواصلة.
                    </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>ميس</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'pink',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
اسم عربي.
         يعني التمايل والتبختر، وهو مأخوذ من اسم ميساء أو مايسة، كما أنه اسم لنوع من الشجر
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
//  /       backgroundColor: 'mediumvioletred',
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
export default nameg34;