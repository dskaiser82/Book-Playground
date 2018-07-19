import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';


class Pages extends Component {
  render() {
  return (
    <View>

      <ImageBackground
       source={require('./assets/pages/phone/p1.jpg')}  style={styles.backGround}>

       <View  style={styles.paper} >
        <Image source={require('./assets/text/phone/t1.png')} />
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
  parentFlex: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
