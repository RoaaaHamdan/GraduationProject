import {View,StyleSheet,TouchableOpacity,Text,Image,ScrollView,SafeAreaView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';

export default class addPre extends Component{
    
  constructor(props){

    super(props);
    this.state={
      display1:'flex',
      display2:'none',
      date :'',
      username:global.username,
      age:0,
      day:''


    }
    this.data=[' your fetus age is only one  month please check our page  ',
    'your fetus age is 2  month please check our page',
    'your fetus age is  3 month please check our page',
    'your fetus age is 4  month please check our page',
    'your fetus age is 5  month please check our page',
    'your fetus age is 6  month please check our page'
    ,'your fetus age is 7  month please check our page',
    'your fetus age is 8  month please check our page'
    ,'your fetus age is 9  month please check our page',
    'your fetus age is 10  month please check our page',
    'your fetus age is 11  month please check our page',
    'your fetus age is 12 month please check our page',
    'month11','month12'];
  }



  calage(){
// /  alert(this.state.day)

    //  alert('hello')
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

    if ((age.years ===0) && (age.months === 0) && (age.days === 0)) {
        let m=monthDob;
         let month='';
         month=new Date().getMonth()+1;
         let y =yearNow;
let date = y+'-'+month+'-'+this.state.day;
let xxx=age.months;
//alert(xxx+'dssfsd');
         for (let i = 0 ;i<12 ; i++){
           if (xxx>12){
             xxx=1;
           }
              
         if (m<12){

             if(m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
               month='0'+m;
date = y+'-'+month+'-'+this.state.day;
               this.setState({dateNotification:date});
         this.sendNotification(date,this.data[xxx-1],this.state.motherName);
m=m+1;

             }
             else {
                 month=m;
                 date = y+'-'+month+'-'+this.state.day;
                 this.setState({dateNotification:date});
         this.sendNotification(date,this.data[xxx-1],this.state.motherName)

m++;           
//alert('kk'+month)
  }
         }
         else if(m==12){
month=m;
             date = y+'-'+month+'-'+this.state.day;
         this.setState({dateNotification:date});

         this.sendNotification(date,this.data[xxx-1],this.state.motherName)
         y=y+1;
             m=1;
             month='0'+m;
        // alert('kk'+month)

      //   m++;
         }

       }//for



    }
    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
        ageString = age.years + yearString + ", " + age.months + monthString + ", و " + age.days + dayString + " سنه.";
    } else if ((age.years === 0) && (age.months === 0) && (age.days > 0)) {
        ageString = "ففط " + age.days + dayString ;
      let mu=1;
//      console.log(mu+'');
     // m=monthDob;
     // alert(m)
      let month='';
      let y =yearNow;
      month=new Date().getMonth()+1;
let date = y+'-'+month+'-'+this.state.day;
console.log('date'+date)

console.log('date'+date);

      for (let i = 0 ;i<12 ; i++){
        let date = y+'-'+month+'-'+this.state.day;

      if (month<12){

          if(month==1||month==2||month==3||month==4||month==5||month==6||month==7||month==8||month==9){
            let month1='0'+month;
date = y+'-'+month1+'-'+this.state.day;
            this.setState({dateNotification:date});
      this.sendNotification(date,this.data[mu-1],this.state.motherName);
      month=month+1;
      mu++;

          }
          else {
              month=month;
              date = y+'-'+month+'-'+this.state.day;
              this.setState({dateNotification:date});
      this.sendNotification(date,this.data[mu-1],this.state.motherName)

mu++;           
//alert('kk'+month)
}
      }
      else if(month==12){
//month=mu;
          date = y+'-'+month+'-'+this.state.day;
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
let date = y+'-'+month+'-'+this.state.day;
var x = age.months;
         for (let i = 0 ;i<12-age.months ; i++){
           if (x>12){
             x=1;
           }
         if (m<12){
             if(m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
               month='0'+m;
date = y+'-'+month+'-'+this.state.day;
               this.setState({dateNotification:date});
         this.sendNotification(date,this.data[x-2],this.state.motherName);
         x++;
m=m+1;
             }
             else {
                 month=m;
                 date = y+'-'+month+'-'+this.state.day;
                 this.setState({dateNotification:date});
         this.sendNotification(date,this.data[x-2],this.state.motherName)
         x++;

m++;           
  }
         }
         else if(m==12){
month=m;
             date = y+'-'+month+'-'+this.state.day;
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
let date = y+'-'+month+'-'+this.state.day;
let xxx=age.months;
         for (let i = 0 ;i<12-age.months ; i++){
           if (xxx>12){
             xxx=1;
           }
              
         if (m<12){

             if(m==1||m==2||m==3||m==4||m==5||m==6||m==7||m==8||m==9){
               month='0'+m;
date = y+'-'+month+'-'+this.state.day;
               this.setState({dateNotification:date});
         this.sendNotification(date,this.data[xxx-1],this.state.motherName);
m=m+1;

             }
             else {
                 month=m;
                 date = y+'-'+month+'-'+this.state.day;
                 this.setState({dateNotification:date});
         this.sendNotification(date,this.data[xxx-1],this.state.motherName)

m++;           
//alert('kk'+month)
  }
         }
         else if(m==12){
month=m;
             date = y+'-'+month+'-'+this.state.day;
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
    this.props.navigation.navigate('pregnant1')   }
  
  
  
  
  
    sendINF=()=>{

    if (this.state.date==''){

        if(this.state.display1=='flex'){
            alert('please choose a date');
        }
        else {
            alert('الرجاء اختيار تاريخ')
        }
    }
    else {
        let SendURL =
        'http://192.168.1.209:8082/addNewPre/' +
        this.state.date +
        '/' +
        this.state.username
       ;
      fetch(SendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
            this.calage();
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        });
    }
  }
  sendNot=()=>{

  }


  sendNotification(date,data,id) {
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
           value: global.username,
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


  componentDidMount =()=>{

  if (new Date().getDate()>9){
      this.setState({day:new Date().getDate()})
  }else {
    this.setState({day: '0'+new Date().getDate()})

  }

    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }
    else if(global.flagA=='Eng'){
      this.setState({display2:'none',display1:'flex'})
    
     // global.display1='flex';
      //global.display1='none';
    
    }
      }
  render(){
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
      <ScrollView>
         <View style={{ marginTop:80}} >
          <Image source={require('../assets/preg.jpg')}
          style={{width:300, height:300, borderRadius:100, alignSelf:'center'}} />
          
          <Text style={{
            marginBottom: 10,
            marginTop:15,
            textAlign: 'center',
            color: 'hotpink',
            fontSize: 25,
            fontFamily: 'Itim-Regular-bold',
            display:this.state.display1
            }}> Choose your pregnancy date </Text>


<Text style={{
            marginBottom: 10,
            marginTop:15,
            textAlign: 'center',
            color: 'hotpink',
            fontSize: 25,
            fontFamily: 'Itim-Regular-bold',
            display:this.state.display2
            }}>اختاري تاريخ حملك</Text>
        
  </View>
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

          <TouchableOpacity
          style={{
              alignSelf:'center',
              marginTop:30,
       }}
       onPress={()=>
       this.sendINF()
       }
          >

              <Text
              style={{
              fontFamily:'Amiri-Regular',
              fontSize:25,

                  display:this.state.display1
              }}
              >
                  Send
              </Text>

              <Text
              style={{   fontFamily:'Amiri-Regular',
              fontSize:25,
                  display:this.state.display2
              }}
              >
                  ارسال
              </Text>
          </TouchableOpacity>
            </ScrollView>
      </SafeAreaView>
    );
  }
 
  }
// Pr2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  img: {
    width:60,
    height:60,
   borderRadius: 30,
    marginTop: 30,
  },
});

