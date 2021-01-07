import React from "react";
import {Text,View,StyleSheet,Dimensions, } from "react-native";
import Video from 'react-native-video';
export default class video4 extends React.Component {
 
constructor(props){
  super(props)
  this.state={
    display1:'flex',
    display2:'none'
  }
}
UNSAFE_componentWillMount = () => {
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
else{

    this.setState({display2:'none',display1:'flex'})
}
}
render(){
return(
  <View style={styles.flexview}> 
  <View>
                 <Text style={{ textAlign: 'center',
                  color: 'white',
                  backgroundColor: 'grey',
                    fontSize: 20,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display1
                 }}>
    We exercise 4 times a week, at a rate of 15 minutes a day
    </Text>

    <Text style={{ textAlign: 'center',
                  color: 'white',
                  backgroundColor: 'grey',
                    fontSize: 20,
                    fontFamily: 'Amiri-BoldItalic',
                    display:this.state.display2
                 }}>
نمارس الرياضة 4 مرات في الأسبوع ، بمعدل 15 دقيقة في اليوم
    </Text>
  </View>
<View style={styles.container}>
      <Video 
      source={require('../assets/videos/ex4.mp4')}
       ref={(ref) => {
         this.player = ref
       }}          // Store reference
       controls={true}
       resizeMode= "contain"
       style={styles.backgroundVideo} 
       />
     </View>
     </View>
);
}
}
const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center",
  width: '100%',
  height: 100,
},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-200,
    },
});