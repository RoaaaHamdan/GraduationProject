import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {RadioButton} from 'react-native-paper';

//import {floor} from 'react-native-reanimated';

const Sokari = (props) => {
  const [age, setAge] = React.useState('');
  const [BMI, setBmii] = React.useState('');
  const [food1, setfood] = React.useState('');
  const [ff1, setff1] = React.useState('');
  const [mm1, setmm1] = React.useState('');
  const [display, setDisplay] = React.useState('none');
  const [display1, setDisplay1] = React.useState('none');
  const [checked, setChecked] = React.useState('');
  const [ava, setAva] = React.useState('');
  const [checked2, setChecked2] = React.useState('');
  const [ava2, setAva2] = React.useState('');
  const [checked3, setChecked3] = React.useState('');
  const [ava3, setAva3] = React.useState('');
  const [checked4, setChecked4] = React.useState('');
  const [ava4, setAva4] = React.useState('');
  const [checked5, setChecked5] = React.useState('');
  const [ava5, setAva5] = React.useState('');
  const [checked6, setChecked6] = React.useState('');
  const [ava6, setAva6] = React.useState('');
  const [display51, setdisplay51] = React.useState('flex');
  const [display52, setdisplay52] = React.useState('none');
    const cal = () => { 
      if (age === '' || BMI === '' || food1 === '' || (ff1 === '' && mm1 === '')
        || ava === '' || ava2 === '' || ava3 === '' || ava4 === ''
        || ava5 === '' || ava6 === '') {
        alert('من فضلك املأ جميع البيانات' );
        
      }
      else { 
        let x = age + BMI + food1 + ff1 + mm1 + ava + ava2
          + ava3 + ava4 + ava5 + ava6;
        
        if (x < 7) {
          alert('The risk of developing diabetes is very low, as the odds are 1 in 100.')
        }
        else if (x > 7 && x < 11) {
          alert('Low risk of developing diabetes, as the odds are 1 in 25.');
        }
        else if (x > 12 && x < 14) {
          alert('An average risk of developing diabetes, with the odds reaching 1 in 6 people.');
        }
        else if (x > 15 && x < 20) {
          alert('High risk of developing diabetes, with the odds reaching 1 in 3 people.');
        }
        else if (x > 20) { 
          alert('The risk is very high, with the odds reaching one in two!');
        }
      }

  }
  useEffect(() => {
    //alert('kjj')
    // Update the document title using the browser API
if (global.flagA=='Arab'){
  setdisplay51('none');
  setdisplay52('flex');

} 

else if (global.flagA=='Eng'){

  setdisplay52('none');
  setdisplay51('flex'); 
}
});
  
  const setSelectedAge = (age) => {
    setAge(age);
  };
  const setSelectedmm1 = (v) => {
    setmm1(v);
  }
  const setSelectedff1 = (v) => { 
    setff1(v);
  }
  const setSelectedfood = (v) => {
    setfood(v);
  };
  const setSelectedBMI = (BMI) => {
    setBmii(BMI);
  };

  let ff = [
    {
      label: 'Less than 90 cm',
      value: 0,
    },
    {
      label: '94-102 cm',
      value: 3,
    },
    {
      label: 'More than 102 cm',
      value: 4,
    },
  ];

  let mm = [
    {
      label: 'Less than 89 cm',
      value: 0,
    },
    {
      label: '80-88 cm',
      value: 3,
    },
    {
      label: 'Higher than 88 cm',
      value: 4,
    },
  ];
  let BMIi = [
    {
      label: 'Less than 25',
      value: 0,
    },
    {
      label: '25-30',
      value: 1,
    },
    {
      label: 'Above 30',
      value: 3,
    },
  ];
  let food = [
    {
      label: 'every day',
      value: 0,
    },
    {
      label: 'not every day ',
      value: 3,
    },
  ];
  let ages = [
    {
      label: 'Less than 30',
      value: 0,
    },
    {
      label: '30-45',
      value: 2,
    },
    {
      label: '45-64',
      value: 3,
    },
    {
      label: 'Over 65',
      value: 4,
    },
  ];
  return (
    <ScrollView
    style={{
        flex:1,
      backgroundColor:'lavender'
    }}
    >
      
      <View
        style={{
          backgroundColor: 'midnightblue',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 70,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            display:display51
          }}>
Am I at risk of diabetes?        </Text>

<Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'Itim-Regular',
            display:display52
          }}>
هل أنا عرضة للإصابة بالسكري       </Text>
      </View>

      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
      
        }}>
        <View
          style={{
         //   width: '80%',
            alignSelf: 'center',
              width:'100%',
              alignSelf: 'center',
            padding: 40,
            marginBottom:0,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1

            
          }}>
          <Dropdown
            data={ages}
            value={age}
            label="Age"
            itemColor={'lavender'}
            useNativeDriver={true}
            onChangeText={(value, index, data) => setSelectedAge(value)}
            //  style={{ width: 20, height:90 }}
          />
        </View>

        <View
          style={{
            width: '100%',
            alignSelf: 'center',
            marginTop: 20,
            
        //    marginBottom:30
          }}>
          
          <View
            style={{
              //width:'100%'
              alignSelf: 'center',
                     padding:40,
                     borderBottomColor:'midnightblue',
            borderBottomWidth:1

          }}>
            <Text
            style={{
              display:display51
            }}
            
            >Is there any of your first-degree family members (parents, siblings,
            Sisters, boys, girls) have diabetes?
          </Text>

          <Text
            style={{
              display:display52
            }}
            
            >هل هناك أي من أفراد أسرتك من الدرجة الأولى (الوالدين ، الأشقاء ،
            الأخوات ، الأولاد ، البنات) مصابون بالسكري؟
          </Text>
          <View
            style={{
                flexDirection: 'row',
                     paddingTop:20,
              marginTop:25,
                   alignSelf:'flex-end',
                   
            }}>
            <Text
            style={{
              display:display51
            }}
            
            > Yes</Text>
                <Text
            style={{
              display:display52
            }}
            
            > نعم</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
                setAva(3);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end',
          
            }}>
            <Text
            style={{
              
display:display51
            }}
            
            > {' '}{' '}No</Text>
            <Text
            style={{
              
display:display52
            }}
            
            > {' '}{' '}لا</Text>

            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
                setAva(0);
              }}
            />
          </View>
          
          </View>



          <View  style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,
              marginTop: 20,
              borderBottomColor:'midnightblue',
            borderBottomWidth:1      

          }}>
            <Text
            style={{
              display:display51
            }}
            
            >
            Does any of the other relatives of the family have diabetes?            
            
            </Text>

            <Text
            style={{
              display:display52
            }}
            
            >
هل يعاني أي من أقارب الأسرة الآخرين من مرض السكري؟            
            </Text>

 <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end',
              marginTop:25


            }}>
            <Text
            style={{
              display:display51
            }}
            
            > Yes</Text>
               <Text
            style={{
              display:display52
            }}
            
            > نعم</Text>
            <RadioButton
              value="first"
              status={checked2 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2('first');
                setAva2(3);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end'

            }}>
            <Text
            
            style={{
              display:display51
            }}
            >{' '}{' '} No</Text>


<Text
            
            style={{
              display:display52
            }}
            >{' '}{' '} لا</Text>
            <RadioButton
              value="second"
              status={checked2 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2('second');
                setAva2(0);
              }}
            />
          </View>
          </View>
         

          


          <View
          
           style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1

          }}
          >
            <Text

style={{
  display:display51
}}
            >
            
            
            Have you ever had a blood test for high blood sugar (such as gestational diabetes, disease or drug treatment)?            
            </Text>


            <Text

style={{
  display:display52
}}
            >
            
            
            هل سبق لك إجراء فحص دم لارتفاع نسبة السكر في الدم (مثل سكري الحمل أو المرض أو العلاج بالعقاقير)؟            </Text>
<View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end',
              marginTop:25


            }}>
            <Text> Yes</Text>
            <RadioButton
              value="first"
              status={checked3 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3('first');
                setAva3(5);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end'

            }}>
              <Text
              style={{
                display:display51
              }}
              
              > {' '} {' '}No</Text>

<Text
              style={{
                display:display52
              }}
              
              > {' '} {' '}لا</Text>

            <RadioButton
              value="second"
              status={checked3 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3('second');
                setAva3(0);
              }}
            />
          </View>

          </View>
          <View
             style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
                     
            borderBottomColor:'midnightblue',
            borderBottomWidth:1
          }}
          >
            <Text
            
            style={{
              display:display51
            }}
            >    
            Do you suffer from high blood pressure or are you taking medication to lower your blood pressure?         </Text> 

            <Text
            
            style={{
              display:display52
            }}
            >    
هل تعاني من ارتفاع ضغط الدم أو تتناول أدوية لخفض ضغط الدم؟            
                   </Text> 

         <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end',
              marginTop:25


            }}>
            <Text> Yes</Text>
            <RadioButton
              value="first"
              status={checked4 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked4('first');
                setAva4(1);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end'

            }}>
              <Text
              
              style={{
                display:display51
              }}
              > {' '}{' '}No</Text>
      <Text
              
              style={{
                display:display52
              }}
              > {' '}{' '}لا</Text>
            <RadioButton
              value="second"
              status={checked4 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked4('second');
                setAva4(0);
              }}
            />
          </View>
   
          </View>



          <View
          style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1  

          }}>
            <Text
                style={{
                display:display51
              }}
            >


            Are you doing physical exertion every day for at least 30 minutes, including housework, work requirements, or an intended sporting activity?   
            
                     </Text>


                     <Text
                style={{
                display:display52
              }}
            >


هل تمارس مجهودًا بدنيًا كل يوم لمدة 30 دقيقة على الأقل ، بما في ذلك الأعمال المنزلية ، أو متطلبات العمل ، أو النشاط الرياضي المقصود؟            
                     </Text>
              <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end',
              marginTop:25

            }}>
            <Text
            
            style={{
                display:display51
              }}> Yes</Text>
                  <Text
            
            style={{
                display:display52
              }}> نعم</Text>
            <RadioButton
              value="first"
              status={checked5 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('first');
                setAva5(0);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',                   alignSelf:'flex-end'

            }}>
              <Text
              style={{
                display:display51
              }}
              > {' '}{' '}No</Text>
              <Text
                style={{
                display:display52
              }}
              > {' '}{' '}لا</Text>


            <RadioButton
              value="second"
              status={checked5 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked5('second');
                setAva5(2);
              }}
            />
          </View>

          </View>
          
        
          <View
          style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1 

          }}
          >
            <Dropdown
              data={BMIi}
              value={BMI}
              label=" BMI"
              itemColor={'lavender'}
              useNativeDriver={true}
              onChangeText={(value, index, data) => setSelectedBMI(value)}
              //  style={{ width: 20, height:90 }}
            />
          </View>
          <View
            style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1    

            }}>
             <Text> Male || Female</Text>
            <View
            style={{
                flexDirection: 'row',alignSelf:'flex-end',
                marginTop:25
              
            }}>
            <Text>Female</Text>

            <RadioButton
              value="second"
              status={checked6 === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setDisplay('flex');
                setDisplay1('none');
                setChecked6('second');
                setAva6(3);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',alignSelf:'flex-end',
            }}>
            <Text> Male</Text>
            <RadioButton
              value="first"
              status={checked6 === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setDisplay('none');
                setDisplay1('flex');
                setChecked6('first');
                setAva6(0);
              }}
            />
          </View>

          
</View>
          <View
            style={{
              display: display, 
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1
            }}>
            <Dropdown
              data={ff}
              value={ff1}
              label="What is your waistline?"
              itemColor={'lavender'}
              useNativeDriver={true}
              onChangeText={(value, index, data) => setSelectedff1(value)}
              //  style={{ width: 20, height:90 }}
            />
          </View>

          <View
            style={{
              display: display1,
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1
            }}>
            <Dropdown
              data={mm}
              value={mm1}
              label="What is your waistline?"
              itemColor={'lavender'}
              useNativeDriver={true}
              onChangeText={(value, index, data) => setSelectedmm1(value)}
              //  style={{ width: 20, height:90 }}
            />
          </View>

          <View
            style={{
              width:'100%',
              alignSelf: 'center',
            padding: 40,  marginTop: 20,
            borderBottomColor:'midnightblue',
            borderBottomWidth:1
          }}>
            <Dropdown
              data={food}
              value={food1}
              label="How often do you eat vegetables ?"
              itemColor={'lavender'}
              useNativeDriver={true}
              onChangeText={(value, index, data) => setSelectedfood(value)}
              //  style={{ width: 20, height:90 }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={{
        marginBottom: 100,
        backgroundColor: 'midnightblue',
        marginTop: 30,
        width: 140,
        height: 50,
        alignSelf:'center',
        borderRadius:100,
        opacity:.7
      }}
      onPress={cal}>
        <Text style={{alignSelf:'center',marginTop:16,display:display51,color:'white'}}>Calculate</Text>
        <Text style={{alignSelf:'center',marginTop:16,display:display52,color:'white'}}>احسب</Text>

      </TouchableOpacity>
    </ScrollView>
  );
};
export default Sokari;
