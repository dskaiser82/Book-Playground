import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';


class Pages extends Component {
  render() {
  return (
    <View>

      <ImageBackground source={require('./assets/pages/iphone/p1.jpg')}  style={{width: null, height: '100%'}}>
        <Text style={{

        }}>Hi</Text>
      </ImageBackground>

    </View>
  );
 }
}
export default Pages;
