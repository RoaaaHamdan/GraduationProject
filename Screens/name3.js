import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity} from 'react-native';
  import {RadioButton} from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient'

  const name3 = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
      const cal = () => { 
        if (x === '') {
          alert('اختر الحرف' ); }
        else { 
          if (x == 1) {
            navigation.navigate('name4')
          }
          else if (x == 2) {
            navigation.navigate('name5')
          }
          else if (x == 3) {
            navigation.navigate('name6')
          }
          else if (x == 4) {
            navigation.navigate('name7')
          }
          else if (x == 5) {
            navigation.navigate('name8')
          }
          else if (x == 6) {
            navigation.navigate('name9')
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
            fontSize: 27,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
اسم طفلك
        </Text>
      </View>
      
      <ScrollView
 
      >
        <View style={styles.flexview}>
         <Image source={require('../assets/name22.png')}
style={{width:190, height:180, borderRadius: 50,}}   />             
              </View>
            
          <View style={{
             marginTop: 10,
          }}>
           <Text style={{ color: 'black',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
            alignSelf: 'center',
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
              <Text style={styles.txt}>جيم</Text>
 
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="third"
              status={checked5 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('third');
                setx(3);
              }} />
              <Text style={styles.txt}>سين</Text>
        
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="forth"
              status={checked5 === 'forth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('forth');
                setx(4);
              }} />
              <Text style={styles.txt}>عين</Text>
        
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="fifth"
              status={checked5 === 'fifth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('fifth');
                setx(5);
              }} />
              <Text style={styles.txt}>نون</Text>
         
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
           borderColor: 'midnightblue',
            height: 60,
            marginTop: 30,
           alignSelf:'center',
           backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            marginBottom:30
          }}
          onPress={cal}>
          <Text style={{
              color: 'midnightblue',
              fontSize: 27,
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
            marginTop: 20,
           alignSelf:'center',
           backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => navigation.navigate('name1')} >
          <Text style={{
              textAlign: 'center',
              color: 'midnightblue',
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
export default name3;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    //justifyContent: 'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  header: {
    //backgroundColor: 'cornflowerblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom:20,
  },
 
  txt: {
    fontFamily: 'Amiri-BoldItalic',
    fontSize: 20,
  //  marginLeft: 370,
    //alignSelf:'flex-start'
  },
});
