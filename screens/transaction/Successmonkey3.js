import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from '../../styles/Styles';
import CountDown from 'react-native-countdown-component';
import CardButton from '../../components/CardButton';
export default class LotsOfStyles extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Add2');}
  onAddMain = () => {this.props.navigation.navigate('Main');}

  render() {
    
    return (
      <View style={styles.container}>
<View>
        <Text style={styles.tacCode}>7823 4195</Text>
        <Text style={styles.appTitle}>Code expires in:</Text>
        <CountDown
        until={900}
        onFinish={() => alert('Transcation cancelled!')}
        size={40}
        digitBgColor='black'
        digitTxtColor='white'
        timeToShow={['M', 'S']}
      />
      

</View>
          <View style={{ flexDirection: 'row' }}>
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
    );
  }
}


