import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';
import ProgressBar from '../../components/ProgressBar';

export default class Main extends React.Component {
  render() {
    return (
   	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> RM{this.props.howMuch} left for today! </Text>
      <ProgressBar
          one={this.props.one}
          two={this.props.two}
          three={this.props.three}
          four={this.props.four}
        />
      <CardButton
            name="Add"
            style={styles.cardButtonSmall}
            onPress={this.props.onPressDone}
          />

      </View>
     </TouchableWithoutFeedback>
    );
  }
}