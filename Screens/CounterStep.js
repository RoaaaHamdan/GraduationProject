import React, { Component } from 'react';
import { View, Text, TouchableOpacity,ScrollView,ImageBackground,Dimensions  } from 'react-native'
//rimport Slider from '@react-native-community/slider';
//rn-vertical-slider
//import VerticalSlider from 'rn-vertical-slider'
import GoogleFit,{Scopes} from 'react-native-google-fit'

export default class BaByTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    count:0,
      dinkValue: 0,
      username:'roaa1'
    }
    
    GoogleFit.onAuthorize(() => {
  //   dispatch('AUTH SUCCESS');
    });
    
    GoogleFit.onAuthorizeFailure(() => {
    // dispatch('AUTH ERROR');
    });
    
    GoogleFit.authorize();
    
    // ...
    // Call when authorized
    GoogleFit.startRecording((callback) => {
      // Process data from Google Fit Recording API (no google fit app needed)
    });

  }
  componentDidMount = () => { 
    GoogleFit.checkIsAuthorized().then(() => {
      console.log('cc'+GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
  })
    //const windowHeight = Dimensions.get('screen').height;
    //this.setState({ height: windowHeight })
    //alert(this.state.heigt)
    
  }
f=()=>{
  const opt = {
    startDate: "2020-11-11T00:00:17.971Z", // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
  };
  
  GoogleFit.getDailyStepCountSamples(opt)
   .then((res) => {
       console.log('Daily steps1 >>> ', res[0].rawSteps);
       console.log('Daily steps2 >>> ', res[1].rawSteps);
 

       let x = res[1].steps;
       console.log('kkk'+x[0].value)
   })
   .catch((err) => {console.warn(err)});
   //async function fetchData() {
    //const res = await GoogleFit.getDailyStepCountSamples(opt);
   // console.log('dsfdsf'+res);

  //}
  
  // or with async/await syntax

  // shortcut functions, 
  // return weekly or daily steps of given date
  // all params are optional, using new Date() without given date, 
  // adjustment is 0 by default, determine the first day of week, 0 == Sunday, 1==Monday, etc.
//  console.log('ssdsdsd'+ GoogleFit.getDailySteps('2020-11-11').then().catch());
  //GoogleFit.getWeeklySteps('2020-11-11', 0).then().catch()
 
}
  send = () => { 
    const opt = {
    //  unit: "pound", // required; default 'kg'
      startDate: "2020-11-11T00:00:17.971Z", // required
      endDate: new Date().toISOString(), // required
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
      //ascending: false // optional; default false
    };
    
      const heartrate =  GoogleFit.getHeartRateSamples(opt);
      console.log('dfs'+heartrate);
    
      const bloodpressure =  GoogleFit.getBloodPressureSamples(opt);
      console.log(bloodpressure);
    
    }
     fun =()=>{ 
       let startDate =new Date().toISOString();
       let endDate =new Date().toISOString();
     //  let y = 0 ;
      // this.setState({count : y});
      var  y =0;
      this.setState({count : y});
       var da = new Date();
      //da =da.getFullYear()+da.getMonth+da.getDay+ ' ' + da.getHours+':'+da.getMinutes+':'+da.getSeconds+3;
     //4da=da.toISOString();
      const opt = {
        startDate:'2020-11-11T00:00:17.971Z', // required ISO8601Timestamp
        endDate:endDate, // required ISO8601Timestamp
        bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1. 
      };
      let x;
      GoogleFit.getDailyStepCountSamples(opt)
       .then((res) => {
      

        console.log('Daily steps1 >>> ', res);
          this.s();

       })
       .catch((err) => {console.warn(err)});
      
       
 
     }
     componentDidMount() {
       this.s();
     }
  s=()=>{
    setInterval(
 
      () => { 
        
      //  da =
        const opt = {
          startDate:'2020-11-11T00:00:17.971Z', // required ISO8601Timestamp
          endDate:new Date().toISOString(), // required ISO8601Timestamp
          bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
          bucketInterval: 1, // optional - default 1. 
        };
        GoogleFit.getDailyStepCountSamples(opt).then((res) => {
          console.log('Daily steps1 >>> ', res[0].rawSteps);
          console.log('Daily steps2 >>> ', res[1].rawSteps);
          console.log('Daily steps2 >>> ', res[2].rawSteps);

          console.log( 'dsd',res[0].steps[0].value);
           y =res[2].steps[0].value;
           console.log('y=>>>',y);
          this.setState({count:y})
         })
         .catch((err) => {console.warn(err)});
      }
    ,5000);
  }

  fun2=()=>{
    const options = {
      startDate: "2020-11-11T00:00:17.971Z", // required
      endDate: new Date().toISOString(), // required
      bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    }
    const heartrate =  GoogleFit.getHeartRateSamples(options);
      console.log(heartrate);
    async function fetchData() {
      
    
      const bloodpressure = await GoogleFit.getBloodPressureSamples(options);
      console.log(bloodpressure);
    } 
  }
  render() { 
        const screenhHeight = (Dimensions.get('window').height);
        const screenWidth = (Dimensions.get('window').width);

    return (
      <ScrollView>
    
         
          <TouchableOpacity
            style={
              {
                width: 60,
                height: 70,
                backgroundColor: 'pink',
                marginRight: screenWidth - 120,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
               // marginTop: 50,
                 // marginLeft:60
                
                

              }
              
            }
          onPress={this.fun2}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                
            }}
            >
            تم {this.state.count}
             </Text>
 
          </TouchableOpacity>
 
         </ScrollView>
     
    )
  }
}