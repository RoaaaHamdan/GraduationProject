import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import { View, Text, TouchableOpacity,ScrollView,ImageBackground,Dimensions  } from 'react-native'

export default class App extends Component {

constructor(properties) {
  super(properties);
  
  //Remove this method to stop OneSignal Debugging 
  OneSignal.setLogLevel(6, 0);
  
  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.init("8d8c8be0-d155-4225-88e3-ef934e59b9d4", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
  
  // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
  //OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

   OneSignal.addEventListener('received', this.onReceived);
   OneSignal.addEventListener('opened', this.onOpened);
   OneSignal.addEventListener('ids',this.onIds);
   OneSignal.sendTag("key",'roaa3');
   //console.log(this.onIds)
   
}
onIds = device => {
  // write logic to execute when device id is received
  };

//}
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  sendNotification(data, id) {
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
            value: 'roaa3',
          },
        ],
        delayed_option:'timezone',
        delivery_time_of_day:"11:9:00",
        headings: {en: 'Your Heading'},
       contents: {en: data},
      }),
    };
    fetch(endpoint, params).then(res => console.log(res));
  }

render(){
  return(
    <View>
    <TouchableOpacity 
    onPress={()=>{ 
      
this.sendNotification('dsada','roaa3')  
}  }
    >
    <Text>
      llllllllllllllllllllllllllll
    </Text>
    </TouchableOpacity>
     
    </View>
  )
}}
