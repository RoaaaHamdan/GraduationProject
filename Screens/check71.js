import React, {useEffect} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

const check71 =({navigate})=> {
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
                  }}> What is a glucose test? </Text>
         <Image source={require('../assets/c71.jpg')}
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
         <Text style={styles.txt}>glucose test↴</Text>
            </TouchableOpacity>

          <Text style={{display:flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
         }}>
During pregnancy, due to the many physiological and hormonal changes that occur in a woman's body, the risk of developing diabetes increases.
Diabetes that begins during pregnancy (not before) and often ends after.
          </Text>
           </View>
           
          <View >
          <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (flag1 == 'none'){stFlag1('flex'); }
           else{stFlag1('none'); };
            }}>
          <Text style={styles.txt}>The importance of test↴ </Text>
          </TouchableOpacity>
          
          <Text style={{display:flag1 ,
                  color: 'grey',
                  fontSize: 20,
                  fontFamily: 'Itim-Regular',
                  textAlign: 'center',
                  marginBottom:10,
                 }}>
These high levels of sugar can affect the fetus in several ways, such as excessive growth of the head or body, making it difficult to deliver through the vagina. In addition to that, there is a high chance that this fetus will develop diabetes at birth.
As a result of the above, pregnant women should have routine blood sugar checks.
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
export default check71;