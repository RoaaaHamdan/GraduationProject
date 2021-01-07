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
  FlatList
} from 'react-native';
import { AsyncStorage} from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


export default class showComments extends Component {
  constructor(props){
    super(props);
    this.state={
      post:this.props.route.params.post,
      comments:this.props.route.params.comments
    }
  }

  componentDidMount=()=>{

    
  }
  render () {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="lavender" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{this.state.post} Comments</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}>
  
  <FlatList
            data={this.state.comments}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (

    <View
    
    style={{
                  borderColor:'midnightblue',
                  borderWidth:2,

                 //height:170,
                  width:'80%',
                  alignSelf:'center',
                  marginTop:37,
                  borderRadius:20,
                  backgroundColor:'lavender'

                }}
    >
                <Text
                style={{
                  padding:10
                }}
           >{` ${item.username} `}</Text>
           <Text
           
           style={
             {
               borderTopColor:'midnightblue',
               borderWidth:2,
               width:'40%',
               alignSelf:'flex-end',
               borderRightColor:'lavender',
               borderLeftColor:'lavender',
               borderBottomColor:'lavender',


             }
           }
           >

           </Text>
                  <Text
                style={{
                  padding:10
                }}
           >{` ${item.comment} `}</Text>

     

         
    </View>
    
            )}
          />

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
