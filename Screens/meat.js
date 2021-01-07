import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image,
  ScrollView, TouchableOpacity,Alert} from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';

  const meat = ({navigation}) => {
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
      <SafeAreaView style={{backgroundColor:'lightgrey', flex:1
      }}>
         <View  style ={{flexDirection:'row' ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80
         ,display:display1}}> 
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
         <View style={{flexDirection:'row'}}>
         <Image source={require('../assets/images/meat.jpg')}
        style={{width:90, height:60, borderRadius:50, marginTop:7}} />
          <Text style={styles.welcome}> Meat </Text>
         </View>
         
        </View>
        <Text style={{fontSize:18,marginTop:70,display:display1}}>   Note: calories per 100 grams </Text>
  
        <ScrollView 
        style={{
          display:display1
        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+193 } >
        <Text style={styles.txt1}> Grilled rabbits </Text>
        <Image source={require('../assets/images/193.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>
        
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+349 } >
        <Text style={styles.txt1}> Geese</Text>
        <Image source={require('../assets/images/349.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        </View>
        <Text > _____________________________________________________</Text>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
         onPress={() => global.cal= global.cal+150}>  
        <Text style={styles.txt1}> Camel</Text>
         <Image source={require('../assets/images/150.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
      <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around'}}
       onPress={() => global.cal= global.cal+170 } >
                     <Text style={styles.txt1}> Duck</Text>
        <Image source={require('../assets/images/170.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+105} >
         <Text style={styles.txt1}> Roast bird</Text>
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+130 } >
       <Text style={styles.txt1}> Grilled chicken</Text>
        <Image source={require('../assets/images/130.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+193 } >
        <Text style={styles.txt1}> Turkey</Text>
        <Image source={require('../assets/images/193.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+142} >
         <Text style={styles.txt1}> Breast</Text>
        <Image source={require('../assets/images/142.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

  <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around'}}
       onPress={() => global.cal= global.cal+142} >
         <Text style={styles.txt1}> Veal</Text>
         <Image source={require('../assets/images/142.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+250} >
       <Text style={styles.txt1}> Sheep meat </Text>
        <Image source={require('../assets/images/250.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+167} >
        <Text style={styles.txt1}> Chicken thigh</Text>
        <Image source={require('../assets/images/167.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+148} >
        <Text style={styles.txt1}> Calf heart</Text>
        <Image source={require('../assets/images/148.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+278} >
        <Text style={styles.txt1}> Grilled veal</Text>
        <Image source={require('../assets/images/278.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+200} >
        <Text style={styles.txt1}> Grilled liver</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+300} >
      <Text style={styles.txt1}> Lamb meat</Text>
        <Image source={require('../assets/images/300.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+300} >
          <Text style={styles.txt1}> Lamb meat</Text>
        <Image source={require('../assets/images/300.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        </ScrollView>
     
     

        <View  style ={{flexDirection:'row' ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80
         ,display:display2}}> 
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
         <View style={{flexDirection:'row'}}>
         <Image source={require('../assets/images/meat.jpg')}
        style={{width:90, height:60, borderRadius:50, marginTop:7}} />
          <Text style={styles.welcome}> لحوم </Text>
         </View>
         
        </View>
        <Text style={{fontSize:18,marginTop:70,display:display2}}>   ملحوظة: السعرات الحراريه لكل 100 جرام </Text>
  
        <ScrollView 
        style={{
          display:display2
        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+193 } >
        <Text style={styles.txt1}> أرانب مشوية</Text>
        <Image source={require('../assets/images/193.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>
        
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+349 } >
        <Text style={styles.txt1}> أوز</Text>
        <Image source={require('../assets/images/349.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        </View>
        <Text > _____________________________________________________</Text>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
         onPress={() => global.cal= global.cal+150}>  
        <Text style={styles.txt1}> جمل</Text>
         <Image source={require('../assets/images/150.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
      <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around'}}
       onPress={() => global.cal= global.cal+170 } >
                     <Text style={styles.txt1}> بطة</Text>
        <Image source={require('../assets/images/170.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+105} >
         <Text style={styles.txt1}>طائر مشوي</Text>
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+130 } >
       <Text style={styles.txt1}>دجاج مشوي</Text>
        <Image source={require('../assets/images/130.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+193 } >
        <Text style={styles.txt1}> ديك رومي</Text>
        <Image source={require('../assets/images/193.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+142} >
         <Text style={styles.txt1}> Breast</Text>
        <Image source={require('../assets/images/142.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

  <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around'}}
       onPress={() => global.cal= global.cal+142} >
         <Text style={styles.txt1}> لحم العجل</Text>
         <Image source={require('../assets/images/142.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+250} >
       <Text style={styles.txt1}> لحم خروف </Text>
        <Image source={require('../assets/images/250.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+167} >
        <Text style={styles.txt1}>فخذ الدجاج</Text>
        <Image source={require('../assets/images/167.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+148} >
        <Text style={styles.txt1}>قلب العجل</Text>
        <Image source={require('../assets/images/148.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+278} >
        <Text style={styles.txt1}>لحم بتلو مشوي</Text>
        <Image source={require('../assets/images/278.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+200} >
        <Text style={styles.txt1}>كبدة مشوية</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
       <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around' }}
       onPress={() => global.cal= global.cal+300} >
      <Text style={styles.txt1}> لحم حمل</Text>
        <Image source={require('../assets/images/300.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}} />
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>



        </ScrollView>
     
     
     
      </SafeAreaView>
    );
  }
  export default meat;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txt1: {
    width :'50%' ,
    color: 'red',
    fontSize: 20,
    fontFamily: 'Amiri-BoldItalic',
    marginTop: 5,
  },
  welcome: {
    fontSize: 40,
    marginTop: 15,
    fontFamily: 'Itim-Regular',
    alignSelf:'center'
    },
});
