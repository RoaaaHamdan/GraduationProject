import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image,ScrollView,SafeAreaView } from 'react-native';

export default class Pr2 extends Component{
  constructor(props){
    super(props);

    this.data3=[];
    this.data4=[];
    this.state={
      display1:'flex',
      display2:'none',
username:global.username,
display11:'none',
display22:'none',
display3:'none',
display4:'none',
display5:'none',
display6:'none',
display7:'none',
display8:'none',
display9:'none',
display10:'none',
display111:'none',
display12:'none',
date:'',
    }
  }

  getWeiht(){
   
    let url2 = 'http://192.168.1.209:8082/getPreWe/' + this.state.username;
    fetch(url2, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {          var t;
          if (json.result.length==0){
            this.data3.push(0);
            if (json.result.length==0){
              this.data4.push(0);
  
  
            }
  
          }
          else {
            this.data3=[];this.data4=[];
            for (t = 0; t < json.result.length; t++) {
              {
                this.data3.push(t);
            this.data4.push(json.result[t].Value);
     // alert(this.data3+'' +this.data4)

              }
            }
          } 
        }
      });

   }

  calage(){
    const dateString= this.state.date;
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dateNow= now.getDate();
    const dob = new Date(dateString);
    const yearDob = dob.getFullYear();
    const monthDob = dob.getMonth();
    const dateDob= dob.getDate();
    let yearAge = yearNow - yearDob;
    let monthAge;
    if (monthNow >= monthDob) {
        monthAge = monthNow - monthDob;
    } else {
        yearAge--;
        monthAge = 12 + monthNow - monthDob;
    }
    let dateAge;
    if (dateNow >= dateDob) {
        dateAge = dateNow - dateDob;
    } else {
        monthAge--;
        dateAge = 31 + dateNow - dateDob;
        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    const age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };


    //alert(age.months)
  if(age.months<2){
    this.setState({display11:'flex'});
  }

  else if(age.months<3){
    this.setState({display11:'flex',display22:'flex'});
  }
  else if(age.months<4){
    this.setState({display11:'flex',display22:'flex'});
  }

  else if(age.months<5){
    this.setState({display11:'flex',display22:'flex',display3:'flex'});
  }



  else if(age.months<6){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex'});
  }



  else if(age.months<7){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex'});
  }


  else if(age.months<8){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex'});
  }

  else if(age.months<9){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex',display7:'flex'});      }
  else if(age.months<9){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex',display7:'flex',display8:'flex'});          }
  else if(age.months<10){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex',display7:'flex',display8:'flex',display9:'flex'});       }
  else if(age.months<11){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex',display7:'flex',display8:'flex',display9:'flex',display10:'flex'});  
        }
  else if(age.months<12){
    this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
    display6:'flex',display7:'flex',display8:'flex',display9:'flex',display10:'flex',display111:'flex'});  
             }
             else {
              this.setState({display11:'flex',display22:'flex',display3:'flex',display4:'flex',display5:'flex',
              display6:'flex',display7:'flex',display8:'flex',display9:'flex',display111:'flex',
              display10:'flex',
              display12:'flex'});  
                 
             }
  
             this.props.navigation.navigate('pregnant3',{
              d1:this.state.display11,d2:this.state.display22,d3:this.state.display3,d4:this.state.display4,
              d5:this.state.display5,d6:this.state.display6,d7:this.state.display7,d8:this.state.display8,
              d9:this.state.display9
            });     }









  componentDidMount =()=>{
    this.getWeiht();
    //alert(this.data3+'' +this.data4)
    if(global.flagA=='Arab'){
      this.setState({display1:'none',display2:'flex'})
      //global.display1='none';
      //global.display1='flex';
    
    }
    else if(global.flagA=='Eng'){
      this.setState({display2:'none',display1:'flex'})
    
     // global.display1='flex';
      //global.display1='none';
    
    }


    let getPost = 'http://192.168.1.209:8082/getDateee/'+this.state.username ;
    fetch(getPost, {method: 'GET', body: null})
      .then((response) => response.json())
      .then((json) => {
        {
     
  
    //      alert(this.data)
          this.setState({date:json.result[0].date});
          //alert(this.state.date)
        }
      });
  
      }



      check=()=>{
        const url =
        'http://192.168.1.209:8082/checkifexistPre/' +this.state.username;
    fetch(url, {method: 'GET', body: null})
    .then((response) => response.json())
    .then((json) => {
    {
     if (json.result.length ==0) {
      this.props.navigation.navigate('addPre');
       
    
     } else {
       this.calage();

    
  
       
    
    
    }
    }
    });
    }
  render(){
    return (
      <SafeAreaView style={{backgroundColor:'pink', flex:1}}>
      <ScrollView>
         <View style={{ marginTop:80}} >
          <Image source={require('../assets/preg.jpg')}
          style={{width:300, height:300, borderRadius:100, alignSelf:'center'}} />
          
          <Text style={{
            marginBottom: 10,
            marginTop:15,
            textAlign: 'center',
            color: 'hotpink',
            fontSize: 25,
            fontFamily: 'Itim-Regular-bold',
            display:this.state.display1
            }}>Track your health and your fetus</Text>


<Text style={{
            marginBottom: 10,
            marginTop:15,
            textAlign: 'center',
            color: 'hotpink',
            fontSize: 25,
            fontFamily: 'Itim-Regular-bold',
            display:this.state.display2
            }}>تتبع صحتك وجنينك</Text>
          <Text style={{
              textAlign: 'center',
              fontSize: 15,
              fontFamily: 'Amiri-BoldItalic',
              display:this.state.display1
            }}>
Follow the best advice about your pregnancy as well as notifications about your fetus's examination dates.
              </Text>


              <Text style={{
              textAlign: 'center',
              fontSize: 13,
              fontFamily: 'Amiri-BoldItalic',
              display:this.state.display2
            }}>
اتبعي أفضل النصائح حول حملك وكذلك الإخطارات حول مواعيد فحص جنينك.              </Text>
            </View>
    <View style={{alignSelf:'center'}}> 
      <View style={{flexDirection:'row', justifyContent:'space-around',width :'50%',marginBottom:50}}> 
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('name1')} >
       <Image source={require('../assets/b.jpg')} style={styles.img} />
        </TouchableOpacity>

      <TouchableOpacity 
       onPress={() => 
       
       this.check()
  //     this.props.navigatjjion.navigate('pregnant3')
       
       } >
       <Image source={require('../assets/pp.png')} style={styles.img} />
        </TouchableOpacity>
       
        <TouchableOpacity 
      onPress={() => this.props.navigation.navigate('ask')} >
       <Image source={require('../assets/q.jpg')} style={styles.img} />
        </TouchableOpacity>    
           
        <TouchableOpacity 
  onPress={() => {
 // alert(this.state.data3)
//;
this.props.navigation.navigate('trackPre',{ data3:this.data3, data4:this.data4 });
  }
} >
       <Image source={require('../assets/preg.jpg')} style={styles.img} />
        </TouchableOpacity>         
     </View>
     </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
 
  }
// Pr2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  img: {
    width:60,
    height:60,
   borderRadius: 30,
    marginTop: 30,
  },
});

