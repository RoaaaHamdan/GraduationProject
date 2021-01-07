import React , {Component} from 'react'
import {View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
FlatList,

}
 from 'react-native'
 import Icon from 'react-native-vector-icons/FontAwesome';
import Prompt from 'react-native-input-prompt'
import { onChange } from 'react-native-reanimated';
// /import Modal from 'react-native-modal';
 
export default class Montada extends Component{
  constructor(props){
    super(props);
    this.data = [];
   this.data2=[];
    this.state={
      posts:[],
      Comments:[],
      likes:[],
      newPost:'',
      id:global.username,
  //  id:'Hyam',
      displayAddPost :'none',
      idPost:'',
      comment:'',
      visible:false,
      id2 :'',
      display1:'flex',
      display2:'none',
      v1:''
      

    }
  }

  showComment=(v)=>{
  //  ReactFindViewUtil.findView(CustomView, v).setNativeProps({style: {width:100 , height:100,backgroundColor:'black'}});;
this.setState({visible:true, id2:v})  
//alert(v)

}


  addComment(id){
   if(this.state.comment==''){
     alert('أدخل تعلقياَ من فضلك !')
   }else {
    let addComment ='http://192.168.1.209:8082/addComment/' +
    id +
    '/' +
    this.state.comment+'/'+this.state.id; 
  fetch(addComment, {method: 'POST', body: null})
    .then((response) => response.json)
    .then((json) => {
      if (json.result === 'failed') {
        alert('Done');
      } else if (json.result == 'success') {
        alert('Done');
      }
    });
   }

   


  }

  seend = ()=>{
    this.setState({idPost:this.state.idPost+1})
    let month = new Date().getMonth()+1;
    let date = new Date().getFullYear()+'-'+month+'-'+new Date().getDate()+"  " +
    new Date().getHours()+':'+new Date().getMinutes();
    if (this.state.newPost==''){
      alert('من فضلك أضف مرفقاً');
    }

    else{


      let addPost ='http://192.168.1.209:8082/addPost2/' +
      this.state.newPost +
      '/' +
      this.state.id+'/'+date+'/'+this.state.idPost; 
    fetch(addPost, {method: 'POST', body: null})
      .then((response) => response.json)
      .then((json) => {
        if (json.result === 'failed') {
          alert('Done');
        } else if (json.result == 'success') {
          alert('Done');
        }
      });
    }
    this.setState({newPost:''})
  }
  getPosts(){
      this.data=[];
    let getPost = 'http://192.168.1.209:8082/getPosts2/' ;
    fetch(getPost, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          if( json.result.length==0){
            this.setState({idPost:0})
          }
         // alert( json.result.length)
          var t;
this.setState({idPost:json.result[json.result.length-1].id_p+1});

//alert(this.state.idPost)
          for (t = json.result.length-1; t>=0; t--) {
            {
              this.data.push({
               id : json.result[t].id,
               post:json.result[t].post,
               date:json.result[t].date,
               id_p:json.result[t].id_p,
              });
            }
          }
    //      alert(this.data)
          this.setState({posts: this.data});
        }
      });

  }
  componentDidMount(){
    //alert()
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex',v1:'أضف سؤالاً'})
    }
    else{
      this.setState({display2:'none',display1:'flex',v1:'Add new question'})

    }
    this.getPosts();
  }

  showComments=(id,postt)=>{
this.data2=[];
//alert(this.data2)
    let getComments = 'http://192.168.1.209:8082/getComments/'+id ;
    fetch(getComments, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
            if (json.result.length == 0){
                alert ('لا يوجد تعليقات بعد على هذا البوست كن الأول !')
            }
          var t;
this.setState({idPost:json.result[json.result.length-1].id_p+1});
          for (t = json.result.length-1; t>=0; t--) {
            {              this.data2.push({
                comment : json.result[t].comment,
                username: json.result[t].userName
              });            }          }
          this.setState({Comments: this.data2});
          this.props.navigation.navigate('showComments',{
              comments:this.state.Comments,post:postt
          })
                }
      });


  }
  render(){
    return(
      <SafeAreaView
      style={{
        flex:1,
        backgroundColor:'white'
      }}
      >
<View
style={{
  height:70,
  backgroundColor:'midnightblue',
    justifyContent:'center',
    alignItems:'center',

}}
>


  <Text
  
style={{
  color:'white',
  fontSize:20,
  fontFamily:'Amiri-Italic',
  display:this.state.display2
}}  
  >
    الملتقى
  </Text>
  <Text
  
  style={{
    color:'white',
    fontSize:20,
    fontFamily:'Amiri-Italic',
    display:this.state.display1
  }}  
    >
The forum
    </Text>

</View>

  <TouchableOpacity
  style={{
    marginTop:50,
  //  alignSelf:''
  marginRight:20
  }}
  
onPress={()=>
{
  if (this.state.displayAddPost=='none'){
    this.setState({displayAddPost:'flex'})
  }
  else if (this.state.displayAddPost=='flex'){
    this.setState({displayAddPost:'none'})
  }
}}
>
  <Icon name="plus" size={30} color="black"

   />
</TouchableOpacity>


  <View
  
  style={{
    borderColor:'midnightblue',
    backgroundColor:'lavender',
    borderWidth:2,
    width:'80%',
    height:100,
    alignSelf:'center',
    marginTop:20,
    borderRadius:10,
    display:this.state.displayAddPost
  }}
  >

<TextInput
placeholder={this.state.v1}
onChangeText={(v)=>this.setState({newPost:v})}
value={this.state.newPost}
></TextInput>
  </View>
  <TouchableOpacity
  
  style={{
    display:this.state.displayAddPost,
    alignSelf:'flex-start',
    marginLeft:30,
    marginTop:20,
  backgroundColor:'midnightblue',
  width:80,
  height:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20

  }}
  onPress={()=>{

    this.seend();
    this.getPosts();
  }
  }
  >
    <Text
    style={{
      color:'white',
      display:this.state.display2
    }}
    >
     أضف
    </Text>
    <Text
    style={{
      color:'white',
      display:this.state.display1
    }}
    >
     Add
    </Text>
  </TouchableOpacity>



  <ScrollView>
  

  <FlatList
            data={this.state.posts}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (

    <ScrollView
    
    style={{
                  borderColor:'midnightblue',
                  backgroundColor:'lavender',
                  borderWidth:2,
                //  height:170,
                  width:'80%',
                  alignSelf:'center',
                  marginTop:37,
                  borderRadius:20,

                }}
    >
                <Text
                style={{
                  padding:10
                }}
           >{` ${item.id} `}</Text>
                  <Text
                style={{
                  padding:10
                }}
           >{` ${item.post} `}</Text>
<Text
style={{
  borderBottomColor:'midnightble',
  borderWidth:2,
  borderRightColor:'lavender',
  borderLeftColor:'lavender',
  borderTopColor:'lavender',
  width:'100%'
}}
>

</Text>
           <Text>Posted at =>
           {` ${item.date} `}
           </Text>
           <Text
style={{
  borderTopColor:'midnightble',
  borderWidth:2,
  borderRightColor:'lavender',
  borderLeftColor:'lavender',
  borderBottomColor:'lavender',
  width:'100%'
}}
>

</Text>
           <View
           style={{
             flexDirection:'row'
           }}
           >
           <TouchableOpacity
                onPress={()=>{
       this.showComment(`${item.id_p}`)
     }}
     
           >
           <Icon name="comment" size={30} color="white"
           
           style={{
             padding:7
           }}
            />
           </TouchableOpacity>

     <TouchableOpacity
    onPress={()=>{
      this.showComments(`${item.id_p}`,`${item.post}`)
    }}
     >
      <Icon name="eye" size={30} color="white"
           
           style={{
             padding:7
           }}
            />
      </TouchableOpacity>
           </View>
 

           <Prompt
    visible={this.state.visible}
    title="add a comment"
    placeholder={'Type Something'}
    onCancel={() =>
        this.setState({
            text: "User Cancelled!",
            visible: !this.state.visible
        })
       // onChange=
    }
    onChangeText={(v)=>this.setState({comment:v})}
    onSubmit={text =>
     {
      this.setState({
            text: "User submitted: " + text,
            visible: !this.state.visible,
            comment:text,
        });
    //    alert(`${item.id_p}`)
    this.addComment(this.state.id2);
     }
    }
/>
    </ScrollView>
    
            )}
          />
    
  </ScrollView>

      </SafeAreaView>
    )
  }


 }

