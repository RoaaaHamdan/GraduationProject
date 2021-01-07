import React, { useEffect } from 'react';
import {View, StyleSheet ,SafeAreaView, TouchableOpacity,ScrollView, Text, Image ,Dimensions} from 'react-native';

const ex3 = ({navigation})  =>{
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
        <ScrollView>
          <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display1
          }}>
Flexibility exercises
</Text>


<Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
            display:display2
          }}>
          تمارين المرونة
</Text>
      </View>

         <View style={styles.flexview}>
              <Image source={require('../assets/images/ex33.jpg')}
     style={{width:Dimensions.get('window').width,
      height:310, borderRadius:10 }} />
             
          <Text style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
              marginTop: 12,
              display:display1
      }}>    
It is stretching and stretching exercises, and their benefits are many.
It helps you increase muscle strength, maintain bone density, improve balance and reduce joint pain.
</Text>

<Text style={{
              textAlign: 'center',
              fontSize: 22,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
              marginTop: 12,
              display:display2
      }}>    
وهي تمارين تمطيط وإطالة وفوائدها كثيرة.
يساعدك على زيادة قوة العضلات والحفاظ على كثافة العظام وتحسين التوازن وتقليل آلام المفاصل.
</Text>
            </View>

  
            <View  style ={{flexDirection:'row' , marginTop:20,alignSelf:'center' }}> 
        <TouchableOpacity
          style={{
            width: '50%',
            borderWidth: 1,
            borderColor: 'lightgrey',
            height: 60,
            //marginTop: 90,
           // marginLeft: 80 ,
            backgroundColor: 'lightgrey',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            //alignContent: 'center',
            alignSelf:'center'
            }}
          onPress={() => navigation.navigate('video3')} >
          <Text
            style={{
              textAlign: 'center',
              color: 'blue',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',
              display:display1
            }}> 
Let's exercise together
          </Text>

          <Text
            style={{
              textAlign: 'center',
              color: 'blue',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',
              display:display2
            }}> 
            دعونا نتدرب معا
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
export default ex3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },

  header: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginBottom:15,
  },
});