import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert } from 'react-native';
import { Audio, ScreenOrientation } from 'expo';
import Pages from './Pages.js';



export default class App extends React.Component {
  state = {
  vo: true,
  music: true,
  counter: 1,
  }



  //Show Arrow if Counter >
    changePage = (callback) => {
       this.setState((prevState) => ({
         counter: (prevState.counter%14) +1
       }))

      //callback will be playVO()
      callback()

    }

    prevPage = () => {
         this.setState((prevState) => ({
           counter: (prevState.counter%14) -1
         }))
    }




//possible Routs 1) Home 2) Select 3) Pages

  playSound = async () => {
     await Audio.setIsEnabledAsync(true);
     const sound = new Audio.Sound();
     await sound.loadAsync({uri:'http://d2pk31lhknsw9z.cloudfront.net/music/ambient.mp3'});
     await sound.playAsync();
     await sound.setIsLoopingAsync(true); //Loop Ambient
   }

   playVO = async () => {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
    await sound.loadAsync({uri:`http://d2pk31lhknsw9z.cloudfront.net/vo/m${this.state.counter}.mp3`});
      await sound.playAsync();

    }




   componentDidMount(){

       // this.playSound()

       //Expo force landscape
       ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
     }


  render() {
    return (
      <View>

        <Pages
          counter={this.state.counter}
          changePage={this.changePage}
          prevPage={this.prevPage}
          playVO={this.playVO}
        />


      </View>

    );
  }
}
