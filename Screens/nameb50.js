import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'

  const nameb50 = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
      const cal = () => { 
        if (x === '') {
          alert('اختر الحرف' ); }
        else { 
          if (x == 1) {
            navigation.navigate('nameb51')
          }
          else if (x == 2) {
            navigation.navigate('nameb52')
          }
          else if (x == 3) {
           navigation.navigate('nameb53')
          }
          else if (x == 4) {
            navigation.navigate('nameb54')
          }
          else if (x == 5) {
            navigation.navigate('nameb55')
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
              <Text style={styles.txt}>ألف</Text>
            <RadioButton
              value="first"
              status={checked5 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('first');
                setx(1);
              }} />
          </View>

          <View style={styles.flexview}>
              <Text style={styles.txt}>سين</Text>
            <RadioButton
              value="second"
              status={checked5 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('second');
                setx(2);
              }} />
          </View>

          <View style={styles.flexview}>
              <Text style={styles.txt}>عين</Text>
            <RadioButton
              value="third"
              status={checked5 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('third');
                setx(3);
              }} />
          </View>

          <View style={styles.flexview}>
              <Text style={styles.txt}>ميم</Text>
            <RadioButton
              value="forth"
              status={checked5 === 'forth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('forth');
                setx(4);
              }} />
          </View>

          <View style={styles.flexview}>
              <Text style={styles.txt}>أخرى</Text>
            <RadioButton
              value="fifth"
              status={checked5 === 'fifth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('fifth');
                setx(5);
              }} />
          </View>
         
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
          width: '40%',
          borderWidth: 1,
          borderColor: 'midnightblue',
           height: 60,
           marginTop: 30,
          alignSelf:'center',
          backgroundColor: 'lightblue',
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: 40,
          }}
          onPress={cal}>
          <Text style={{
              color: 'cornflowerblue',
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
           borderColor: 'midnightblue',
            height: 50,
            marginTop: 10,
           alignSelf:'center',
           backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('name1')} >
          <Text style={{
              //textAlign: 'center',
              color: 'cornflowerblue',
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
export default nameb50;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
   // backgroundColor: 'cornflowerblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom:20,
  },
 
  txt: {
    fontSize: 25,
  },
});
