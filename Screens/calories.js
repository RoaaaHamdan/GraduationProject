import React, {useEffect} from 'react';
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

const calories = () => {
  const [tall, setTall] = React.useState('');
  const [We, setWe] = React.useState('');
  const [age, setAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [ac, setac] = React.useState('');
  const [display1, setdisplay1] = React.useState('flex');
  const [display2, setdisplay2] = React.useState('none');

  const Ageset = (val) => {
    setAge(val);
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
  const result = () => {
    if (tall == '' || We == '' || age == '' || sex == '' || ac == '') {
      alert('Please fill in all fields');
    } else if (sex == 1) {
      if (ac == 1) {
        alert((We * 10 + tall * 6.25 - age * 5 + 5) * 1.725 +' Calories');
      } else if (ac == 2) {
        alert((We * 10 + tall * 6.25 - age * 5 + 5) * 1.55+ ' Calories');
      } else if (ac == 3) {
        alert((We * 10 + tall * 6.25 - age * 5 + 5) * 1.357+' Calories');
      } else if (ac == 3) {
        alert((We * 10 + tall * 6.25 - age * 5 + 5) * 1.25 + ' Calories');
      }
    } else if (sex == 2) {
      if (ac == 1) {
        alert((We * 10 + tall * 6.25 - age * 5 - 160) * 1.725+' Calories');
      } else if (ac == 2) {
        alert((We * 10 + tall * 6.25 - age * 5 - 160) * 1.55+' Calories');
      } else if (ac == 3) {
        alert((We * 10 + tall * 6.25 - age * 5 + -160) * 1.357+' Calories');
      } else if (ac == 3) {
        alert((We * 10 + tall * 6.25 - age * 5 + -160) * 1.25+' Calories');
      }
    }
  };
  const Weset = (v) => {
    setWe(v);
  };
  const tallSet = (value1) => {
    setTall(value1);
    //  alert(value1);
  };
  const setSexType = (value1) => {
    setSex(value1);
    //  alert(value1);
  };
  const setacc = (value1) => {
    setac(value1);
  };

  let sexType = [
    {
      label: 'Male',
      value: '1',
    },
    {
      label: 'female',
      value: '2',
    },
  ];
  let act = [
    {
      label: 'Very energetic',
      value: 1,
    },
    {
      label: 'Average',
      value: 2,
    },
    {
      label: 'Rustle of activity',
      value: 3,
    },
    {
      label: 'idle',
      value: 4,
    },
  ];
  return (
    <ScrollView
    style={{
        backgroundColor:'lavender'
    }}
    
    >
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
          display:display1
          }}>
Calculate calories     

   </Text>
   <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Amiri-BoldItalic',
          display:display2
          }}>
حساب حاجتك من السعرات الحرارية
   </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display1}}>
          Age
        </Text>
        <Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display2}}>
          العمر
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'In years'}
          onChangeText={(val) => Ageset(val)}
        />
        <Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display1}}>
          Length
        </Text>
        <Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display2}}>
          الطول
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          keyboardType="numeric"

          placeholder={'In cm'}
          onChangeText={(val) => tallSet(val)}
        />
        <Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display1}}>
the weight        </Text>
<Text
          style={{fontFamily: 'Itim-Regular', fontSize: 25, color: 'midnightblue',display:display2}}>
الوزن      </Text>
        <TextInput
                  keyboardType="numeric"

          style={{
            borderWidth: 1,
            borderColor: 'midnightblue',
            width: '80%',
          }}
          placeholder={'In Kg'}
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
            //  style={{flex: 1}}
            //style={{width: 20, height: 90}}
          />
        </View>
        <View style={{width: '75%'}}>
          <Dropdown
            data={act}
            value={sex}
            label="My activity"
            itemColor={'midnightblue'}
            useNativeDriver={true}
            onChangeText={(value, index, data) => setacc(value)}
            //  style={{flex: 1}}
            //style={{width: 20, height: 90}}
          />
        </View>

        <TouchableOpacity
          style={{
            width:150,
            borderWidth: 1,
            borderColor: 'white',
            height: 50,
            marginTop: 40,
            backgroundColor: 'midnightblue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            alignContent: 'center',
            opacity:.7
          }}
          onPress={result}
          //  onPress={calculateBMI}
        >
          <Text
            style={{
              //textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
              display:display1
            }}>
            Calculate !
          </Text>

          <Text
            style={{
              //textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontFamily: 'Amiri-BoldItalic',
              display:display2
            }}>
            احسب !
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'midnightblue',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default calories;
