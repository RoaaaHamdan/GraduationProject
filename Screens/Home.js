//import 'react-native-gesture-handler';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
//import { NavigationEvents } from 'react-navigation';
import {AsyncStorage} from 'react-native';

import { Platform,
   StyleSheet,
    View, 
    Text,
    Dimensions,BackHandler,
     TouchableOpacity,Image, Alert } from 'react-native';
     console.disableYellowBox=true;

export default class Home extends Component
{
  
  constructor(){


    super();

    this.state={

      isVisible : true,

    }

  }

  Hide_Splash_Screen=()=>{

    this.setState({ 
      isVisible : false 

    });

  }
  

  componentDidMount(){
    var that = this;

    setTimeout(function(){
     


      that.Hide_Splash_Screen();
that.checkUserSignedIn()  ;
  
    }, 2000);

  
  }
  async checkUserSignedIn(){
    try {
       let value = await AsyncStorage.getItem('username');
       let value1 = await AsyncStorage.getItem('type');
       let f = await AsyncStorage.getItem('f');
       let f1 = await AsyncStorage.getItem('f1'); 
        let f2 = await AsyncStorage.getItem('f2');
       let f3 = await AsyncStorage.getItem('f3');
 if (value != null){
    global.username=value;
    global.flagp=f;
    global.flagc=f1;
    global.flaggames=f2;
    global.flagweight=f3;
    if(value1=="admin"){

        this.props.navigation.navigate('Draweradmin',{type:"admin",id:value})
      }else if(value1=="normaluser"){
      
        this.props.navigation.navigate('MainUserHome',{type:"normaluser",userName:value})
      }
      
          else if(value1=="doctor"){
      
            this.props.navigation.navigate('DrawerDoctor',{type:"doctor",id:value});
          }


}
       else {
        this.props.navigation.navigate("SignInScreen");



}
    } catch (error) {
      // Error retrieving data
    }
    this.setState({isVisible:true});

  }
  update1(){

this.setState({isVisible:true});

  }
 
    render()
    {
      
      const { navigate } = this.props.navigation;

        let Splash_Screen = (

            <View style={styles.SplashScreen_RootView}>

                <View style={styles.SplashScreen_ChildView}>

                    {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}
                    <LinearGradient
        colors={['blue','lavender','midnightblue']}
        style={{flex: 1}}
      >
      <Text
      
      style={{
          fontFamily :'Amiri-Regular',
          fontSize:30,
          color:'white'

      }}
      >

          Smart Health zone
      </Text>
      <Image source={require('../assets/images/docto.jpg')} style={styles.img} />


      </LinearGradient>
                   

                </View>



      
            </View> )
 
        
        return(
          <LinearGradient
        colors={['blue','lavender','midnightblue']}
          start={{x:0 , y:1}}
          end={{x:1,y:0}}
          style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
  <Text
      
      style={{
        fontFamily:'Amiri-Regular',
          fontSize:30,
          color:'white'

      }}
      >

          Smart Health zone
      </Text>
        
      <Image source={require('../assets/images/docto.jpg')} style={
          {
              width:200,
              height:200,
              borderRadius:80,
              borderColor:'lavender',
              borderWidth:3
          }
      } />

    </LinearGradient>
        );
        }
}

const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
       
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
       flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
    door:{
     
      paddingTop:20,
marginRight:320,
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'stretch',
        flex:1,
    },

    
    MainnContainer: {
      flex: 22,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
  
    
    ImageIconStyle: {
    //  padding: 10,
     // margin: 7,
      height: 110,
      borderRadius: 55,
      width: 110,
      borderColor: "#c71585",
      borderWidth: 3,

    
      //resizeMode: 'stretch',
    },
  
    TextStyle: {
marginLeft:10,
      color: '#c71585',
fontFamily:'sans-serif-condensed',
marginBottom:50 ,
fontSize: 30,

fontWeight: 'bold',
   },
   TextStyle1: {
    marginLeft:10,
          color: '#c71585',
    fontFamily:'sans-serif-condensed',
    fontSize: 30,
    
    fontWeight: 'bold',
       },
      
  
   
  });