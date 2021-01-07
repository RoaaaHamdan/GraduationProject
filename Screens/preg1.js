import React, { Component,useEffect } from 'react';
import {View, StyleSheet ,TouchableOpacity, Text, Image,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class  Pr1 extends Component{
  constructor(props){
    super(props);
    this.state={
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
  render(){
    return (
      <View style={styles.container}>
         <View style={{ marginTop:30}} >
           <Image source={require('../assets/preg.jpg')}
     style={{width:300, height:300, borderRadius:100, alignSelf:'center'}} />

              <Text style={{
             marginBottom: 10,
              marginTop:15,
              textAlign: 'center',
              color: 'hotpink',
              fontSize: 33,
              fontFamily: 'Itim-Regular-bold',
              display:this.state.display1
            }}>  Nine months </Text>

<Text style={{
             marginBottom: 10,
              marginTop:15,
              textAlign: 'center',
              color: 'hotpink',
              fontSize: 33,
              fontFamily: 'Itim-Regular-bold',
              display:this.state.display2
              
            }}>  تسعة شهور </Text>

          
          <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',display:this.state.display1
      }}> 
      
       Follow the changes that happen to you and your baby during pregnancy first-hand.
      </Text>



      <Text style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',display:this.state.display2
      }}> 
      
      اتبعي التغييرات التي تحدث لك ولطفلك أثناء الحمل مباشرة.      </Text>
            </View>
        
        <View  style ={{flexDirection:'row' ,//justifyContent:'flex-start',
         alignItems:'center',
         backgroundColor:'pink',
         width:'100%',
         height:40}}> 
        <TouchableOpacity
           onPress={() => this.props.navigation.navigate('pregnant2')} >
                     <Icon name="chevron-right" size={40} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:20,
                       alignSelf:'flex-start'
                     }}
                      />
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('MainUserHome')} >
                     <Icon name="chevron-left" size={40} color="black"
                     style={{
                       width:50,
                       height:50,
                       marginTop:20,
                       //alignSelf:'flex-end',
                       marginLeft:Dimensions.get('window').width-100
                     }}
                      />
         </TouchableOpacity>
         </View>
     
       
        </View>
    );
  }

  }
// Pr1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'pink',
  },
});