import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Platform,TouchableOpacity} from 'react-native';
import MapboxGl, { MapView, UserLocation } from '@react-native-mapbox-gl/maps';
import geolib,{findNearest,getPreciseDistance,getDistanceFromLine,getDistance} from 'geolib';
import Geolocation from '@react-native-community/geolocation';

MapboxGl.setAccessToken(
  'pk.eyJ1Ijoicm9hYWhhbWRhbiIsImEiOiJja2YzenhyZWQwODl4MzBvZXk3am14MWRpIn0.MRbTOxtw6o1WXIdMniGeFA',
);
const IS_ANDOID = Platform.OS === 'android';
export default class showMap extends Component {
  async UNSAFE_componentWillMount() {
    
    if (IS_ANDOID) {
      const isGranteshowMapd = await MapboxGl.requestAndroidLocationPermissions();
      this.setState({
        isAndoidPemissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      x:'',
      isAndoidPemissionGranted: false,
      isFetchingAndroidPermission: IS_ANDOID,
      coordinates: [[35.107583545611135, 32.333079989294575]],
      showUserLocation: true,
      location: [35.107583545611135, 32.333079989294575],
      nearsetPh:'',
      dis:0,
      b1:'',
      b2:'',
      display1:'flex',
      display2:'none'
     // gen:this.props.route.params.gender
    };
  }

  UNSAFE_componentWillMount=()=>{
    if (global.flagA =='Arab'){
      this.setState({display1:'none',display2:'flex'})
    }
    //alert('kk');
 // if (this.state.gen =='f'){
    //alert(this.state.gen)
    //this.setState({b1:'pink',b2:'mistyrose'});
  //}else {
    //alert(this.state.dagen)
  
    //this.setState({b1:'midnightblue',b2:'lavender'});
  //}
   /* alert(getDistance(
     {latitude:35.12557506396249, longitude: 32.5657968389337},
      {latitude:  35.119583545611135, longitude:32.333079989294575 },
      ));*/
    Geolocation.getCurrentPosition(info =>
    //  console.log(info.coords.latitude)
      
      {
        
        getDistance(
          {latitude: 20.0504188, longitude: 64.4139099},
          {latitude: 51.528308, longitude: -0.3817765},
          );
      
      this.setState({x:findNearest({ latitude: info.coords.latitude, longitude:info.coords.longitude }, [
           { latitude: 35.17557506396249, longitude: 32.3857968389337 },
          { latitude: 35.119583545611135, longitude: 32.333079989294575 },
               { latitude: 35.12557506396249, longitude: 32.5657968389337},
          { latitude: 35.007583545611135, longitude:  32.333079989294575 },
          { latitude: 35.14557766396249, longitude:32.3657968389337 },
          { latitude: 35.157583545611135, longitude:32.333079989294575 },
         { latitude: 35.24557506396249, longitude:32.3659968389337 },
         { latitude: 35.107583545611135, longitude: 32.333079989294575},
      ])});         
    if (this.state.x.latitude== 35.17557506396249){
      this.setState({nearsetPh:'صيدليه الرحمة'})
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.17557506396249, longitude: 32.3857968389337 },
        )});


    }
    else  if (this.state.x.latitude==  35.119583545611135 ){
      this.setState({nearsetPh:'صيدليه الرؤى'});
     this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.333079989294575 },
        )});
    }
    else  if (this.state.x.latitude==  35.12557506396249 ){
      this.setState({nearsetPh:'صيدليه الوفاء'});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.5657968389337},
        )});
    }
    else  if (this.state.x.latitude== 35.007583545611135  ){
      this.setState({nearsetPh:'صيدليه الأمل '});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.333079989294575},
        )});
     

    } 
    else  if (this.state.x.latitude== 35.14557766396249  ){
      this.setState({nearsetPh:'صيدليه حسام '});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.3657968389337},
        )});
    }
    else  if (this.state.x.latitude== 35.157583545611135 ){
      this.setState({nearsetPh:'صيدليه سديل '});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.333079989294575},
        )});
    }
    else  if (this.state.x.latitude== 35.24557506396249 ){
      this.setState({nearsetPh:'صيدليه المدينة '});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.3659968389337 },
        )});
    }
    else  if (this.state.x.latitude== 35.107583545611135 ){
      this.setState({nearsetPh:'صيدليه المحبة '});
      this.setState( { dis:getDistance(
        {latitude:info.coords.latitude, longitude: info.coords.longitude},
        {latitude:  35.119583545611135, longitude:32.333079989294575},
        )});
    }
    console.log('longitude=>'+this.state.x.longitude)
      }
      );

  }
  render() {
    return (
      <SafeAreaView style={styles.containe}>

      <View
      style={{
        height:75,
        width:'100%',
        backgroundColor:'midnightblue',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50

      }}>
        <Text
        style={{
          color:'white',
          fontSize:15,
          fontFamily:'Grandstander-Black',
          display:this.state.display1

        }}>
          Map Of pharmacies
        </Text>
        <Text
        style={{
          color:'white',
          fontSize:15,
          fontFamily:'Grandstander-Black',
          display:this.state.display2

        }}>
خريطة االصيدليات و المستشفيات        </Text>
      </View>
        <View style={styles.containe}>
          <MapboxGl.MapView
          //  onPress={ this.calculateDistance           
            //}

            onPress={(feautre) => {
                     Geolocation.getCurrentPosition(info =>
              {
                alert(getDistance(
     {latitude:info.coords.latitude, longitude: 32.5657968389337},
      {latitude: feautre.geometry.coordinates[0] , longitude:feautre.geometry.coordinates[1] },
      )+'    meter  ' );
     // console.log(feautre.geometry)

          
              }

              
              );
            }}

            userTrackingMode={2}
            ref={(c) => (this._map = c)}
            zoomLevel={14}
            followUserLocation={true}
            centerCoorfinate={this.state.coordinates[0]}
            showUserLocation={true}
            style={styles.containe}
          //  userTrackingMode={this.state.userSelectedUserTrackingMode}
          >
            <MapboxGl.Camera
              zoomLevel={16}
              animationDuration={0}
              animationMode={'flyTo'}
              ref={(c) => (this.Camera = c)}
              centerCoordinate={this.state.location}
            followUserMode={'compass'}
            
            
            ></MapboxGl.Camera>
            

            <MapboxGl.UserLocation
              showsUserHeadingIndicator={true}
              visible={true}
              followUserMode={true}
            
            animated={true}



            ></MapboxGl.UserLocation>
        
            

            
 
      <MapboxGl.PointAnnotation
        key='1'
        id='1'
        //        coordinate={[ 35.17557506396249,32.3857968389337]}

        coordinate={[ 35.17557506396249,32.3857968389337]}
        title=''
   //     onSelected={()=>alert('ss')}
      //  onPress={()=>alert('dd')}
      onSelected={()=>
         this.props.navigation.navigate('information',{username:'Alrhma',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        <MapboxGl.Callout title=' صيدليه الرحمة'
              

        />
    
            </MapboxGl.PointAnnotation>
            
              <MapboxGl.PointAnnotation
        key='2'
        id='2'
        //        coordinate={[35.119583545611135, 32.333079989294575]}

        coordinate={[35.119583545611135, 32.333079989294575]}
        title=''
        onSelected={()=>
         this.props.navigation.navigate('information',{username:'Roaa',
  name:'الرحمة',flag:'Yes',location:'Nablus-Rafidea',owner:'Malak Bawwab',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        
        <MapboxGl.Callout title=' صيدلية الرؤى  '
          
        />
    
      </MapboxGl.PointAnnotation>



      
      <MapboxGl.PointAnnotation
        key='3'
         id='3'//       coordinate={[ 35.14557506396249,32.5657968389337]}

        coordinate={[ 35.12557506396249,32.5657968389337]}
        title=''
        //onSelected={()=>alert('ss')}
      //  onPress={()=>alert('dd')}
      onSelected={()=>
         this.props.navigation.navigate('information',{username:'Wafaa',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        <MapboxGl.Callout title='صيدلة الوفاء'
              

        />
    
            </MapboxGl.PointAnnotation>
            
              <MapboxGl.PointAnnotation
        key='4'
        id='4'//        coordinate={[35.007583545611135, 32.333079989294575]}

        coordinate={[35.007583545611135, 32.333079989294575]}
        title=''
        onSelected={()=>
         this.props.navigation.navigate('information',{username:'Alamal',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        
        <MapboxGl.Callout title=' صيدليه الأمل'
          
        />
    
      </MapboxGl.PointAnnotation>






      
      <MapboxGl.PointAnnotation
        key='5'
        id='5'
        coordinate={[ 35.14557766396249,32.3657968389337]}
        title=''
       // onSelected={()=>alert('ss')}
      //  onPress={()=>alert('dd')}
      onSelected={()=>
         this.props.navigation.navigate('information',{username:'Hussam',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        <MapboxGl.Callout title=' صيدلية حسام'              

        />
    
            </MapboxGl.PointAnnotation>
            
              <MapboxGl.PointAnnotation
        key='6'
        id='6'
        coordinate={[35.157583545611135, 32.333079989294575]}
        title=''
        onSelected={()=>
         this.props.navigation.navigate('information',{username:'Sadeel',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        
        <MapboxGl.Callout title=' صيدلية سديل'
          
        />
    
      </MapboxGl.PointAnnotation>





      
      <MapboxGl.PointAnnotation
        key='7'
        id='7'
        coordinate={[ 35.24557506396249,32.3659968389337]}
        title=''
     //   onSelected={()=>alert('ss')}
      //  onPress={()=>alert('dd')}
      onSelected={()=>
         this.props.navigation.navigate('information',{username:'Almadina',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        <MapboxGl.Callout title=' صيدلية المدينة '
              

        />
    
            </MapboxGl.PointAnnotation>
            
              <MapboxGl.PointAnnotation
        key='8'
        id='8'
        coordinate={[35.107583545611135, 32.333079989294575]}
        title=''
        onSelected={()=>
         this.props.navigation.navigate('information',{username:'Almahba',
  name:'الرحمة',flag:'Yes',location:'Tulakarm-Bala-Main Street',owner:'Hamdan Hamdan',
  WH:'From 8am to 7pm',Tel:'9923233'
}) 
      
       }
        >
        <View style={styles.annotationContainer}>
          <View style={styles.gardens}/>
        </View>
        
        <MapboxGl.Callout title=' صيدلية المحبة '
          
        />
    
      </MapboxGl.PointAnnotation>
          </MapboxGl.MapView>
        </View>

        <View>

          <View
          style={{
            backgroundColor:'midnightblue',
            height:100,
            marginTop:50,
            justifyContent:'center',
            alignItems:'center'
          }}
          >

            <Text
            style={{
              color:'white',
              fontFamily:'Amiri-Regular',
              display:this.state.display2
            }}>
              الصيدلية الأقرب لك هي صيدلية {this.state.nearsetPh}
              {'\n'}
              والمسافة هي :  {this.state.dis}  متر    {'\n'}
              اذا كنت تريد معرفة بعدك عن اي مكان فقط اضغط عليه !:)
            </Text>
            <Text
            style={{
              color:'white',
              fontFamily:'Amiri-Regular',
              display:this.state.display1

            }}>
             The pharmacy closest to you is a pharmacy {this.state.nearsetPh}
              {'\n'}
              and the distance is
 :  {this.state.dis}  meter    {'\n'}
 If you want to know your distance from anywhere, just click on it! :)

            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  containe: {
    flex: 1,
  },
});
