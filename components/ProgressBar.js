import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.progressbar}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.filler, {width: this.props.one}]} />
            
            <View style={[styles.fillerTwo, {width: this.props.two}]} />

            <View style={[styles.fillerThree, {width: this.props.three}]} />

            <View style={[styles.fillerFour, {width: this.props.four}]} />

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressbar: {
    position: 'relative',
    height: 22,
    width: 350,
    borderWidth: 1
  },
  filler: {
    position: 'relative',
    backgroundColor: '#f9bc2e',
    height: 20
  },
  fillerTwo: {
    position: 'relative',
    backgroundColor: '#4da6bb',
    height: 20
  },
  fillerThree: {
    position: 'relative',
    backgroundColor: '#bae67e',
    height: 20
  },
  fillerFour: {
    position: 'relative',
    backgroundColor: '#f44259',
    height: 20
  },
});