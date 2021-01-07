import React , {Component } from 'react'
import {Text,TextInput,View,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'

export default class month21 extends Component{
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
          Month 4 to  month 6 
        </Text>

        <Text
        style={{
          color : 'white',
          fontSize:25,
          fontFamily:'Amiri-Regular',        display:this.state.display22,


        }}
        
        >
        من الشهر الرابع حتى السادس
        </Text>
      </View>
     
    
        <ScrollView>
 

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
The glutinous child can propped up with pillows on his sides and then it improves to sit alone, he can lift his head from a position lying on the stomach with the help of his hands and he can roll and the mother should take care of her child so that he does not fall from his bed.
The muscles of the hands are well developed, as the child can hold a simple toy such as a squirrel between his fingertips, and he can bring objects to his mouth and move objects from one hand to the other.     
       
        </Text>


        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',        display:this.state.display22,

      }}
        
        >
يمكن للطفل اللزج أن يسند بوسائد على جانبيه ثم يتحسن للجلوس بمفرده ، ويمكنه رفع رأسه من وضع مستلقٍ على المعدة بمساعدة يديه ويمكنه أن يتدحرج وعلى الأم رعاية طفلها حتى لا يقع من فراشه.
تم تطوير عضلات اليدين بشكل جيد ، حيث يستطيع الطفل حمل لعبة بسيطة مثل السنجاب بين أطراف أصابعه ، ويمكنه إحضار الأشياء إلى فمه ونقل الأشياء من يد إلى أخرى.
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
          fontFamily:'Amiri-Regular',        display:this.state.display11,

}}
>
Vision skills
</Text>


<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',        display:this.state.display22,

}}
>
المهارات البصرية</Text>
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
        fontFamily:'Amiri-Regular',        display:this.state.display11,

      }}
        
        >
The child's vision improves significantly at this stage, and he can see and follow objects up to a few meters in front of him and he can track the sounds around him.        
        
        </Text>


        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',        display:this.state.display22,

      }}
        
        >
تتحسن رؤية الطفل بشكل ملحوظ في هذه المرحلة ، ويمكنه رؤية ومتابعة الأشياء حتى مسافة أمتار قليلة أمامه ، ويمكنه تتبع الأصوات من حوله.        
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
          fontFamily:'Amiri-Regular',        display:this.state.display11,

}}
>Nutrition at this stage</Text>



<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',        display:this.state.display22,

}}
>التغذية في هذه المرحلة</Text>
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
        fontFamily:'Amiri-Regular',        display:this.state.display11,

      }}
        
        >
There are several schools that have different recommendations for feeding the child at this stage, there are some schools that recommend not introducing solid food to the child until after the completion of the sixth month, and others allow it to be introduced to the child after the completion of the fourth month, such as the American Academy of Pediatrics.
  </Text>




  <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',        display:this.state.display22,

      }}
        
        >
        هناك العديد من المدارس التي لديها توصيات مختلفة لإطعام الطفل في هذه المرحلة ، فهناك بعض المدارس التي توصي بعدم تقديم الطعام الصلب للطفل إلا بعد إتمام الشهر السادس ، وأخرى تسمح بتقديمه للطفل بعد انتهاء الشهر السادس. الانتهاء من الشهر الرابع مثل الأكاديمية الأمريكية لطب الأطفال.
  </Text>

</View>






        </ScrollView>
      </SafeAreaView>
    )
  }
}