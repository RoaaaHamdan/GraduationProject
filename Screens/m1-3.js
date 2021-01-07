import React , {Component } from 'react'
import {Text,TextInput,View,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'

export default class month11 extends Component{
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

  }
componentDidMount

(){
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
          fontFamily:'Amiri-Regular',
          display:this.state.display11

        }}
        
        >
          Month 1 to  month 3   
        </Text>
        <Text
        style={{
          color : 'white',
          fontSize:25,
          fontFamily:'Amiri-Regular',
          display:this.state.display22

        }}
        
        >
من الشهر الاول للثالث        </Text>
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
          fontFamily:'Amiri-Regular',    
                display:this.state.display22

}}
>
المهارات الحركية</Text>


<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',    
                display:this.state.display11

}}
>
 movements skill</Text>
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
        fontFamily:'Amiri-Regular',    
              display:this.state.display11

      }}
        
        >


After birth, the infant's ability to control the neck muscles is weak and therefore he cannot harden his head and stabilize it, so his head is unbalanced and unsteady to swing and thus the mother should protect her child's head from being twisted, but with the passage of time your child will be able to raise his head up when you put him asleep on his stomach, but He must be followed and stay by his side so that he does not suffocate himself.

The muscles in his legs also improve to be able to kick stronger, and here the mother can develop this motor skill in her child by putting light pads, as for his small feet to kick it, and there are some games that make noises when the child kicks them that may benefit you and entertain your child as well.
        
        
        
        
        </Text>

        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',    
              display:this.state.display22

      }}
        
        >

بعد الولادة تكون قدرة الرضيع على التحكم في عضلات رقبته ضعيفة وبالتالي لا يستطيع أن يصلب رأسه وتثبيته ، لذا فإن رأسه غير متوازن وغير مستقر للتأرجح ، وبالتالي يجب على الأم حماية رأس طفلها من الالتواء ولكن مع الممر. من الوقت سيتمكن طفلك من رفع رأسه عندما تنام على بطنه ، لكن يجب أن يتبعه ويبقى بجانبه حتى لا يخنق نفسه.

كما تتحسن عضلات رجليه ليتمكن من الركل بقوة ، وهنا يمكن للأم أن تنمي هذه المهارة الحركية لدى طفلها من خلال وضع وسادات خفيفة ، أما قدميه الصغيرتين لركلهما ، وهناك بعض الألعاب التي تصدر أصواتًا عند يركلهم الطفل مما قد يفيدك ويسلي طفلك أيضًا.
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
          display:this.state.display11

}}
>
Vision skills
</Text>

<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',
          display:this.state.display22

}}
>
المهارات البصرية
</Text>
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
 When a child is born, he does not see well, but by the age of one to two months, he can see his mother's face, especially the eyes, and he can distinguish between contrasting colors such as black and white, and here the mother can start introducing black and white colored cards that develop the child's vision skills, especially in the following months of his life. 
        
        
        </Text>

        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        
        display:this.state.display22,

      }}
        
        >
عندما يولد الطفل لا يبصر جيداً ولكن بعمر شهر إلى شهرين يستطيع أن يرى وجه أمه وخاصة العينين ، ويمكنه التمييز بين الألوان المتباينة مثل الأسود والأبيض ، وهنا الأم يمكن البدء بإدخال بطاقات ملونة بالأبيض والأسود تنمي مهارات الإبصار لدى الطفل ، خاصة في الأشهر التالية من حياته.        
        
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
    if(this.state.display4=='none'){
      this.setState({display4:'flex'})
    }
    else {
      this.setState({display4:'none'})
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
communication skills</Text>
<Text
style={{
  color : 'white',
          fontSize:20,
          fontFamily:'Amiri-Regular',
          display:this.state.display22,

}}
>
مهارات التواصل</Text>
      </TouchableOpacity>
      <View
      style={{
        display:this.state.display4,
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
Infants depend at the beginning of their lives on crying as a means of communicating with their mothers, as it expresses hunger, pain, the need to draw the mother's attention to it, and often times it indicates the infant's suffering from colic, which is common among children at this age, but 
the matter improves and the intensity of crying decreases in time.      
  </Text>



  <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
        
        >
يعتمد الرضع في بداية حياتهم على البكاء كوسيلة للتواصل مع أمهاتهم ، فهو يعبر عن الجوع والألم وضرورة لفت انتباه الأم إليه ، وفي كثير من الأحيان يشير إلى معاناة الرضيع من المغص وهو أمر شائع بين الأطفال في هذا العمر ، ولكن
يتحسن الأمر وتقل حدة البكاء مع الوقت.
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
        fontFamily:'Amiri-Regular',
        display:this.state.display11,

      }}
        
        >
The child in his first year depends entirely on breast milk or artificial milk in some cases due to his severe need for the components of this milk and also his inability to eat.

  </Text>


  <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
        
        >
يعتمد الطفل في سنته الأولى كليًا على لبن الأم أو اللبن الصناعي في بعض الحالات بسبب حاجته الشديدة لمكونات هذا الحليب وأيضًا عدم قدرته على الأكل.
  </Text>




</View>






        </ScrollView>
      </SafeAreaView>
    )
  }
}