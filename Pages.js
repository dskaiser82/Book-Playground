import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert, TouchableHighlight, Platform } from 'react-native';


class Pages extends Component {

  state = {
vo: true,
music: true,
counter: 1,
}

//Show Arrow if Counter > 1
  changePage = () => {
       this.setState((prevState) => ({
         counter: (prevState.counter%14) +1
       }))
  }

  prevPage = () => {
       this.setState((prevState) => ({
         counter: (prevState.counter%14) -1
       }))
  }



  render() {
const { counter } = this.state


  return (

    <View>
      <ImageBackground
        source={{uri: `http://d2pk31lhknsw9z.cloudfront.net/iphone/pages/v2/p${counter}.jpg`}}  style={styles.backGround}>

       <Text>{counter}</Text>

       <View  style={styles.paper} >
        {/* <Image source={require('./assets/text/phone/t1.png')} /> */}
        <TouchableHighlight onPress={this.prevPage}>
          <Image
            style={styles.prev} source={require('./assets/text/phone/ui_prev.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight onPress={this.changePage}>
          <Image style={styles.next} source={require('./assets/text/phone/ui_next.png')} />
        </TouchableHighlight>
      </View>

      </ImageBackground>
    </View>
  );
 }
}
export default Pages;

const styles = StyleSheet.create({
  backGround: {
    width: null,
    height: '100%',
  },
  paper: {
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: "absolute",
    bottom: -5,
    left: '15%',
    width: '100%',
  },
  prev: {
    position: "absolute",
    bottom: 30,
    left: -70,
  },
  next: {
    position: "absolute",
    bottom: 30,
    right: 140,

  },
  parentFlex: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
