import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

const check22 =({navigate})=> {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
  
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        
          <View style={styles.flexview}>
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
                  }}> What is the rubella test? </Text>
         <Image source={require('../assets/c22.jpg')}
         style={{width:400, height:200, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
              </View>
              </View>

            <ScrollView >
             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (flag == 'none'){stFlag('flex'); }
           else{stFlag('none'); };
            }}>
         <Text style={styles.txt}>Rubella antibodies↴</Text>
            </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
The test aims to verify whether the body is immune to the rubella virus or if the pregnant has the disease, by taking a simple blood sample.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
          <Text style={styles.txt}>Rubella virus↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
It is an infectious disease, but it is not dangerous. The problem lies in infection during pregnancy. Pregnant women who have it are at increased risk of transmitting infection to the fetus and causing harm to it.
         </Text>
              
              </View>
       </ScrollView>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '100%', 
    borderWidth:1,
    borderColor: 'mediumvioletred',
    height: 50,
   backgroundColor: 'palevioletred',
    justifyContent: 'center',
    marginBottom:10,
    borderRadius:20,
    marginTop:15,
    },

  txt: {
  textAlign: 'center', 
   color: 'white',
   fontSize: 25,
   fontFamily: 'Grandstander-bold',
  },
});
export default check22;