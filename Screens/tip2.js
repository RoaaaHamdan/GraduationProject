import React, { Component } from 'react';
import {View, StyleSheet ,TouchableOpacity,Dimensions, Text, Image} from 'react-native';

export default class tip2 extends Component{


 

constructor(props){
  super(props)

    this.state={
      tips:[],
      r:0,
   random:''
    }
  }
  data = [];


UNSAFE_componentWillMount() {
  this.gettips1();
}
gettips1 = async () => {
  let url = 'http://192.168.1.209:8082/gettips1/' ;

  fetch(url, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      {
        //  alert('1');
        var t;
        for (t = 0; t < json.result.length; t++) {
          {
            //  alert(json.result.length);
            this.data.push(json.result[t].tips11);
        

          }
          this.setState({r: json.result.length});
          var random=Math.floor(Math.random()*json.result.length);
          this.setState({tips: this.data});
          this.setState({random:random})

        }
      }
    })
    .catch((err=>{
      console.log(err);
    }));

};

render(){ 
    return (
      <View style={styles.container}>

      <View
      style={{
        justifyContent:'center',
        alignItems:'center',
        height:70,
        backgroundColor:'midnightblue'
      }}
      
      >

        <Text
        
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Amiri-Bold'
          
        }}
        
        >

          Tip1
        </Text>
      </View>
         <View style={{ marginTop:80}} >
              <Image source={require('../assets/images/wet.jpeg')}
     style={{  width:Dimensions.get('window').width-20, height:200, borderRadius:30 
     
     ,alignSelf:'center'
     }} />
             
          <Text style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'black',
              fontFamily: 'Amiri-BoldItalic',
            //  fontWeight: 'bold',
              marginTop: 40 ,
      }}>    
{this.state.tips[this.state.random]}</Text>
            </View>

            <View  style ={{flexDirection:'row' ,
            
             marginTop:20 
             }}> 
        <TouchableOpacity
          style={{
            width: '30%',
            borderWidth: 1,
            borderColor: 'midnightblue',
            height: 60,
            //marginTop: 90,
            //marginLeft: 270 ,
            alignSelf:'flex-end',

            backgroundColor: 'lightblue',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems:'center'
          //  alignContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('tip3')} >
          <Text
            style={{
           //   textAlign: 'center',
              color: 'midnightblue',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',
            //  fontWeight: 'bold',
            }}>
           Next
          </Text>
        </TouchableOpacity>
        </View>
        </View>
    )};
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'lavender',
  },
});