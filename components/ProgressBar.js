import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity           onPress={this.props.onPress}
>
        <View style={styles.progressbar}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.filler, {width: this.props.one}]} />
            
            <View style={[styles.fillerTwo, {width: this.props.two}]} />

            <View style={[styles.fillerThree, {width: this.props.three}]} />

            <View style={[styles.fillerFour, {width: this.props.four}]} />

          </View>

        </View>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressbar: {
    position: 'relative',
    height: 37,
    width: 362,
    borderWidth: 0.5,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  filler: {
    position: 'relative',
    backgroundColor: '#f9bc2e',
    height: 36
  },
  fillerTwo: {
    position: 'relative',
    backgroundColor: '#4da6bb',
    height: 36
  },
  fillerThree: {
    position: 'relative',
    backgroundColor: '#bae67e',
    height: 36
  },
  fillerFour: {
    position: 'relative',
    backgroundColor: '#f44259',
    height: 36
  },
});