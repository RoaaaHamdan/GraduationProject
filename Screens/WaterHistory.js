import React ,{Component} from 'react'
import {Text,  FlatList,Dimensions, TextInput,ScrollView , View,TouchableOpacity} from 'react-native'
import {Header} from 'react-native-paper'

export default class waterHistory extends Component {
   constructor(props){
       super(props);
       this.data=[];
       this.state={
           history:[],
           userName:global.username,
           display1:'flex',
           display2:'none'
       }
   }
 
   UNSAFE_componentWillMount() {
    this.getHistory();
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    else {
      this.setState({display2:'none',display1:'flex'})
    
    }
  }
  getHistory = async () => {
    // alert("hell");
    let getWaterHistory = 'http://192.168.1.209:8082/getWaterHistory/' + this.state.userName;

    fetch(getWaterHistory, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              //  alert(json.result.length);
              this.data.push({date:json.result[t].Datee,value:json.result[t].waterValues});
            }
          }
          this.setState({history: this.data});
        }
      });



  };
  render(){
      return(

<View

style={{
backgroundColor:'lavender',
width:Dimensions.get('window').width,
height:Dimensions.get('window').height
}}
>

<View
style={{
    backgroundColor:'midnightblue',
    height:70,
    justifyContent:'center',
    alignItems:'center'
    
}}
>
<Text
style={{
    fontSize:25,
    color:'white',
    fontFamily:'Amiri-Bold',
    display:this.state.display1
}}
>

    My History 
</Text>
<Text
style={{
    fontSize:25,
    color:'white',
    fontFamily:'Amiri-Bold',
    display:this.state.display2
}}
>

كم شربت خلال الايام الماضية ؟</Text>


</View>
<FlatList
style={{
    
marginTop:50
}}

            data={this.state.history}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
                <View
                 style={{
                     //marginTop:20,
                     borderBottomColor:'midnightble',
                     borderBottomWidth:1,
                     borderTopColor:'midnightble',
                     borderTopWidth:1,
                     height:70,
                     justifyContent:'center',
                     paddingRight:40

                     
                 }}
                
                >
      <Text
                style={{
          

                }}>{` ${item.date} `} : {` ${item.value} `}ml   </Text>
                </View>
        
            )}
          />
</View>


      )
  }

}

