import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const nameb48 = ({navigation}) => {
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
                    <Text style={styles.txt1}>ياسر</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
         اسم عربي.
         مشتق من اليُسر أي السهولة والليونة، ومن يستخدم اليد اليسرى. 
                           </Text>
        </View>

        <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag1 == 'none'){ stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
                <Text style={styles.txt1}>يامن</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي.
الشخص المبارك القوي والذي له مكانة ومنزلة، والذي يستخدم يده اليمنى، فعكس الإسم هو ياسر. 
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
                    <Text style={styles.txt1}>يحيى</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         يقال بأن أصله عربي من الفعل يحيا ويقال بأنه أعجمي من اسم يوحنا و أول من سمي بهذا الإسم هو يحيى بن زكريا عليهما السلام.
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
                    <Text style={styles.txt1}>يزيد</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عربي.
         يعني يزداد ويضيف، ويزيد في الخير أي يفعل خير أكثر.
         </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag4 == 'none'){ stFlag4('flex'); }
           else{stFlag4('none'); };
            }}>
                    <Text style={styles.txt1}>يوسف</Text>
                </TouchableOpacity>

          <Text style={{display:flag4 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
         اسم عبري.
         هو إسم سيدنا يوسف عليه السلام، وتوجد سورة بإسمه في القرآن، وذكر فيه 24 مرة، ومعناه أن الله يزيد ويمنح، أو يضاعف.
         </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag5 == 'none'){ stFlag5('flex'); }
           else{stFlag5('none'); };
            }}>
                    <Text style={styles.txt1}>يمام</Text>
                </TouchableOpacity>

          <Text style={{display:flag5 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي.
 من الفعل يمَّمَ أي قصد، وهناك معنى آخر اليمام وهو طائر معروف ومفرده يمامة.
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
export default nameb48;