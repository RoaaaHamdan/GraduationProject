import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity,Dimensions } from 'react-native';

  const fitness = ({navigation}) => {
    return (
        <SafeAreaView
        style={{
          backgroundColor:'lavender'
        }}
        
        >
        <View style={{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'midnightblue',
          height:80

        }}>
    <Text style={{ textAlign: 'center',
                  fontSize: 40,
                 color: 'white',
                  fontFamily: 'SyneMono-Regular',
                 // fontWeight: 'bold',
               //   marginBottom:15 ,
                  marginTop:20 ,
                }}>Fitness Part </Text>
            </View>
            
        <ScrollView>
          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('water1')} >
              <Image source={require('../assets/images/water.jpeg')} style={styles.img} />
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('mainfood')} >
              <Image source={require('../assets/images/cal.jpeg')} style={styles.img} />
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('stepCounter')} >
              <Image source={require('../assets/images/step.jpeg')} style={styles.img} />
            </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ex')} >
              <Image source={require('../assets/images/ex.jpeg')} style={styles.img} />
            </TouchableOpacity>
          </View>
<Text
style={{
  marginTop:75,
 // backgroundColor:'lavender'
}}
>

</Text>
        </ScrollView>
      </SafeAreaView>
    );
}
export default fitness;

const styles = StyleSheet.create({
    flexview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'lavender',
    },

  img: {
    width: Math.round(Dimensions.get('window').width),
    height: 200,
    marginTop: 15,
  },
});