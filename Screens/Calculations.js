import React,{ Component } from 'react'
import {View,Text,TouchableOpacity,TextInput,ScrollView} from 'react-native'

export default class Calculations extends Component {
  constructor(props){
    super(props);
    this.state={
      display1:'flex',
      display2:'none'
    }
  }
  componentDidMount(){
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
  }

  render () {
    return(
      <ScrollView
      style={{
        width:'100%',
        height:'100%',
        backgroundColor:'lavender',
      
      }}
      >
      <View
      style={{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:80,
        backgroundColor:'midnightblue'
      }}
      >
        <Text
        style={{
          color:'white',
          fontSize:20,
          fontFamily:'Amiri-Italic',
            alignItems:'center',
        justifyContent:'center',
        display:this.state.display1
        }}>
Some calculations and checks :)!
        </Text>
        <Text
        style={{
          color:'white',
          fontSize:20,
          fontFamily:'Amiri-Italic',
            alignItems:'center',
        justifyContent:'center',
        display:this.state.display2
        }}>
بعض الحسابات:)!
        </Text>
      </View>

<View style={{
  marginTop:50,
}}>
<TouchableOpacity
style={{
  backgroundColor:'midnightblue',
  width:'80%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:30,
  opacity:.7
}}
onPress={()=>  this.props.navigation.navigate('eyes')   
                  }
>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}>
  Eye examination
</Text>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}>
فحص النظر</Text>
</TouchableOpacity>
</View>


<View style={{
  marginTop:50,
}}>
<TouchableOpacity
style={{
  backgroundColor:'midnightblue',
  width:'80%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:30,
  opacity:.7
}}
onPress={()=>  this.props.navigation.navigate('calWei')   
                  }
//calWei
>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
  
}}>
Calculate  ideal weight  </Text>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
  
}}>
حساب الوزن المثالي  </Text>
</TouchableOpacity>
</View>

<View style={{
  marginTop:50,
}}>
<TouchableOpacity
style={{
  backgroundColor:'midnightblue',
  width:'80%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:30,
  opacity:.7
}}

onPress={()=>  this.props.navigation.navigate('Sokari')   
                  }
>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}>
Your risk of developing diabetes</Text>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}>
حساب احتمالية اصابتك بالسكري 
</Text>
</TouchableOpacity>
</View>



<View style={{
  marginTop:50,
}}>
<TouchableOpacity
style={{
  backgroundColor:'midnightblue',
  width:'80%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:30,
  opacity:.7
}}
onPress={()=>  this.props.navigation.navigate('claBMI')   
                  }

//
//
>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}>
Calculate BMI</Text>

<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}>
حساب مؤشر كتلة الجسم</Text>
</TouchableOpacity>
</View>


<View style={{
  marginTop:50,
}}>
<TouchableOpacity
style={{
  backgroundColor:'midnightblue',
  width:'80%',
  height:60,
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  borderRadius:30,
  opacity:.7
}}
onPress={()=>  this.props.navigation.navigate('calories')   
                  }
>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display1
}}>
Calculate calories</Text>
<Text 
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}>
حساب السعرات الحرارية</Text>
</TouchableOpacity>
</View>
      </ScrollView>
    )
  }

}