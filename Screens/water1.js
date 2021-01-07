import React, { useEffect } from 'react';
import {View, StyleSheet ,TouchableOpacity, Text, Image,ScrollView,Dimensions} from 'react-native';

const water1 = ({navigation})  =>{
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
      <ScrollView style={styles.container}>
         <View style={{ marginTop:10}} >
              <Image source={require('../assets/images/water1.jpg')}
     style={{width:Dimensions.get('window').width-100, height:290, borderRadius:100 ,alignSelf:'center'
     ,marginTop:30
     }} />
              <Text style={{
              marginBottom: 10,
              marginTop:15,
              textAlign: 'center',
              color: 'blue',
              fontSize: 40,
              fontFamily: 'Itim-Regular',
              display:display1
            }}> Remind me
            </Text>
            <Text style={{
              marginBottom: 10,
              marginTop:15,
              textAlign: 'center',
              color: 'blue',
              fontSize: 40,
              fontFamily: 'Itim-Regular',
              display:display2
            }}> ذكرني
            </Text>
<View

style={{
  justifyContent:'center',
  alignItems:'center',
  padding:20
}}
>

<Text style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
              alignSelf:'center',
              display:display1
              //fontWeight: 'bold',
      }}>      Reminding to drink water during your day and simple tips for a healthy, 
      better life for all of us </Text>

      <Text style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
              alignSelf:'center',
              display:display2
              //fontWeight: 'bold',
      }}>     تذكير بشرب الماء خلال يومك ونصائح بسيطة لصحة ،
      حياة أفضل لنا جميعًا </Text>
</View>
            </View>

            <View  style ={{flexDirection:'row' , marginTop:20 }}> 
        <TouchableOpacity
          style={{
            width: '30%',
            borderWidth: 1,
            borderColor: 'lightblue',
            height: 60,
            //marginTop: 90,
           // marginLeft: 280 ,
            backgroundColor: 'lightblue',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            alignSelf:'flex-end'
          }}
          onPress={() => navigation.navigate('water2')} >
          <Text
            style={{
              textAlign: 'center',
              color: 'grey',
              fontSize: 33,
              fontFamily: 'Lobster-Regular',
             // fontWeight: 'bold',
             display:display1
            }}>
           Next
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'grey',
              fontSize: 33,
              fontFamily: 'Lobster-Regular',
             // fontWeight: 'bold',
             display:display2
            }}>
           التالي
          </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
export default water1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
});