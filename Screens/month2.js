import React, {Component} from 'react';
import {StyleSheet,Text, View,SafeAreaView,Image,ScrollView,TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class month2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      flagEn: global.flag ,
      flagAr: global.flag ,
      flag: global.flag ,
      display1:'flex',
      display2:'none',
      flag:'none'
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
      render () {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
        <ScrollView>
   
          <View style={{display:this.state.display1 }}>
          <View>
         <Image source={require('../assets/month2.jpg')}
style={{width:400, height:220, borderRadius:30, marginTop:20, alignSelf:'center'}} />
                    
      <Text style={{ textAlign: 'center',
                    fontSize: 30,
                    marginTop:20,
                    fontFamily: 'Itim-Regular',
                   }}>Second Month </Text>
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('baby2')} >
           <Text style={styles.txt}> Your fetus</Text>
        </TouchableOpacity>       
         </View>

             <View style={styles.flexview}> 
            <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('mother2')} >
          <Text style={styles.txt}> Your health care </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('check2')} >
          <Text style={styles.txt}> Your checks</Text>
        </TouchableOpacity>
          </View>



          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('pregnant2')} >
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
          <View>
         <Image source={require('../assets/month2.jpg')}
style={{width:400, height:220, borderRadius:30, marginTop:20, alignSelf:'center'}} />
                    
      <Text style={{ textAlign: 'center',
                    fontSize: 30,
                    marginTop:20,
                    fontFamily: 'Itim-Regular',
                   }}>الشهر الثاني </Text>
              </View>

              <View style={styles.flexview}> 
        <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('baby2')} >
           <Text style={styles.txt}> جنينك</Text>
        </TouchableOpacity>       
         </View>

             <View style={styles.flexview}> 
            <TouchableOpacity style={styles.num}
     onPress={() => this.props.navigation.navigate('mother2')} >
          <Text style={styles.txt}>حالتك الصحية  </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.flexview}>
          <TouchableOpacity style={styles.num}
         onPress={() => this.props.navigation.navigate('check2')} >
          <Text style={styles.txt}> فحوصاتك</Text>
        </TouchableOpacity>
          </View>


          <View style={styles.flexview}>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('pregnant2')} >
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
    width: '74%', 
    borderWidth:1,
    borderColor: 'mediumvioletred',
    height: 50,
   backgroundColor: 'mediumvioletred',
    alignItems: 'center',
    justifyContent: 'center',
     marginTop:20,
     borderRadius:50
  },
  txt: {
   alignItems: 'center',
   color: 'white',
   fontSize: 18,
   fontFamily: 'Amiri-BoldItalic',
  },
});
