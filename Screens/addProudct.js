import React,{Component} from 'react'
import {View,Text,TextInput,ScrollView,TouchableOpacity,SafeAreaView,Image,ImageBackground} from 'react-native'
import ImagePicker from 'react-native-image-picker';

export default class addProd extends Component{
    constructor(props){
      
        super(props);
        this.state={
            price:'',
            Phename: global.Pher,
            Proname:'',
            ProductName:'',
            display1:'flex',
            display2:'none',      avatarSource:''


        }
        this.data;
        this.config;
    }
    UNSAFE_componentWillMount = () => {
        if (global.flagA =='Arab'){
          this.setState({display1:'none',display2:'flex'})
        }}

        selectImage=()=>{
          const id=global.username;
        ImagePicker.showImagePicker( (response) => {
          console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
        }else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
        }else {
         console.log('User selected a file form camera or gallery', response); 
         this.data = new FormData();
         this.data.append('name', 'avatar');
         this.data.append('uri', response.uri);
         this.data.append('id', id);
      
         this.data.append('fileData', {
          uri : response.uri,
          type: response.type,
          name: response.fileName
         });
  
         this.setState({avatarSource:response.uri,flag:1});
        // alert(this.state.avatarSource)
        }
        })
      
      }

Send=()=>{
    if (this.state.avatarSource==''||this.state.price==''||this.state.ProductName==''){
        if (global.flagA =='Arab'){

            alert('املأ جميع الحقول من فضلك')
        }
        else {
            alert('please fill all data')
        }
    }
  this.config = {
    method: 'POST',
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'multipart/form-data',
    },
    body: this.data,
   };
  fetch("http://192.168.1.209:8082/api/v1/uploadProduct/"+ global.Pher+'/'+this.state.price+'/'+this.state.ProductName,this.config)
   .then((checkStatusAndGetJSONResponse)=>{       
     console.log(checkStatusAndGetJSONResponse);
     this.setState({ProductName:'',price:'',avatarSource:null})
   }).catch((err)=>{console.log(err)});

}


render(){
    return(
        <SafeAreaView
        style={{
          backgroundColor:'white'
        }}
        >

            <View
            style={{

                backgroundColor:'midnightblue',
                justifyContent:'center',
                alignItems:'center',
                height:70,
                
            }}
            >

<Text

style={{
    color:'white',
    fontSize:25,
    fontFamily:'Itim-Regular',
  display:this.state.display1,  
}}
>
Add a product

</Text>



<Text

style={{
    color:'white',
    fontSize:25,
    fontFamily:'Itim-Regular',
  display:this.state.display2,  
}}
>
اضافة منتج

</Text>



            </View>

            <View
style={{
  width:'80%',
  height:400,
  backgroundColor:'lavender',
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
alignSelf:'center',
marginTop:50

  
}}

>


<ImageBackground

source={{uri:this.state.avatarSource}}    
             
             style={{
              width:'100%',height:'80%'
              
              ,resizeMode: 'cover',}}
//source={require(this.state)}
>
<TouchableOpacity
style={{
  width:'100%',
 height:'100%',
 borderBottomColor:'midnightblue',
 borderBottomWidth:1,
 justifyContent:'center',
 alignItems:'center'
}}
onPress={()=>
this.selectImage()}
>

<Text
style={{
  opacity:.5
}}
>
  Add Photo 
</Text>

</TouchableOpacity>
</ImageBackground>

<View
style={{
  flexDirection:'row',
  height:'20%',
}}
>
  <TextInput
  style={{
    borderLeftColor:'midnightblue',
    borderLeftWidth:1,
    height:'100%',
    width:'50%',
    alignSelf:'center',
    

  }}
  value={this.state.ProductName}
  placeholder={'Product name'}
  onChangeText={(v)=>
  this.setState({ProductName:v})}
  ></TextInput>
  <TextInput
    placeholder={'Price'}
style={
  {
    height:'100%',
    width:'50%',
    alignSelf:'center',
  }
}
value={this.state.price}
  onChangeText={(v)=>this.setState({price:v})}
  ></TextInput>

</View>
</View>
<TouchableOpacity
style={{
  width:'40%',
  height:50,
  backgroundColor:'midnightblue',
  borderRadius:25,
  alignSelf:'center',
  marginTop:40,
  opacity:.7,
  justifyContent:'center',
  alignItems:'center'
}}
onPress={()=>
this.Send()}
>
<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:18,
  display:this.state.display1,
  color:'white',

}}
>
Send
</Text>

<Text
style={{
  fontFamily:'Itim-Regular',
  fontSize:18,
  display:this.state.display2,
  color:'white',

}}
>
ارسال</Text>


</TouchableOpacity>
<Text
style={{
  marginBottom:100
}}

>

</Text>
        </SafeAreaView>
    )
}

    
}