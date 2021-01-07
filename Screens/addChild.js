import React ,{Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
//          <Icon name="chevron-left" size={30} color="lavender" />

export default class addChild extends Component{
constructor(props){
  super(props);
  this.data=[' your baby age is only one  month please check our page  ',
  'your baby age is 2  month please check our page',
  'your baby age is  3 month please check our page',
  'your baby age is 4  month please check our page',
  'your baby age is 5  month please check our page',
  'your baby age is 6  month please check our page'
  ,'your baby age is 7  month please check our page',
  'your baby age is 8  month please check our page'
  ,'your baby age is 9  month please check our page',
  'your baby age is 10  month please check our page',
  'your baby age is 11  month please check our page',
  'your baby age is 12 month please check our page',
  'month11','month12'];
  this.state={
    date :'',
    gender:'',
    motherName:this.props.route.params.motherName,
    ChildName:'',
    width1:'50%',
    width2:'50%',
    colorBoy:'blue',
    colorGirl:'hotpink',
    displayGirl:'flex',
    displayBoy:'flex',
    heigh:220,
    colors:['lightblue', 'pink' ],
    color1:'',
    display:'none',
    p:'',
    age:0,
    dateNotification:'',
    display1:'flex',
    display2:'none',
   // date2:new Dt
  }


}
componentDidMount(){
  if (global.flagA =='Arab'){
    this.setState({display1:'none',display2:'flex'})
  }
  else {
    this.setState({display2:'none',display1:'flex'})
  
  }
    }
sendNotification(date,data, id) {
    //console.log('da'+date);

 //  alert(this.state.date + " "+this.state.selectedHours3+':'+this.state.selectedMinutes1);
   let headers = {
     'Content-Type': 'application/json; charset=utf-8',
     Authorization: "Basic 'Njg2Y2EyNTktNTQ1MS00YmUxLThiMWYtMTc1MzQzMDBlN2Vi'"
   };  let endpoint = 'https://onesignal.com/api/v1/notifications';  let params = {
     method: 'POST',
     headers: headers,
     body: JSON.stringify({
       app_id: "8d8c8be0-d155-4225-88e3-ef934e59b9d4",
       filters: [   // Will send notification only to specific device
         {          // Optional
           field: 'tag',
           key: 'key',
           relation: '=',
           value: id,
         },
       ],
     //  delayed_option:'timezone',
       send_after: date+ ' 19:43:00 GMT',
       headings: {en: 'Remeber'},
      contents: {en: data},
     }),
   };
   fetch(endpoint, params).then(res => console.log(res));
 }

SendBabyInformation=()=>{
if(this.state.ChildName==''|| this.state.date==''){
    alert (
        'please fill all blank'
    )
}
else     if (
  /[!@#$%^&*(),.?":{}|<>]/g.test(this.state.ChildName) ||
  !/^[A-Z]/.test(this.state.ChildName) ||
  /\d+/g.test(this.state.ChildName)
) {
  alert('please enter corect format for name ');


}

else{ 
  let sendURL =
        'http://192.168.1.209:8082/addChild/' +
        this.state.ChildName +
        '/' +
        this.state.motherName+'/'+this.state.gender+'/'+this.state.date; //+

      fetch(sendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {

          global.data=[];
          let getChildsName = 'http://192.168.1.209:8082/getChildsName/' + this.state.motherName;//+'/'+
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
                       Gender:json.result[t].Gender});
                   }
                 }
                // this.setState({posts: this.data});
                 // alert(this.state.posts[0].post);
               }
             }).catch(er=>{
               console.log(er)
             });
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            
            alert('Done');
          }
        });

        let getChildsName = 'http://192.168.1.209:8082/getChildsName/' + this.state.motherName;//+'/'+
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
                     Gender:json.result[t].Gender});
                 }
               }
             }
           }).catch(er=>{
             console.log(er)
           });
        const dateString= this.state.date;
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
          let mu=1;
          alert('m== ', mu);
          console.log(mu+'');
         // m=monthDob;
         // alert(m)
          let month='';
          let y =yearNow;
          month=new Date().getMonth()+1;
 let date = y+'-'+month+'-'+'25';
 console.log('date'+date);

          for (let i = 0 ;i<12 ; i++){
            let date = y+'-'+month+'-'+'25';

          if (month<12){

              if(month==1||month==2||month==3||month==4||month==5||month==6||month==7||month==8||month==9){
                let month1='0'+month;
date = y+'-'+month1+'-'+'7';
                this.setState({dateNotification:date});
          this.sendNotification(date,this.data[mu-1],this.state.motherName);
          month=month+1;
          mu++;

              }
              else {
                  month=month;
                  date = y+'-'+month+'-'+'25';
                  this.setState({dateNotification:date});
          this.sendNotification(date,this.data[mu-1],this.state.motherName)

mu++;           
//alert('kk'+month)
   }
          }
          else if(month==12){
 //month=mu;
              date = y+'-'+month+'-'+'25';
          this.setState({dateNotification:date});

          this.sendNotification(date,this.data[mu-1],this.state.motherName)
          y=y+1;
              mu++;
              month=1;
              //month='0'+mu;
         // alert('kk'+month)

       //   m++;
          }

        }//for

        } else if ((age.years > 0) && (age.months === 0) && (age.days === 0)) {
            ageString = age.years + yearString + " سنة. Happy Birthday!!";//at one year
        } else if ((age.years > 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.years + yearString + " و " + age.months + monthString ;
        } else if ((age.years === 0) && (age.months > 0) && (age.days > 0)) {
            ageString = age.months + monthString + " و " + age.days + dayString ;

            let m=monthDob;
             let month='';
             let y =yearNow;
    let date = y+'-'+month+'-'+'25';
    var x = age.months;
             for (let i = 0 ;i<12-age.months ; i++){
               if (x>12){
                 x=1;
               }
             if (m<12){
                 if(m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
                   month='0'+m;
   date = y+'-'+month+'-'+'07';
                   this.setState({dateNotification:date});
             this.sendNotification(date,this.data[x-2],this.state.motherName);
             x++;
   m=m+1;
                 }
                 else {
                     month=m;
                     date = y+'-'+month+'-'+'25';
                     this.setState({dateNotification:date});
             this.sendNotification(date,this.data[x-2],this.state.motherName)
             x++;
   
   m++;           
      }
             }
             else if(m==12){
    month=m;
                 date = y+'-'+month+'-'+'25';
             this.setState({dateNotification:date});
   
             this.sendNotification(date,this.data[x-2],this.state.motherName)
             y=y+1;
                 m=1;
                 month='0'+m;
            // alert('kk'+month)
            x++;
   
          //   m++;
             }
   
           }//for






        } else if ((age.years > 0) && (age.months === 0) && (age.days > 0)) {
            ageString = age.years + yearString + " و " + age.days + dayString ;
        } else if ((age.years === 0) && (age.months > 0) && (age.days === 0)) {
            ageString = age.months + monthString ;
            let m=monthDob;
             let month='';
             let y =yearNow;
    let date = y+'-'+month+'-'+'25';
  let xxx=age.months;
             for (let i = 0 ;i<12-age.months ; i++){
               if (xxx>12){
                 xxx=1;
               }
                  
             if (m<12){
   
                 if(m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
                   month='0'+m;
   date = y+'-'+month+'-'+'25';
                   this.setState({dateNotification:date});
             this.sendNotification(date,this.data[xxx-1],this.state.motherName);
   m=m+1;
   
                 }
                 else {
                     month=m;
                     date = y+'-'+month+'-'+'25';
                     this.setState({dateNotification:date});
             this.sendNotification(date,this.data[xxx-1],this.state.motherName)
   
   m++;           
   //alert('kk'+month)
      }
             }
             else if(m==12){
    month=m;
                 date = y+'-'+month+'-'+'25';
             this.setState({dateNotification:date});
   
             this.sendNotification(date,this.data[xxx-1],this.state.motherName)
             y=y+1;
                 m=1;
                 month='0'+m;
            // alert('kk'+month)
   
          //   m++;
             }
   
           }//for


            
        } else {
            ageString = "Oops! لا أستطيع الحساب!";
        }
     //   alert(this.state.age)
      
        this.setState({ age:ageString });
       // alert(this.state.age)
    }
      

}

render(){
  return(

  <LinearGradient
          colors={this.state.colors}
         // style={styles.linearGradient}
        >
        
  <ScrollView
  
  style={
    {
      width:'100%',
      height:'100%',
      display:this.state.display1

    }
  }
  >
         <View
          style={{
          width:'100%',
            height:70,
            flexDirection:'row-reverse'
             }}
              >
          <View
            style={{
           width:this.state.width2,
           height:70,
            backgroundColor:'hotpink',
            opacity:.7,

           justifyContent:'center',
          alignItems:'center',
          opacity:.7

           }}
               >


                   <Text
                   style={{
                     fontSize:20,
                  fontFamily:'Lobster-Regular',
                //  alignSelf:'center'
                     }}>
                           Girl
                    </Text>

          
              

                   
          </View>


          <View
style={{
  width:this.state.width1,
  height:70,
  backgroundColor:'blue',
  justifyContent:'center',
  alignItems:'center',
  opacity:.5


}}
>
<Text

style={{
                     fontSize:20,
                  fontFamily:'Lobster-Regular'
                     }}>
  Boy
</Text>


</View>
</View>


<View
style={{
 // borderColor:'black',
 borderBottomColor:this.state.colorBoy,
 borderRightColor:this.state.colorBoy,
 borderTopColor:this.state.colorGirl,
 borderLeftColor:this.state.colorGirl,
  width:'80%',
  height:this.state.heigh,
  borderWidth:4,
  alignSelf:'center',
  marginTop:100,
  padding:10
}}
>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:20,
  display:this.state.displayGirl,
}}

onPress={
  ()=>
  {
if(global.flagA=='Arab'){
  this.setState({p:'أميرتنا'})
}
else{//princess
  this.setState({p:'princess'})

}
    this.setState({width1:'0%',width2:'100%',colorBoy:'hotpink',displayBoy:'none',displayGirl:'flex'
    ,heigh:120,colors:['pink', 'pink' ],color1:'hotpink',display:'flex',gender:'female'})
  }
}
>
<Image 
 style={{
   width:'40%',
   height:80,
   borderRadius:60,
   borderColor:'hotpink',
   borderWidth:3
 }}
   source={require('../assets/images/girl.jpg')}

    
 />
<Text
style={{
  alignSelf:'center',
  fontSize:20,
  fontFamily:'Lobster-Regular'
}}
>
Little princess
</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'space-between',
  display:this.state.displayBoy,
}}
onPress={
  ()=>
  {
    if(global.flagA=='Arab'){
  this.setState({p:'أميرنا'})
}
else{//princess
  this.setState({p:'prince'})

}
    this.setState({width1:'100%',width2:'0%',colorGirl:'blue',displayBoy:'flex',displayGirl:'none'
    ,heigh:120,colors:['lightblue', 'lightblue' ],color1:'blue',display:'flex',p:'prince',gender:'male'})
  }
}
>
<Image 
 style={{
   width:'40%',
   height:80,
   borderColor:'blue',
   borderWidth:3,
   borderRadius:60,

 }}
   source={require('../assets/images/‏‏itsaboy.jpg')}

    
 />
<Text
style={{
  alignSelf:'center',
  fontSize:20,
  fontFamily:'Lobster-Regular'
}}
>
 Little prince

</Text>
</TouchableOpacity>
 

</View>

    <View 
    style={{
      borderColor:this.state.color1,
      width:'80%',
      height:120,
      borderWidth:4,
      borderRadius:20,
      marginTop:50,
      alignSelf:'center',
      padding:20,
      display:this.state.display,
    }}
    
    >


      <Text
      style={{
        fontSize:15,
        fontFamily:'Lobster-Regular'

      }}
      
      >
        What is the name of our {this.state.p}
      </Text>
      <TextInput
      
      style={{
        width:'60%',
        borderBottomColor:this.state.color1,
        borderBottomWidth:2,
        alignSelf:'center'
      }}
      onChangeText={(c)=>this.setState({ChildName:c})}
      >

      </TextInput>
    </View>




    <View 
    style={{
      borderColor:this.state.color1,
      width:'80%',
      height:140,
      borderWidth:4,
      borderRadius:20,
      marginTop:50,
      alignSelf:'center',
      padding:20,
      display:this.state.display,

    }}
    
    >


      <Text
      style={{
        fontSize:15,
        fontFamily:'Lobster-Regular'

      }}
      
      >
        What is the date of birthday our {this.state.p}
      </Text>
      <DatePicker
            style={{width: 200,
            marginTop:20,
            alignSelf:'center',
            //marginBottom:100
            }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-09-09"
            maxDate="2021-11-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({date: date});
        //      alert(date)
            }}
          /> 
          
          </View>

          <TouchableOpacity
          
          style={{
           display:this.state.display,
           backgroundColor:this.state.color1,
           opacity:.5,

           width:'40%',
           height:60,
          // marginBottom:100,
           alignSelf:'center',
           marginTop:50,
           justifyContent:'center',
           alignItems:'center',
           borderRadius:40

          }}
          onPress={
            ()=>{
              this.SendBabyInformation();
              alert('done!')
            }
          }
          >
<Text

style={{
  fontSize:30,
  fontFamily:'SyneMono-Regular'
}}
>
  Confirm
</Text>
          </TouchableOpacity>
          <TouchableOpacity
          
onPress={()=>  this.props.navigation.navigate('HomeBaby')   
                  }
          >
        <Icon name="chevron-left" size={30} color="black"  

style={{
 // display:this.state.displayGirl,
  alignSelf:'flex-end',
  marginBottom:10
}}

         />
          </TouchableOpacity>
  
  </ScrollView>
       
       
       
  <ScrollView
  
  style={
    {
      width:'100%',
      height:'100%',
      display:this.state.display2

    }
  }
  >
         <View
          style={{
          width:'100%',
            height:70,
            flexDirection:'row-reverse'
             }}
              >
          <View
            style={{
           width:this.state.width2,
           height:70,
            backgroundColor:'hotpink',
            opacity:.7,

           justifyContent:'center',
          alignItems:'center',
          opacity:.7

           }}
               >


                   <Text
                   style={{
                     fontSize:20,
                  fontFamily:'Lobster-Regular',
                //  alignSelf:'center'
                     }}>
                           بنت
                    </Text>

          
              

                   
          </View>


          <View
style={{
  width:this.state.width1,
  height:70,
  backgroundColor:'blue',
  justifyContent:'center',
  alignItems:'center',
  opacity:.5


}}
>
<Text

style={{
                     fontSize:20,
                  fontFamily:'Lobster-Regular'
                     }}>
  ولد
</Text>


</View>
</View>


<View
style={{
 // borderColor:'black',
 borderBottomColor:this.state.colorBoy,
 borderRightColor:this.state.colorBoy,
 borderTopColor:this.state.colorGirl,
 borderLeftColor:this.state.colorGirl,
  width:'80%',
  height:this.state.heigh,
  borderWidth:4,
  alignSelf:'center',
  marginTop:100,
  padding:10
}}
>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:20,
  display:this.state.displayGirl,
}}

onPress={
  ()=>
  {

    this.setState({width1:'0%',width2:'100%',colorBoy:'hotpink',displayBoy:'none',displayGirl:'flex'
    ,heigh:120,colors:['pink', 'pink' ],color1:'hotpink',display:'flex',p:'princess',gender:'female'})
  }
}
>
<Image 
 style={{
   width:'40%',
   height:80,
   borderRadius:60,
   borderColor:'hotpink',
   borderWidth:3
 }}
   source={require('../assets/images/girl.jpg')}

    
 />
<Text
style={{
  alignSelf:'center',
  fontSize:20,
  fontFamily:'Lobster-Regular'
}}
>
أميرة صغيرة
</Text>
</TouchableOpacity>
<TouchableOpacity
style={{
  flexDirection:'row',
  justifyContent:'space-between',
  display:this.state.displayBoy,
}}
onPress={
  ()=>
  {

    this.setState({width1:'100%',width2:'0%',colorGirl:'blue',displayBoy:'flex',displayGirl:'none'
    ,heigh:120,colors:['lightblue', 'lightblue' ],color1:'blue',display:'flex',p:'prince',gender:'male'})
  }
}
>
<Image 
 style={{
   width:'40%',
   height:80,
   borderColor:'blue',
   borderWidth:3,
   borderRadius:60,

 }}
   source={require('../assets/images/‏‏itsaboy.jpg')}

    
 />
<Text
style={{
  alignSelf:'center',
  fontSize:20,
  fontFamily:'Lobster-Regular'
}}
>
أمير صغير
</Text>
</TouchableOpacity>
 

</View>

    <View 
    style={{
      borderColor:this.state.color1,
      width:'80%',
      height:120,
      borderWidth:4,
      borderRadius:20,
      marginTop:50,
      alignSelf:'center',
      padding:20,
      display:this.state.display,
    }}
    
    >


      <Text
      style={{
        fontSize:15,
        fontFamily:'Lobster-Regular'

      }}
      
      >
       ؟ {this.state.p} ما هو اسم
      </Text>
      <TextInput
      
      style={{
        width:'60%',
        borderBottomColor:this.state.color1,
        borderBottomWidth:2,
        alignSelf:'center'
      }}
      onChangeText={(c)=>this.setState({ChildName:c})}
      >

      </TextInput>
    </View>




    <View 
    style={{
      borderColor:this.state.color1,
      width:'80%',
      height:120,
      borderWidth:4,
      borderRadius:20,
      marginTop:50,
      alignSelf:'center',
      padding:20,
      display:this.state.display,

    }}
    
    >


      <Text
      style={{
        fontSize:15,
        fontFamily:'Lobster-Regular'

      }}
      
      >
      ؟   {this.state.p} ما هو تاريخ ميلاد 
      </Text>
      <DatePicker
            style={{width: 200,
            marginTop:20,
            //marginBottom:100
            alignSelf:'center',
            }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2019-09-09"
            maxDate="2021-11-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({date: date});
        //      alert(date)
            }}
          /> 
          
          </View>

          <TouchableOpacity
          
          style={{
           display:this.state.display,
           backgroundColor:this.state.color1,
           opacity:.5,

           width:'40%',
           height:60,
          // marginBottom:100,
           alignSelf:'center',
           marginTop:50,
           justifyContent:'center',
           alignItems:'center',
           borderRadius:40

          }}
          onPress={
            ()=>{
              this.SendBabyInformation();
              alert('done!')
            }
          }
          >
<Text

style={{
  fontSize:30,
  fontFamily:'SyneMono-Regular'
}}
>
  تأكيد
</Text>
          </TouchableOpacity>
          <TouchableOpacity
          
onPress={()=>  this.props.navigation.navigate('HomeBaby')   
                  }
          >
        <Icon name="chevron-left" size={30} color="black"  

style={{
 // display:this.state.displayGirl,
  alignSelf:'flex-end',
  marginBottom:10
}}

         />
          </TouchableOpacity>
  
  </ScrollView>
       
       
       
        
       
       
        </LinearGradient>
  )
}

}