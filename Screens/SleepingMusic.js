import React, {useEffect, useState} from 'react';
import {Text, Button,ScrollView} from 'react-native';
import TrackPlayer from 'react-native-track-player';

//import the hook provided by react-native-track-player to manage the progress
import {useTrackPlayerProgress,useTrackPlayerEvents} from 'react-native-track-player/lib/hooks';
//import statement for slider
import Slider from '@react-native-community/slider';
import {StyleSheet,View,Image} from 'react-native';
import {TrackPlayerEvents,STATE_PLAYING} from 'react-native-track-player';

const trackPlayerInit = async () => {



 await TrackPlayer.setupPlayer();
 await TrackPlayer.add({
   id: '1',
   url:
     'https://www.sleepphones.com/files/AMinorThing.mp3',
   type: 'default',
   title: 'My Title',
   album: 'My Album',
   artist: 'Rohan Bhatia',
   artwork: 'https://picsum.photos/100',
   
 },
 
 );
 TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_JUMP_FORWARD,
    TrackPlayer.CAPABILITY_JUMP_BACKWARD,
  ],
});
 return true;
};

const SleepingMusic = () => {
 const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
 const [isPlaying, setIsPlaying] = useState(false);
 //const {position, duration} = useTrackPlayerProgress(250);

//the value of the slider should be between 0 and 1
 const [sliderValue, setSliderValue] = useState(0);
 
 //flag to check whether the use is sliding the seekbar or not
 const [isSeeking, setIsSeeking] = useState(false);
 
 //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
 //These values will update every 250ms 
 const {position, duration} = useTrackPlayerProgress(250);
 


 const [isTrackPlayerInit2, setIsTrackPlayerInit2] = useState(false);
 const [isPlaying2, setIsPlaying2] = useState(false);
 //const {position, duration} = useTrackPlayerProgress(250);

//the value of the slider should be between 0 and 1
 const [sliderValue2, setSliderValue2] = useState(0);
 
 //flag to check whether the use is sliding the seekbar or not
 const [isSeeking2, setIsSeeking2] = useState(false);
 
 //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
 //These values will update every 250ms 
 const {position2, duration2} = useTrackPlayerProgress(250);

 
 useEffect(() => {
   const startPlayer = async () => {
      let isInit =  await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
   }
   startPlayer();
 }, []);
 

 useEffect(() => {
  const startPlayer2 = async () => {
     let isInit2 =  await trackPlayerInit2();
     setIsTrackPlayerInit2(isInit2);
  }
  startPlayer2();
}, []);
 useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
  if (event.state === STATE_PLAYING) {
    setIsPlaying2(true);
  } else {
    setIsPlaying2(false);
  }
});
 
 //this hook updates the value of the slider whenever the current position of the song changes
 useEffect(() => {
   if (!isSeeking2 && position2 && duration2) {
     setSliderValue(position2 / duration2);
   }
 }, [position2, duration2]);
 

 const onButtonPressed = () => {
   if (!isPlaying) {
     TrackPlayer.play();
     setIsPlaying(true);
   } else {
     TrackPlayer.pause();
     setIsPlaying(false);
   }
 };

 
 const onButtonPressed2 = () => {
  if (!isPlaying2) {
    TrackPlayer.play();
    setIsPlaying2(true);
  } else {
    TrackPlayer.pause();
    setIsPlaying2(false);
  }
};
 //this function is called when the user starts to slide the seekbar
 const slidingStarted = () => {
   setIsSeeking(true);
 };
 //this function is called when the user stops sliding the seekbar
 const slidingCompleted = async value => {
   await TrackPlayer.seekTo(value * duration);
   setSliderValue(value);
   setIsSeeking(false);
 };
 
 return (
  <View style={styles.mainContainer}>
  <View
  style={{
    width:'100%',
    height:70,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
  }}
  >
  <Text 
  style={{
    fontSize:30,
    fontFamily:'Itim-Regular'
  }}>
    Music
  </Text>
  
  </View>
    <View style={styles.imageContainer}>
    <Image
         source={   require('../assets/images/0.png')    
         }
         resizeMode="contain"
         style={styles.albumImage}
       />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.songTitle}>Sleeping Song</Text>
      <Text style={styles.artist}>Rohan Bhatia</Text>
    </View>
    <View style={styles.controlsContainer}>
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        minimumTrackTintColor="#111000"
        maximumTrackTintColor="#000000"
        onSlidingStart={slidingStarted}
        onSlidingComplete={slidingCompleted}
        thumbTintColor="#000"
      />
      <ScrollView> 
      <Button
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={onButtonPressed}
        style={styles.playButton}
        disabled={!isTrackPlayerInit}
        color="#000000"
      />
            <Button
        title={isPlaying2 ? 'Pause' : 'Play'}
        onPress={onButtonPressed2}
        style={styles.playButton}
        disabled={!isTrackPlayerInit2}
        color="#000000"
      />

</ScrollView>
    </View>
  </View>
);
};
  
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
  },
  albumImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 40,
  },
  progressBar: {
    height: 20,
    paddingBottom: 90,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
  },
 
 });
  
export default SleepingMusic;