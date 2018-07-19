import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert, TouchableHighlight } from 'react-native';


class Pages extends Component {

  changePage = () => {
       let bob = "bob"
       Alert.alert(bob);
  }

  render() {

  return (
    <View>

      <ImageBackground
       source={require('./assets/pages/phone/p1.jpg')}  style={styles.backGround}>

       <View  style={styles.paper} >
        <Image source={require('./assets/text/phone/t1.png')} />
        <TouchableHighlight onPress={this.changePage}>
          <Image
            style={styles.prev} source={require('./assets/text/phone/ui_prev.png')}

           />
        </TouchableHighlight>
        <Image style={styles.next} source={require('./assets/text/phone/ui_next.png')} />
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
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    position: "absolute",
    bottom: -5,
    left: '15%',
    width: '100%',
  },
  prev: {
    position: "absolute",
    bottom: 30,
    left: -70,
    zIndex: 10
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
