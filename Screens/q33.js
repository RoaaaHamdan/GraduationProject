import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

export default class  q33 extends Component {
  constructor(props){
    super(props);
  this.state={
    flag:'none',
    flag1:'none',
    flag2:'none',
    display1:'flex',
    display2:'none'
  }
}
UNSAFE_componentWillMount =()=>{
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
}
render(){
  return (
    <SafeAreaView>
      <ScrollView style={{ display:this.state.display1 }} >
        <View style={styles.flexview,{
        }}>

      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
What do you know about child's health?
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>Question 3/4 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
When a child's temperature rises above 38, should he be given medicine Quickly to lower it?
         </Text>
            </View>
          
            <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none' && this.state.flag2 == 'none'){ 
              this.setState({flag1:'flex'})}
           else{this.setState({flag1:'none'})}
            }}>
                    <Text style={styles.txt1}>True</Text>
                </TouchableOpacity>

          <Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                 ✖ Wrong answer ✖ 
 </Text>
<Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
High fever is common in children, it is a sign that the body is fighting bacterial invaders. Even if the child seems uncomfortable, do not give him medicine, try a lukewarm bath, as it may contribute to reducing the temperature.
      </Text>
              </View>

<View>
<TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none' && this.state.flag2 == 'none'){ 
              this.setState({flag2:'flex'})}
           else{this.setState({flag2:'none'})}
            }}>
                    <Text style={styles.txt1}>False</Text>
                </TouchableOpacity>

          <Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                ✓ Correct answer ✓
</Text>
<Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
High fever is common in children, it is a sign that the body is fighting bacterial invaders. Even if the child seems uncomfortable, do not give him medicine, try a lukewarm bath, as it may contribute to reducing the temperature.
</Text>
</View>

<View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 30,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q34')} >
          <Text style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Amiri-BoldItalic',
            }}>
Next question
          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 45,
            marginTop: 10,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => this.props.navigation.navigate('ask')} >
          <Text style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Amiri-BoldItalic',
            }}>
List of questions
          </Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>



        <ScrollView
      style={{
        display:this.state.display2
      }}
       >
        <View style={styles.flexview,{
        }}>
         <View style={styles.header}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
ماذا تعرف عن صحة طفلك؟
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>السؤال 3/4 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
هل عندما ترتفع درجة حرارة الطفل عن 38 ، يجب اعطاءه الدواء بسرعة لخفضها؟
         </Text>
            </View>
          
            <View >
              <TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none' && this.state.flag2 == 'none'){ 
              this.setState({flag1:'flex'})}
           else{this.setState({flag1:'none'})}
            }}>
                    <Text style={styles.txt1}>صحيح</Text>
                </TouchableOpacity>

          <Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                 ✖ اجابة خاطئة ✖ 
 </Text>
<Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
الحمى المرتفعة شائعة عند الأطفال ، فهي تدل أن الجسم يقاوم البكتيريا. حتى لو بدا الطفل غير مرتاح ، لا تعطه دواء ، جرب حمام فاتر ، فقد يساهم في خفض درجة الحرارة.
      </Text>
              </View>

<View>
<TouchableOpacity 
           style={styles.num}
           onPress={() => {
            if (this.state.flag1 == 'none' && this.state.flag2 == 'none'){ 
              this.setState({flag2:'flex'})}
           else{this.setState({flag2:'none'})}
            }}>
                    <Text style={styles.txt1}>خطأ</Text>
                </TouchableOpacity>

          <Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                ✓ اجابة صحيحة ✓
</Text>
<Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
الحمى المرتفعة شائعة عند الأطفال ، فهي تدل أن الجسم يقاوم البكتيريا. حتى لو بدا الطفل غير مرتاح ، لا تعطه دواء ، جرب حمام فاتر ، فقد يساهم في خفض درجة الحرارة.
</Text>
</View>

<View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginBottom: 10,
            marginTop: 30,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q34')} >
          <Text style={{
              color: 'black',
              fontSize: 24,
              fontFamily: 'Amiri-BoldItalic',
            }}>
التالي          </Text>
        </TouchableOpacity>
        </View>

          <View style={styles.flexview}>
          <TouchableOpacity style={{
           width: '40%',
           borderWidth: 1,
           borderColor: 'grey',
            height: 45,
            marginTop: 10,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => this.props.navigation.navigate('ask')} >
          <Text style={{
              color: 'black',
              fontSize: 21,
              fontFamily: 'Amiri-BoldItalic',
            }}>
قائمة الاسئلة          </Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginBottom:40,
  },

num: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 45,
 backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
   marginTop:20,
},
num1: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 45,
 backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
   marginBottom:10,
},
txt1: {
 color: 'white',
 fontSize: 28,
 fontFamily: 'Amiri-BoldItalic',
alignSelf: 'stretch',
marginLeft:10,
},
});