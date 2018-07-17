import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class App extends React.Component {


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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texter: {
    fontSize: 30,
    paddingBottom: 50,
  }
});
