import React, {Component} from 'react'
import { Text, TextInput, View,ScrollView, TouchableOpacity,Image,Dimensions,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';


export default class showProduct extends Component {
   constructor(props){
       super(props);
       this.data=[];
       this.data2=[];
    this.state={
        photos:[],
        id:global.Pher,
        display :'none',
        title:'',
        photo:'',
        avatarSource:null,
        immage:'',
display1:'flex',
display2:'none'
    }
    this.dataT='';
    this.price=0;
    
    }

    addToCart(i,x){
   
         this.dataT=this.dataT+','+i;
         this.price+=parseInt(x);
     
    }
    componentWillMount=()=>{

        this.data=[];
        this.price=0;
        if (global.flagA =='Arab'){
            this.setState({display1:'none',display2:'flex'})
          }
   this.getProducts();
    }
    getProducts(){
      this.data=[];
      let url23 = 'http://192.168.1.209:8082/getProducts/' + this.state.id;

      fetch(url23, {method: 'GET', body: null})
        .then((response) => response.json())
        .then((json) => {
          {
            var t;
            for (t = 0; t < json.result.length; t++) {
              {
                //  alert(json.result.length);
                this.data.push(json.result[t]);
              }
            }
            this.setState({photos:this.data});
           // this.setState({photo:this.data[0].photo});
  
            // alert(this.state.posts[0].post);
          }
        });
    }


    render(){
        return (
          <ScrollView
          style={{
              flex:1
          }}
          
          >
           <View
           style={{
               width:'100%',
               height:70,
               backgroundColor:'midnightblue',
               justifyContent:'center',
               alignItems:'center'
           }}
           >
 <Text
 style={{
     color:'white',
     fontFamily:'Itim-Regular',
     fontSize:20
 }}
 >
     Product of  {this.state.id}
 </Text>


           </View>


<View>

  
       <FlatList
            data={this.state.photos}
            keyExtractor={(x, i) => i}
style={{

}}
            renderItem={({item}) => (
                <View>



<Text
                style={[
                 // styles.itemP,
                  {
      alignSelf:'center',
      marginTop:20,
      fontFamily:'Itim-Regular',
      fontSize:25

                  },
                ]}>{` ${item.product} ` }</Text>
<Image  source={{ uri: encodeURI("http://192.168.1.209:8082/load_image?img=" + `${item.photo}` )}}     
 encod
   
   style={{
    width:150,
    height:150,
    alignSelf:'center',
    borderRadius:29,
    marginTop:50
}}

/>

<View

style={{
    backgroundColor:'midnightblue',
    alignSelf:'center',
    width:'40%',
    height:50,
    borderRadius:25,
    marginTop:15,
    opacity:.7,
    flexDirection:'row'
}}

>

<TouchableOpacity
style={{
    width:'50%',
    height:'100%',
    borderRightColor:'white',
    borderRightWidth:2,
    justifyContent:'center',
    alignItems:'center'
}}

onPress={()=>
this.addToCart(` ${item.product} `,` ${item.price} `)}
>
          <Icon name="cart-plus" size={30} color="lavender" />


</TouchableOpacity>
<View
style={{
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'50%'
}}

>


<Text

style={{
    color:'white',
    fontFamily:'Itim-Regular',
    fontSize:20
}}
>
{` ${item.price} ` }$
</Text>
</View>

</View>

<Text
style={{
  //borderBottomColor:this.state.background,
  borderBottomWidth:2,
  width:'80%',
  alignSelf:'center'

}}
>

</Text>

                </View>
              
            )}
          />






</View>


<TouchableOpacity
style={{
    width:'50%',
    height:50,
    borderColor:'midnightblue',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:20,
    borderRadius:15,
    marginBottom:10
}}
onPress={()=>
alert(this.price)}
>

<Text
style={{
    color:'midnightblue',
    fontSize:20,
    fontFamily:'Itim-Regular',
display:this.state.display1
}}
>
Total</Text>
<Text
style={{
    color:'midnightblue',
    fontSize:20,
    fontFamily:'Itim-Regular',
display:this.state.display2
}}
>
مجموعي  </Text>
</TouchableOpacity>






<TouchableOpacity
style={{
    width:'50%',
    height:50,
    borderColor:'midnightblue',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:20,
    borderRadius:15,
    marginBottom:50
}}


onPress={()=>

            Communications.email(
              [
                global.email1
              ],
              null,
              null,
              'My Order Is =>',
              this.dataT,
            )
}
>

<Text
style={{
    color:'midnightblue',
    fontSize:20,
    fontFamily:'Itim-Regular',
display:this.state.display1
}}
>
   Send My Order
</Text>
<Text
style={{
    color:'midnightblue',
    fontSize:20,
    fontFamily:'Itim-Regular',
display:this.state.display2
}}
>
ارسل طلبي </Text>
</TouchableOpacity>
          </ScrollView>
        )
    }
   
   
     
}