import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

const check31 =({navigate})=> {
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
                  }}> What is CBC test? </Text>
         <Image source={require('../assets/c31.jpg')}
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
         <Text style={styles.txt}>CBC test↴</Text>
            </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
Blood type and Rh classification test, post-fasting glucose test, syphilis antibody test, urinalysis and urine culture. It is preferable to perform all of these tests before the twelfth week of pregnancy.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
          <Text style={styles.txt}>The importance of CBC test↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
These tests aim to detect the presence of anemia, an incompatibility in the blood group or the Rh group between the mother and the fetus, the detection of diabetes before pregnancy, and the detection of latent infection in the urine.
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
export default check31;