import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
  import {RadioButton} from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient'

  const nameg40 = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
      const cal = () => { 
        if (x === '') {
          alert('اختر الحرف' ); }
        else { 
          if (x == 1) {
            navigation.navigate('nameg41')
          }
          else if (x == 2) {
            navigation.navigate('nameg42')
          }
         else if (x == 3) {
            navigation.navigate('nameg43')
          }
          else if (x == 4) {
            navigation.navigate('nameg44')
        }
          else if (x == 5) {
            navigation.navigate('nameg45')
          }
          else if (x == 6) {
            navigation.navigate('nameg46')
          }
        }
    }
    return (
      <LinearGradient
      colors={[ 'pink', 'lightblue' ]}
      style={styles.linearGradient,{
        width:'100%',
        height:'100%'
      }}
      start={{ x: 0.7, y: 0 }}
    >
      <SafeAreaView>
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
        <View style={styles.flexview}>
         <Image source={require('../assets/name22.png')}
style={{width:190, height:180, borderRadius: 50,}}   />             
              </View>
            
          <View style={{
             alignSelf: 'center',
             padding: 10, 
          }}>
           <Text style={{ color: 'black',
                fontSize: 30,
                fontFamily: 'Amiri-BoldItalic',
             marginBottom:15,
             alignSelf:'center',
            }}>
يبدأ بحرف:
   </Text>

              <View style={styles.flexview}>
              <RadioButton
              value="first"
              status={checked5 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('first');
                setx(1);
              }} />
              <Text style={styles.txt}>ألف</Text>
         
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="second"
              status={checked5 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('second');
                setx(2);
              }} />
              <Text style={styles.txt}>دال</Text>
       
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="third"
              status={checked5 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('third');
                setx(3);
              }} />
              <Text style={styles.txt}>راء</Text>
       
          </View>

<View style={styles.flexview}>
<RadioButton
              value="forth"
              status={checked5 === 'forth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('forth');
                setx(4);
              }} />
              <Text style={styles.txt}>سين</Text>
        
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="fifth"
              status={checked5 === 'fifth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('fifth');
                setx(5);
              }} />
              <Text style={styles.txt}>ميم</Text>
         
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="sixth"
              status={checked5 === 'sixth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('sixth');
                setx(6);
              }} />
              <Text style={styles.txt}>أخرى</Text>
         
          </View>

        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'pink',
           height: 60,
           marginTop: 30,
           backgroundColor: 'pink',
           alignItems: 'center',
           alignSelf:'center',
           justifyContent: 'center',
           borderRadius: 50,
          }}
          onPress={cal}>
          <Text style={{
              color: 'mediumvioletred',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
            }}>
نتائج البحث
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
          width: '30%',
          borderWidth: 1,
          borderColor: 'pink',
          height: 50,
          marginTop: 30,
          backgroundColor: 'pink',
          alignItems: 'center',
          alignSelf:'center',
          justifyContent: 'center',
          borderRadius: 50,
          }}
          onPress={() => navigation.navigate('pregnant3')} >
          <Text style={{
              //textAlign: 'center',
              color: 'mediumvioletred',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
            }}>
           عودة
          </Text>
        </TouchableOpacity>
        </View>

        </ScrollView>
      </SafeAreaView>
 
 </LinearGradient>
    );
}
export default nameg40;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
  //  backgroundColor: 'mediumvioletred',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom:15,
  },
 
  txt: {
    fontSize: 30,
  },
});
