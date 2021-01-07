import React, { Component } from 'react';
import { View, Text, TouchableOpacity,ScrollView,ImageBackground,Dimensions  } from 'react-native'
//import Slider from '@react-native-community/slider';
//rn-vertical-slider
import VerticalSlider from 'rn-vertical-slider'


export default class BaByDrink extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.data2 = [];
    this.state = {
      dinkValue: 10,
      username:this.props.route.params.id,
      drinkValues:[],
      drinkValues1:[],
    }



    /**
     *  

    this.state={
      drinkValues:[],
      drinkValues1:[],
      userName:'roaa1'


    }
     */
  }
  componentDidMount = () => { 
    //const windowHeight = Dimensions.get('screen').height;
    //this.setState({ height: windowHeight })
    //alert(this.state.heigt)
    let url23 = 'http://192.168.1.209:8082/getdrinkValues/' + this.state.username;
    fetch(url23, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          for (t = 0; t < json.result.length; t++) {
            {
          this.data2.push(t);
              this.data.push(json.result[t].drinkValue);
             // alert (this.data[t])
            }

          }
          this.setState({ drinkValues: this.data});

          this.setState({ drinkValues1: this.data2 });

          
        //  alert(this.state.drinkValues[1])

             // alert(this.state.events[0].end);

          // alert(this.state.posts[0].post);
        }
      });

  }

  send = () => { 
  
  let send =
        'http://192.168.1.209:8082/drink1/' +
        this.state.username +
        '/' +
        this.state.dinkValue; //+
      //  '/' +
      //const data = new FormData ();
      // data.append ('pass', this.state.newPass);
      fetch(send, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        });

  }
  render() { 
        const screenhHeight = (Dimensions.get('window').height);
        const screenWidth = (Dimensions.get('window').width);

    return (
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'pink'
            
        }}>
          <Text
            style={{
              color: 'white',
              fontSize:30
            }}
          >
            تابعي غذاء طفلك 
            
          </Text>
         </View>

        <ImageBackground
        style={{
          width: '100%',
          height: screenhHeight-70,
          justifyContent: 'center',
            alignItems: 'center',
        }}
        
          source={require('../assets/images/roaa.jpg')}
        >

<TouchableOpacity 
style={{
  backgroundColor:'pink',
  width:50,
  height:100,
  borderRadius:40,
  alignSelf:'flex-end',
  marginLeft:30,
  justifyContent:'center',
  alignItems:'center'
}}
onPress={
()=> this.props.navigation.navigate('chartBaby',{
  drinkValues:this.state.drinkValues,drinkValues1:this.state.drinkValues1
})  }
>
 <Text
 style={{
   color:'white',
   fontSize:17,
   alignSelf:'center'
 }}
 >
   go {'\n'}to {'\n'}chart{'\n'}
 </Text>
</TouchableOpacity>

          <View style={{
            marginTop: 170,
            marginRight:-90 ,
          //  flexDirection:'row-reverse'
          }}>
<VerticalSlider
          value={1}
          disabled={false}
          min={0}
          max={500}
              onChange={(value) => {
            this.setState({dinkValue:value})
           // console.log("CHANGE", value);
          }}
         
          width={50}
          height={270}
          step={10}
          borderRadius={10}
          minimumTrackTintColor={"lightblue"}
          maximumTrackTintColor={"pink"}
          showBallIndicator
          ballIndicatorColor={"pink"}
            ballIndicatorTextColor={"white"}
          
            />
    
            </View>
      
         
          <TouchableOpacity
            style={
              {
                width: 60,
                height: 70,
                backgroundColor: 'pink',
                marginRight: screenWidth - 120,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
               // marginTop: 50,
                 // marginLeft:60
                
                

              }
              
            }
          onPress={this.send}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                
            }}
            >
            تم
             </Text>
 
          </TouchableOpacity>
 
         
        </ImageBackground>
   </ScrollView>
      
    )
  }
}