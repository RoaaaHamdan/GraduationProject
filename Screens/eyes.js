import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

export default class eyes extends Component {
  constructor(props) {
    //  this.x = 0;
    super(props);
    this.state = {
      flag: 'flex',
      x: 1,
      fontsize: 35,
      direction: '0deg',
      score: 18,
      x22:0,
      disable:false,
      display1:'flex',
      display2:'none'
    };

    //  this.onPressButton = this.onPressButton.bind(this);
  }
  componentDidMount=()=>{

    
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
      alert('حافظ على مسافة واحد متر قبل الاجابة ')

    }
    else {
      this.setState({display2:'none',display1:'flex'})

      alert('Keep a distance of one meter before answering')
    }
  }
  x1 = 0;
  score = 18;
  onPressButton = () => {
  //  this.score = this.score - 1;
  this.setState({x22:this.state.x22+1})
    this.x1 = this.x1 + 1;
    if (this.x1 == 1) {
      this.score = this.score - 1;

      this.setState({fontsize: 33});
      this.setState({x: this.x1});
    } else if (this.x1 == 2) {
      this.score = this.score - 1;

      //alert('hi there');
      this.setState({fontsize: 30});
      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 3) {
      this.score = this.score - 1;

      this.setState({fontsize: 30});
      //    this.setState({x: this.state.x++});
      this.setState({direction: '90deg'});
      // alert(this.state.direction);
    } else if (this.x1 == 4) {
      this.score = this.score - 1;

      this.setState({fontsize: 25});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 5) {
      // this.score = this.score - 1;

      this.setState({fontsize: 18});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 6) {
      //this.score = this.score - 1;

      this.setState({fontsize: 15});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 7) {
      this.score = this.score - 1;

      this.setState({fontsize: 10});
      this.setState({direction: '180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 8) {
      this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 9) {
      this.score = this.score - 1;

      this.setState({fontsize: 8});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 10) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 11) {
      // this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 12) {
      this.setState({x22:12})

      //this.score = this.score - 1;
      alert('لقد انهيت الفحص');

      this.setState({fontsize: 9});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    }
  };

  onPressButton2 = () => {
  this.setState({x22:this.state.x22+1})

    //this.score = this.score - 1;
    this.x1 = this.x1 + 1;
    if (this.x1 == 1) {
      //  this.score = this.score - 1;

      this.setState({fontsize: 33});
      this.setState({x: this.x1});
    } else if (this.x1 == 2) {
      //  this.score = this.score - 1;

      //alert('hi there');
      this.setState({fontsize: 30});
      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 3) {
      // this.score = this.score - 1;

      this.setState({fontsize: 30});
      //    this.setState({x: this.state.x++});
      this.setState({direction: '90deg'});
      // alert(this.state.direction);
    } else if (this.x1 == 4) {
      this.score = this.score - 1;
      this.setState({fontsize: 25});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 5) {
      this.score = this.score - 1;

      this.setState({fontsize: 18});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 6) {
      this.score = this.score - 1;

      this.setState({fontsize: 15});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 7) {
      this.score = this.score - 1;

      this.setState({fontsize: 10});
      this.setState({direction: '180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 8) {
      this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 9) {
      // this.score = this.score - 1;

      this.setState({fontsize: 8});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 10) {
      // this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 11) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 12) {     
       this.setState({x22:12})

      this.score = this.score - 1;
         
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
      alert('لقد انهيت الفحص');

    }
    else {
      alert('You have finished the scan')

    }

      this.setState({fontsize: 9});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    }
  };

  onPressButton3 = () => {
  this.setState({x22:this.state.x22+1})

    //this.score = this.score - 1;
    this.x1 = this.x1 + 1;
    if (this.x1 == 1) {
      this.score = this.score - 1;

      this.setState({fontsize: 33});
      this.setState({x: this.x1});
    } else if (this.x1 == 2) {
      this.score = this.score - 1;

      //alert('hi there');
      this.setState({fontsize: 30});
      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 3) {
      this.score = this.score - 1;

      this.setState({fontsize: 30});
      //    this.setState({x: this.state.x++});
      this.setState({direction: '90deg'});
      // alert(this.state.direction);
    } else if (this.x1 == 4) {
      this.score = this.score - 1;

      this.setState({fontsize: 25});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 5) {
      this.score = this.score - 1;

      this.setState({fontsize: 18});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 6) {
      this.score = this.score - 1;

      this.setState({fontsize: 15});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 7) {
      // this.score = this.score - 1;

      this.setState({fontsize: 10});
      this.setState({direction: '180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 8) {
      // this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 9) {
      this.score = this.score - 1;

      this.setState({fontsize: 8});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 10) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 11) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 12) {
      this.setState({x22:12})

      if (global.flagA =='Arab'){
        this.setState({display1:'none',display2:'flex'})
        alert('لقد انهيت الفحص');
  
      }
      else {
        alert('You have finished the scan')
  
      }

      this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    }
    this.setState ({
      flag: 'flex',
      x: 1,
      fontsize: 35,
      direction: '0deg',
      score: 18,
      x22:0,
      disable:false,})
  };

  onPressButton4 = () => {
  this.setState({x22:this.state.x22+1})

   // this.score = this.score - 1;
    this.x1 = this.x1 + 1;
    if (this.x1 == 1) {
      this.score = this.score - 1;

      this.setState({fontsize: 33});
      this.setState({x: this.x1});
    } else if (this.x1 == 2) {
      this.score = this.score - 1;

      //alert('hi there');
      this.setState({fontsize: 30});
      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 3) {
      this.score = this.score - 1;

      this.setState({fontsize: 30});
      //    this.setState({x: this.state.x++});
      this.setState({direction: '90deg'});
      // alert(this.state.direction);
    } else if (this.x1 == 4) {
      this.score = this.score - 1;

      this.setState({fontsize: 25});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 5) {
      this.score = this.score - 1;

      this.setState({fontsize: 18});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 6) {
      this.score = this.score - 1;

      this.setState({fontsize: 15});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 7) {
      this.score = this.score - 1;

      this.setState({fontsize: 10});
      this.setState({direction: '180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 8) {
      this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-180deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 9) {
      this.score = this.score - 1;

      this.setState({fontsize: 8});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 10) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '0deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 11) {
      this.score = this.score - 1;

      this.setState({fontsize: 11});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    } else if (this.x1 == 12) {
      this.setState({x22:12})
      this.setState({disable:true});
      if (global.flagA =='Arab'){
        this.setState({display1:'none',display2:'flex'})
        alert('لقد انهيت الفحص');
  
      }
      else {
        alert('You have finished the scan')
  
      }
      this.score = this.score - 1;

      this.setState({fontsize: 9});
      this.setState({direction: '-90deg'});

      //  this.setState({direction: '90deg'});
    }
  };

  result = () => {
    // alert(this.x1);
   //  alert()
    if (this.state.x22 != 12) {
      if (global.flagA =='Arab'){
        this.setState({display1:'none',display2:'flex'})
        alert('الرجاء انهاء الفحص ');
      }
      else {
        alert('You must finishe the scan')
      }

    } 
    else {
      if (this.score >= 14) {
        if (global.flagA =='Arab'){
          this.setState({display1:'none',display2:'flex'})
          alert('نظرك في حالة ممتازة')
    
        }
        else {
          alert('Your look is in excellent condition');

    
        }
      } else if (this.score > 11 && this.score < 14) {



        if (global.flagA =='Arab'){
          this.setState({display1:'none',display2:'flex'})
          alert('من الأفضل مراجعة مركز طبي');

    
        }
        else {
          alert('It is best to visit a medical center');
    
        }
      } else {



        if (global.flagA =='Arab'){
          this.setState({display1:'none',display2:'flex'})
          alert('من الأفضل زيارة المركز الطبي ويمكن شراء النظارات الطبية');
    
        }
        else {
          alert('It is better to visit a medical center and mayby buy eyeglasses');
    
        }
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: 'midnightblue',
            height: 70,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Amiri-Bold',
              display:this.state.display1,
            }}>
Eye examination          </Text>
<Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Amiri-Bold',
              display:this.state.display2,
            }}>
فحص النظر        </Text>
        </View>
        <View
          style={{
            //   width: 100,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: 60,
            backgroundColor: 'lavender',
            marginTop: 80,
            height: 60,
            borderRadius: 100,
          }}>
          <TouchableOpacity onPress={this.onPressButton} style={{}
          }

          
          disabled={this.state.disable}
          >
            <Text
            style={{
                fontFamily:'Itim-Regular',
                fontSize:30,
                display:this.state.display1
            }}
            > up</Text>
                  <Text
            style={{
                fontFamily:'Itim-Regular',
                fontSize:30,
                display:this.state.display2
            }}
            > اعلى</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 100,
          }}>
          <TouchableOpacity
          disabled={this.state.disable}

            onPress={this.onPressButton2}
            style={{
              justifyContent: 'center',
              width: 60,
              backgroundColor: 'lavender',
              height: 60,
              borderRadius: 100,
              // marginBottom:30
            }}>
            <Text
              style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display1
            }}>
              right
            </Text>

            <Text
              style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display2
            }}>
              يمين
            </Text>
          </TouchableOpacity>
          <View style={{width: 40}}>
            <Text
              style={{
                //  textAlign:'center',
                transform: [{rotate: this.state.direction}],
                fontSize: this.state.fontsize,
              }}>
              E
            </Text>
          </View>
          <TouchableOpacity
          disabled={this.state.disable}

            onPress={this.onPressButton3}
            style={{
              justifyContent: 'center',

              width: 60,
              backgroundColor: 'lavender',
              height: 60,
              borderRadius: 100,
            }}>
            <Text
                 style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display1
            }}>
              left
            </Text>
            <Text
                 style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display2
            }}>
              يسار
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            //   width: 100,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: 60,
            backgroundColor: 'lavender',
            marginTop: 100,
            height: 60,
            borderRadius: 100,
          }}>
          <TouchableOpacity onPress={this.onPressButton4}
          disabled={this.state.disable}
          >
            <Text
                  style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display1
            }}
            > Down</Text>

<Text
                  style={{
                fontFamily:'Itim-Regular',
                fontSize:20,
                alignSelf:'center',
                display:this.state.display2
            }}
            > أسفل</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
          //  justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 50,
            backgroundColor: 'midnightblue',
            width: '50%',
            height: 40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:25

          }}
          onPress={this.result}>
          <Text
            style={{
              color: 'white',
             alignSelf: 'center',
              fontSize: 20,
              fontFamily: 'CourierPrime-BoldItalic',
        display:this.state.display1
            }}>
Result          </Text>
<Text
            style={{
              color: 'white',
             alignSelf: 'center',
              fontSize: 20,
              fontFamily: 'CourierPrime-BoldItalic',
        display:this.state.display2
            }}>
النتيجة          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
