import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

export default class ap222 extends Component {
  constructor(props) {
    super(props);
    this.data = [];

    this.state = {
      typeSp: '',
      telNum: '0595271686',
      Location: 'Tulakrm',
      avatorsource: './assets/user.jpg',
      newPostt: '',
      newPo: [],
      doctors: [],
    };
    // c = '';
  }
  data = [];
  newPP = [];

  // /getPostsg
  UNSAFE_componentWillMount = () => {
    // showDoctors({navigation});
    this.getDoctors();
  };
  getDoctors = async () => {
    // alert("hell");
    const getdoctors = 'http://192.168.1.209:8082/getdoctors2/doctor';

    fetch(getdoctors, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push({
                key: t,
                doctorname: json.result[t].id,
                type: json.result[t].Type,
              });
            }
          }
          // setdoctosarrray(data);
          //  alert(doctosarrray);
          this.setState({doctors: this.data});
          // alert(this.state.posts[0].post);
        }
      });
  };
  aa = (c) => {
    alert(c);
    //alert('sdsd');
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: 'pink',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'CourierPrime-Italic',
            }}>
            List Of Doctors
          </Text>
        </View>
        <SwipeableFlatList
          style={{
            marginTop: 40,
          }}
          data={this.state.doctors}
          renderItem={({item}) => (
            <Text
              style={{
                backgroundColor: 'pink',
                height: 78,
                marginTop: 20,
                paddingLeft: 40,
                color: 'purple',
              }}>
              {item.doctorname} {'\n'} {'\n'}
              {item.type}
            </Text>
          )}
          renderLeft={({item}) => (
            <View
              style={{
                width: 200,
                flexDirection: 'row',
                marginTop: 20,
                height: 78,
              }}>
              <TouchableOpacity
                onPress={() => this.aa(item.doctorname)}
                style={{width: 100, backgroundColor: 'pink'}}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.aa(item.doctorname)}
                style={{
                  width: 100,
                  backgroundColor: 'palevioletred',
                  height: 78,
                }}
                onPress={() =>
                  this.props.navigation.navigate('appp', {
                    username: item.doctorname,
                    flag: 'none',
                  })
                }>
                <Text>
                  Appointment {'\n'}
                  {'\n'} Booking{' '}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          renderRight={({item}) => (
            <TouchableOpacity
              style={{
                width: 100,
                backgroundColor: 'palevioletred',
                height: 78,
                marginTop: 20,
              }}
              onPress={() =>
                this.props.navigation.navigate('Doctor', {
                  username: item.doctorname,
                  display: 'none',
                })
              }>
              <Text>
                show doctor{'\n'}
                {'\n'} profile{' '}
              </Text>
            </TouchableOpacity>
          )}
          backgroundColor={'white'}
        />
      </ScrollView>
    );
  }
}
