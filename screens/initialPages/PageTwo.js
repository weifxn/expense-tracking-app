import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';

export default class pageTwo extends React.Component {
  state = {
    monthAllow: this.props.navigation.getParam('monthAllow'),
    leftDays: this.props.navigation.getParam('leftDays'),
    monthLeft: null
  }
  changeText = text => {
    this.setState({
      monthLeft: text
    })
  }
  onPressDone = () => {
    if(this.state.monthLeft !== null) {

      this.props.navigation.state.params.setIsFirst();
      this.props.navigation.navigate('Main', {
        monthLeft: this.state.monthLeft,
        dayTotal: (this.state.monthLeft)/(this.state.leftDays)
      });

    }
  }
  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> RM{this.state.monthAllow} </Text>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> how much you have left? </Text>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}> (including in wallet) </Text>
      <CardInput
        placeholder="0.00"
        style={styles.mainModalFontInput}
        autoFocus={true}
        keyboardType='decimal-pad'
        changeText={this.changeText}
      />
      <CardButton
        name="Done"
        style={styles.cardButtonSmall}
        onPress={this.onPressDone}
      />

      </View>
     </TouchableWithoutFeedback>
    );
  }
}