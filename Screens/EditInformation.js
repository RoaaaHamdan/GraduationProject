import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class EditDocInf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPass: '',
      confirmPass: '',
      newCity: '',
      newVil: '',
      id: '',
      type:'',
      username:global.username,
      display1:'flex',
      display2:'none'
    };
  }

  UpdateCity = () => {
    if (this.state.newCity == '') {
      alert('please enter the new city ');
    } else if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(this.state.newCity) ||
      !/^[A-Z]/.test(this.state.newCity) ||
      /\d+/g.test(this.state.newCity)
    ) {
      alert('لو سمحت ادخل اسم صحيح');
    } else {
      let UpdateURL1 =
        'http://192.168.1.209:8082/upadateCityDoctor/' +
        this.state.newCity +
        '/' +
        this.state.username;
      fetch(UpdateURL1, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result == 'failed') {
            alert('Done');
          } else if (json.result === 'Success') {
            alert('Done');
          }
          alert('تم التحديث');
        });
    }
  };

  UpdateVil = () => {
    if (this.state.newVil == '') {
      alert('please enter the new vilage ');
    } else if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(this.state.newVil) ||
      !/^[A-Z]/.test(this.state.newVil) ||
      /\d+/g.test(this.state.newVil)
    ) {
      alert('لو سمحت ادخل اسم صحيح');
    } else {
      let UpdateURL2 =
        'http://192.168.1.209:8082/upadateVilageDoctor/' +
        this.state.newVil +
        '/' +
        this.state.username;
      fetch(UpdateURL2, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result === 'success') {
            alert('Done');
          }
          alert('تم التحديث');
        });
    }
  };

  componentWillMount=()=>{
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    else {
      this.setState({display2:'none',display1:'flex'})
    
    }
    this.setState({type:global.type})
  }
  UpdatePass = () => {
    if (this.state.newPass == ' ') {
      alert('please enter new password');
    } else if (this.state.newPass.length < 6) {
      alert('يجب ان يكون طول كلمة السر 6 فأكثر');
    } else if (this.state.newPass != this.state.confirmPass) {
      alert('الكلمتين ليستا متماثلتان');
    } else {
      let UpdateURL =
        'http://192.168.1.209:8082/upadatepasswordDoctor/' +
        this.state.newPass +
        '/' +
        this.state.username;
      //this.state.id;
      //const data = new FormData ();
      // data.append ('pass', this.state.newPass);
      fetch(UpdateURL, {method: 'POST', body: null})
        .then((response) => response.json)
        .then((json) => {
          if (json.result === 'failed') {
            alert('Done');
          } else if (json.result === 'success') {
            alert('Done');
          }
          alert('تم التحديث');
        });
    }
  };

  Update = () => {
    //let UpdateURL = '';
    //console.log('hello');
    //alert(this.state.newPass);
    if (
      this.state.newCity == '' ||
      this.state.newPass == '' ||
      this.state.newVil == ''
    ) {
      alert('املأ جميع الفراغات لو سمحت ');
    }
    let UpdateURL =
      'http://192.168.1.209:8082/updateAll/' +
      this.state.newPass +
      '/' +
      this.state.newCity +
      '/' +
      this.state.newVil +
      '/' +
      this.state.username;
    //'/' +
    // this.state.newCity;
    //+
    // '/' +this.state.newVil;
    //const data = new FormData ();
    //data.append ('p', this.state.newPass);
    //data.append ('city', this.state.newCity);
    fetch(UpdateURL, {method: 'POST', body: null})
      .then((response) => response.json)
      .then((json) => {
        if (json.result === 'failed') {
          alert('Done');
        } else if (json.result === 'success') {
          alert('Done');
        }
      });
    //  console.error(error.error);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <View
      style={{
        backgroundColor:'midnightblue',
        width:'100%',
        height:70,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
      <Text style={styles.doctor}> {global.type} {global.username} </Text>

      </View>
 <View
 style={{
   justifyContent:'center',
   alignItems:'center',
   marginTop:60,
   display:this.state.display1
 }}
 
 >
 <TextInput
          style={styles.input}
          placeholder="NewPass"
          secureTextEntry={true}
          onChangeText={(value) => this.setState({newPass: value})}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="ConfirmPass"
          onChangeText={(value) => this.setState({confirmPass: value})}
        />

        <TouchableOpacity style={styles.button} onPress={this.UpdatePass}>
          <Text style={styles.update}>Edit Pass</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="NewCity"
          onChangeText={(value) => this.setState({newCity: value})}
        />
        <TouchableOpacity style={styles.button} onPress={this.UpdateCity}>
          <Text style={styles.update}>Edit City</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="NewVillage"
          onChangeText={(value) => this.setState({newVil: value})}
        />

        <TouchableOpacity style={styles.button} onPress={this.UpdateVil}>
          <Text style={styles.update}>Edit village</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.Update}>
          <Text style={styles.update}>Update all</Text>
        </TouchableOpacity>
 </View>

     <View
 style={{
   justifyContent:'center',
   alignItems:'center',
   marginTop:60,
   display:this.state.display2
 }}
 
 >
 <TextInput
          style={styles.input}
          placeholder="الكلمة الجديدة"
          secureTextEntry={true}
          onChangeText={(value) => this.setState({newPass: value})}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="تاكيد كلمة السر"
          onChangeText={(value) => this.setState({confirmPass: value})}
        />

        <TouchableOpacity style={styles.button} onPress={this.UpdatePass}>
          <Text style={styles.update}>تحديث كلمة السر </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="المدينة الجديدة"
          onChangeText={(value) => this.setState({newCity: value})}
        />
        <TouchableOpacity style={styles.button} onPress={this.UpdateCity}>
          <Text style={styles.update}>تحديث القرية </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="القرية الجديدة"
          onChangeText={(value) => this.setState({newVil: value})}
        />

        <TouchableOpacity style={styles.button} onPress={this.UpdateVil}>
          <Text style={styles.update}>تحديث القرية</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.Update}>
          <Text style={styles.update}>تحديث الجميع</Text>
        </TouchableOpacity>
 </View>
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {},
  container: {
    flex: 1,
   // justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'lavender',
  },
  input: {
    width: 300,
    borderBottomColor: '#231445',
    borderBottomWidth: 2,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'midnightblue',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.23,
    shadowRadius: 0,
    borderRadius: 100,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctor: {
   // marginBottom: 20,
    //fontWeight: 'bold',
    fontSize: 25,
   // fontStyle: 'italic',
    color: 'lavender',
    //   fontVariant: 'small-caps',
    fontFamily:'Lobster-Regular'
  },
  update: {
    // textAlign: 'center',
    color: '#fff',
  },
});
