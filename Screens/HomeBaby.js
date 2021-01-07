import React,{Component} from 'react'
import {Text, TextInput,ScrollView , TouchableOpacity,View,Image,ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Dropdown} from 'react-native-material-dropdown';

export default class HomeBaby extends Component {
    constructor(props){
        super(props);
        this.state={
            color1:'lightblue',
            color2:'lightpink',
            babyName:'',
      //  id:this.props.route.params.id,
      id:global.username,
      babyName:'',
     activeIndex:0,
     disable:true,
     gen:'',
     sex:'',
     date:'',
     age:'',
     display1:'flex',
     display2:'none'

        }
        global.data=[];

    }

getAge(){
    const dateString= global.date;
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dateNow= now.getDate();
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
    const yearString= (age.years > 1) ? "سنوات" : "year";
    const monthString = (age.months > 1) ? " أشهر" : " month";
    const dayString = (age.days > 1) ? " يوم" : " day";
    let ageString= "";
    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
        ageString = age.years + yearString + ", " + age.months + monthString + ", و " + age.days + dayString + " سنه.";
    } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
        ageString = "ففط " + age.days + dayString ;
        global.month=0;
      month=new Date().getMonth()+1;
    } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
        ageString = age.years + yearString + " سنة. Happy Birthday!!";//at one year
    } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
        ageString = age.years + yearString + " و " + age.months + monthString ;
    } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
        global.month = age.months
        ageString = age.months + monthString + " و " + age.days + dayString ;
    } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
        ageString = age.years + yearString + " و " + age.days + dayString ;
    } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
        ageString = age.months + monthString ;
        global.month=age.months;

    } else {
        ageString = "Oops! لا أستطيع الحساب!";
    }
    this.setState({ age:ageString });

}

    UNSAFE_componentWillMount =()=>{
        if (global.flagA =='Arab'){
            this.setState({display1:'none',display2:'flex'})
          }
          else{
            this.setState({display2:'none',display1:'flex'})

          }
        if (this.state.gen =='f'){
  //alert(this.state.gen)
  this.setState({b1:'pink',b2:'mistyrose'});
}else {
  //alert(this.state.gen)

  this.setState({b1:'midnightblue',b2:'lavender'});
}

        let getChildsName = 'http://192.168.1.209:8082/getChildsName/' + this.state.id;//+'/'+
       // this.state.babyName;
    
        fetch(getChildsName, {method: 'GET', body: null})
          .then((response) => response.json())
          .then((json) => {
            {
              var t;
              for (t = 0; t < json.result.length; t++) {
                {
                  //  alert(json.result.length);
                  global.data.push({label:json.result[t].childname,value:json.result[t].childname,
                    Gender:json.result[t].Gender,date:json.result[t].childdate});
                }
              }
             // this.setState({posts: this.data});
              // alert(this.state.posts[0].post);
            }
          }).catch(er=>{
            console.log(er);
          });

           
  let getChildsdate = 'http://192.168.1.209:8082/getChildsdate/' +global.username+'/'+
  this.state.babyName;

   fetch(getChildsdate, {method: 'GET', body: null})
     .then((response) => response.json())
     .then((json) => {
       {
           
             //  alert(json.result.length);
           //  this.data.push({label:json.result[t].childname,value:json.result[t].childname});
          // alert(json.result[0].childdate);
         this.setState({date:json.result[0].childdate})
        // this.setState({posts: this.data});
         // alert(this.state.posts[0].post);
       }
     });
     }
    
     
    render (){
       return(
        <View 
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}       
                >
        <LinearGradient
          colors={[this.state.color1, this.state.color2 ]}
style={{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
}}          
start={{ x: 0.7, y: 0 }}
       >


<View style={{width: '50%',
marginBottom:30,
   alignSelf:'center'}}>
          <Dropdown
            data={global.data}
            value={this.state.babyName}
            label="My Child Name"
            itemColor={'hotpink'}
            useNativeDriver={true}
            onChangeText={(value, index, data) => {
                global.date = global.data[index].date;
                this.getAge();
                this.setState({babyName:value,disable:false,date:global.data[index].date})
            if(global.data[index].Gender =='female'){
                global.baby=value;
                global.g='f';
                

                this.setState({color1:'pink',color2:'hotpink',gen:'f'})}
            else {this.setState({color1:'lightblue',color2:'blue',gen:'m'})
            global.baby=value;

            global.g='m';
            }

            }}
          />
        </View>





  
        <View
        style={{
            width:'80%',
            height:'70%',
            backgroundColor:'white',
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,

        }}>
<ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
style={{
    width:'100%',
            height:'100%',
}}


>

<View
 
 style={{
     flexDirection:'row',
     justifyContent:'space-around',
     width:'100%',
     marginTop:30
 }}
 >
<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/ba.webp')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}

onPress={()=>  this.props.navigation.navigate('addChild',{motherName:this.state.id})   
                  }
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1
 }}
 >Add a Child </Text>


<Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2
 }}
 >أضف طفلاً </Text>
</TouchableOpacity>
</ImageBackground>


</View>



<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/calender.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}

disabled={this.state.disable}  

onPress={()=>  this.props.navigation.navigate('ToDoList',{id:this.state.id})   
}
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1

 }}
 >Add an event </Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2

 }}
 >أضف حدثاً </Text>
</TouchableOpacity>
</ImageBackground>


</View>


 </View>
 
 
 
 
 
 
 
 
 <View
 
 style={{
     flexDirection:'row',
     justifyContent:'space-around',
     width:'100%',
     marginTop:30
 }}
 >
<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/tra.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}

disabled={this.state.disable}  

onPress={()=>  this.props.navigation.navigate('trackWeightSlep',{gender:this.state.gen,id:this.state.babyName,motherName:this.state.id})   
}
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1
 }}
 >Tracking </Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2 }}
 >تتبعي نمو طفلك </Text>
</TouchableOpacity>
</ImageBackground>


</View>



<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/caht.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}


                              
            onPress={()=>this.props.navigation.navigate('chatf',{id:global.username})   
            } 
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1
 }}
 > Public Chat</Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2
 }}
 > المحادثة العامة</Text>
</TouchableOpacity>
</ImageBackground>


</View>


 </View>



 <View
 
 style={{
     flexDirection:'row',
     justifyContent:'space-around',
     width:'100%',
     marginTop:30
 }}
 >
<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/babywe.jpg')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}
disabled={this.state.disable}  

onPress={()=>  this.props.navigation.navigate('CalBabyWei',{date:this.state.date,gender:this.state.gen})   
                  }
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1
 }}
 >Normal weight </Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2
 }}
 >الوزن الطبيعي </Text>
</TouchableOpacity>
</ImageBackground>


</View>



<View

style={{
    width:'40%',
    height:140,


}}

>
<ImageBackground

source={require('../assets/images/monthes.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}

onPress={()=> 

{ 
    alert(global.month)
    if (global.month < 4  ){ 

 this.props.navigation.navigate('month11')
 }
 
 else  if (global.month < 7  ){ 

this.props.navigation.navigate('month21')
}


else if (global.month < 10 ){ 

this.props.navigation.navigate('month31')
}
else {
    this.props.navigation.navigate('month41')

}
   }   }
   disabled={this.state.disable}

>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1

 }}
 >Month By {'\n'}Month</Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2
 }}
 >شهر بشهر</Text>
</TouchableOpacity>
</ImageBackground>


</View>


 </View>
 <View
 
 style={{
     flexDirection:'row',
     justifyContent:'space-around',
     width:'100%',
     marginTop:30
 }}
 >

<View

style={{
    width:'40%',
      height:140,
     marginBottom:30
 
}}

>
<ImageBackground

source={require('../assets/images/mem.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center',

}}
onPress={()=>  this.props.navigation.navigate('Memeory')}
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1 }}
 >Memories </Text>

<Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2 }}
 >الذكريات </Text>
</TouchableOpacity>
</ImageBackground>


</View>

<View

style={{
    width:'40%',
      height:140,
     marginBottom:30
 
}}

>
<ImageBackground

source={require('../assets/images/0.png')}
style={{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover',
    borderWidth:3,

borderRadius:15,
borderColor:this.state.color1,


}}
 >
<TouchableOpacity
style={{
    width:'100%',
    backgroundColor:'white',
    opacity:.8,
    justifyContent:'center',
    alignItems:'center'
}}

onPress={()=>  this.props.navigation.navigate('music')}
>
 <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display1
 }}
 >Sleeping {'\n'}Music </Text>
  <Text
 
 style={{
     opacity:1,
     fontSize:15,
     fontFamily:'Grandstander-Italic-VariableFont_wght',
     display:this.state.display2 }}
 >موسيقى {'\n'}النوم </Text>
</TouchableOpacity>
</ImageBackground>


</View>


 </View>



</ScrollView>













        </View>





        </LinearGradient>

          

       




        </View>
         
       )  
       
    }
}
