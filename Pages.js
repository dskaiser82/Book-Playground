import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Alert, TouchableHighlight } from 'react-native';


class Pages extends Component {

  state = {
vo: true,
music: true,
counter: 5,
}

  changePage = () => {
       let go = "go"
       Alert.alert(go);
  }



  render() {
const { counter } = this.state
let url = 4
  return (

    <View>
      <ImageBackground
        source={{uri: 'https://vignette.wikia.nocookie.net/ssb/images/f/ff/Paper_Mario.jpg/revision/latest/scale-to-width-down/480?cb=20080114235714'+url}}  style={styles.backGround}>

       <Text>{counter}</Text>

       <View  style={styles.paper} >
        <Image source={require('./assets/text/phone/t1.png')} />
        <TouchableHighlight onPress={this.changePage}>
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
