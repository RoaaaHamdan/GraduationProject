import React , {Component} from 'react'
import {Text,View,TouchableOpacity,TextInput,Image,ScrollView} from 'react-native'

export default class Month1 extends Component{
    constructor(props){
        super(props);
        this.state={
            b1:'',
            b2:'',
            date:'',
            gen:this.props.route.params.gender 
        }
    }
    UNSAFE_componentWillMount=()=>{
      if (this.state.gen =='f'){
        this.setState({b1:'pink',b2:'mistyrose'});
      }else {
        this.setState({b1:'midnightblue',b2:'lavender'});
      }
      }

    render (){
        return(
            <ScrollView
                          style={{
                              backgroundColor:this.state.b2
                          }}
            >

            <View 
            style={{
                backgroundColor:this.state.b2,
                width:'100%',
                height:70,
                justifyContent:'center',
                alignItems:'center'
            }}>
<Text
style={{
    color:'white',
    fontSize:25,
    fontFamily:'Itim-Regular'
}}

>
    Month One 
</Text>
            </View>




            </ScrollView>
        )
    }

}