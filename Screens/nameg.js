import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView, TouchableOpacity} from 'react-native';
  import {RadioButton} from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient'

  const nameg = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
      const cal = () => { 
        if (x === '') {
          alert('اختر عدد الحروف' ); }
        else { 
          if (x == 0) {
            navigation.navigate('nameg30')
        }
          else if (x == 1) {
            navigation.navigate('nameg40')
          }
          if (x == 2) {
            navigation.navigate('nameg50')
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
        <View style={styles.flexview,{
          alignSelf:'center'
        }}>
         <Image source={require('../assets/name22.png')}
style={{width:190, height:180, borderRadius: 50,}}   />             
              </View>
            
          <View style={{
             alignSelf: 'center',
          }}>
           <Text style={{ color: 'black',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
           marginBottom:10,
           alignSelf: 'center',
          }}>
عدد حروف الاسم   </Text>

              <View style={styles.flexview}>
              <RadioButton
              value="first"
              status={checked5 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('first');
                setx(0);
              }} />
              <Text style={styles.txt}> 3 </Text>
        
          </View>

          <View style={styles.flexview}>
          <RadioButton 
              value="second"
              status={checked5 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('second');
                setx(1);
              }} />
              <Text style={styles.txt}> 4 </Text>
        
          </View>

          <View style={styles.flexview}>
          <RadioButton
              value="third"
              status={checked5 === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('third');
                setx(2);
              }} />
              <Text style={styles.txt}>  أخرى</Text>
       
          </View>
        </View>

          <View >
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
التالي
          </Text>
        </TouchableOpacity>
        </View>

          <View >
          <TouchableOpacity style={{
             width: '30%',
             borderWidth: 1,
             borderColor: 'pink',
             height: 50,
             marginTop: 20,
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
export default nameg;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
   //justifyContent: 'space-around',
  //alignSelf:'flex-start'
  },
  header: {
  //  backgroundColor: 'mediumvioletred',
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
   // marginLeft: 300,
  },
});
