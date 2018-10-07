import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Keyboard,TouchableWithoutFeedback } from 'react-native';
import styles from '../../styles/Styles';
import CountDown from 'react-native-countdown-component';
import CardButton from '../../components/CardButton';

export default class LotsOfStyles extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Edit');}
  render() {
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View>
            <CardButton
              name="Send TAC code"
              style={styles.cardButton}
              onPress = {this.onAdd}
            />
          </View>
          
         </View>
         </TouchableWithoutFeedback>
        );
  }
}
