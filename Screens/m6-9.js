import React , {Component } from 'react'
import {Text,TextInput,View,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'

export default class month31 extends Component{
  constructor(props){
    super(props);
    this.state={
      b1:'midnightblue',
      b2:'lavender',
      display1:'none',
      display2:'none',
      display3:'none',
      display4:'none',
      display5:'none',
      display6:'none',
      display7:'none',
      display8:'none',
      display11:'flex',
      display22:'none',
    }
    if (    global.g=='m'   ){
      this.setState({b1:'midnightblue'})
    }
    else {
      this.setState({b2:'pink'})

    }
  }
  componentDidMount(){
    if (    global.g=='m'   ){
      this.setState({b1:'midnightblue',b2:'lavender'})
    }
    else {
      this.setState({b1:'pink',b2:'mistyrose'})

    }
    if (global.flagA =='Arab'){
      this.setState({display11:'none',display22:'flex'})
    }
    else {
      this.setState({display22:'none',display11:'flex'})
    
    }
  }
  render(){
    return(
      <SafeAreaView
      style={{
        flex:1,
        backgroundColor:this.state.b2,

      }}
      >

      <View
      
      style={{
        backgroundColor:this.state.b1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:70
      }}
      >
        <Text
        style={{
          color : 'white',
          fontSize:25,
          fontFamily:'Amiri-Regular',        display:this.state.display11,


        }}
        
        >
          Month 6 to  month 9
        </Text>

        <Text
        style={{
          color : 'white',
          fontSize:25,
          fontFamily:'Amiri-Regular',        display:this.state.display11,


        }}
        
        >
    من الشهر السادس حتى التاسع      </Text>
      </View>
     
    
        <ScrollView>
 

        <TouchableOpacity
      style={{
        alignSelf:'center',
        width:'50%',
        height:50,
        opacity:.7,
        backgroundColor:this.state.b1,
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30,
        marginBottom:15


      }}

onPress={
  ()=>{
    if(this.state.display2=='none'){
      this.setState({display2:'flex'})
    }
    else {
      this.setState({display2:'none'})
    }
  }
}
      >
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',        display:this.state.display11,

}}
>
Movement skills 
</Text>
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',        display:this.state.display22,

}}
>
المهارات الحركية 
</Text>
      </TouchableOpacity>
      <View
      style={{
        display:this.state.display2,
        padding:30,

      }}
      >
        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',        display:this.state.display11,

      }}
        
        >
By the end of this stage, the child can crawl, stand still, relying on solid and stable objects, and then can stand on his own. The child can also sit on his or her own without the need for supports or pillows.

He can move objects and small toys with his hands from side to side and pick up things with ease.      
        </Text>


        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',        display:this.state.display22,

      }}
        
        >
بنهاية هذه المرحلة ، يستطيع الطفل الزحف والوقوف ثابتًا والاعتماد على أشياء صلبة وثابتة ثم الوقوف بمفرده. يمكن للطفل أيضًا الجلوس بمفرده دون الحاجة إلى دعامات أو وسائد.

يمكنه تحريك الأشياء والألعاب الصغيرة بيديه من جانب إلى آخر والتقاط الأشياء بسهولة.     
        </Text>





</View>


<TouchableOpacity
      style={{
        alignSelf:'center',
        width:'55%',
        height:50,
        opacity:.7,
        backgroundColor:this.state.b1,
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30,
        marginBottom:15


      }}

onPress={
  ()=>{
    if(this.state.display3=='none'){
      this.setState({display3:'flex'})
    }
    else {
      this.setState({display3:'none'})
    }
  }
}
      >
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',     
             display:this.state.display11,

}}
>
communication skills
</Text>
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',     
             display:this.state.display11,

}}
>
مهارات التواصل</Text>
      </TouchableOpacity>
      <View
      style={{
        display:this.state.display3,
        padding:30,

      }}
      >
        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display11,

      }}
        
        >
At this stage, the child begins repeating some repeated letters, such as “Ba .. Ba .. Ma .. Da .. Da” and the mother can encourage and motivate him to repeat it while adding many words to his linguistic dictionary by speaking to him and trying to encourage him to pronounce, which will constitute an enormous linguistic outcome of The child later.        
        </Text>

        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
        
        >
في هذه المرحلة يبدأ الطفل في ترديد بعض الحروف المتكررة مثل "با .. با .. ما .. دا .. دا" ويمكن للأم أن تشجعه وتحفزه على تكراره مع إضافة العديد من الكلمات إلى قاموسه اللغوي من خلال التحدث. ومحاولة تشجيعه على النطق ، الأمر الذي سيشكل حصيلة لغوية هائلة للطفل فيما بعد.
        </Text>


</View>


<TouchableOpacity
      style={{
        alignSelf:'center',
        width:'50%',
        height:50,
        opacity:.7,
        backgroundColor:this.state.b1,
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30,
        marginBottom:15


      }}

onPress={
  ()=>{
    if(this.state.display5=='none'){
      this.setState({display5:'flex'})
    }
    else {
      this.setState({display5:'none'})
    }
  }
}
      >
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',
          display:this.state.display11,

}}
>Nutrition at this stage</Text>
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',
          display:this.state.display22,

}}
>التغذية في هذا الشهر</Text>
      </TouchableOpacity>
      <View
      style={{
        display:this.state.display5,
        padding:30,

      }}
      >
        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display11,

      }}
        
        >
Solid food can be introduced to the side of breastfeeding after the child completes the sixth month at the most, and simple vegetables and fruits can be introduced after boiling and mashing them completely to make it easier for the child to eat.  

</Text>



<Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
        
        >
يمكن إدخال الطعام الصلب إلى جانب الرضاعة الطبيعية بعد أن يكمل الطفل الشهر السادس على الأكثر ، ويمكن إدخال الخضار والفواكه البسيطة بعد غليها وهرسها بالكامل ليسهل على الطفل تناولها.
</Text>

</View>






        </ScrollView>
      </SafeAreaView>
    )
  }
}