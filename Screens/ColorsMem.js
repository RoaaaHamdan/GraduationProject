import React, {Component,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ColorsMem extends Component {
  constructor(props){
    super(props);
    this.state={
      setc:0,
      x:'flex',
      x1:'flex',
    y:'flex',
   y1:'flex',
   z:'flex',
   z1:'flex',
   finishflag:0,
   old:'',
   neww:'',
   old1:'',
   neww1:'',
   old2:'',
   count:0,
dis1:true,
dis2:true,
dis3:true,
dis4:true,
dis5:true,
dis6:true,
img1:'',
img2:'',
img3:'',
img4:'',
img5:'',
img6:'',
dir1:'column-reverse',
dir2:'column',
dir:['column-reverse','column'],
display1:'flex',
display2:'none',
arrayImages1:[
  require('../assets/images2/1.png'),
  require('../assets/images2/2.png'),
  require('../assets/images2/12.png'),
  require('../assets/images2/9.png'),
  require('../assets/images2/6.png'),
  require('../assets/images2/26.png'),
  require('../assets/images2/4.png'),
  require('../assets/images2/16.png'),
  require('../assets/images2/3.png'),
  require('../assets/images2/15.png'),
],
arrayImages2:[
  require('../assets/images2/23.png'),
  require('../assets/images2/7.png'),
  require('../assets/images2/24.png'),
  require('../assets/images2/19.png'),
  require('../assets/images2/14.png'),
  require('../assets/images2/21.png'),
  require('../assets/images2/11.jpg'),
  require('../assets/images2/10.png'),
  require('../assets/images2/5.png'),
  require('../assets/images2/22.png'),


   ],
xx:0,
xx2:0
    }
  }
   propse = (val, val1) => {
    if (val1 == 'x') {
      this.setState({x:'flex'})
    }
    else if (val1 == 'x1'){ 
    this.setState({x1:'flex'})
    }
     else if (val1 == 'y'){ 
      //sety('flex')
      this.setState({y:'flex'})
    }
     else if (val1 == 'y1'){ 
    this.setState({y1:'flex'})
    }
    else if (val1 == 'z'){ 
    this.setState({z:'flex'})
    }
    else if (val1 == 'z1'){ 
     this.setState({z1:'flex'})
    }
    if (this.state.count == 0) {
      this.setState({old:val,old1:val1})
      this.setState({count:1})
   }
    else { 
      this.setState({count:0,neww:val,neww1:val1})
      if (this.state.old == val/2 || this.state.old ==val*2) {
        this.setState({finishflag:this.state.finishflag+1})
      this.setState({xx:this.state.xx+1})
        if(val1 == 'x'||val1 == 'x1' ){
           this.setState({dis2:true,dis3:true})
        }
      else  if(val1 == 'y'||val1 == 'y1' ){
        this.setState({dis5:true,dis4:true})

        }
      else  if(val1 == 'z'||val1 == 'z1' ){
          this.setState({dis1:true,dis6:true})
        }
                  alert('go ahead!');
                           this.setState({old:'',neww:'',old1:'',neww1:''})
      }
      else if (this.state.old == this.state.neww){
      }
      else if (this.state.old != this.state.neww) { 
         alert('This two Photo are not the same . Try agin  ');
        if (this.state.old1 == 'x' || val1 == 'x') { 
          this.setState({x:'none'})
        }
        if (this.state.old1 == 'x1' || val1 == 'x1') { 
         this.setState({x1:'none'})
        }
        if (this.state.old1 == 'y' || val1 == 'y') { 
         this.setState({y:'none'})
        }
        if (this.state.old1 == 'y1' || val1 == 'y1') { 
                  this.setState({y1:'none'})
        }
         if (this.state.old1 == 'z' || val1 == 'z') { 
          this.setState({z:'none'})
        }
        if (this.state.old1 == 'z1' || val1 == 'z1') { 
          this.setState({z1:'none'})

          //setz1('none');
        }

      }
       // setold(); setneww();        setold1(''); setneww1('');
       this.setState({old:'',neww:'',old1:'',neww1:''})

    }
  }
  componentDidMount() {
    var r1 =Math.floor(Math.random() *2);
    var r2 =Math.floor(Math.random() *2);
    var r3 =Math.floor(Math.random() *10);
    var r4 =Math.floor(Math.random() *10);
       var r5 =Math.floor(Math.random() *10);
      // setr3(r3)

while(r3==r4||r3==r5||r5==r4){
  var r3 =Math.floor(Math.random() *10);
  var r4 =Math.floor(Math.random() *10);
     var r5 =Math.floor(Math.random() *10);
}
//setimg1(arrayImages[r3]);
//setimg2(arrayImages[r4]);
this.setState({dir1:this.state.dir[r1]});
this.setState({dir2:this.state.dir[r2],img1:this.state.arrayImages1[r3],
  img2:this.state.arrayImages1[r4],img3:this.state.arrayImages1[r5],
  img4:this.state.arrayImages2[r3],
  img5:this.state.arrayImages2[r4],img6:this.state.arrayImages2[r5]});

//setimg3(arrayImages[r5]);
if (global.flagA=='Arab'){
  this.setState({display1:'none',display2:'flex'})

} 
else if (global.flagA=='Eng'){
  this.setState({display2:'none',display1:'flex'})

}
};
render(){
  return (
    <ScrollView
      style={{
     backgroundColor:'white'
      }}>
                                  <LinearGradient
        colors={['blue','palevioletred']}
        start={{x:0 , y:1}}
          end={{x:1,y:0}}
      >
          <View
        style={{
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <Text
           style={{
            color: 'white',
            fontFamily: 'Itim-Regular',
             fontSize:30,
             display:this.state.display1
          }}>LEVEL 1</Text>
             <Text
           style={{
            color: 'white',
            fontFamily: 'Itim-Regular',
             fontSize:30,
             display:this.state.display2
          }}>مرحلة 1 </Text>
      </View>
     
      </LinearGradient>
<View
style={{
  width:'100%',
  height:300,
  flexDirection:'row',
  justifyContent:'space-around',
  marginTop:70


}}
>
<View
style={{
  flexDirection:this.state.dir1,
  //justifyContent:'flex-start',
}}
>

<TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,
            backgroundColor:'palevioletred'
          }}
          onPress={()=>this.propse(8,'z')}
          disabled={this.state.dis1}
        >

          <Image source={this.state.img4}
            style={{
              width: 100,
              height: 100,
              display:this.state.z
            }}
          />
        </TouchableOpacity>
        
     
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
                   onPress={()=>this.propse(2,'x1')}
                   disabled={this.state.dis3}

        >

          <Image source={this.state.img5}
            style={{
              width: 100,
              height: 100,
              display:this.state.x1
            }}

          />
        </TouchableOpacity>
             
<TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
          onPress={()=>this.propse(3,'y')}
          disabled={this.state.dis4}
        >

          <Image source={this.state.img3}
            style={{
              width: 100,
              height: 100,
              display:this.state.y
            }}
          />
        </TouchableOpacity>
   
   
        
</View>

<View
style={{
  flexDirection:this.state.dir2,
  justifyContent:'flex-start'
}}
>
   <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,
            backgroundColor:'palevioletred'

          }}
          onPress={()=>this.propse(1,'x')}
          disabled={this.state.dis2}
        >

          <Image source={this.state.img2}
            style={{
              width: 100,
              height: 100,
              display:this.state.x
            }}
          />
        </TouchableOpacity>
      
      

   
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
                   onPress={()=>this.propse(6,'y1')}
          disabled={this.state.dis5}
        >

          <Image source={this.state.img6}
            style={{
              width: 100,
              height: 100,
              display:this.state.y1
            }}

          />
        </TouchableOpacity>
              <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
          onPress={()=>this.propse(16,'z1')}
          disabled={this.state.dis6}
        >

          <Image source={this.state.img1}
            style={{
              width: 100,
              height: 100,
              display:this.state.z1
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
          marginTop:100
        
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'palevioletred',
            height: 40,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems:'center'

          }}
        onPress={() => {
//xx=0;
          this.setState({x:'none',x1:'none',y:'none',y1:'none',z:'none',z1:'none',
          neww:'',neww1:'',old:'',old1:'',finishflag:0,dis1:false,dis2:false,dis3:false,dis4:false,dis5:false
          ,dis6:false,xx:0})


        }}>
          <Text
            style={{
            color:'white',
            display:this.state.display1
          }}>
          Start game
      </Text>
      
      
      <Text
            style={{
            color:'white',
            display:this.state.display2
          }}>
بدأ      </Text>
      
      </TouchableOpacity>


        <TouchableOpacity
            style={{
         //   backgroundColor: 'orange',
            height: 40,
            width: 100,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems:'center'

          }}
         // disabled={true}
          onPress={
            () => {
            
                this.props.navigation.navigate('GamesRela');
              
           
            }
          }
       >
       <Icon name="chevron-left" size={30} color="palevioletred"
                     
                     style={{
                       width:50,
                       height:50,
            
                     }}
                      />
</TouchableOpacity>
        </View>
    </ScrollView>
  );
}

};
//  Memorylevel1;
