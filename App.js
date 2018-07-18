import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { Audio, ScreenOrientation } from 'expo';




export default class App extends React.Component {

  state = {
vo: true,
music: true,
counter: 0,
}

//possible Routs 1) Home 2) Select 3) Pages

  playSound = async () => {
     await Audio.setIsEnabledAsync(true);
     const sound = new Audio.Sound();
     await sound.loadAsync(require('./assets/music/ambient.mp3'));
     await sound.playAsync();
     await sound.setIsLoopingAsync(true); //Loop Ambient
   }

   playVO = async () => {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/vo/m2.mp3'));
      await sound.playAsync();

    }




   componentDidMount(){
       // this.playSound()
       // this.playVO()
       //Expo force landscape
       ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
     }


  render() {
    return (
      <View style={styles.container}>

      <ImageBackground source={require('./assets/pages/iphone/p1.jpg')}  style={{width: null, height: '100%'}}>
        <Text style={{

        }}>Hi</Text>
     </ImageBackground>



      </View>

    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // texter: {
  //   fontSize: 30,
  //   paddingBottom: 50,
  // }
});
