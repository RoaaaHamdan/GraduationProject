import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import {Dropdown} from 'react-native-material-dropdown';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [flagn1, set1] = React.useState(true);
  const [flafn2, set2] = React.useState(true);
  const [flagem, set3] = React.useState(true);
  const [flagph, set4] = React.useState(false);

  const [secondName, setSecondName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [phoneNumbe, setphoneNumbe] = React.useState('');
  const [type, setddlSelectedValue] = React.useState('');
  const setSelectedStateValue = (ddlValue) => {
    setddlSelectedValue(ddlValue);
    //  alert(type);
  };
  const UsersetFirstName = (val) => {
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(val) ||
      !/^[A-Z]/.test(val) ||
      /\d+/g.test(val)
    ) {
      set1(false);
    }

    setFirstName(val);
  };
  const UsersetsetSecondName = (val) => {
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(val) ||
      !/^[A-Z]/.test(val) ||
      /\d+/g.test(val)
    ) {
      // alert('dd');
      set2(false);
    }

    setSecondName(val);
  };
  const UsersetEmail = (val) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(val)) {
      // this is a valid email address
      // call setState({email: email}) to update the email
      // or update the data in redux store.
      setEmail(val); //console.log('Email is Correct');
      set3(false);
    } else {
      setEmail(val);
      set3(true);
    }
    //  console.log(text);
    /*  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) == false) {
      set3(true);

      //console.log('Email is Not Correct');
      //setEmail(val);
      // return false;
    } else {
      setEmail(val); //console.log('Email is Correct');
    }*/
  };
  const UsersetphoneNumbe = (val) => {
    setphoneNumbe(val);
  };
  //const validate = (text) => {};
  const UserSendInformation = () => {
    if (
      Email == '' ||
      firstName == '' ||
      secondName == '' ||
      phoneNumbe == ''
    ) {
      alert('لو سمحت املأ جميع الفراغات');
    } //else if (flagn1 || flafn2 || flagem) {
      //alert('لو سمحت تاكد من ادخال الفورمات الصحيح' + flagem);
      //  alert(flafn2);
   // } 
    else {
      let SendURL =
        'http://192.168.1.209:8082/UserSendInformation2/' +
        firstName +
        '/' +
        secondName +
        '/' +
        phoneNumbe +
        '/' +
        Email +

        '/' +
        type;
      fetch(SendURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
        })
        .catch(error=>{
          console.log(error)
        });
     // alert('لقد تم ارسال المعلومات');
    }
  };
  let myFavouriteActors = [
    {
      label: 'Doctor',
      value: 'doctor',
    },
    {
      label: 'Normal User',
      value: 'normaluser',
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="midnightblue" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Here you can sent Your information then we will send to you your User
          name and passCode to be a member of our community
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: 'lavender',
          },
        ]}>
        <View style={styles.action}>
          <TextInput
          value={firstName}
            placeholder="Your First Name"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => UsersetFirstName(val)}
            //  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.action}>
          <TextInput
          value={secondName}
            placeholder="Your Second Name"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => UsersetsetSecondName(val)}
            //  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.action}>
          <TextInput
          value={Email}
            placeholder="Your E-mail"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => UsersetEmail(val)}
            //  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.action}>
          <TextInput
          value={phoneNumbe}
            placeholder="Your Phone Number"
            placeholderTextColor="#666666"
            keyboardType="numeric"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => UsersetphoneNumbe(val)}
          />
        </View>

        <Dropdown
          data={myFavouriteActors}
          value={type}
          label="My Job"
          itemColor={'midnightblue'}
          useNativeDriver={true}
          onChangeText={(value, index, data) => setSelectedStateValue(value)}
          //  style={{ width: 20, height:90 }}
        />

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={
            
            ()=>

            {
              if (
      Email == '' ||
      firstName == '' ||
      secondName == '' ||
      phoneNumbe == ''
    ) {
      alert('Please fill in all the blanks');
    } //else if (flagn1 || flafn2 || flagem) {
      //alert('Please make sure of entering the correct formatting');
      //  alert(flafn2);
    //}
    
    
     else { 
       if (type=='doctor'){
         UserSendInformation();
         setEmail('');setSecondName('');setFirstName('');setphoneNumbe('');setddlSelectedValue('')
       }
       else {
        navigation.navigate('qusetions',
          {firstName:firstName,secondName:secondName,Email:Email,phoneNumbe:phoneNumbe
          ,type:type}
          )
       }
     }}}
          >
            <LinearGradient colors={['midnightblue', 'lavender']} style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Send information
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'midnightblue',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily:'Amiri-Italic'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 0,
    color: '#05375a',
  },
  errorMsg: {
    color: 'midnightblue',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
