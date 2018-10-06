import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';

export default class initialRun extends React.Component {
  render() {
    return (
   	<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> enter monthly allowance </Text>
      <CardInput
      	placeholder="0.00"
      	style={styles.mainModalFontInput}
      	autoFocus={true}
      	keyboardType='decimal-pad'
      	value={this.props.value}
      	changeText={this.props.changeText}
      />
      <CardButton
            name="Done"
            style={styles.cardButtonSmall}
            onPress={this.props.onPressDone}
          />

      </View>
     </TouchableWithoutFeedback>
    );
  }
}