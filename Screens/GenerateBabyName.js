import React, { Component } from 'react'
import {ImageBackground,View,Text,TouchableOpacity,Image} from 'react-native'

export default class GenerateName extends Component{
  constructor(props){
    super(props);
    this.state={
      names:[],
      r:0,
      names1:[],
      r1:0,
    }
    this.getBoysNames;
    this.getGirlsNames;
  }
  data = [];
  data1 = [];

  /*componentWillMount=()=>{
  
  }*/
  getBoysNames = async () => {
    let url = 'http://192.168.1.209:8082/getBoysNames/' ;

    fetch(url, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          //  alert('1');
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              //  alert(json.result.length);
              this.data.push(json.result[t].name);
          

            }
            this.setState({r: json.result.length});
          }
          this.setState({names: this.data});
          // alert(this.state.posts[0].post);
              var random=Math.floor(
      Math.random()*this.state.r
    )
    alert(this.state.names[random]);

        }
      });



    //alert(this.data[0]);
  };

  getGirlsNames = async () => {
    // alert("hell");
    let url = 'http://192.168.1.209:8082/getGirlsNames/';

    fetch(url, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          //  alert('1');
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              //  alert(json.result.length);
              this.data1.push(json.result[t].name);
          

            }
            this.setState({r1: json.result.length});
          }
          this.setState({names1: this.data1});
          // alert(this.state.posts[0].post);
          var random=Math.floor(
            Math.random()*this.state.r1
          )
          
          alert(this.state.names1[random]);
        }
      });



    //alert(this.data[0]);
  };
  

  GenreateGirlName=()=>{
    this.getGirlsNames();
    
   // setTimeout
  
  }
  GenreateBoyName=()=>{
   this.getBoysNames();


  }
   

  render(){
    return(
      <View>
         <View
         style={{
           width:'100%',
           height:60,
           backgroundColor:'lightblue',
           justifyContent: 'center',
            alignItems: 'center',
         }}
         >
       <Text
       style={
         {
           color:'white',
           fontSize:30,
           fontFamily:'CourierPrime-Bold'
         }
       }
       
       > Get A Name</Text>
     </View>



        <ImageBackground 
            style={{
          width: '100%',
          height: '100%',
         // resizeMode: "cover",
     //     justifyContent: 'center',
            alignItems: 'center',
           // justifyContent:'space-around'
        }}
 source={ require( '../assets/images/backGroundGeneate.jpg')}  
       >

  


     <TouchableOpacity
     onPress={this.GenreateBoyName}
     style={{
       flexDirection:'row-reverse',
       backgroundColor:'lightblue',
       width:200,
       height:70,
       //marginBottom:500,
       marginTop:200,
       borderRadius:100,
       justifyContent:'space-between'
     }}
     >
   
   <Image
   style={{
    width:50,
       height:70,
   }}
       source={require('../assets/images/‏‏itsaboy.jpg')}

      />
    <Text
    style={{
      color:'white',
      fontSize:25,
      alignSelf:'center',
      marginLeft:20
    }}
    >
      Generate
    </Text>
     </TouchableOpacity>
  

     <TouchableOpacity
     onPress={
       this.GenreateGirlName
     }
     style={{
       flexDirection:'row-reverse',
       backgroundColor:'pink',
       width:200,
       height:70,
      // marginBottom:500,
      marginTop:100,
       borderRadius:100,
       justifyContent:'space-between'
     }}
     >
   
   <Image
   style={{
    width:50,
       height:70,
   }}
   source={require('../assets/images/girl.jpg')}       />
    <Text
    style={{
      color:'white',
      fontSize:25,
      alignSelf:'center',
      marginLeft:20
    }}
    >
      Generate
    </Text>
     </TouchableOpacity>





        </ImageBackground>


        
      </View>
    )
  }









}