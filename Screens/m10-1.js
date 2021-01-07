import React , {Component } from 'react'
import {Text,TextInput,View,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native'

export default class month41 extends Component{
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
          fontFamily:'Amiri-Regular',
          display:this.state.display11,


        }}
        
        >
          Month 10 to  one Year 
        </Text>



        <Text
        style={{
          color : 'white',
          fontSize:25,
          fontFamily:'Amiri-Regular',
          display:this.state.display22,


        }}
        
        >
        الشهر العاشر إلى العام
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
          display:this.state.display22,

}}
>
مهارات التواصل
</Text>
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
Your child becomes more social at this stage, as he can get to know the closest family members from his parents
And his sisters, as well as his grandparents.

He can say two or three words such as “dada” and “mama”, he can point to the things he wants.
Repeats words that are not understood but will develop later by helping the mother to improve the child's language
And his vocabulary, and this can be developed by the mother telling her child the simple children's stories of color
Attract the child's attention.

Your baby can carry out simple commands that consist of one action, and the mother can develop this with a request
Simple things from the child and encourage him / her when done correctly, such as "Bring me this toy."     
     
        </Text>







        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
        
        >
يصبح طفلك أكثر اجتماعية في هذه المرحلة ، حيث يمكنه التعرف على أقرب أفراد الأسرة من والديه
وأخواته وأجداده.

يمكنه أن يقول كلمتين أو ثلاث كلمات مثل "دادا" و "ماما" ، يمكنه أن يشير إلى الأشياء التي يريدها.
يكرر كلمات غير مفهومة ولكنها ستتطور فيما بعد بمساعدة الأم على تحسين لغة الطفل
ومفرداته ، ويمكن للأم أن تتطور من خلال إخبار طفلها بقصص الأطفال البسيطة الملونة
اجذب انتباه الطفل.

يمكن لطفلك تنفيذ أوامر بسيطة تتكون من إجراء واحد ، ويمكن للأم تطوير ذلك بطلب
أشياء بسيطة من الطفل وشجعها عند القيام بها بشكل صحيح ، مثل "أحضر لي هذه اللعبة".  
        </Text>










</View>


<TouchableOpacity
      style={{
        alignSelf:'center',
        width:'55 %',
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
      ><Text
      
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display22,

      }}
      >
        في هذا العمر ، يمكن إدخال اللحوم والدواجن والأسماك إلى طعام الطفل بالإضافة إلى الرضاعة الطبيعية
يمكن مزجه مع فواكه أو خضروات أو أكثر ويمكن إضافته أيضًا مع الدجاج
أو اللحم المطبوخ جيداً كوجبة من وجبات الطفل ، ويمكن إعداد العديد من الوصفات المغذية للطفل
يحتوي على أشكال وأنواع الطعام لتغذية الطفل بشكل صحيح.

ومع ذلك ، يجب أن تعلم الأم أن إدخال الطعام الصلب لا يحل محل اللبن أو الرضاعة الطبيعية
بل هي وسيلة ليعرف الطفل أن هناك طعامًا آخر في العالم غير الحليب وأيضًا لتعويده عليه.
ولأن هناك العديد من الفيتامينات والمعادن التي يحتاجها الطفل ، وقد لا تكون متوفرة بشكل كامل في الرضاعة الطبيعية.
أخيرًا ، الرحلة لا تتوقف هنا ، فطفلك على وشك أن يتعلم الكثير ، ويستمتع برؤية طفلك ينمو أمامك ، ولا تترك فرصة لتشجيعه وتنمية مهاراته ، ويجب أن تتعلم المزيد وتقرأ المزيد عن عالم الطفل حتى يكون طفلك دائمًا الأفضل.
      </Text>
        <Text
      style={{
        fontSize:15,
        fontFamily:'Amiri-Regular',
        display:this.state.display11,

      }}
        
        >
At this age, meat, poultry and fish can be introduced to the baby's food in addition to breastfeeding
It can be mixed with two or more fruits or vegetables and can also be added with chicken
Or well-cooked meat as one of the child's meals, and many nutritious recipes can be made for the child
It contains the forms and types of food to properly nourish the child.

However, the mother should know that the introduction of solid food does not replace milk or breastfeeding
Rather, it is a way for the child to know that there is another food in the world besides milk and also to get him used to it
And because there are many vitamins and minerals that a child needs, and they may not be fully available in breastfeeding.
Finally, the journey does not stop here, as your child is about to learn a lot, enjoy seeing your child grow in front of you, and do not leave an opportunity to encourage him and develop his skills, and you should learn more and read more about the child's world so that your child is always the best.

 </Text>



</View>






        </ScrollView>
      </SafeAreaView>
    )
  }
}