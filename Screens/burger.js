import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity,} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

  const burger = ({navigation}) => {
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
     <View  style ={{flexDirection:'row',display:display1 ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80}}> 
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
         <Image source={require('../assets/images/burger.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}> Meat produced</Text>
        </View>
        <Text style={{fontSize:18,marginTop:7,display:display1}}>   Note: calories per 100 grams</Text>
  

        <ScrollView
        style={{
          display:display1
        }} >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+280 } >
         <Text style={styles.txt1}> Pastrami</Text>
        <Image source={require('../assets/images/280.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+592 } >
        <Text style={styles.txt1}> sausage</Text>
        <Image source={require('../assets/images/592.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+172 } >
       <Text style={styles.txt1}> Luncheon</Text>
       <Image source={require('../assets/images/172.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+294 } >
        <Text style={styles.txt1}> Luncheon canned</Text>
       <Image source={require('../assets/images/294.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+286 } >
        <Text style={styles.txt1}> hamburger</Text>
        <Image source={require('../assets/images/286.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
  <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+340 } >
        <Text style={styles.txt1}> Shawarma</Text>
        <Image source={require('../assets/images/340.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>
        
      </ScrollView>
     
     
      <View  style ={{flexDirection:'row',display:display2 ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80}}> 
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
         <Image source={require('../assets/images/burger.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}>منتجات اللحوم </Text>
        </View>
        <Text style={{fontSize:18,marginTop:7,display:display2}}>   ملحوظة: السعرات الحراريه لكل 100 جرام</Text>
  

        <ScrollView
        style={{
          display:display2
        }} >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+280 } >
         <Text style={styles.txt1}> بسطرمة</Text>
        <Image source={require('../assets/images/280.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+592 } >
        <Text style={styles.txt1}> سجق</Text>
        <Image source={require('../assets/images/592.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+172 } >
       <Text style={styles.txt1}> غداء</Text>
       <Image source={require('../assets/images/172.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+294 } >
        <Text style={styles.txt1}> غداء معلب</Text>
       <Image source={require('../assets/images/294.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+286 } >
        <Text style={styles.txt1}> همبرغر</Text>
        <Image source={require('../assets/images/286.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
  <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+340 } >
        <Text style={styles.txt1}> شاورما</Text>
        <Image source={require('../assets/images/340.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>
        
      </ScrollView>
     
     
     
      </SafeAreaView>
    );
  }
  export default burger;

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
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'Itim-Regular',
    textAlign: 'center',
  },
});
