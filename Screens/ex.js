import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,Dimensions,
  ScrollView, TouchableOpacity } from 'react-native';

  const ex = ({navigation}) => {
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
          backgroundColor:'lightgrey',
          flex:1
        }}
        
        >
            <View style={styles.header}>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display1
             }}>
Let's exercise
 </Text>


 <Text
          style={{
            fontSize: 40,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display2
             }}>
             دعونا نتدرب
 </Text>
      </View>
    
        <ScrollView
        style={{
          backgroundColor:'lightgrey'
        }}
        >
          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ex1')} >
              <Image source={require('../assets/images/ex1.jpg')} style={styles.img} />
              <Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic', textAlign: 'center',
            display:display1
             }}>
Cardio exercises
</Text>


<Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic', textAlign: 'center',
            display:display2
             }}>
             تمارين القلب
</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('ex2')} >
              <Image source={require('../assets/images/ex2.jpg')} style={styles.img} />
              <Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic',  textAlign: 'center',
            display:display1
            }}>
Resistance exercises
</Text>

<Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic',  textAlign: 'center',
            display:display2
            }}>
            تمارين المقاومة
</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ex3')} >
              <Image source={require('../assets/images/ex3.jpg')} style={styles.img} />
              <Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center',
            
            display:display1
            }}>
Flexibility exercises
</Text>

<Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center',
            
            display:display2
            }}>
            تمارين المرونة
</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('ex4')} >
              <Image source={require('../assets/images/ex4.jpg')} style={styles.img} />
              <Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic', textAlign: 'center', 
            display:display1}}>
Neurological exercises
</Text>

<Text style={{ fontSize: 20,
            color: 'black',
            fontFamily: 'Amiri-BoldItalic', textAlign: 'center', 
            display:display2}}>
            تمارين عصبية
</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
}
export default ex;

const styles = StyleSheet.create({
    flexview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'lightgrey',
    },

    header: {
      backgroundColor: 'grey',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height:70,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-around',
    },

  img: {
    width:Dimensions.get('window').width-210,
    height: 170,
    marginTop: 50,
  },
});