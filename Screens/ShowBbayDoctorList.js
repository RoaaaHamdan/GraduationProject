import React , {Component}from 'react'
import {View , TouchableOpacity,Image,Text,TextInput,FlatList,ScrollView,StyleSheet} from 'react-native';

export default class showBbayDoctor extends Component{
constructor(props){
    super(props);
    this.data=[];
    this.state={
        doctors:[]
    }
}
    UNSAFE_componentWillMount =()=> {
        this.getDoctors();
      }
      getDoctors = async () => {
        let url23 = 'http://192.168.1.209:8082/getDoctorsbaby';
    
        fetch(url23, {method: 'GET', body: null})
          .then((response) => response.json())
          .then((json) => {
            {
              var t;
              for (t = 0; t < json.result.length; t++) {
                {
                  //  alert(json.result.length);
                  this.data.push({firstname:json.result[t].firstname,
                    lastname:json.result[t].lastname,
                    City:json.result[t].City,
                    TelNum:json.result[t].TelNum,
                    price:json.result[t].price});
                }
              }
              this.setState({doctors: this.data});
            }
          });
    
           
      };
    

render(){
    return(
        <ScrollView>
        <View
        style={{
          width:'100%',
          height:70,
          backgroundColor:'lightblue',
          justifyContent:'center',
          alignItems:'center',
          

        }}
        >
          <Text
          style={{
            color:'white',
            fontSize:20,
            fontFamily:'Grandstander-VariableFont_wght',
            fontWeight:'bold'
          }}>
            Our Kind Doctors
          </Text>
        </View>
             <FlatList
            data={this.state.doctors}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => (
              <View
              style={{
                flexDirection:'row',
                justifyContent:'space-around',
                backgroundColor:'white',
              }}>
              <View
              style={{
                width:'100%',
                backgroundColor:'pink',

               justifyContent:'space-around',
               flexDirection:'row',
               marginTop:20

              }}>
              <View>
              <Text
                style={[
                 styles.itemP,
                  {
                    shadowOffset: {
                      width: 10,
                      height: -12,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 77,
                    shadowColor: 'black',
                  },
                ]}>
                {'\n'}                
                {'\n'}
Dctor Name:
                {` ${item.firstname} `} {`${item.lastname} `} {'\n'}                {'\n'}

                Dctor City: {` ${item.City} `}{'\n'}                {'\n'}

                Dctor Number:     {` ${item.TelNum} `}                {'\n'}

                {'\n'}
            Pice :   {` ${item.price} `}$
                </Text>

              </View>
             
                 <Image source={require('../assets/images/babydoctor.jpg')}

                style={{
                  width:150,
                height:'100%'
                }}

                 />
              </View>

              </View>
          
             
            )}
            
          />
        </ScrollView>
    )
}

}

const styles = StyleSheet.create({
    itemP:{
    //  backgroundColor:'lightblue',
      //marginTop:20,
      height:200,
   //   width:'100%',
      marginLeft:40,
      color:'white',
      fontSize:15
        
    }

})