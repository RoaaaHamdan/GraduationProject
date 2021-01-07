import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const fish = ({navigation}) => {
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
         height:80,
         display:display1}}> 
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
         <Image source={require('../assets/images/fish.jpg')}
        style={{width:90, height:60, borderRadius:30, marginLeft:100, marginTop:7}}/>
          <Text style={styles.welcome}> Fish</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,display:display1}}>   Note: calories per 100 grams</Text>
  
        <ScrollView
        style={{
          display:display1
        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+280 } >
        <Text style={styles.txt1}> Canned tuna</Text>
        <Image source={require('../assets/images/280.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
        <Text style={styles.txt1}> Shrimp</Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+180 } >
       <Text style={styles.txt1}> Smoked herring</Text>
        <Image source={require('../assets/images/180.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+294 } >
        <Text style={styles.txt1}> Canned sardines</Text>
        <Image source={require('../assets/images/294.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
        
       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+105 } >
        <Text style={styles.txt1}> Grilled salmon</Text> 
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
           
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+100 } >
        <Text style={styles.txt1}> Baltic</Text>
        <Image source={require('../assets/images/100.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+172 } >
        <Text style={styles.txt1}> Grilled puree</Text>
        <Image source={require('../assets/images/172.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
           
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
        <Text style={styles.txt1}> crab</Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         </ScrollView>
    
    
    
    


         <View  style ={{flexDirection:'row' ,justifyContent:'space-around',
         alignItems:'center',
         backgroundColor:'grey',
         height:80,
         display:display2}}> 
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
         <Image source={require('../assets/images/fish.jpg')}
        style={{width:90, height:60, borderRadius:30, marginLeft:100, marginTop:7}}/>
          <Text style={styles.welcome}> سمك</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,display:display2}}>    ملحوظة: السعرات الحراريه لكل 100 جرام</Text>
  
        <ScrollView
        style={{
          display:display2
        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+280 } >
        <Text style={styles.txt1}>التونة المعلبة</Text>
        <Image source={require('../assets/images/280.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
        <Text style={styles.txt1}> جمبري</Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+180 } >
       <Text style={styles.txt1}>رنجة مدخنة</Text>
        <Image source={require('../assets/images/180.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+294 } >
        <Text style={styles.txt1}> السردين المعلب</Text>
        <Image source={require('../assets/images/294.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
        
       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+105 } >
        <Text style={styles.txt1}> سلمون مشوي</Text> 
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
           
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+100 } >
        <Text style={styles.txt1}> البلطيق</Text>
        <Image source={require('../assets/images/100.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View>

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+172 } >
        <Text style={styles.txt1}> هريس مشوي</Text>
        <Image source={require('../assets/images/172.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
           
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+90 } >
        <Text style={styles.txt1}> سلطعون</Text>
        <Image source={require('../assets/images/90.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         </ScrollView>
    
    
    
    
    
    
      </SafeAreaView>
    );
  }
export default fish;

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
