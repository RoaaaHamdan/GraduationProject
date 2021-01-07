import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const fruits = ({navigation}) => {
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
         display:display1
         }}>          
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
         <Image source={require('../assets/images/fruits.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 110 , marginTop:7}}/>
        <Text style={styles.welcome}> Fruits</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,
         display:display1
        
        }}>   Note: calories per 100 grams</Text>
  

        <ScrollView
        style={{
         display:display1

        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+76 } >
        <Text style={styles.txt1}> Pineapple</Text>
        <Image source={require('../assets/images/76.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+62 } >
        <Text style={styles.txt1}> Orange</Text>
        <Image source={require('../assets/images/62.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+26 } >
        <Text style={styles.txt1}> Watermelon</Text>
        <Image source={require('../assets/images/26.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+73 } >
         <Text style={styles.txt1}> Apple</Text>
        <Image source={require('../assets/images/73.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+52 } >
        <Text style={styles.txt1}> Guava</Text>
        <Image source={require('../assets/images/52.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+48} >
        <Text style={styles.txt1}> Peache</Text>
        <Image source={require('../assets/images/48.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+73} >
        <Text style={styles.txt1}> Pomegranate</Text> 
        <Image source={require('../assets/images/73.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+105} >
        <Text style={styles.txt1}> Banana</Text>
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
         <Text style={styles.txt1}> Melon</Text>
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
         height:80,
         display:display2
         }}>          
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
         <Image source={require('../assets/images/fruits.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 110 , marginTop:7}}/>
        <Text style={styles.welcome}> فواكه</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,
         display:display2
        
        }}>   ملحوظة: السعرات الحراريه لكل 100 جرام</Text>
  

        <ScrollView
        style={{
         display:display2

        }}
        >
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+76 } >
        <Text style={styles.txt1}> أناناس</Text>
        <Image source={require('../assets/images/76.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+62 } >
        <Text style={styles.txt1}> البرتقال</Text>
        <Image source={require('../assets/images/62.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
       
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+26 } >
        <Text style={styles.txt1}> البطيخ</Text>
        <Image source={require('../assets/images/26.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+73 } >
         <Text style={styles.txt1}> تفاحة</Text>
        <Image source={require('../assets/images/73.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
       <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+52 } >
        <Text style={styles.txt1}> جوافة</Text>
        <Image source={require('../assets/images/52.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+48} >
        <Text style={styles.txt1}> بيش</Text>
        <Image source={require('../assets/images/48.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+73} >
        <Text style={styles.txt1}> رمان</Text> 
        <Image source={require('../assets/images/73.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
 
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+105} >
        <Text style={styles.txt1}> موز</Text>
        <Image source={require('../assets/images/105.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 
         
         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+33} >
         <Text style={styles.txt1}> شمام</Text>
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
export default fruits;

const styles = StyleSheet.create({
  flexview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
txt1: {width :'30%' ,
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