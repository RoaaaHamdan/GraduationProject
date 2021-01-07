import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const check7 = ({navigation})  =>{
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
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        <ScrollView
        style={
        {
          display:display1
        }
        }
         >
          <View style={{ width:'100%',
        height:60,
        backgroundColor:'grey',
        marginBottom:230,
        alignSelf:'center'
      }}>
      <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}>Seventh month checks </Text>
             <Image source={require('../assets/ch.jpg')}
style={{width:400, height:200 , borderRadius: 30 ,alignSelf:'center'}} />
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => navigation.navigate('check71')} >
           <Text style={styles.txt}> Glucose test</Text>
        </TouchableOpacity>       

            <TouchableOpacity style={styles.num}
       onPress={() => navigation.navigate('check72')} >
          <Text style={styles.txt}>Fetal position test </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
           onPress={() => navigation.navigate('visit')} >
          <Text style={styles.txt}>Visit a doctor</Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => navigation.navigate('month7')} >
             <Icon name="chevron-left" size={40} color="black"
               style={{
               width:50,
              height:50,
              marginTop:40,
              alignItems:'flex-end',
              marginRight:Dimensions.get('window').width-100,
              }}
              />
         </TouchableOpacity>
        </View>
          
        </ScrollView>


        <ScrollView
        style={
        {
          display:display2
        }
        }
         >
          <View style={{ width:'100%',
        height:60,
        backgroundColor:'grey',
        marginBottom:230,
        alignSelf:'center'
      }}>
      <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}>فحوصات الشهر السابع </Text>
             <Image source={require('../assets/ch.jpg')}
style={{width:400, height:200 , borderRadius: 30 ,alignSelf:'center'}} />
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => navigation.navigate('check71')} >
           <Text style={styles.txt}> اختبار الجلوكوز</Text>
        </TouchableOpacity>       

            <TouchableOpacity style={styles.num}
       onPress={() => navigation.navigate('check72')} >
          <Text style={styles.txt}>اختبار موضع الجنين </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
        <TouchableOpacity style={styles.num}
           onPress={() => navigation.navigate('visit')} >
          <Text style={styles.txt}>زيارة الطبيب</Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => navigation.navigate('month7')} >
             <Icon name="chevron-left" size={40} color="black"
               style={{
               width:50,
              height:50,
              marginTop:40,
              alignItems:'flex-end',
              marginRight:Dimensions.get('window').width-100,
              }}
              />
         </TouchableOpacity>
        </View>
          
        </ScrollView>
      </SafeAreaView>
    );
}

 export default check7;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '40%', 
    borderWidth:1,
    borderColor: 'grey',
     height: 130,
   backgroundColor: 'burlywood',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:30,
  },
  txt: {
    textAlign: 'center', 
   color: 'white',
   fontSize: 25,
   fontFamily: 'Itim-Regular',
  },
});
