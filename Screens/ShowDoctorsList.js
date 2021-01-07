import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ShowDoctorList extends Component {
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
      display1:'flex',
      display2:'none'
    };
    // c = '';
  }
  data = [];
  newPP = [];

  // /getPostsg
  UNSAFE_componentWillMount = () => {
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    if (globalNormlUserFlag){
      
    }
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
      <ScrollView
      style={{
        backgroundColor:'lavender',
      width:'100%',
      height:'100%'
      }}>
        <View
          style={{
            backgroundColor: 'midnightblue',
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection:'row'
          }}>
     

          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'Itim-Regular',
              display:this.state.display1
            }}>
            List Of Doctors
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'Itim-Regular',
              display:this.state.display2
            }}>
قائمة الأطباء          </Text>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('contactList')}
          >
          <Icon name="chevron-left" size={30} color="lavender" />

          </TouchableOpacity>

        </View>
        <SwipeableFlatList
          style={{
            marginTop: 60,
          }}
          data={this.state.doctors}
          renderItem={({item}) => (
            <Text
              style={{
                backgroundColor: 'midnightblue',
                opacity:.5,
                height: 100,
               // marginTop: 20,
                //marginBottom:20,
                paddingLeft: 40,
                color: 'white',
                alignItems:'center',
                alignContent:'center',
                fontSize:20
              }}>
               {'\n'}
              {item.doctorname} {'\n'}
              {item.type}
            </Text>
          )}
          renderLeft={({item}) => (
            <View
              style={{
                width: 200,
                flexDirection: 'row',
               // marginTop: 20,
                height: 100,
              }}>
              <TouchableOpacity
                onPress={ ()=> 
                
                { 
                  global.user2=item.doctorname;
                 this.props.navigation.navigate('chatfw',{chatee:item.doctorname
                  //  username: item.doctorname,
                   //// flag: 'none',
                  }
                  );
                
}}
                style={{width: 100, backgroundColor: 'midnightblue', height: 100,opacity:.5}}>
                <Text
                style={{
                  display:this.state.display1
                }}
                >Chat</Text>
                     <Text
                style={{
                  display:this.state.display2,                  fontSize:20
                }}
                > مراسلة</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.aa(item.doctorname)}
                style={{
                  width: 100,
                  backgroundColor: 'white',
                  height: 100,
                }}
                onPress={() =>{ 
                global.user2= item.doctorname;
                  this.props.navigation.navigate('app4'//, //{
                  //  username: item.doctorname,
                   //// flag: 'none',
                 // }
                  )
                 } }>
                <Text
                style={{
                  display:this.state.display1
                }}
                
                >
                  Appointment {'\n'}
                  {'\n'} Booking{' '}
                </Text>
                <Text
                style={{
                  display:this.state.display2
                }}
                
                >
                  حجز {'\n'}
                  {'\n'} موعد{' '}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          renderRight={({item}) => (
            <TouchableOpacity
              style={{
                width: 100,
                backgroundColor: 'white',
                height: 100,
              //  marginTop: 20,
              }}
              onPress={() => {
                global.user2=item.doctorname;

                this.props.navigation.navigate('doctorProfile', {
                  username: item.doctorname,
                  display: 'none',
                })}
              }>
              <Text
              style={{
                display:this.state.display1
              }}
              >
                show doctor{'\n'}
                {'\n'} profile{' '}
              </Text>
              <Text
              style={{
                display:this.state.display2
              }}
              >
               عرض صفحة{'\n'}
                {'\n'} الطبيب{' '}
              </Text>
            </TouchableOpacity>
          )}
         // backgroundColor={'pink'}
        />
      </ScrollView>
    );
  }
}
