import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Audio } from 'expo';



export default class App extends React.Component {

  state = {
vo: true,
music: true,
counter: 0,
pageNumber: 0
}

  playSound = async () => {
     await Audio.setIsEnabledAsync(true);
     const sound = new Audio.Sound();
     await sound.loadAsync(require('./ambient.mp3'));
     await sound.playAsync();
     await sound.setIsLoopingAsync(true); //Loop Ambient
   }

   playVO = async () => {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./m2.mp3'));
      await sound.playAsync();

    }




   componentDidMount(){
       // this.playSound()
       // this.playVO()
     }


  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./p1.jpg')} style={{
          flex: 1,
          alignSelf: 'stretch',
          width: undefined,
          height: undefined
        }} />


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // texter: {
  //   fontSize: 30,
  //   paddingBottom: 50,
  // }
});
