import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameb55 = ({navigation}) => {
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
    const [flag17, stFlag17] = React.useState('none');

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
                    <Text style={styles.txt1}>طه</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
          اسم عربي استخدم في القران الكريم ولم يتم إستخدامه في الجاهلية وقد أختلف ايضا في أصله فقالوا أصله حبشي ويعني محمد أو سرياني ومعناه رجل أو نبطي ومعناه إنسان.
              </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>راكان</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
يعني الركن إلي الهدوء والرزانة ورجاحة العقل والرأي الصائب، ويرمز الى القوة والكرامة والشرف
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
                    <Text style={styles.txt1}>ضرغام</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         الأسد ، والرجل الشديد القوة والشجاعة .
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
                    <Text style={styles.txt1}>حذيفة</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         تصغير حَذَفَة ، الحَذَف : ضأن سُود صغار، ونوع من البط.
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>حمدان</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         هو من مشتقات اسم النبي عليه الصلاة والسلام، ومن معانيه المحمود الخصال والمرضيُّ الأفعال
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>داوود</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عبري.
يعني الحبيب، والمحبوب، ويكتب بالأصل بواو واحدة وهو الصواب. ولكن البعض يكتبه داوود، داؤود، داهود.
</Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag6 == 'none'){ stFlag6('flex'); }
           else{stFlag6('none'); };
            }}>
                <Text style={styles.txt1}>فاروق</Text>
                </TouchableOpacity>

          <Text style={{display:flag6 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
             اسم عربي.
             الذي يفرِّق بين الحق والباطل ، من أسماء السَّيف ، ما يُفرِّق بين شيئين ، الخائف ، ولقب الخليفة عمر بن الخطاب
                          </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag7 == 'none'){ stFlag7('flex'); }
           else{stFlag7('none'); };
            }}>
                    <Text style={styles.txt1}>قتادة</Text>
                </TouchableOpacity>

          <Text style={{display:flag7 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
         اسم عربي. يعني شجرة صلبة ذات شوك كالإبر يستخرج منه أفضل أنواع الصمغ. 
                  </Text>
        </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag8 == 'none'){ stFlag8('flex'); }
           else{stFlag8('none'); };
            }}>
                    <Text style={styles.txt1}>قتيبة</Text>
                </TouchableOpacity>

          <Text style={{display:flag8 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         عني القِتْب وهو المِعَى، وما استدار من البطن. والقِتْب كذلك هو الرحل، ومنه جاءت التسمية. 
                  </Text>
              </View>

             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag9 == 'none'){ stFlag9('flex'); }
           else{stFlag9('none'); };
            }}>
                <Text style={styles.txt1}>كنعان</Text>
                </TouchableOpacity>

          <Text style={{display:flag9 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
الاسم في التوراة مذكور بكسر الكاف. ويعنى الأرض المنخفضة المسطحة. وقيل أيضا معناه الصبغ الأرجواني
</Text>
              </View>
             
              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag10 == 'none'){ stFlag10('flex'); }
           else{stFlag10('none'); };
            }}>
                    <Text style={styles.txt1}>لقمان</Text>
                </TouchableOpacity>

          <Text style={{display:flag10 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي
         يعني الرجل المكثر من اللقم والأكل،وهو من التِّلقام. من الفعل لقَمَ الذي يعني أكل سريعاً.
         </Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag11 == 'none'){ stFlag11('flex'); }
           else{stFlag11('none'); };
            }}>
                <Text style={styles.txt1}>نور الدين</Text>
                </TouchableOpacity>

          <Text style={{display:flag11 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي. اسم مركب يتكون من نور أي ضوء، وكلمة الدين، ويعني إشراقة الدين. 
</Text>
              </View>

            <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag12 == 'none'){ stFlag12('flex'); }
           else{stFlag12('none'); };
            }}>
                    <Text style={styles.txt1}>نصر الدين</Text>
                </TouchableOpacity>

          <Text style={{display:flag12 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي مركب. ويعني فوز وإنتصار الدين، ويمكن أن يكون نصر بمفرده أو نصر الإسلام. 
                  </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag13 == 'none'){ stFlag13('flex'); }
           else{stFlag13('none'); };
            }}>
                    <Text style={styles.txt1}>نُعمان</Text>
                </TouchableOpacity>

          <Text style={{display:flag13 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
         اسم عربي
        . اسم لنبات عشبي يتميز بلونه الأحمر وبه نقاط سوداء، كما أنه اسم من أسماء الدم، أيضاً يعتبر من الأسماء المأخوذة من كلمة نعمة، أي الهبة والمنّة 
                   </Text>
        </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag14 == 'none'){ stFlag14('flex'); }
           else{stFlag14('none'); };
            }}>
                    <Text style={styles.txt1}>هارون</Text>
                </TouchableOpacity>

          <Text style={{display:flag14 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عبري مذكر، ويعني الجبل. وقد جاء اسمان لهارون في الذكر الحكيم
</Text>
              </View>

              <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag15 == 'none'){ stFlag15('flex'); }
           else{stFlag15('none'); };
            }}>
                <Text style={styles.txt1}>ياسين</Text>
                </TouchableOpacity>

          <Text style={{display:flag15 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.  وظهر بعد الإسلام فهو مقتبس من القران الكريم
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
                    <Text style={styles.txt1}>يعقوب</Text>
                </TouchableOpacity>

          <Text style={{display:flag16 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عبري توراتي يعني الذي يخلف الآخر أو يعقبه. وهم يلفظونه "يَعاقوب". 
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
        backgroundColor: 'cornflowerblue',
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
export default nameb55;