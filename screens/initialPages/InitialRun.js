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
      <Text style={{fontSize: 40, padding: 40, fontWeight: 'bold', textAlign: 'center'}}> How much money do you have each month? </Text>
      <CardInput
      	placeholder="RM0.00"
      	style={styles.mainModalFontInput}
      	autoFocus={true}
      	keyboardType='decimal-pad'
      	changeText={this.props.changeText}
      />
       <View style={{ padding: 15 }} />
      <CardButton
            name="Done"
            style={styles.cardButtonSmall}
            onPress={this.props.onPressDone}
          />
           <View style={{ padding: 40 }} />

      </View>
     </TouchableWithoutFeedback>
    );
  }
}