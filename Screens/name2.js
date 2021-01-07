import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity,Dimensions} from 'react-native';
  import {RadioButton} from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient'

  const name2 = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
      const cal = () => { 
        if (x === '') {
          alert('اختر عدد الحروف' ); }
        else { 
          if (x == 0) {
           navigation.navigate('name3')
        }
          else if (x == 1) {
            navigation.navigate('nameb40')
          }
          if (x == 2) {
            navigation.navigate('nameb50')
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
      <SafeAreaView
      style={{
     //   flex:1

      }}
      
      >
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
        
        style={{
         // flex:1
        }}
        >
        <View style={styles.flexview2}>
         <Image source={require('../assets/name22.png')}
style={{width:190, height:180, borderRadius: 50, alignSelf:'center',marginTop:30}}   />             
              </View>
            
          <View style={{
             width:'100%',
             alignSelf: 'center',
             marginTop: 10,
          }}>
           <Text style={{ color: 'black',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
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

          <View style={styles.flexview2}>
          <TouchableOpacity style={{
           width: '30%',
           borderWidth: 1,
           borderColor: 'midnightblue',
            height: 50,
            marginTop: 40,
           alignSelf:'center',
           backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
        onPress={cal}
          >
          <Text style={{
              color: 'midnightblue',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
            }}>
التالي
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview2}>
          <TouchableOpacity style={{
             width: '30%',
             borderWidth: 1,
             borderColor: 'midnightblue',
              height: 50,
              marginTop: 30,
             alignSelf:'center',
             backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
          }}
          onPress={() => navigation.navigate('pregnant2')} >
          <Text style={{
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
export default name2;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
   // justifyContent: 'space-around',
  },
  header: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
   // marginBottom:20,
  },
 
  txt: {
   // alignSelf:'center',
    fontSize: 25,
  // : Dimensions.get('window').width-100,
  alignSelf:'flex-end'
  },
  flexview2:{
    justifyContent:'center'
    
  },
});
