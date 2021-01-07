import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

const qw6 = ({navigation}) => {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
    const [display1, setdisplay1] = React.useState('flex');
    const [display2, setdisplay2] = React.useState('none');
    useEffect(() => {
      //alert('kjj')
      // Update the document title using the browser API
  if (global.flagA=='Arab'){
    setdisplay1('none');
    setdisplay2('flex');
  
  } 
  
  else if (global.flagA=='Eng'){
  
    setdisplay2('none');
    setdisplay1('flex'); 
  }
  });
  return (
    <SafeAreaView>
       <ScrollView 
          
          style={{
         display:display1
       }}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 28,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
Quiz
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1} >
          <Text style={styles.txt1}>Question 6/6 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 21,
            fontFamily: 'Amiri-BoldItalic',
            marginTop:15,
            marginBottom:10,
           // marginRight:15,
            marginLeft:10
            }}>
Should plastic drinking water bottles not be reused?
        </Text>
            </View>
          
            <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag == 'none' && flag1 == 'none'){
              stFlag('flex');}
           else{ stFlag('none'); };
            }}>
                    <Text style={styles.txt1}>True</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                  ✓ Correct answer ✓
 </Text>
<Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
Plastic water bottles can pose a health risk to people who drink their contents and then reuse them. These bottles leach chemicals into the water in case of repeated use.
</Text>
              </View>

<View>
<TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none' && flag == 'none'){
              stFlag1('flex'); }
           else{ stFlag1('none'); };
            }}>
                    <Text style={styles.txt1}>False</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                   ✖ Wrong answer ✖
</Text>
<Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
Plastic water bottles can pose a health risk to people who drink their contents and then reuse them. These bottles leach chemicals into the water in case of repeated use.
</Text>
</View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '55%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 50,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
          }}
          onPress={() => navigation.navigate('water2')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
Back
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
   
   
   
   
   
        <ScrollView 
          
          style={{
         display:display2
       }}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 28,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
            اختبار
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1} >
          <Text style={styles.txt1}>سؤال 6/6</Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 21,
            fontFamily: 'Amiri-BoldItalic',
            marginTop:15,
            marginBottom:10,
           // marginRight:15,
            marginLeft:10
            }}>
هل يجب عدم إعادة استخدام زجاجات مياه الشرب البلاستيكية؟ 
       </Text>
            </View>
          
            <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag == 'none' && flag1 == 'none'){
              stFlag('flex');}
           else{ stFlag('none'); };
            }}>
                    <Text style={styles.txt1}>صحيح</Text>
                </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                 ✓ إجابة صحيحة ✓
 </Text>
<Text style={{display:flag , 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
         يمكن أن تشكل زجاجات المياه البلاستيكية خطرًا على صحة الأشخاص الذين يشربون محتوياتها ثم يعيدون استخدامها. تتسرب هذه الزجاجات إلى الماء في حالة الاستخدام المتكرر.
</Text>
              </View>

<View>
<TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none' && flag == 'none'){
              stFlag1('flex'); }
           else{ stFlag1('none'); };
            }}>
                    <Text style={styles.txt1}>خاطئة</Text>
                </TouchableOpacity>

          <Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>               ✖ إجابة خاطئة ✖
</Text>
<Text style={{display:flag1 , 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
         يمكن أن تشكل زجاجات المياه البلاستيكية خطرًا على صحة الأشخاص الذين يشربون محتوياتها ثم يعيدون استخدامها. تتسرب هذه الزجاجات إلى الماء في حالة الاستخدام المتكرر.
</Text>
</View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 50,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
          }}
          onPress={() => navigation.navigate('water2')} >
          <Text style={{
              color: 'black',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
            }}>
عودة
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
   
   
   
   
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginBottom:50,
  },

num: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 45,
 backgroundColor: 'lightblue',
  alignItems: 'center',
  justifyContent: 'center',
 // alignContent: 'center', 
   marginTop:30,
},

num1: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 40,
 backgroundColor: 'lightblue',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center', 
   marginBottom:10,
},

txt1: {
 color: 'white',
 fontSize: 28,
 fontFamily: 'Amiri-BoldItalic',
alignSelf: 'stretch',
marginLeft:10,
},
});

export default qw6;