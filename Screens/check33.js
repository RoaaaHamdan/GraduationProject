import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

const check33 =({navigate})=> {
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
                  }}> Test of the first trimester of pregnancy </Text>
         <Image source={require('../assets/c.jpg')}
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
         <Text style={styles.txt}>Test of the first trimester of pregnancy↴</Text>
            </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
Includes test of nuchal translucency in ultrasound, and test of PAPP-A and b-HCG in the blood.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
          <Text style={styles.txt}>The importance of this test↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
To detect various birth defects, and especially to determine the risk of Down syndrome in the fetus. This test takes place at weeks 11-14.
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
export default check33;