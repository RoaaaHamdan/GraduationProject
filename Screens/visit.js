import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Button} from 'react-native';

export default class visit extends Component {
  constructor(props){
    super(props);
    this.state = {
      flagEn: global.flag ,
      flagAr: global.flag ,
      flag: global.flag ,
      flag1: global.flag1,
      display1:'flex',
      display2:'none'
    }
  }
  UNSAFE_componentWillMount =()=>{
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    else{
      this.setState({display2:'none',display1:'flex'})

    }
    global.flagEn = 'flex';
    global.flagAr = 'none';
    global.flag = 'none';
    global.flag1 = 'none';
  }
      render () {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
         <ScrollView >
         
          <View style={{display:this.state.display1 }}>
          <View style={{ width:'100%',
        height:60,
        backgroundColor:'grey',
        marginBottom:220,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                  }}> Visit your doctor </Text>
         <Image source={require('../assets/11.jpg')}
         style={{width:400, height:200, borderRadius:20, alignSelf:'center'}}/>
              </View>

             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
            else{ this.setState({flag:'none'}); };
            }}>
         <Text style={styles.txt}>Visit your doctor↴</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>
Visit your specialist doctor and do not be embarrassed by asking her what you want for your health and the health of your fetus.
          </Text>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
         }}>
Follow your doctor's instructions first for your health.
          </Text>
           </View>
           </View>

           <View style={{display:this.state.display2 }}>
          <View style={{ width:'100%',
        height:60,
        backgroundColor:'grey',
        marginBottom:220,
        alignSelf:'center'
      }}>
          <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                  }}> زيارة طبيبتك  </Text>
         <Image source={require('../assets/11.jpg')}
         style={{width:400, height:200, borderRadius:20, alignSelf:'center'}}/>
              </View>

             <View>
              <TouchableOpacity style={styles.num}
           onPress={() => {
            if (this.state.flag == 'none'){ this.setState({flag:'flex'});}
            else{ this.setState({flag:'none'}); };
            }}>
         <Text style={styles.txt}>↴الطبيبة المختصة</Text>
            </TouchableOpacity>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
            marginBottom:5,
         }}>

لاتهملي أبداً زيارة طبيبتك المختصة وعدم الحرج من سؤالها عما يدور ببالك وذلك لصحتك وصحة جنينك.          </Text>

          <Text style={{display:this.state.flag , 
           color: 'grey',
            fontSize: 22,
            fontFamily: 'Itim-Regular',
            textAlign: 'center',
         }}>
اتبعي ارشادات طبيبتك أولاً بأول فهي يهمها مصلحتك.
          </Text>
           </View>
           </View>

       </ScrollView>
      </SafeAreaView>
    );
  }
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
