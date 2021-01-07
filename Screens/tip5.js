import React, { Component } from 'react';
import {View, StyleSheet ,TouchableOpacity, Text, Image,Dimensions} from 'react-native';

const tip5 = ({navigation})  =>{
    return (
      <View style={styles.container}>
          <View
      style={{
        justifyContent:'center',
        alignItems:'center',
        height:70,
        backgroundColor:'midnightblue'
      }}
      
      >

        <Text
        
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Amiri-Bold'
          
        }}
        
        >

          Tip5
        </Text>
      </View>
         <View style={{ marginTop:80}} >
              <Image source={require('../assets/images/tip5.jpg')}
     style={{
      width:Dimensions.get('window').width-20, height:200, borderRadius:30 
     
     ,alignSelf:'center'       
       }} />
             
          <Text style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
           //   fontWeight: 'bold',
              marginTop: 40 ,
      }}>    
الدماغ والأوعية الدموية تعمل بشكل صعب عند نقص المياه، لتجنب ذلك حافظ على توازن المياه في جسدك.
</Text>
            </View>

            <View  style ={{flexDirection:'row' ,
            
            marginTop:20 
            }}> 
       <TouchableOpacity
         style={{
           width: '30%',
           borderWidth: 1,
           borderColor: 'midnightblue',
           height: 60,
           //marginTop: 90,
           //marginLeft: 270 ,
           alignSelf:'flex-end',

           backgroundColor: 'lightblue',
           justifyContent: 'center',
           borderRadius: 40,
           alignItems:'center'
         //  alignContent: 'center',
         }}
         onPress={() => navigation.navigate('water2')} >
         <Text
           style={{
          //   textAlign: 'center',
             color: 'midnightblue',
             fontSize: 20,
             fontFamily: 'Amiri-BoldItalic',
           //  fontWeight: 'bold',
           }}>
          Home
         </Text>
       </TouchableOpacity>
       </View>
        </View>
    );
  }
export default tip5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
  //  justifyContent: 'center',
    backgroundColor: 'lavender',
  },
});