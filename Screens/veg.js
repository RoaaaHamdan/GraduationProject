import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

  const veg = ({navigation}) => {
    const [display1, setdisplay1] = React.useState('flex');
    const [display2, setdisplay2] = React.useState('none');
    useEffect(() => {
      //alert('kjj')
      // Update the document title using the browser API
  if (global.flagA=='Arab'){
    setdisplay1('none');
    setdisplay2('flex');
  
  } 
  
  else if (global.flagA=='Eng'){
  
    setdisplay2('none');
    setdisplay1('flex'); 
  }
  });
    return (
      <SafeAreaView style={{backgroundColor:'lightgrey', flex:1}}>
   <View  style ={{flexDirection:'row' ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80,display:display1}}> 
                  <TouchableOpacity
           onPress={() => navigation.navigate('mainfood')} >
               <Icon name="chevron-right" size={30} color="black"
                     
                     style={{
                       width:50,
                       height:50,
                       marginTop:20
                     }}
                      />
            </TouchableOpacity>
         <Image source={require('../assets/images/veg.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}> Vegetables</Text>
        </View>
        <Text style={{fontSize:18,marginTop:7,display:display1}}>   Note: calories per 100 grams</Text>


        <ScrollView
        style={{
          display:display1
        }}
        
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+26 } >
        <Text style={styles.txt1}> Aubergine</Text>
        <Image source={require('../assets/images/26.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15 } >
       <Text style={styles.txt1}> Cucumber</Text> 
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+23 } >
        <Text style={styles.txt1}> Tomatoes</Text>
        <Image source={require('../assets/images/23.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
         <Text style={styles.txt1}> Drew</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15} >
        <Text style={styles.txt1}> Garlic</Text>
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+28} >
        <Text style={styles.txt1}> Pepper</Text>
        <Image source={require('../assets/images/28.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+48} >
       <Text style={styles.txt1}> Onions</Text>
        <Image source={require('../assets/images/48.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
        <Text style={styles.txt1}> Okra</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+114 } >
         <Text style={styles.txt1}> Green Olive</Text>
        <Image source={require('../assets/images/114.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+200 } >
         <Text style={styles.txt1}> Black Olive</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33 } >
         <Text style={styles.txt1}> Rocca </Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
         <Text style={styles.txt1}> Corn </Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+52} >
         <Text style={styles.txt1}> Carrots</Text>
        <Image source={require('../assets/images/52.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15} >
         <Text style={styles.txt1}> Cactus</Text>
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
       <Text style={styles.txt1}> Cauliflower</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        </ScrollView>
     
     
     
        <View  style ={{flexDirection:'row' ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80,display:display2}}> 
                  <TouchableOpacity
           onPress={() => navigation.navigate('mainfood')} >
               <Icon name="chevron-right" size={30} color="black"
                     
                     style={{
                       width:50,
                       height:50,
                       marginTop:20
                     }}
                      />
            </TouchableOpacity>
         <Image source={require('../assets/images/veg.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}> خضروات</Text>
        </View>
        <Text style={{fontSize:18,marginTop:7,display:display2}}>    ملحوظة: السعرات الحراريه لكل 100 جرام</Text>


        <ScrollView
        style={{
          display:display2
        }}
        
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+26 } >
        <Text style={styles.txt1}> باذنجان</Text>
        <Image source={require('../assets/images/26.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15 } >
       <Text style={styles.txt1}> خيار</Text> 
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+23 } >
        <Text style={styles.txt1}> طماطم</Text>
        <Image source={require('../assets/images/23.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
         <Text style={styles.txt1}> مانجا</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15} >
        <Text style={styles.txt1}> ثوم</Text>
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+28} >
        <Text style={styles.txt1}> فلفل</Text>
        <Image source={require('../assets/images/28.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+48} >
       <Text style={styles.txt1}> بصل</Text>
        <Image source={require('../assets/images/48.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
        <Text style={styles.txt1}> بامية</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
         </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+114 } >
         <Text style={styles.txt1}> الزيتون الأخضر</Text>
        <Image source={require('../assets/images/114.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+200 } >
         <Text style={styles.txt1}>زيتون اسود</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33 } >
         <Text style={styles.txt1}> جرجير </Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
         <Text style={styles.txt1}> حبوب ذرة </Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+52} >
         <Text style={styles.txt1}> جزر</Text>
        <Image source={require('../assets/images/52.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+15} >
         <Text style={styles.txt1}> صبار</Text>
        <Image source={require('../assets/images/15.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
          </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
       <Text style={styles.txt1}> قرنبيط</Text>
        <Image source={require('../assets/images/33.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        </ScrollView>
     
     
     
      </SafeAreaView>
    );
  }
export default veg;

const styles = StyleSheet.create({
      flexview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
    txt1: {width :'50%' ,
      color: 'red',
      fontSize: 20,
      fontFamily: 'Amiri-BoldItalic',
      marginTop:5,
    },
    welcome: {
      fontSize: 30,
      marginTop: 20,
      fontFamily: 'Itim-Regular',
      textAlign: 'center',
    },
  });
  