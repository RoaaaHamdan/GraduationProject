import React, { Component } from 'react';
import {View, StyleSheet ,TouchableOpacity,Dimensions, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class tip1 extends Component{


 

constructor(props){
  super(props)

    this.state={
      tips:[],
      r:0,
   random:'',
   display1:'flex',
   display2:'none'
    }
  }
  data = [];


UNSAFE_componentWillMount() {


  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
    this.gettips2();

  }
  else {
    this.setState({display2:'none',display1:'flex'})
    this.gettips1();

  }
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

gettips2 = async () => {
  let url = 'http://192.168.1.209:8082/gettips2/' ;

  fetch(url, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
      {
        //  alert('1');
        var t;
        for (t = 0; t < json.result.length; t++) {
          {
            //  alert(json.result.length);
            this.data.push(json.result[t].tips33);
        

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
          fontFamily:'Amiri-Bold',
          display:this.state.display1
          
        }}
        
        >

          Tip
        </Text>

        <Text
        
        style={{
          color:'white',
          fontSize:25,
          fontFamily:'Amiri-Bold',
          display:this.state.display2
          
        }}
        
        >

          نصيحة اليوم
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
           // borderWidth: 1,
           // borderColor: 'midnightblue',
            height: 60,
            //marginTop: 90,
            //marginLeft: 270 ,
            alignSelf:'flex-end',

           // backgroundColor: 'lightblue',
            justifyContent: 'center',
            borderRadius: 40,
            alignItems:'center'
          //  alignContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('water2')} >
       <Icon name="chevron-right" size={30} color="black"
                     
                     style={{
                       width:50,
                       height:50,
                       marginTop:20
                     }}
                      />
        
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