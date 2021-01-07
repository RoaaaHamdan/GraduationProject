import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity} from 'react-native';
  import {RadioButton} from 'react-native-paper';
  import LinearGradient from 'react-native-linear-gradient'

  const name1 = ({navigation}) => {
    const [checked5, setChecked5] = React.useState('');
    const [x, setx] = React.useState('');
    const [b, setb] = React.useState('');

      const cal = () => { 
        if (x === '') {
          alert('اختر جنس المولود' ); }
        else { 
          if (x == 0) {

            navigation.navigate('nameg');

          }
          else if (x == 2) {
            navigation.navigate('name2')
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
      
      <ScrollView
      style={{
       // backgroundColor:b
      }}

      >
        <View style={styles.flexview}>
         <Image source={require('../assets/name1.jpg')}
style={{width:300, height:150, borderRadius: 50,alignSelf:'center',
marginTop:40}}   />             
              </View>

          <View style={{
          //   width:'100%',
            padding: 10, 
          }}>
           <Text style={{ color: 'black',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
           marginBottom:10,
           alignSelf: 'center',
            }}>
نوع الاسم     
   </Text>

<View style={styles.flexview}>
            <TouchableOpacity >
          <Image source={require('../assets/name2.jpg')} style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/name3.png')} style={styles.img} />
            </TouchableOpacity>
          </View>

              <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txt}> بنت </Text>
            <RadioButton
              value="first"
              status={checked5 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('first');
                setx(0);
                setb('pink')
              }} />
          <View
            style={{ flexDirection: 'row' }}>
              <Text style={styles.txt}> ولد</Text>
            <RadioButton
              value="second"
              status={checked5 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('second');
                setx(2);
                setb('lightblue')

              }} />
          </View>
        </View>
      </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 55,
            marginBottom: 10,
            marginTop: 40,
          alignSelf:'center',
           backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={cal}>
          <Text style={{
              color: 'black',
              fontSize: 27,
              fontFamily: 'Amiri-BoldItalic',
            }}>
التالي
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
             width: '40%',
             borderWidth: 1,
             borderColor: 'grey',
              height: 45,
              marginBottom: 10,
              marginTop: 40,
            alignSelf:'center',
             backgroundColor: 'lightgrey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
          }}
          onPress={() => navigation.navigate('pregnant2')} >
          <Text style={{
              //textAlign: 'center',
              color: 'black',
              fontSize: 27,
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
export default name1;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
   // marginBottom:10,
  },
  img: {
    width: 140,
    height: 160,
    borderRadius: 70,
    marginTop: 10,
    marginBottom: 10,
    padding:40,
  },
  txt: {
    fontFamily: 'Itim-Regular',
    fontSize: 30,
    marginLeft: 75,
    // textAlign: 'center', 
   // alignSelf: 'center',
  },
});
