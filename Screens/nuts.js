import React, {useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const nuts = ({navigation}) => {
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

     <View  style ={{flexDirection:'row' ,justifyContent:'space-around'
     ,
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
         <Image source={require('../assets/images/nuts.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}> Nuts</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,  display:display1}}>   Note: calories per 100 grams</Text>


        <ScrollView
        style={{
          display:display1
        }}>
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+607 } >
       <Text style={styles.txt1}> Hazelnut</Text>
        <Image source={require('../assets/images/607.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+633} >
        <Text style={styles.txt1}> Nut</Text>
        <Image source={require('../assets/images/633.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+200} >
        <Text style={styles.txt1}> Coconut</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+714} >
       <Text style={styles.txt1}> Pistachio</Text>
        <Image source={require('../assets/images/714.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+589} >
       <Text style={styles.txt1}> Cashew</Text>
        <Image source={require('../assets/images/589.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+373} >
        <Text style={styles.txt1}> Almonds</Text>
        <Image source={require('../assets/images/373.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+620} >
       <Text style={styles.txt1}> Mixed nuts</Text>
        <Image source={require('../assets/images/620.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+580} >
       <Text style={styles.txt1}> Peanuts</Text>
        <Image source={require('../assets/images/580.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+600} >
        <Text style={styles.txt1}> Sunflower seeds</Text>
        <Image source={require('../assets/images/600.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         </ScrollView>
     
     
     
     
     
         <View  style ={{flexDirection:'row' ,justifyContent:'space-around'
     ,
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
         <Image source={require('../assets/images/nuts.jpg')}
        style={{width:90, height:60, borderRadius:30 , marginLeft: 40 , marginTop:7}}/>
          <Text style={styles.welcome}> المكسرات</Text>
        </View>
        <Text style={{fontSize:18,marginTop:70,  display:display2}}>  ملحوظة: السعرات الحراريه لكل 100 جرام</Text>


        <ScrollView
        style={{
          display:display2
        }}>
        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+607 } >
       <Text style={styles.txt1}> بندق</Text>
        <Image source={require('../assets/images/607.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+633} >
        <Text style={styles.txt1}> البندق</Text>
        <Image source={require('../assets/images/633.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+200} >
        <Text style={styles.txt1}> جوزة الهند</Text>
        <Image source={require('../assets/images/200.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+714} >
       <Text style={styles.txt1}> فستق</Text>
        <Image source={require('../assets/images/714.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+589} >
       <Text style={styles.txt1}> كاجو</Text>
        <Image source={require('../assets/images/589.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

        <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+373} >
        <Text style={styles.txt1}> لوز</Text>
        <Image source={require('../assets/images/373.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+620} >
       <Text style={styles.txt1}> مكسرات مشكله</Text>
        <Image source={require('../assets/images/620.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+580} >
       <Text style={styles.txt1}> الفول السوداني</Text>
        <Image source={require('../assets/images/580.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         <TouchableOpacity style ={{flexDirection:'row',justifyContent:'space-around', width :'100%'}}
        onPress={() => global.cal= global.cal+600} >
        <Text style={styles.txt1}> بذور زهرة عباد الشمس</Text>
        <Image source={require('../assets/images/600.png')}
        style={{width:60, height:50, borderRadius:100, marginTop:10}}/>
        </TouchableOpacity>
        <View style ={{flexDirection:'row',justifyContent:'space-around', width :'100%' }}> 
        <Text > _____________________________________________________</Text>
        </View> 

         </ScrollView>
     
     
     
     
     
      </SafeAreaView>
    );
  }
 export default nuts;

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
