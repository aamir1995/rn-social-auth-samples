/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';

/**
 * COMPONENTS
 */
import { FullScreenLinearGradient, height, FacebookLogin } from '@components';

export default class App extends Component {

  componentDidMount() { }

  render() {
    return (
      <View style={styles.mainContainer}>

        <StatusBar translucent={true} backgroundColor="transparent" />

        <FullScreenLinearGradient />

        <View style={{ position: 'relative', top: height / 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.mainHeading}>{`React Native \n Social Auth Samples`}</Text>

          {/* BUTTONS GROUP VIEW */}
          <View style={{ marginTop: 15 }}>
            <FacebookLogin />
          </View>

        </View>

        <View style={styles.footerView}>
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 12 }}>About</Text>
        </View>
        
      </View >
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainHeading: {
    width: 220,
    fontSize: 24,
    fontWeight: '100',
    color: '#fff',
    textAlign: 'center',
    borderWidth: .5,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  footerView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5
  }
});
