import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

const check41 =({navigate})=> {
    const [flag, stFlag] = React.useState('none');
    const [flag1, stFlag1] = React.useState('none');
  
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        
          <View style={styles.flexview}>
          <View style={{ width:'100%',
        height:60,
        backgroundColor:'grey',
        marginBottom:260,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    marginBottom:10 ,
                  }}> What is a fetal organ test? </Text>
         <Image source={require('../assets/c41.jpg')}
         style={{width:400, height:250, borderRadius:20,  marginBottom:10,alignSelf:'center'}}/>
              </View>
              </View>

            <ScrollView >
             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (flag == 'none'){stFlag('flex'); }
           else{stFlag('none'); };
            }}>
         <Text style={styles.txt}>fetal organ test↴</Text>
            </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
         }}>
This test aims to detect birth defects and abnormalities in the structure of the fetus.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
          <Text style={styles.txt}>The test result↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
The result maybe a recommendation to stop the early pregnancy or to conduct an invasive test to give more information about the condition of the fetus. This examination is performed at weeks 13-17.
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
export default check41;