import React,{Component} from 'react'
import {View,Text,TextInput,FlatList,TouchableOpacity}from 'react-native'
export default class cart extends Component{
    constructor(props){
        super(props);
        this.state={
            products:this.props.route.params.products,
            total:this.props.route.params.total,
        }
    }


    render(){
        return(
            <View
            style={{
                backgroundColor:'white',
                height:'100%'
            }}
            >
            <View 
            style={{
                height:70,
                width:'100%',
                backgroundColor:'pink',
                justifyContent:'center',
                alignItems:'center',
                marginBottom:50

            }}>
           <Text
           style={{
               color:'white',
               fontSize:25,
               fontFamily:'Amiri-BoldItalic'
           }}
           >
               Your Cart !
           </Text>
            </View>
   <FlatList
            data={this.state.products}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
            <View
            style={{
                borderBottomColor:'lightblue',
                borderBottomWidth:3,
            }}
            >
            <Text
            style={{
              
                alignSelf:'center',
                marginTop:20,
             marginBottom:20
            }}
            >
               Product => {`${item.name}`} && {'\t'}Price => {`${item.price}`} 
            </Text>
          <TouchableOpacity>
              <Text
              style={{
                  alignSelf:'center'
              }}>
                  Delete item
              </Text>
          </TouchableOpacity>
            </View>
            )}
            
          />
      


          <Text
         style={{
            alignSelf:'center',
               // marginTop:20,
             marginBottom:80
         }}         >
            total => {this.state.total}
         </Text>
       
        

         <TouchableOpacity
         style={{
            alignSelf:'center',
            marginBottom:110,
            backgroundColor:'pink',
            width:150,
            height:60,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:20
         }}
         >
             <Text>
                 Send
             </Text>
         </TouchableOpacity>
            </View>
         
        )
    }
}