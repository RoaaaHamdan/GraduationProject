import React,{Component} from 'react'
import {View,Text,TouchableOpacity,ScrollView,TextInput,ImageBackground,Dimensions} from 'react-native'


export default class CalBabyWei extends Component{
constructor(props){
  super(props);
  this.state={
  currrentW:0,
  display:'none',
  goodW:0,
  weis:'',
  age:'',
  resSan:'',
  date:this.props.route.params.date,
  b1:'',
  b2:'',
  gen:this.props.route.params.gender, 
   display1:'flex',
  display2:'none',

  }
}

UNSAFE_componentWillMount=()=>{
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  
  }
  //alert('kk');
if (this.state.gen =='f'){
  //alert(this.state.gen)
  this.setState({b1:'pink',b2:'mistyrose'});
}else {
  //alert(this.state.gen)

  this.setState({b1:'midnightblue',b2:'lavender'});
}
}
 calculateAge = () => {

  if (this.state.currrentW==0 ){
    alert('Please enter a weight');
  }else { 
   this.setState({display:'flex'})
 //  alert(this.state.date);
  const dateString= this.state.date;
  const now = new Date();

  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const dateNow= now.getDate();
//alert(yearNow+'-'+monthNow+'-'+dateNow + this.state.date);
  const dob = new Date(dateString);

  const yearDob = dob.getFullYear();
  const monthDob = dob.getMonth();
  const dateDob= dob.getDate();

  let yearAge = yearNow - yearDob;
  let monthAge;

  if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
  } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
  }

  let dateAge;
  if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
  } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
          monthAge = 11;
          yearAge--;
      }
  }

  const age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
  };

  const yearString= (age.years > 1) ? "years" : "year";
  const monthString = (age.months > 1) ? " months" : " month";
  const dayString = (age.days > 1) ? " day" : " day";

  let ageString= "";

  if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
      ageString = age.years + yearString + ", " + age.months + monthString + ", و " + age.days + dayString + " سنه.";
  } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
      ageString = "only " + age.days + dayString ;
  } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
      ageString = age.years + yearString + " year. Happy Birthday!!";
  } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
      ageString = age.years + yearString + " and " + age.months + monthString ;
  } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
      ageString = age.months + monthString + " and " + age.days + dayString ;
  } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
      ageString = age.years + yearString + " and " + age.days + dayString ;
  } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
      ageString = age.months + monthString ;
  } else {
     // ageString = "Oops! لا أستطيع الحساب!";
  }

  this.setState({ age:ageString });
 // alert(this.state.age)



if (global.flagA =='Eng'){
  if (age.months <1)
  {
 this.setState({goodW:3.5,weis:'2.5 - 4.5'})
 
 if(this.state.currrentW >2.5 && this.state.currrentW <= 4.5  ){
   this.setState({resSan:'Your child\'s  weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 } else if (age.months == 1)
 {
 this.setState({goodW:4.5,weis:'3.2 - 4.2'})
 
 if(this.state.currrentW >3.2 && this.state.currrentW <= 4.5  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 else if (age.months == 2)
 {
 this.setState({goodW:5.5,weis:'4.5 - 6.0'})
 if(this.state.currrentW >4.5 && this.state.currrentW <= 6  ){
   this.setState({resSan:'وزن طفلك ضمن الاوزان الطبيعة'});
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 
 else if (age.months == 3)
 {
 this.setState({goodW:6.5,weis:'5.0 - 8.0'})
 if(this.state.currrentW >5 && this.state.currrentW <= 8  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 
 else if (age.months == 4)
 {
 this.setState({goodW:7,weis:'6.0 - 9.0'})
 if(this.state.currrentW >6 && this.state.currrentW <= 9  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 else if (age.months == 5)
 {
 this.setState({goodW:7.5,weis:'6.2 - 9.2'})
 if(this.state.currrentW >6.2 && this.state.currrentW <= 9.2  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 
 else if (age.months == 6)
 {
 this.setState({goodW:8,weis:'6.5 - 10.0'})
 if(this.state.currrentW >6.5&& this.state.currrentW <= 10  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 else if (age.months == 7)
 {
 this.setState({goodW:8.3,weis:'7.0 - 10.2'})
 if(this.state.currrentW >7 && this.state.currrentW <= 10.2 ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 }
 
 else if (age.months == 8)
 {
 this.setState({goodW:8.7,weis:'6.2 - 10.7'})
 if(this.state.currrentW >6.2 && this.state.currrentW <= 10.7  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 
 }
 
 
 else if (age.months == 9)
 {
 this.setState({goodW:9.0,weis:'7.2 - 11.0'})
 if(this.state.currrentW >7.2 && this.state.currrentW <= 11  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {Dimensions.get('window').height-70,
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 }
 else if (age.months == 10)
 {
 this.setState({goodW:9,weis:'7.4 - 11.2'})
 if(this.state.currrentW >7.4 && this.state.currrentW <= 11.2  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 }
 
 else if (age.months == 11)
 {
 this.setState({goodW:9.2,weis:'7.8 - 11.7'})
 if(this.state.currrentW >7.8 && this.state.currrentW <= 11.7  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 }
 
 else if (age.months == 12 || age.years==1)
 {
 this.setState({goodW:10,weis:'8 - 12'})
 if(this.state.currrentW >8 && this.state.currrentW <= 12  ){
   this.setState({resSan:'Your child\'s weight is within the normal weights'});
 }
 else {
   this.setState({resSan:'Your child\'s weight is not within the normal weights, it is best to see a doctor '});
 
 }
 }
 
}else if (global.flagA =='Arab'){
  if (age.months <1)
  {
 this.setState({goodW:3.5,weis:'2.5 - 4.5'})
 
 if(this.state.currrentW >2.5 && this.state.currrentW <= 4.5  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 } else if (age.months == 1)
 {
 this.setState({goodW:4.5,weis:'3.2 - 4.2'})
 
 if(this.state.currrentW >3.2 && this.state.currrentW <= 4.5  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 
 }
 
 else if (age.months == 2)
 {
 this.setState({goodW:5.5,weis:'4.5 - 6.0'})
 if(this.state.currrentW >4.5 && this.state.currrentW <= 6  ){
   this.setState({resSan:'وزن طفلك ضمن الاوزان الطبيعة'});
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:' وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 
 }
 
 
 else if (age.months == 3)
 {
 this.setState({goodW:6.5,weis:'5.0 - 8.0'})
 if(this.state.currrentW >5 && this.state.currrentW <= 8  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 
 }
 
 
 else if (age.months == 4)
 {
 this.setState({goodW:7,weis:'6.0 - 9.0'})
 if(this.state.currrentW >6 && this.state.currrentW <= 9  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب'});
 
 }
 
 }
 
 else if (age.months == 5)
 {
 this.setState({goodW:7.5,weis:'6.2 - 9.2'})
 if(this.state.currrentW >6.2 && this.state.currrentW <= 9.2  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب' });
 
 }
 
 }
 
 
 else if (age.months == 6)
 {
 this.setState({goodW:8,weis:'6.5 - 10.0'})
 if(this.state.currrentW >6.5&& this.state.currrentW <= 10  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 
 }
 
 else if (age.months == 7)
 {
 this.setState({goodW:8.3,weis:'7.0 - 10.2'})
 if(this.state.currrentW >7 && this.state.currrentW <= 10.2 ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 }
 
 else if (age.months == 8)
 {
 this.setState({goodW:8.7,weis:'6.2 - 10.7'})
 if(this.state.currrentW >6.2 && this.state.currrentW <= 10.7  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 
 }
 
 
 else if (age.months == 9)
 {
 this.setState({goodW:9.0,weis:'7.2 - 11.0'})
 if(this.state.currrentW >7.2 && this.state.currrentW <= 11  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {Dimensions.get('window').height-70,
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 }
 else if (age.months == 10)
 {
 this.setState({goodW:9,weis:'7.4 - 11.2'})
 if(this.state.currrentW >7.4 && this.state.currrentW <= 11.2  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب'});
 
 }
 }
 
 else if (age.months == 11)
 {
 this.setState({goodW:9.2,weis:'7.8 - 11.7'})
 if(this.state.currrentW >7.8 && this.state.currrentW <= 11.7  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيبr '});
 
 }
 }
 
 else if (age.months == 12 || age.years==1)
 {
 this.setState({goodW:10,weis:'8 - 12'})
 if(this.state.currrentW >8 && this.state.currrentW <= 12  ){
   this.setState({resSan:'وزن طفلك  ضمن الأوزان الطبيعية'});
 }
 else {
   this.setState({resSan:'وزن طفلك ليس ضمن الأوزان الطبيعية ، من الأفضل مراجعة الطبيب '});
 
 }
 }


}

  }


};






render(){
  return (
    <ScrollView
    style={{
      backgroundColor :this.state.b2,
      width:'100%',
      height:'100%',
    }}
    >
    <View
    style={{
      width:'100%',
      height:70,
      backgroundColor:this.state.b1,
      justifyContent:'center',
      alignItems:'center'
    }}
    >


    <Text
    style={{
      color:'white',
      fontSize:20,
      fontFamily:'Amiri-Bold',
      display:this.state.display1
    }}
    >
Compare your child's weight monthly

    </Text>
    <Text
    style={{
      color:'white',
      fontSize:20,
      fontFamily:'Amiri-Bold',
      display:this.state.display2
    }}
    >
قارني وزن طفلك شهريا
    </Text>
    </View>

<ImageBackground

source={require('../assets/images/r.png')}
style={{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-70,
    justifyContent:'center',
    alignItems:'center',
    opacity:.8
    }}
>



<View
    style={{
      width:'70%',
      height:250,
      borderColor:this.state.b1,
      borderWidth:3,
     // marginTop:70,
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center'
    }}
    
    >
    <Text 
    style={{
      color:'black',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display1
      //fontWeight:'bold'
    }}
    >
    Current Weight:
    </Text>

    <Text 
    style={{
      color:'black',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display2
      //fontWeight:'bold'
    }}
    >
الوزن الحالي :     </Text>
    <TextInput 

      onChangeText={(c)=>this.setState({currrentW:c})}
      style={{
        borderBottomColor:this.state.b1,
        borderBottomWidth:2,
        width:'70%'
      }}
      keyboardType={'numeric'}
      placeholder={'in Kg'}
    />
     
<TouchableOpacity 
style={{
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:this.state.b1,
  marginTop:30,
  width:'40%',
  borderRadius:200,
  opacity:.7

}}
onPress={()=> {
//  //alert(this.state.age);
this.calculateAge()
}}
>
  <Text
   style={{
      color:'white',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display1
      //fontWeight:'bold'
    }}>
     Calculate
  </Text>

  <Text
   style={{
      color:'white',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display2
      //fontWeight:'bold'
    }}>
     احسب
  </Text>
</TouchableOpacity>           



    </View>






    <View
  style={{
    justifyContent:'center',
    alignItems:'center',
    display:this.state.display,
    marginTop:40
  }}
  >
 <Text
 style={{
      color:'black',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display1
      //fontWeight:'bold'
    }}
 >
 {this.state.resSan}
{'\n'}
Your child's current age is {this.state.age}{'\n'}
Your child's current weight is {this.state.currrentW}{'\n'}
The ideal weight at this point is {this.state.goodW}{'\n'}
Normal weights also in this month range {this.state.weis}{'\n'}

 </Text>

 <Text
 style={{
      color:'black',
      fontSize:18,
      fontFamily:'Amiri-Bold',
      display:this.state.display2
      //fontWeight:'bold'
    }}
 >
 {this.state.resSan}
{'\n'}
{'\n'}{this.state.age}عمر طفلك الحالي هو
{'\n'} {this.state.currrentW}وزن طفلك الحالي هو
{'\n'}   {this.state.goodW} الوزن المثالي في هذه المرحلة هو
{'\n'} {this.state.weis}    الأوزان الطبيعية أيضًا في نطاق هذا الشهر

 </Text>

  </View>


</ImageBackground>



    </ScrollView>

   

  );
}

}