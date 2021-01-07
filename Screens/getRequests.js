import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

export default class req extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      users: [],
    };
    this.getUsers();
  }
  data = [];
  newPP = [];

  // /getPostsg
  //componentWillMount = () => {
    // showDoctors({navigation});
    //this.getUsers();

  //};
  getUsers = async () => {
    
    const getusers = 'http://192.168.1.209:8082/getReqs/';

    fetch(getusers, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
          var t;
          for (t = 0; t < json.result.length; t++) {
            {
              this.data.push({
                key: t,
               firstName: json.result[t].FN,
                lastName: json.result[t].SN,
                email: json.result[t].EM,
                phoneNumber: json.result[t].PH,
                Type :json.result[t].TY,
                pre:json.result[t].pre,
                games:json.result[t].games,
                child:json.result[t].child,
                wei:json.result[t].wei,
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

  delete = (email) => {
   // for (let i = 0 ;)
    this.setState({dipsplay:'none'});
    
    const deleteUser = 'http://192.168.1.209:8082/deleteReq/'+email;

    fetch(deleteUser, {method: 'delete', body: null})
        .then((response) => response.json)
      .then((json) => {
        this.data=[];
        this.setState({users:[]})
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
      <ScrollView
style={{
  backgroundColor:'white'
}}
      >
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
            List Of Requests
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
              {item.email} {'\n'} {'\n'}
              {item.type}
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
                onPress={() => this.delete(item.email)}
                style={{ width: 100, backgroundColor: 'thistle' }}>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.aa(item.userrname)}
                style={{
                  width: 100,
                  backgroundColor: 'thistle',
                  height: 78,
                }}
                onPress={() =>
                     this.props.navigation.navigate('showReq', {
                         Firstname: item.firstName,
                         LastName:item.lastName,
                         phoneNumber:item.phoneNumber,
                         emailAddrss: item.email,
                         type:item.Type,
                         //pre:item.pre,
                                          flag: 'none',
                                          pre:item.pre,
                                          child:item.child,
                                          games:item.games,
                                         wei:item.wei,           
                  })
                  //alert()
                }>
                <Text>
                  Show {'\n'}
                  {'\n'} Informatin{' '}
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
        //  backgroundColor={'white'}
        />
      </ScrollView>
    );
  }
}
