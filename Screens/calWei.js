import React, {useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const claWi = ({navigation}) => {
  const [tall, setTall] = React.useState('');
  const [We, setWe] = React.useState('');
  const [BMI, setBMI] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [display1, setdisplay1] = React.useState('flex');
  const [display2, setdisplay2] = React.useState('none');

  const calWE = () => {
    if (tall == '' || We == '' || sex == '') {
      alert('لو سمحت املأ جميع الخيارات');
    } else if (sex == 1) {
      alert(48 + 1.1 * (tall - 150));
    } else if (sex == 2) {
      alert(45 + 0.9 * (tall - 150));
    }
  };
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
  const Ageset = (val) => {
    setAge(val);
  };
  const tallSet = (val) => {
    setTall(val);
  };
  const Weset = (va) => {
    setWe(va);
  };

  const setSexType = (value1) => {
    setSex(value1);
    //alert(value1);
  };

  let sexType = [
    {
      label: 'male',
      value: 1,
    },
    {
      label: 'female',
      value: 2,
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Itim-Regular',
            display:display1
          }}>
Calculate your ideal weight        </Text>

<Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Itim-Regular',
            display:display2
          }}>
حساب الوزن المثالي      </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:120,
        }}>
        <Text
          style={{fontFamily: 'ArefRuqaa-Bold', fontSize: 25, color: 'midnightblue',display:display1}}>
          Length
        </Text>
        <Text
          style={{fontFamily: 'ArefRuqaa-Bold', fontSize: 25, color: 'midnightblue',display:display2}}>
          الطول
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'in cm'}
          onChangeText={(val) => tallSet(val)}
        />
        <Text
          style={{fontFamily: 'ArefRuqaa-Bold', fontSize: 25, color: 'midnightblue',display:display1}}>
          Weight
        </Text>
        <Text
          style={{fontFamily: 'ArefRuqaa-Bold', fontSize: 25, color: 'midnightblue',display:display2}}>
          الوزن
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'in kg'}
          onChangeText={(val) => Weset(val)}
        />
        <View style={{width: '75%'}}>
          <Dropdown
            data={sexType}
            value={sex}
            label="Male || female"
            itemColor={'midnightblue'}
            useNativeDriver={true}
            onChangeText={(value, index, data) => setSexType(value)}
          />
        </View>

        <TouchableOpacity
          style={{
            width: '50%',
            borderWidth: 1,
            borderColor: 'white',
            height: 50,
            marginTop: 40,
            backgroundColor: 'midnightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
          }}
          onPress={calWE}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
          display:display1
            }}>
            Calculate !
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'Amiri-BoldItalic',
          display:display2
            }}>
            احسب !
          </Text>
        </TouchableOpacity>
  
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',


  },
});

export default claWi;
