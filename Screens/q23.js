import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

export default class  q23 extends Component {
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
            fontSize: 18,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
What do you know about childbirth?
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>Question 3/5 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
If this is your first birth, may your natural birth take an entire day?
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
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                ✓ Correct answer ✓
 </Text>
<Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
Usually the duration of a normal delivery of a non-first child is 8-10 hours. As for this first birth to the mother, it may take 12-24 hours
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
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                 ✖ Wrong answer ✖ 
</Text>
<Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
Usually the duration of a normal delivery of a non-first child is 8-10 hours. As for this first birth to the mother, it may take 12-24 hours
</Text>
</View>

            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 30,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q24')} >
          <Text style={{
              color: 'black',
              fontSize: 18,
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
            marginTop: 20,
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
            fontSize: 24,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
ماذا تعرفين عن الولادة؟
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>السؤال 3/5 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
إذا كانت هذه ولادتك الأولى ، فهل تستغرق ولادتك الطبيعية يومًا كاملاً؟
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
          backgroundColor: 'green',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                ✓ اجابة صحيحة ✓
 </Text>
<Text style={{display:this.state.flag1, 
           color: 'white',
          backgroundColor: 'green',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
عادة ما تكون مدة الولادة الطبيعية للطفل غير الأول من 8 إلى 10 ساعات. أما بالنسبة لأول ولادة للأم ، فقد تستغرق 12-24 ساعة
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
          backgroundColor: 'red',
            fontSize: 22,
            fontFamily: 'Amiri-BoldItalic',
         }}>                 ✖ اجابة خاطئة ✖ 
</Text>
<Text style={{display:this.state.flag2, 
           color: 'white',
          backgroundColor: 'red',
            fontSize: 18,
            fontFamily: 'Rakkas-Regular',
         }}>
عادة ما تكون مدة الولادة الطبيعية للطفل غير الأول من 8 إلى 10 ساعات. أما بالنسبة لأول ولادة للأم ، فقد تستغرق 12-24 ساعة
</Text>
</View>

            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 30,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q24')} >
          <Text style={{
              color: 'black',
              fontSize: 23,
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
            marginTop: 20,
          alignSelf:'center',
           backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}
          onPress={() => this.props.navigation.navigate('ask')} >
          <Text style={{
              color: 'black',
              fontSize: 23,
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
    marginBottom:50,
  },
num: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 45,
 backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
   marginTop:30,
},
num1: {
  width: '100%', 
  borderWidth:1,
  borderColor: 'midnightblue',
   height: 40,
 backgroundColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
   marginBottom:20,
},
txt1: {
 color: 'white',
 fontSize: 28,
 fontFamily: 'Amiri-BoldItalic',
alignSelf: 'stretch',
marginLeft:10,
},
});
