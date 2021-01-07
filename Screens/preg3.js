import React, {Component} from 'react';
import { StyleSheet,Text,View,SafeAreaView,Image,ScrollView,TouchableOpacity,} from 'react-native';

export default class Pr3 extends Component{
  constructor(props){
    super(props);
    this.state={
      display1:'flex',
      display2:'none',
      age:0,
      date:'',
      ageString:'',
      display11:this.props.route.params.d1,
      display22:this.props.route.params.d2,
      display3:this.props.route.params.d3,
      display4:this.props.route.params.d4,
      display5:this.props.route.params.d5,
      display6:this.props.route.params.d6,
      display7:this.props.route.params.d7,
      display8:this.props.route.params.d8,
      display9:this.props.route.params.d9,
      display10:'none',
      display111:'none',
      display12:'none',
      username:global.username


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
  //this.calage();
  }


 


    }
  render(){
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
       <ScrollView>
       <View>
       <Image source={require('../assets/pr.jpg')}
       style={{width:400, height:280, borderRadius:40 , marginTop: 10,alignSelf:'center' }}/>
      <Text style={{ textAlign: 'center',
                    fontSize: 30,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display2
                  }}>لمتابعة حملك أول بأول </Text>
        
             <Text style={{ textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display2
                  }}>يرجى اختيار شهر حملك الحالي </Text>


<Text style={{ textAlign: 'center',
                    fontSize: 20,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display1
                  }}>To keep track of your pregnancy firsthand</Text>
        
             <Text style={{ textAlign: 'center',
                    fontSize: 18,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display1
                                      }}> Please select your current month of pregnancy </Text>
              </View>

       <View style={styles.flexview}> 
      <TouchableOpacity style={styles.num,
      {
        display:this.state.display11,
        width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
      }}
       onPress={() => this.props.navigation.navigate('month1')} >
        <Text style={styles.txt}> 1  </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
        ,{        display:this.state.display22,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}
        }
        onPress={() => this.props.navigation.navigate('month2')} >
          <Text style={styles.txt}> 2 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
        
        ,{        display:this.state.display3,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}
        }
      onPress={() => this.props.navigation.navigate('month3')} >
          <Text style={styles.txt}> 3  </Text>
        </TouchableOpacity>       
          </View>


          <View style={styles.flexview}>
           <TouchableOpacity style={styles.num
           
           ,{        display:this.state.display4,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}}
         onPress={() => this.props.navigation.navigate('month4')} >
          <Text style={styles.txt}> 4 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
        
        ,{        display:this.state.display5,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}
        
        }
       onPress={() => this.props.navigation.navigate('month5')} >
          <Text style={styles.txt}> 5 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
        
        ,{        display:this.state.display6,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}}
       onPress={() => this.props.navigation.navigate('month6')} >
          <Text style={styles.txt}> 6 </Text>
        </TouchableOpacity>
          </View>


          <View style={styles.flexview}>
          <TouchableOpacity style={styles.num
                  ,{        display:this.state.display7,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}
          }
           onPress={() => this.props.navigation.navigate('month7')} >
          <Text style={styles.txt}> 7 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
                ,{        display:this.state.display8,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
}}
       onPress={() => this.props.navigation.navigate('month8')} >
          <Text style={styles.txt}> 8 </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.num
                ,{        display:this.state.display9,  width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
} }
           onPress={() => this.props.navigation.navigate('month9')} >
          <Text style={styles.txt}> 9 </Text>
        </TouchableOpacity>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  }

}
// Pr3;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  num: {
    width: '25%', 
    borderWidth:1,
    borderColor: 'black',
     height: 60,
   //backgroundColor: 'pink',
    justifyContent: 'center',
    borderRadius: 40,
     marginTop:15,
  },
  txt: {
   textAlign: 'center',
   color: 'grey',
   fontSize: 40,
   fontFamily: 'Amiri-BoldItalic',
  },
});