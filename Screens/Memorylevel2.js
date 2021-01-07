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


export default class Memorylevel2 extends Component {
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
   r:'flex',
   r1:'flex',
 m:'flex',
m1:'flex',
t:'flex',
t1:'flex',
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
dis7:true,
dis8:true,
dis9:true,
dis10:true,
dis11:true,
dis12:true,
img1:'',
img2:'',
img3:'',
img4:'',
img5:'',
img6:'',
dir1:'column-reverse',
dir2:'column',
dir3:'column-reverse',

dir4:'column',

dir:['column-reverse','column'],
display1:'flex',
display2:'none',
arrayImages:[
  require('../assets/images2/1.png'),
  require('../assets/images2/2.png'),
  require('../assets/images2/3.png'),
  require('../assets/images2/4.png'),
  require('../assets/images2/5.png'),
  require('../assets/images2/6.png'),
  require('../assets/images2/7.png'),
  require('../assets/images2/8.png'),
  require('../assets/images2/9.png'),
  require('../assets/images2/10.png'),
  require('../assets/images2/11.jpg'),
  require('../assets/images2/12.png'),
  require('../assets/images2/13.jpg'),
  require('../assets/images2/14.png'),
  require('../assets/images2/15.png'),
  require('../assets/images2/16.png'),
  require('../assets/images2/17.png'),
  require('../assets/images2/18.png'),
  require('../assets/images2/19.png'),
  require('../assets/images2/20.png'),
  require('../assets/images2/21.png'),
  require('../assets/images2/22.png'),
  require('../assets/images2/23.png'),
  require('../assets/images2/24.png'),
  require('../assets/images2/25.png'),
  require('../assets/images2/26.png'),
  require('../assets/images2/27.png')
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
    if (val1 == 'r') {
      this.setState({r:'flex'})
    }
    else if (val1 == 'r1'){ 
    this.setState({r1:'flex'})
    }
     else if (val1 == 'm'){ 
      //sety('flex')
      this.setState({m:'flex'})
    }
     else if (val1 == 'm1'){ 
    this.setState({m1:'flex'})
    }
    else if (val1 == 't'){ 
    this.setState({t:'flex'})
    }
    else if (val1 == 't1'){ 
     this.setState({t1:'flex'})
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

        else  if(val1 == 't'||val1 == 't1' ){
          this.setState({dis7:true,dis8:true})
        }
        else  if(val1 == 'm'||val1 == 'm1' ){
          this.setState({dis9:true,dis10:true})
        }
        else  if(val1 == 'r'||val1 == 'r1' ){
          this.setState({dis11:true,dis12:true})
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




        if (this.state.old1 == 't' || val1 == 't') { 
          this.setState({t:'none'})
        }
        if (this.state.old1 == 't1' || val1 == 't1') { 
         this.setState({t1:'none'})
        }
        if (this.state.old1 == 'm' || val1 == 'm') { 
         this.setState({m:'none'})
        }
        if (this.state.old1 == 'm1' || val1 == 'm1') { 
                  this.setState({m1:'none'})
        }
         if (this.state.old1 == 'r' || val1 == 'r') { 
          this.setState({r:'none'})
        }
        if (this.state.old1 == 'r1' || val1 == 'r1') { 
          this.setState({r1:'none'})

          //setz1('none');
        }

      }
       // setold(); setneww();        setold1(''); setneww1('');
       this.setState({old:'',neww:'',old1:'',neww1:''})

    }
    if(this.state.finishflag==6){
      alert('you  finised this leve ')
    }
  }
  componentDidMount() {
    var r1 =Math.floor(Math.random() *2);
    var r2 =Math.floor(Math.random() *2);
    var r11 =Math.floor(Math.random() *2);
    var r22 =Math.floor(Math.random() *2);
    var r3 =Math.floor(Math.random() *27);
    var r4 =Math.floor(Math.random() *27);
       var r5 =Math.floor(Math.random() *27);
       var r6 =Math.floor(Math.random() *27);
       var r7 =Math.floor(Math.random() *27);
          var r8=Math.floor(Math.random() *27);
      // setr3(r3)

while(r3==r4||r3==r5||r5==r4||r3==r6||r3==r7||r3==r8||
  r4==r6||r4==r7||r4==r8||r5==r6||r5==r7||r5==r8||r4==r5||r6==r7||r8==r6||r7==r8){
  var r3 =Math.floor(Math.random() *27);
  var r4 =Math.floor(Math.random() *27);
     var r5 =Math.floor(Math.random() *27);
     var r6 =Math.floor(Math.random() *27);
     var r7 =Math.floor(Math.random() *27);
        var r8 =Math.floor(Math.random() *27);
}
this.setState({dir1:this.state.dir[r1],dir3:this.state.dir[r11],dir4:this.state.dir[r22]});
this.setState({dir2:this.state.dir[r2],img1:this.state.arrayImages[r3],
  img2:this.state.arrayImages[r4],img3:this.state.arrayImages[r5],img4:this.state.arrayImages[r6],
  img5:this.state.arrayImages[r7],img6:this.state.arrayImages[r8]});

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
          }}>LEVEL 2</Text>
             <Text
           style={{
            color: 'white',
            fontFamily: 'Itim-Regular',
             fontSize:30,
             display:this.state.display2
          }}>مرحلة 2 </Text>
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

          <Image source={this.state.img1}
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

          <Image source={this.state.img2}
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
  flexDirection:this.state.dir3,
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
          onPress={()=>this.propse(50,'m1')}
          disabled={this.state.dis10}
        >

          <Image source={this.state.img5}
            style={{
              width: 100,
              height: 100,
              display:this.state.m1
            }}
          />
        </TouchableOpacity>
        
     
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
                   onPress={()=>this.propse(60,'t1')}
                   disabled={this.state.dis7}

        >

          <Image source={this.state.img4}
            style={{
              width: 100,
              height: 100,
              display:this.state.t1
            }}

          />
        </TouchableOpacity>
             
<TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
          onPress={()=>this.propse(40,'r')}
          disabled={this.state.dis11}
        >

          <Image source={this.state.img6}
            style={{
              width: 100,
              height: 100,
              display:this.state.r
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

          <Image source={this.state.img3}
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

<View
style={{
  flexDirection:this.state.dir4,
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
          onPress={()=>this.propse(80,'r1')}
          disabled={this.state.dis12}
        >

          <Image source={this.state.img6}
            style={{
              width: 100,
              height: 100,
              display:this.state.r1
            }}
          />
        </TouchableOpacity>
        
     
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
                   onPress={()=>this.propse(30,'t')}
                   disabled={this.state.dis8}

        >

          <Image source={this.state.img4}
            style={{
              width: 100,
              height: 100,
              display:this.state.t
            }}

          />
        </TouchableOpacity>
             
<TouchableOpacity
          style={{
            width: 100,
            height: 100,       borderColor: 'white',
            borderWidth:2,            backgroundColor:'palevioletred'

          }}
          onPress={()=>this.propse(100,'m')}
          disabled={this.state.dis9}
        >

          <Image source={this.state.img5}
            style={{
              width: 100,
              height: 100,
              display:this.state.m
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
          t:'none',t1:'none',m:'none',m1:'none',r:'none',r1:'none',
          neww:'',neww1:'',old:'',old1:'',finishflag:0,dis1:false,dis2:false,dis3:false,dis4:false,dis5:false
          ,dis6:false,xx:0,dis7:false,dis8:false,dis9:false,dis10:false,dis11:false
          ,dis12:false,})


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
            
                this.props.navigation.navigate('GamesMem');
              
           
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


//Memorylevel2;
