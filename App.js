import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Audio } from 'expo';





export default class App extends React.Component {

  playSound = async () => {
     await Audio.setIsEnabledAsync(true);
     const sound = new Audio.Sound();
     await sound.loadAsync(require('./ambient.mp3'));
     await sound.playAsync();
   }

   playVO = async () => {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./m1.mp3'));
      await sound.playAsync();
    }




   componentDidMount(){
       this.playSound()
       this.playVO()
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
