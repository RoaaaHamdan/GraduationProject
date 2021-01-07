import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

export default class  q51 extends Component {
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
            fontSize: 22,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
How to deal with child's high temperature
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>Question 1/3 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 18,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
When we notice the child's temperature is high, we have to put on more clothes to warm him up?
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
You should take off all the child's clothes, and keep only his cotton underwear
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
You should take off all the child's clothes, and keep only his cotton underwear
        </Text>
            </View>


            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 40,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q52')} >
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
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic', }}>
كيف تتعامل مع ارتفاع درجة حرارة طفلك
</Text>
      </View>

      <View style={styles.flexview}>
           <TouchableOpacity style={styles.num1}
        >
          <Text style={styles.txt1}>السؤال 1/3 </Text>
</TouchableOpacity>
</View>

<View style={styles.flexview}>
            <Text style={{ 
            color: 'black',
            fontSize: 20,
            fontFamily: 'Amiri-BoldItalic',
            textAlign: 'center', 
          }}>
عندما نلاحظ ارتفاع درجة حرارة الطفل ، يجب أن نلبسه المزيد من الملابس لتدفئته؟
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
يجب أن تخلع جميع ملابس الطفل وأن تبقي بملابسه الداخلية القطنية فقط 
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
يجب أن تخلع جميع ملابس الطفل وتبقي بملابسه الداخلية القطنية فقط 
       </Text>
            </View>


            <View style={styles.flexview}>
          <TouchableOpacity style={{
            width: '40%',
            borderWidth: 1,
            borderColor: 'grey',
            height: 45,
            marginTop: 40,
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignSelf:'center'
          }}
          onPress={() => this.props.navigation.navigate('q52')} >
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