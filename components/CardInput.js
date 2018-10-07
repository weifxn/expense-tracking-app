import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../styles/Styles'

export default class CardInput extends React.Component {
  render() {
    return (
      <View style={this.props.cardStyle}>
            <TextInput
              style={this.props.style}
              placeholder={this.props.placeholder}
              autoCorrect={false}
              onChangeText={this.props.changeText}
              value={this.props.value}
              multiline={this.props.multiline}
              keyboardType={this.props.keyboardType}
              autoFocus={this.props.autoFocus}
              secureTextEntry={this.props.secure}
            />
        </View>
    );
  }
}