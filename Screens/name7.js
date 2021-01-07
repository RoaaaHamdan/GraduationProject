import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'

const name7 = ({navigation}) => {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
    const [flag2, stFlag2] = React.useState('none');
    const [flag3, stFlag3] = React.useState('none');

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
            
             <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
             if (flag == 'none'){ stFlag('flex'); }
           else{stFlag('none'); };
            }}>
                <Text style={styles.txt1}>عمر</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>
اسم عربي. الحياة، العمران، العبادة ، وسمَّت العرب المولود بهذا الاسم أملاً بأن يعيش عُمراً طويلاً.
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
                    <Text style={styles.txt1}>علي</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>          
اسم عربي، علو الشأن والقوة والعزة، فهو ذو مقام رفيع، وقد ذكر اسم علي في القرآن
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
                    <Text style={styles.txt1}>عدي</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي، من الفعل عدا يعدو: أي جرى وركضَ. والعديّ: تستخدم جمعاً وهم جماعة القتال يهاجمون العدوَّ ويَعْدون نحوه
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
                    <Text style={styles.txt1}>عيد</Text>
                </TouchableOpacity>

          <Text style={{display:flag2 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}> 
         اسم عربي، العادة، يوم يُحتفل به كلّ عام بمناسبة مفرحة أو محزنة ، واسم لشجر جبلي لا ورق له ولا أزهار يفيد بتضميد الجروح            </Text>
              </View>

              <View >
            <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag3 == 'none'){
              stFlag3('flex'); }
           else{stFlag3('none'); };
            }}>
                    <Text style={styles.txt1}>عزَت</Text>
                </TouchableOpacity>

          <Text style={{display:flag3 , 
           color: 'white',
          backgroundColor: 'lightblue',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
         }}>  
اسم عربي، مشتق من كلمة عِزة أي كرامة وشرف، وهو من الأسماء التي كانت منتشرة من قبل، ولكن الآن التسمية به محدودة. 
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
        </View>
   
   </LinearGradient>
    );
  }

const styles = StyleSheet.create({
  header: {
 //   backgroundColor: 'cornflowerblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom:60,
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
export default name7;