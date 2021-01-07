import React ,{useEffect,Component}from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  
} from 'react-native';

import {AsyncStorage} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';



/*


componentDidMount(){
this.getToken();
} 
*/

export default class SignInScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      UserNmae:'',
      PassWod:'',
    }
  }


 // const [UserNmae, setUserName] = React.useState('');
  //const [PassWod, setPass] = React.useState('');
  //const Usernameset = (val) => {
    //setUserName(val);
  //};

 

/**.
 *  async storeToken(user){
    try{
      await AsyncStorage.setItem("user",user);

    }catch(error){
      console.log('Sth Wrong')
    }
  }

 */
componentDidMount(){
 global.flagA='Eng';
 global.display1 ='flex';
 global.display2='none';

}
storeData = async (y) => {
 //=json.result[0].pre;
 //=json.result[0].child;
  //=json.result[0].games;
//  /=json.result[0].weight;
  try {
    await AsyncStorage.setItem('username', this.state.UserNmae)
    await AsyncStorage.setItem('type', y)
    await AsyncStorage.setItem('f1',  global.flagp)
    await AsyncStorage.setItem('f2', global.flaggames)
    await AsyncStorage.setItem('f3',  global.flagc)
    await AsyncStorage.setItem('f4',  global.flagweight)
    //await AsyncStorage.setItem('notificationuser',this.state.username)
    //a/wait AsyncStorage.setItem('notificationstate','1')
   // let value1 = await AsyncStorage.getItem('notificationstate');

  } catch (e) {
    // saving error
  }}

  /*const   storeToken=(user)=> {
    try {
     AsyncStorage.setItem("user", UserNmae);
    } catch (error) {
    console.log("Something went wrong", error);
    }
    }*/
    

   UserLogIn = () => {
  //   this.storeToken(this.state.UserNmae);
    if (this.state.UserNmae == '' || this.state.PassWod == '') {
      alert('please enter your data ^_^ ');
      //  <Emoji name="coffee" style={{ fontSize: 50 }} />);
    } else {
      //storeToken(this.state.UserNmae);

      let url =
        'http://192.168.1.209:8082/UserLogIn/' + this.state.UserNmae + '/' + 
        this.state.PassWod;
      fetch(url, {method: 'GET', body: null})
        .then((response) => response.json())
        .then((json) => {
          {
            /*    if (json.result[0].status === 'fail') {
              alert(json.result);
              return;
            }*/

            // alert(json.result);
            if (json.result.length == 0 ){
              alert('Wromg Data')
            }
            if (json.result[0].Type == 'doctor') {
              this.storeData('doctor')
              this.props.navigation.navigate('DrawerDoctor')//}
              //, {
                //username: UserNmae,
                //phoneNumber: json.result[0].Pn,
                //locatin: json.result[0].City,
                //flag: 'flex',
              //});
              global.globalNormlUserFlag= false;

              global.username=this.state.UserNmae;
              global.phoneNumber=json.result[0].Pn;
              global.locatin=json.result[0].City;
            //  global.username=UserNmae;
              global.firstName=json.result[0].FN;
              global.lastName=json.result[0].LN;
              global.type=json.result[0].Type;
              this.setState({PassWod:'',UserNmae:''})


            } else if (json.result[0].Type == 'normaluser') {
              global.flagp=json.result[0].pre;
              global.flagc=json.result[0].child;
              global.flaggames=json.result[0].games;
              global.flagweight=json.result[0].weight;
                global.globalNormlUserFlag= true;
                global.username=this.state.UserNmae;
                global.phoneNumber=json.result[0].Pn;
                global.locatin=json.result[0].City;
              //  global.username=UserNmae;
                global.firstName=json.result[0].FN;
                global.lastName=json.result[0].LN;
                global.type=json.result[0].Type;
                this.setState({PassWod:'',UserNmae:''});
    //            alert(  global.flagp)
              this.storeData('normaluser');

              this.props.navigation.navigate('MainUserHome',{userName:this.state.UserNmae});
                //flagp:json.result[0].pre,
              //flagc:json.result[0].child,
            //flaggames: json.result[0].games,
            //flagweight: json.result[0].weight,


           

            }

            else if (json.result[0].Type == 'admin') {
   global.username=this.state.UserNmae;
              global.phoneNumber=json.result[0].Pn;
              global.locatin=json.result[0].City;
            //  global.username=UserNmae;
              global.firstName=json.result[0].FN;
              global.lastName=json.result[0].LN;
              global.type=json.result[0].Type;
              this.storeData('admin');

              this.props.navigation.navigate('Draweradmin')//,          {userName:UserNmae,     }); //, {username: UserNmae});
           
this.setState({PassWod:'',UserNmae:''})
            }
          }
        })
        .catch(error=>{
          console.log(error)
        });
    }
  };

   Passwodset = (val) => {
    setPass(val);
    //alert(UserNmae);
  };

  render () {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="lavender" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: 'lavender',
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: 'midnightblue',
            },
          ]}>
          Username
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Username"
            returnKeyType="done"

            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => this.setState({UserNmae:val})}
            value={this.state.UserNmae}
            //  onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
        </View>

        <Animatable.View
          animation="fadeInLeft"
          duration={500}></Animatable.View>

        <Text
          style={[
            styles.text_footer,
            {
              color: 'midnightblue',
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: 'midnightblue',
              },
            ]}
            autoCapitalize="none"
            value={this.state.PassWod}
            onChangeText={(val) => this.setState({PassWod: val})}
          />
          <TouchableOpacity></TouchableOpacity>
        </View>

        <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('forgotPass')}

        >
          <Text style={{color: 'midnightblue', marginTop: 15}}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={()=>this.UserLogIn()}>
            <LinearGradient colors={['midnightblue', 'lavender']} style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: 'midnightblue',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,

                {
                  color: 'midnightblue',
                  borderColor: 'midnightblue',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )};
};

// SignInScreen;

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
    fontSize: 30,
    fontFamily: 'Lobster-Regular',
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
    paddingLeft: 10,
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
