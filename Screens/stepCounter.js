import React, { Component } from 'react';
import { View,
   Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions ,
    Button,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import GoogleFit,{DistanceResponse,StepsResponse} from 'react-native-google-fit'

export default class stepCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    count:0,
      dinkValue: 0,
     username:'Hyam',
      startDate :'',
      cal:'',
      dis:'',
  date:new Date(),
    mode: 'date',
      show: false,
      date2:new Date(),
      date3:new Date().toISOString(),
      date4:new Date().toISOString(),
      mode2: 'date',
        show2: false,
        display1:'flex',
        display2:'none'   }
    this.opt = {
      startDate:this.state.date.toISOString(), // required ISO8601Timestamp
      endDate:this.state.date2.toISOString(), // required ISO8601Timestamp
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    };
    onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({show:Platform.OS === 'ios'});
      this.setState({date:currentDate});
    };
    showMode = (currentMode) => {
      this.setState({show:true});
      this.setState({mode:currentMode});
    };
    showDatepicker = () => {
showMode('date');
      this.setState({mode:'date'});
    };
    
    showTimepicker = () => {
      showMode('time');
      this.setState({mode:'time'});
    };
  onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date2;
    this.setState({show2:Platform.OS === 'ios'});
    this.setState({date2:currentDate});
  };
  showMode2 = (currentMode) => {
    this.setState({show2:true});
    this.setState({mode2:currentMode});
  };
  showDatepicker2 = () => {
showMode2('date');
    this.setState({mode2:'date'});
  };
  showTimepicker2 = () => {
    showMode2('time');
    this.setState({mode2:'time'});
  };
    GoogleFit.onAuthorize(() => {
    });
    GoogleFit.onAuthorizeFailure(() => {
    });
    GoogleFit.authorize();
      GoogleFit.startRecording((callback) => {
    });
  }
  UNSAFE_componentWillMount = () => { 
//this.GetSteps();

if (global.flagA =='Arab'){
  this.setState({display1:'none',display2:'flex'})
}
else {
  this.setState({display2:'none',display1:'flex'})

}
  }
  GetSteps=()=>{
    GoogleFit.checkIsAuthorized().then(() => {
      console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
  })
    const url =
    'http://192.168.1.209:8082/checkifexistOldSteps/' +
    this.state.username;
fetch(url, {method: 'GET', body: null})
.then((response) => response.json())
.then((json) => {
{
  if (json.result.length == 0) {
    //alert('heelll');
this.setState({count:0,date:new Date(),date2:new Date()});
this.opt.startDate=this.state.date.toISOString();
this.opt.endDate=this.state.date2.toISOString();

 }
 else {
   //alert('heelll');
  this.setState({count:json.result[0].Steps,date3:json.result[0].StartDate,date4:json.result[0].EndDate});
  this.opt.startDate=this.state.date3;
  this.opt.endDate=this.state.date4;
  var xx =Math.round(json.result[0].Steps/3);
 var xxx =Math.round(json.result[0].Steps/4);
 this.setState({cal:xx});
 this.setState({dis:xxx});
 this.opt.startDate=json.result[0].StartDate;
 this.opt.endDate=json.result[0].EndDate;
 GoogleFit.checkIsAuthorized().then(() => {
  console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
})


let x;
GoogleFit.getDailyStepCountSamples(this.opt)
 .then((res) => {


  console.log('Daily steps1 >>> ', res);
  GoogleFit.checkIsAuthorized().then(() => {
    console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
})
    this.s;

 })
 .catch((err) => {
  console.log("err=>",err)

 });

}
}
})
.catch((error)=>{
  console.log(error);
});

  }

/*f=()=>{
  const opt = {
    startDate: this.state.startDate, // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
  };
  
  GoogleFit.getDailyStepCountSamples(opt)
   .then((res) => {
       console.log('Daily steps1 >>> ', res[0].rawSteps);
       console.log('Daily steps2 >>> ', res[1].rawSteps);
 

       let x = res[1].steps;
   })
   .catch((err) => {console.log(err)});
 
}
  send = () => { 
    const opt = {
    //  unit: "pound", // required; default 'kg'
      startDate: "2020-11-11T00:00:17.971Z", // required
      endDate: new Date().toISOString(), // required
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    };
    
      const heartrate =  GoogleFit.getHeartRateSamples(opt);
      console.log('dfs'+heartrate);
    
      const bloodpressure =  GoogleFit.getBloodPressureSamples(opt);
      console.log(bloodpressure);
    
    }
    
 UNSAFE_componentWillMount =() =>{

  AsyncStorage.getItem('start')
  .then((token) => {
   if (token) {

    this.setState({date: token});

   } else {
    resolve({date: new Date()});
   }
  });

  AsyncStorage.getItem('end')
  .then((token) => {
   if (token) {

    this.setState({date2: token});

   } else {
    resolve({date2: new Date()});
   }
  });


  AsyncStorage.getItem('y')
  .then((token) => {
   if (token) {

    this.setState({count: token});

   } else {
    resolve({count:0});
   }
  });



}
*/
     start =()=>{ 
       
       if (this.state.date.toISOString() == this.state.date2.toISOString()){
         alert('please chosse a valid value for date !');
       }
       else {
  
       let endDate =new Date().toISOString();
      var  y =0;
      this.setState({count : y});
      var xx = y/3;
      var xxx = y/4;

      this.setState({cal:xx});
      this.setState({dis:xxx});

       var da = new Date();
 
      if(this.state.date.toISOString()>this.state.date2.toISOString()){
        alert('Wrong date!!');
      }else {
        this.opt.startDate= this.state.date.toISOString();
        this.opt.endDate= this.state.date2.toISOString();

      
        let x;
        GoogleFit.getDailyStepCountSamples(this.opt)
         .then((res) => {
          console.log('res=======>');

          console.log(res[0].rawSteps);
          console.log('res=======>');

          console.log('Daily steps1 >>> ', res[0].rawSteps);
          console.log('Daily steps2 >>> ', res[1].rawSteps);
          console.log('Daily steps2 >>> ', res[2].rawSteps);
          var y =res[2].steps[0].value;

        //  if (res[2].steps[2].value>res[2].steps[1].value)
          var y_old = y ;
          let y22 =y ;
          console.log('y=>>>',y);
          var xx =Math.round(y_old/3);
         this.setState({count:y_old})
         var xxx =Math.round(y_old/4);
         this.setState({cal:xx});
         this.setState({dis:xxx});
   

         // console.log('Daily steps1 >>> ', res);
          //  this.s();
  
         })
         .catch((err) => {
          console.log(err)
  
         });
        
      }
       }
     
 
    
       
 
     }

  s=()=>{
    /*const opt = {
      startDate:this.state.date.toISOString(), // required ISO8601Timestamp
      endDate:this.state.date2.toISOString(), // required ISO8601Timestamp
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    };*/
    if(this.state.date>this.state.date2){
      alert('Wrong date!!');
    }
    
    else if(this.state.date< this.state.date2){
      setInterval(
        () => { 

    let start =this.state.date;
            let end =this.state.date2;
          GoogleFit.getDailyStepCountSamples(this.opt).then((res) => {
            console.log('Daily steps1 >>> ', res[0].rawSteps);
            console.log('Daily steps2 >>> ', res[1].rawSteps);
            console.log('Daily steps2 >>> ', res[2].rawSteps);
            var y =res[1].steps[0].value;
            var y_old = y ;
            let y22 =y ;
            console.log('y=>>>',y);
            var xx =Math.round(y_old/3);
           this.setState({count:y_old})
           var xxx =Math.round(y_old/4);
           this.setState({cal:xx});
           this.setState({dis:xxx});
           let UpdateURL1 =
           'http://192.168.1.209:8082/updateStepValue/' +this.state.username +'/' +this.state.count;
         fetch(UpdateURL1, {method: 'POST', body: null})
           .then((response) => response.json)
           .then((json) => {
             if (json.result == 'failed') {
               alert('Done');
             } else if (json.result == "Success") {
               alert('Done');
             }
           });
           })
           .catch((err) => {
        });
      }
      ,1000);
    };
 
  }
  render() { 
        const screenhHeight = (Dimensions.get('window').height);
        const screenWidth = (Dimensions.get('window').width);

    return (
      <ScrollView>
      <View
      style={{
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'midnightblue'
      }}
      >
       <Text
       
       style={{
         color:'white',
         fontSize:20,
         fontFamily:'Lobster-Regular',
         display:this.state.display1
       }}
       >

         Step Counter
       </Text>

       <Text
       
       style={{
         color:'white',
         fontSize:20,
         fontFamily:'Lobster-Regular',
         display:this.state.display2
       }}
       >

       عداد الخطوات
       </Text>
      </View>

         <View
         
         style={{
           justifyContent:'center',
           alignItems:'center',
         //  alignSelf:'center'
         }}
         >

         <View 
    style={{
      borderColor:'midnightblue',
      borderWidth:2,
      width:170,
      height:170,
      borderRadius:200,
      alignSelf:'center',
      marginTop:50,
      justifyContent:'center',
      alignItems:'center'
    }}>
    
    
            <Text
              style={{
                color: 'midnightblue',
                fontSize: 30,
                
            }}
            >
             {this.state.count}
             </Text>

    </View>
         </View>


         <View
         style={{
           flexDirection:'row',
           justifyContent:'space-around',
           marginTop:40,

         }}
         
         >

         <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'midnightblue',
        borderWidth:1,
        width:'30%',
        height:60,
        borderRadius:200,
    
      }}
      onPress={showTimepicker}
      >

       <Text
       style={{
         color:'black',display:this.state.display1

       }}
       >
Start Time      </Text>

<Text
       style={{
         color:'black',display:this.state.display2

       }}
       >
وقت البداية    </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'midnightblue',
        borderWidth:1,
        width:'30%',
        height:60,
        borderRadius:200,
    
      }}
      onPress={showDatepicker}
      >

       <Text
       style={{
         color:'black',
         display:this.state.display1
       }}
       >
         Start Date
       </Text>
       <Text
       style={{
         color:'black',
         display:this.state.display2
       }}
       >
تاريخ البداية       </Text>
      </TouchableOpacity>


  

         </View>













  
         <View
         style={{
           flexDirection:'row',
           justifyContent:'space-around',
           marginTop:40,

         }}
         
         >

         <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'midnightblue',
        borderWidth:1,
        width:'30%',
        height:60,
        borderRadius:200,
    
      }}
      onPress={showTimepicker2}
      >

       <Text
       style={{
         color:'black',
         display:this.state.display1
       }}
       >
         End Time
       </Text>
       <Text
       style={{
         color:'black',
         display:this.state.display2
       }}
       >
وقت النهاية     </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'midnightblue',
        borderWidth:1,
        width:'30%',
        height:60,
        borderRadius:200,
    
      }}
      onPress={showDatepicker2}
      >

       <Text
       style={{
         color:'black',display:this.state.display1
       }}
       >
         End Date
       </Text>

       <Text
       style={{
         color:'black',display:this.state.display2
       }}
       >
تاريخ النهاية       </Text>
      </TouchableOpacity>


  

         </View>
 
<TouchableOpacity
style={
  {
    width:120,
    height:60,
    alignSelf:'center',
    marginTop:20,
    borderColor:'midnightblue',
    borderWidth:1,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'

  }
}
onPress={()=>{
  this.start();
}}
>
  <Text
  style={{
    display:this.state.display1
  }}
  >
    Get Result
  </Text>

  <Text
  style={{
    display:this.state.display2
  }}
  >
النتيجة   </Text>
</TouchableOpacity>







   <View
   
   style={{
     marginTop:30,
     justifyContent:'center',
     alignItems:'center',
     alignSelf:'center',
     width:'80%'
   }}
   >
     <Text
     style={{
       display:this.state.display1
     }}
     >

     The number of calories burned  {this.state.cal}
     </Text>

     <Text
     style={{
       display:this.state.display2
     }}
     >

  {this.state.cal} عدد السعرات المحروقة
     </Text>
     <Text
     
     style={{
       display:this.state.display2
     }}
     >
  متر{this.state.dis} المسافة المقطوعة
</Text>


<Text
     
     style={{
       display:this.state.display1
     }}
     >

Tthe traveled distance  {this.state.dis} m
</Text>
   </View> 
   <View>

      {this.state.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={this.state.date}
          mode={this.state.mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>




    <View>

{this.state.show2 && (
  <DateTimePicker
    testID="dateTimePicker"
    value={this.state.date2}
    mode={this.state.mode2}
    is24Hour={true}
    display="default"
    onChange={onChange2}
  />
)}
</View>

         </ScrollView>
     
    )
  }
}