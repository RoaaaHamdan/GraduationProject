import React, {Component} from 'react'
import { Text, TextInput, View,ScrollView, TouchableOpacity,Image,Dimensions,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

export default class Memeory2 extends Component {
   constructor(props){
       super(props);
       this.data=[];
       this.data2=[];
    this.state={
        photos:[],
        id:global.baby,
        id2:global.usernamr,
        display :'none',
        title:'',
        photo:'',
        avatarSource:null,
        immage:'',
        flag:0,
        newMem: '',
background:''
    }
    
    }


    componentWillMount=()=>{
      if (    global.g=='m'   ){
        this.setState({background:'midnightblue',b2:'lavender'})
      }
      else {
        this.setState({background:'pink',b2:'mistyrose'})

      }
           // alert("hell");
   this.getMem();
    }
    getMem(){
      this.data=[];
      let url23 = 'http://192.168.1.209:8082/GetMem/' + this.state.id;

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
            this.setState({photo:this.data[0].photo});
  
            // alert(this.state.posts[0].post);
          }
        });
    }
    selectImage=()=>{
      if (this.state.title==''){

        alert('enter the title please!')
      }else{
        const id=this.state.id;
        //const { navigation } = this.props;  
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
         const data = new FormData();
         data.append('name', 'avatar');
         data.append('uri', response.uri);
         data.append('id', id);
      
         data.append('fileData', {
          uri : response.uri,
          type: response.type,
          name: response.fileName
         });
         const config = {
          method: 'POST',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data',
          },
          body: data,
         };
        fetch("http://192.168.1.209:8082/api/v2/upload"+'/'+this.state.title,config)
         .then((checkStatusAndGetJSONResponse)=>{       
           console.log(checkStatusAndGetJSONResponse);
        //   this.setState({photos:[]});
       this.getMem();
       this.props.writeText(this.state.title)
       this.props.writeText(this.state.avatarSource)

       this.setState({title:'',avatarSource:null})
         
         }).catch((err)=>{console.log(err)});
      
         this.setState({avatarSource:response.uri,flag:1});
         //this.setState({newMem:[photo :response.uri]})
        // alert(this.state.avatarSource)
        }
        })
      
      }
    
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
               backgroundColor:this.state.background,
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
     Hello Baby {this.state.id}
 </Text>


           </View>


<View>

    <TouchableOpacity
    style={{
        borderBottomColor:this.state.background,
        borderBottomWidth:2,
alignSelf:'center',
marginBottom:50,
marginTop:50

    }}
    onPress={
        ()=> {

            if (this.state.display =='none'){
        this.setState({display:'flex'})

            }
            else {
        this.setState({display:'none'})

            }
        }
    }
    >
    <Text
    style={{
      fontFamily:'Lobster-Regular',
      fontSize:17
    }}
    >
        Add new One!
    </Text>

    </TouchableOpacity>
    <View
    style={{
        width:'80%',
        height:300,
        alignSelf:'center',
        borderColor:this.state.background,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        display:this.state.display

    }}
    >
      <TextInput
      placeholder={'add a title'}

      onChangeText={(v)=>this.setState({title:v})}
 style={{
     borderBottomColor:this.state.background,
     opacity:.6,
     borderBottomWidth:2,
     width:'60%',
     marginBottom:20

 }}
 //clearButtonMode='always'

       />

       <View
       style={{
           width:'80%',
           height:'50%',
           borderColor:this.state.background,
           borderWidth:2,
           opacity:.7,
           borderRadius:20
       }}
       >
        <Image  source={{uri:this.state.avatarSource}}    
             
             style={{
              width:'100%',
              height:'100%',
              alignSelf:'center',
            //  borderRadius:200
          
              
          }}
          
              
            />

       </View>
       <TouchableOpacity
  style={{}}
  onPress={this.selectImage}>


<Icon name="camera" size={25} color={this.state.background}
style={{
  marginTop:10
}}
 />

  </TouchableOpacity>
 
    </View>
</View>
 
 
<View

style={{
    width:'100%',
    height:'100%',
    backgroundColor:this.state.b2,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
alignSelf:'center' ,
//marginBottom:40,
marginTop:40,

}}
>
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
      fontFamily:'Itim-Regular'
                  },
                ]}>{` ${item.title} ` }</Text>
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
<Text
style={{
  borderBottomColor:this.state.background,
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



          </ScrollView>
        )
    }
   
   
     
}