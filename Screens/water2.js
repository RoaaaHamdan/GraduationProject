import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity,Dimensions} from 'react-native';

  const water2 = ({navigation}) => {
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
        <SafeAreaView
        
        style={{
          backgroundColor:'lavender',
          height:Dimensions.get('window').height,
          width:Dimensions.get('window').width
        }}
        >
            <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display1
            
             }}>
Remind me
</Text>
       <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display2
            
             }}>
ذكرني</Text>
      </View>
            
        <ScrollView>
          <View style={styles.flexview}>
            <TouchableOpacity

            style={{
              flexDirection:'column',
            }}
            onPress={() => navigation.navigate('reminderWater')} >
            <View
            style={{
              flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}
            >
              <Image source={require('../assets/images/reminder.png')} style={styles.img} />
 <Text
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display1

 }}
 
 
 >Reminder</Text>

<Text
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display2

 }}
 
 
 >منبه</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('addWater')} >

<View
            style={{
              flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}
            >
              <Image source={require('../assets/images/drink.jpg')} style={styles.img} />
 <Text
 
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display1

 }}
 
 
 > I drink ..</Text>
  <Text
 
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display2

 }}
 
 
 >لقد شربت ..</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('tip1')} >
            <View
            style={{
              flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}
            >
              <Image source={require('../assets/images/tip.jpg')} style={styles.img} />
 <Text
  style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display1

 }}
 
 > Tips</Text>
  <Text
  style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display2

 }}
 
 > نصائح</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('qw1')} >


<View
            style={{
              flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
            }}
            >
              <Image source={require('../assets/images/qq.jpg')} style={styles.img} />
 <Text
 
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display1   

 }}
 
 >Qusetions</Text>
 <Text
 
 style={{
   fontSize:20,
   fontFamily:'Amiri-BoldItalic',
   display:display2 

 }}
 
 >اسئلة</Text>
            </View>




            </TouchableOpacity>
          </View>
          <View
          style={{
            marginTop:39
          }}
          ></View>

        </ScrollView>
      </SafeAreaView>
    );
}
export default water2;

const styles = StyleSheet.create({
    flexview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
     // backgroundColor: 'lightblue',
    },

    header: {
      backgroundColor: 'midnightblue',
      display: 'flex',
      //flexDirection: 'row',
      width: '100%',
      height: 80,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems:'center'
    },

  img: {
    width:Dimensions.get('window').width/2 -20,
    height: 170,
    marginTop: Dimensions.get('window').height/8 -40,
    borderRadius:60,

  },
});