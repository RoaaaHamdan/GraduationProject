import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class check1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      flagEn: global.flag ,
      flagAr: global.flag ,
      flag: global.flag ,
      display1:'flex',
      display2:'none'
    }
  }
  componentDidMount =()=>{
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }
    else if(global.flagA=='Eng'){
      this.setState({display2:'none',display1:'flex'})
    
     // global.display1='flex';
      //global.display1='none';
    
    }
      }
// const baby1 =({navigate})=> {
      render () {
    const {navigate} = this.props.navigation;
      return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        <ScrollView >
          
       


          <View style={{display:this.state.display1 }}> 
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
                  }}>First month checks </Text>
             <Image source={require('../assets/ch.jpg')}
style={{width:400, height:200 , borderRadius: 30 ,alignSelf:'center'}} />
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('check11')} >
           <Text style={styles.txt}> Pregnancy test</Text>
        </TouchableOpacity>       

            <TouchableOpacity style={styles.num}
       onPress={() => this.props.navigation.navigate('check12')} >
          <Text style={styles.txt}>TORCH test </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('check13')} >
          <Text style={styles.txt}> Folic acid test</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.num}
           onPress={() => this.props.navigation.navigate('visit')} >
          <Text style={styles.txt}>Visit a doctor</Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('month1')} >
             <Icon name="chevron-left" size={40} color="black"
               style={{
               width:50,
              height:50,
              marginTop:40,
              alignItems:'flex-end',
              marginRight:Dimensions.get('window').width-100,
              }}
              />
         </TouchableOpacity>
        </View>
        </View>





        <View style={{display:this.state.display2 }}> 
          <View style={{ width:'100%',
        height:80,
        backgroundColor:'grey',
        marginBottom:230,
        alignSelf:'center'
      }}>
      <Text style={{ textAlign: 'center',
                    fontSize: 28,
                    fontFamily: 'Amiri-BoldItalic',
                    //marginBottom:10 ,
                  }}>فحوصات الشهر الأول </Text>
             <Image source={require('../assets/ch.jpg')}
style={{width:400, height:200 , borderRadius: 30 ,alignSelf:'center'}} />
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('check11')} >
           <Text style={styles.txt}>إختبار الحمل</Text>
        </TouchableOpacity>       

            <TouchableOpacity style={styles.num}
       onPress={() => this.props.navigation.navigate('check12')} >
          <Text style={styles.txt}>TORCH فحص </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('check13')} >
          <Text style={styles.txt}> فحص حمض الفوليك</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.num}
           onPress={() => this.props.navigation.navigate('visit')} >
          <Text style={styles.txt}>مراجعة الطبيب</Text>
        </TouchableOpacity>
          </View>

          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('month1')} >
             <Icon name="chevron-left" size={40} color="black"
               style={{
               width:50,
              height:50,
              marginTop:40,
              alignItems:'flex-end',
              marginRight:Dimensions.get('window').width-100,
              }}
              />
         </TouchableOpacity>
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
    width: '40%', 
    borderWidth:1,
    borderColor: 'grey',
     height: 130,
   backgroundColor: 'burlywood',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:30,
  },
  txt: {
    textAlign: 'center', 
   color: 'white',
   fontSize: 25,
   fontFamily: 'Itim-Regular',
  },
});
