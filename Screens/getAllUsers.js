import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

export default class getAllUsers extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      users: [],
      dipsplay:'flex'
    };
  }
  data = [];
  newPP = [];

  // /getPostsg
  UNSAFE_componentWillMount = () => {
    // showDoctors({navigation});
    this.getUsers();
  };
  getUsers = async () => {
    
    const getusers = 'http://192.168.1.209:8082/getUsers/';

    fetch(getusers, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push({
                key: t,
               id: json.result[t].id,
                Type: json.result[t].Type,
               FN:json.result[t].FN,
               LN:json.result[t].LN,
                City:json.result[t].City,
                email:json.result[t].email,
                Pn:json.result[t].Pn,


              });
            }
          }
          // setdoctosarrray(data);
          //  alert(doctosarrray);
          this.setState({users: this.data});
          // alert(this.state.posts[0].post);
        }
      });
  };

  delete = (username) => {
    this.data=[];
    this.setState({users:[]});
    this.setState({dipsplay:'none'});
    
    const deleteUser = 'http://192.168.1.209:8082/deleteUser/'+username;

    fetch(deleteUser, {method: 'delete', body: null})
        .then((response) => response.json)
      .then((json) => {
        this.getUsers();
          if (json.result == 'failed') {
            alert('Done');
          } else if (json.result == 'success') {
            alert('Done');
          }
      });


  }
  aa = (c) => {
    alert(c);
    //alert('sdsd');
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: 'thistle',
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
            List Of Users
          </Text>
        </View>
        <SwipeableFlatList
        
          style={{
            marginTop: 40,
          }}
          data={this.state.users}
          renderItem={({ item }) => (
            <Text
              style={{
                backgroundColor: 'thistle',
                height: 78,
                marginTop: 20,
                paddingLeft: 40,
                color: 'purple',
              }}>
              {item.id} {'\n'} {'\n'}
              {item.Type}
            </Text>
          )}
          renderLeft={({ item }) => (
            <View
              style={{
                width: 200,
                flexDirection: 'row',
                marginTop: 20,
                height: 78,
              }}>
              <TouchableOpacity
                onPress={() => this.delete(item.id)}
                style={{ width: 100, backgroundColor: 'thistle' }}>
                <Text>Delete</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: 'pink',
                  height: 78,
                }}
                onPress={() =>
                   this.props.navigation.navigate('showUserInfo', {
                    Firstname: item.FN,
                    LastName:item.LN,
                    phoneNumber:item.Pn,
                    emailAddrss:item.email,
                    Location:item.City,
                    type:item.Type,
                    username:item.id
                    })
               }
               >
                <Text>
                  Show {'\n'}
                  {'\n'} Informatin
                </Text>
              </TouchableOpacity>
            </View>
          )}
         /* renderRight={({ item }) => (
            <TouchableOpacity
              style={{
                width: 100,
                backgroundColor: 'palevioletred',
                height: 78,
                marginTop: 20,
              }}
              onPress={() =>
                // this.props.navigation.navigate('Doctor', {
                // username: item.userrname,
                //display: 'none',
                // })
                alert()
              }>
              <Text>
                show doctor{'\n'}
                {'\n'} profile{' '}
              </Text>
            </TouchableOpacity>
          )}*/
          backgroundColor={'white'}
        />
      </ScrollView>
    );
  }
}

