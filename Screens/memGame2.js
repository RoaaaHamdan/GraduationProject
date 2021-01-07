import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';


const memGame2 = (props) => {
  const [count, setc] = React.useState(0);
  const [x, setx] = React.useState('flex');
  const [x1, setx1] = React.useState('flex');
   const [y, sety] = React.useState('flex');
  const [y1, sety1] = React.useState('flex');
    const [z, setz] = React.useState('flex');
    const [z1, setz1] = React.useState('flex');
    const [finishflag, setFinishFlag] = React.useState(0);

  const [old, setold] = React.useState();
  const [neww, setneww] = React.useState();
    const [old1, setold1] = React.useState('');
  const [neww1, setneww1] = React.useState('');
      let xx = 0;

  const propse = (val, val1) => {
    if (val1 == 'x') {
      setx('flex')
    }
    else if (val1 == 'x1'){ 
      setx1('flex')
    }
     else if (val1 == 'y'){ 
      sety('flex')
    }
     else if (val1 == 'y1'){ 
      sety1('flex')
    }
    else if (val1 == 'z'){ 
      setz('flex')
    }
    else if (val1 == 'z1'){ 
      setz1('flex')
    }
    if (count == 0) {
      setold(val);
      setold1(val1);
      setc(1);
      //setx('none');
    }
    else { 
      setc(0);
      setneww(val);
   //   alert(val)
           // alert(neww)

            setneww1(val1);

      if (old == val) {
        xx = xx + 1;
        if(xx=1)
        setFinishFlag(1);  if(xx=2)
        setFinishFlag(2);  if(xx=3)
        setFinishFlag(3);
    //    alert(finishflag);
      //  alert('same');
        
        if (old == '1' && val == '1' )
          alert('طفل ذكي نستخدم الكأس لشرب الماء أحسنت !');
        
         else if (old == '3' && val == '3' )
          alert('طفل ذكي نستخدم الفرشان مع معجون الاسنان حافظ على هذه العادة الصحية :)  أحسنت !');
          else if (old == '2' && val == '2' )
          alert('طفل ذكي نستخدم القلم مع الدفتر للكتابة :)  أحسنت !');
        
        
        
        
        
            //    alert('go ahead!');
        setold(); setneww();        setold1(''); setneww1('');

      }
      else if (old != neww) { 
         alert('This two Photo are not the same . Try agin  ');
        if (old1 == 'x' || val1 == 'x') { 
        //  for (let i = 0; i < 60000000;i++);
          setx('none');
        }
        if (old1 == 'x1' || val1 == 'x1') { 
                  //    for (let i = 0; i < 60000;i++);

          setx1('none');
        }
        if (old1 == 'y' || val1 == 'y') { 
                    // for (let i = 0; i < 6000000;i++);

          sety('none');
        }
        if (old1 == 'y1' || val1 == 'y1') { 
                  //   for (let i = 0; i < 6000000000;i++);

          sety1('none');
        }
         if (old1 == 'z' || val1 == 'z') { 
                    // for (let i = 0; i < 6000000;i++);

          setz('none');
        }
        if (old1 == 'z1' || val1 == 'z1') { 
                  //   for (let i = 0; i < 6000000000;i++);

          setz1('none');
        }

      }
        setold(); setneww();        setold1(''); setneww1('');
           // setx1('none');

    }
  }

  return (
    <ScrollView
      style={{
      backgroundColor:'pink'
      }}>
      <View
        style={{
          height: 60,
          backgroundColor: 'lightblue',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:50
      }}>
        <Text
           style={{
            color: 'white',
            fontFamily: 'Itim-Regular',
             fontSize:30
          }}>LEVEL 1</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent:'space-between'
        
        }}>

             <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
          onPress={()=>propse(3,'z')}
        >

          <Image source={require('../assets/images/ma3jon.jpg')}
            style={{
              width: 100,
              height: 100,
              display:z
            }}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
          onPress={()=>propse(1,'x')}
        >

          <Image source={require('../assets/images/water.jpg')}
            style={{
              width: 100,
              height: 100,
              display:x
            }}
          />
        </TouchableOpacity>

        
      
      </View>


         <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent:'space-between'
        
        }}>
          <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
                   onPress={()=>propse(1,'x1')}

        >

          <Image source={require('../assets/images/casss.jpg')}
            style={{
              width: 100,
              height: 100,
              display:x1
            }}

          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
          onPress={()=>propse(2,'y')}
        >

          <Image source={require('../assets/images/pen.jpg')}
            style={{
              width: 100,
              height: 100,
              display:y
            }}
          />
        </TouchableOpacity>
      


      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-around'
      }}
      
      ><View        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent:'space-between'
        
        }}>
          
          <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
                   onPress={()=>propse(2,'y1')}

        >

          <Image source={require('../assets/images/dafter.jpg')}
            style={{
              width: 100,
              height: 100,
              display:y1
            }}

          />
        </TouchableOpacity>
              <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'lightblue',
            borderWidth:2
          }}
          onPress={()=>propse(3,'z1')}
        >

          <Image source={require('../assets/images/forshaya.jpg')}
            style={{
              width: 100,
              height: 100,
              display:z1
            }}
          />
        </TouchableOpacity>
      </View>
       
      
      </View>
      <View
       style={{
          width: '100%',
          height: 100,
      //    backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop:50
        
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            height: 40,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems:'center'

          }}
        onPress={() => {
          setx('none');
          setx1('none');
             sety('none');
          sety1('none');
                  setz('none');
          setz1('none');
          setneww();
          setold();
          setneww1('');
          setold1('');
          setc(0);
          setFinishFlag(0); xx = 0;
        }}>
          <Text
            style={{
            color:'white'
          }}>
          Start game
      </Text></TouchableOpacity>


        <TouchableOpacity
            style={{
            backgroundColor: 'lightblue',
            height: 40,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems:'center'

          }}
          onPress={
            () => {
              if (finishflag === 3) {
                alert('clever boy');

              }
              else { 
                alert('finish this level first');
              }
            }
          }
       >
          <Text
             style={{
            color:'white'
          }}>
          Next Level
      </Text></TouchableOpacity>
        </View>
    </ScrollView>
  );
};
export default memGame2;
