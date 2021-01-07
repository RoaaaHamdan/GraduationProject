import React, { Component } from 'react';
import {View, StyleSheet ,TouchableOpacity, Text, Image,Dimensions} from 'react-native';

const tip4 = ({navigation})  =>{
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

          Tip4
        </Text>
      </View>
         <View style={{ marginTop:80}} >
              <Image source={require('../assets/images/tip4.jpg')}
     style={{
       
      width:Dimensions.get('window').width-20, height:200, borderRadius:30 
     
     ,alignSelf:'center'       
       
       
       }} />
             
          <Text style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
            //  fontWeight: 'bold',
              marginTop: 40 ,
      }}>    
الماء يسرع عملية الاستقلاب، لانقاص الوزن الزائد اشرب المزيد من الماء.
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
         onPress={() => navigation.navigate('tip5')} >
         <Text
           style={{
          //   textAlign: 'center',
             color: 'midnightblue',
             fontSize: 20,
             fontFamily: 'Amiri-BoldItalic',
           //  fontWeight: 'bold',
           }}>
          Next
         </Text>
       </TouchableOpacity>
       </View>
        </View>
    );
  }
export default tip4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'lavender',
  },
});