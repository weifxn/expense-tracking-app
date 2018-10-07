import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import styles from '../../styles/Styles';
import CountDown from 'react-native-countdown-component';
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';

export default class LotsOfStyles extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Add1');}
  onAddMain = () => {this.props.navigation.navigate('sendTAC');}
  render() {
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View>
           
            
            
            
            <Text style={styles.appTitle}>TAC expires in:</Text>
            <CountDown
              until={60}
              onFinish={() => alert('Transcation cancelled!')}
              size={40}
              digitBgColor="black"
              digitTxtColor="white"
              timeToShow={['M', 'S']}
            />
             <CardInput cardStyle={styles.card} style={styles.input} placeholder="Enter the TAC code"
            keyboardType= 'number-pad' />
            <View style={{ flexDirection: 'row'}}>
            
            <CardButton
              name="Cancel"
              style={styles.cardButtonSmallDelete}
              onPress={this.onAddMain}
            />
            <CardButton
              name="Done"
              style={styles.cardButtonSmall}
              onPress={this.onAdd}
            />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}