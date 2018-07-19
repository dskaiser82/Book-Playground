import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';


class Pages extends Component {
  render() {
  return (
    <View>

      <ImageBackground
       source={require('./assets/pages/iphone/p1.jpg')}  style={styles.backGround}>

       <View  style={styles.red} >
        <Image source={require('./assets/text/t1-crop-phone.png')} />
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
  textTry : {
    textAlign: 'center'
  },
  textBg: {
    width: '100%',
    height: null,
  },
  red: {
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: "absolute",
    bottom: 10,
    left: '15%',
    width: '100%',
  },
  parentFlex: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
