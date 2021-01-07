import React ,{Component}from 'react';
import {Text,TextInput,View,TouchableOpacity,ScrollView}from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class GamesMem extends Component {
  constructor(props){
      super(props);

  }

  render (){
      return(
          <ScrollView
          >
                            <LinearGradient
        colors={['blue','palevioletred']}
        start={{x:0 , y:1}}
          end={{x:1,y:0}}
      //  style={{flex: 1}}
      >

<View
          style={{
              height:70,
              //backgroundColor:'palevioletred',
              justifyContent:'center',
              alignItems:'center'
          }}
          >
<Text

style={{
    color:'white',
    fontSize:25
}}>
    Memeory Game
</Text>
          </View>
      </LinearGradient>
     
      <LinearGradient
        colors={['blue','palevioletred']}
          start={{x:0 , y:1}}
          end={{x:1,y:0}}
          style={{justifyContent:'center',alignItems:'center',    width:150,alignSelf:'center',
                 height:150,
                 opacity:.6,
                 marginTop:70
                 
                 }}>

              <TouchableOpacity
                     onPress={
                  ()=>this.props.navigation.navigate('Memorylevel1')

              }
              style={{
                 width:'100%',
                 height:'100%',
                 justifyContent:'center',
                 alignItems:'center'
              }}>
<Text

style={{
    color:'white',
    fontSize:20
}}
>
    6 Pictures
</Text>
              </TouchableOpacity>
          </LinearGradient>
             
       










          <LinearGradient
        colors={['blue','palevioletred']}
          start={{x:0 , y:1}}
          end={{x:1,y:0}}
          style={{justifyContent:'center',alignItems:'center',    width:150,alignSelf:'center',
                 height:150,
                 opacity:.6,
                 marginTop:70
                 
                 }}>

              <TouchableOpacity
                     onPress={
                  ()=>this.props.navigation.navigate('Memorylevel12')

              }
              style={{
                 width:'100%',
                 height:'100%',
                 justifyContent:'center',
                 alignItems:'center'
              }}>
<Text

style={{
    color:'white',
    fontSize:20
}}
>
    12 Pictures
</Text>
              </TouchableOpacity>
          </LinearGradient>
             











          <LinearGradient
        colors={['blue','palevioletred']}
          start={{x:0 , y:1}}
          end={{x:1,y:0}}
          style={{justifyContent:'center',alignItems:'center',    width:150,alignSelf:'center',
                 height:150,
                 opacity:.6,
                 marginTop:70
                 
                 }}>

              <TouchableOpacity
              onPress={
                  ()=>this.props.navigation.navigate('Memorylevel13')

              }
              style={{
                 width:'100%',
                 height:'100%',
                 justifyContent:'center',
                 alignItems:'center'
              }}>
<Text

style={{
    color:'white',
    fontSize:20
}}
>
    16 Pictures
</Text>
              </TouchableOpacity>
          </LinearGradient>
             
          </ScrollView>
      )
  }

}
