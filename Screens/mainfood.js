import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert ,Dimensions,
  ScrollView, TouchableOpacity} from 'react-native';

  const mainfood = ({navigation}) => {
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
    global.cal=0;
    return (
      <SafeAreaView style={{backgroundColor:'lightgrey', flex:1}}>
      <View
      style={{
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
        display:display1
      }}
      >
    <Text style={{ textAlign: 'center',
                  fontSize: 33,
                  color: 'black',
                  fontFamily: 'Grandstander-VariableFont_wght',
                  backgroundColor: 'grey',
                  height:60,
                }}> 
                Calculate calories
                 </Text>
            </View>
        <ScrollView
        style={{
          display:display1
        }}
        >

          <View style={styles.flexview}>
            <TouchableOpacity style={{flexDirection:'column'}}
          onPress={() => navigation.navigate('meat')} >
           <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
          <Image source={require('../assets/images/meat.jpg')} style={styles.img} />
          <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Meat</Text>
          </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('burger')} >
                <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/burger.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Meat produced</Text>
           </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('fish')} >
                 <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/fish.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Fish </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('fruits')} >
               <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/fruits.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Fruits</Text>
           </View>
         </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('veg')} >
             <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/veg.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Vegetables</Text>
             </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('nuts')} >
               <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/nuts.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           Nuts</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '55%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 40,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            alignSelf:'center'
          }}
          onPress={() =>  Alert.alert('Your calories', ' Your total calories: ' + global.cal )}  >
          <Text style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 18,
              fontFamily: 'Amiri-BoldItalic',
            }}>
Calculate your calories
          </Text>
        </TouchableOpacity>
        </View>
         <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '55%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 20,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            alignSelf:'center'
          }}
          onPress={() => global.cal=0} >
          <Text style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 18,
              fontFamily: 'Amiri-BoldItalic',
            }}>
Reset the counter
          </Text>
        </TouchableOpacity>
        </View>

        </ScrollView>
     
     

        <View
      style={{
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
        display:display2
      }}
      >
    <Text style={{ 
      //textAlign: 'center',
                  fontSize: 33,
                  color: 'black',
                  fontFamily: 'Grandstander-VariableFont_wght',
                  backgroundColor: 'grey',
                 // height:60,
                }}> 
احسب السعرات الحرارية                 </Text>
            </View>
        <ScrollView
        style={{
          display:display2
        }}
        >

          <View style={styles.flexview}>
            <TouchableOpacity style={{flexDirection:'column'}}
          onPress={() => navigation.navigate('meat')} >
           <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
          <Image source={require('../assets/images/meat.jpg')} style={styles.img} />
          <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           لحوم</Text>
          </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('burger')} >
                <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/burger.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           منتجات اللحوم</Text>
           </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('fish')} >
                 <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/fish.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           اسماك </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('fruits')} >
               <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/fruits.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           فواكه</Text>
           </View>
         </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('veg')} >
             <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/veg.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           خضراوات</Text>
             </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('nuts')} >
               <View style={{ flexDirection:'column', justifyContent:'center',
            alignItems:'center' }} >
              <Image source={require('../assets/images/nuts.jpg')} style={styles.img} />
              <Text style={{fontSize:20, fontFamily:'Amiri-BoldItalic' }} >
           مكسرات</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '65%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 40,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            alignSelf:'center'
          }}
          onPress={() =>  Alert.alert('Your calories', ' Your total calories: ' + global.cal )}  >
          <Text style={{
              //textAlign: 'center',
              color: 'red',
              fontSize: 18,
              fontFamily: 'Amiri-BoldItalic',
            }}>
احسب السعرات الحرارية الخاصة بك          </Text>
        </TouchableOpacity>
        </View>
         <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '55%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 20,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            alignSelf:'center'
          }}
          onPress={() => global.cal=0} >
          <Text style={{
             // textAlign: 'center',
              color: 'red',
              fontSize: 18,
              fontFamily: 'Amiri-BoldItalic',
            }}>
أعد تصفير العداد          </Text>
        </TouchableOpacity>
        </View>

        </ScrollView>
     
     
     
      </SafeAreaView>
    );
}
export default mainfood;
const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width:150,
    height:150,
   borderRadius: 30,
    marginTop: 40,
  },
  welcome: {
    fontSize: 40,
    marginTop: 20,
    fontFamily: 'Lobaster-Regular',
    textAlign: 'center',
  },
});
