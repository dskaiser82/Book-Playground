import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';


class Pages extends Component {
  render() {
  return (
    <View>

      <ImageBackground
       source={require('./assets/pages/iphone/p1.jpg')}  style={styles.backGround}>

       <View  style={styles.parentFlex} >
       <Image style={styles.textBg}  source={require('./assets/text/text-bg-iphone.png')} />
        <Image source={require('./assets/text/t1.png')} />
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
  textBg: {
    width: '100%',
    height: null,
  },
  red: {

  },
  parentFlex: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
