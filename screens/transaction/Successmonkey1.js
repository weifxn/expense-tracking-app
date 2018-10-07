import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Checkbox,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from '../../styles/Styles';
import CardButton from '../../components/CardButton';
import CardInput from '../../components/CardInput';
import {CheckBox} from 'react-native-elements';
import {StyleSheet} from 'react-native';


export default class Add extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    checked: false
  };

onAdd = () => {this.props.navigation.navigate('Add');}
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View>
            <Text style={styles.appTitle}>Login</Text>
            <CardInput
              style={styles.input}
              placeholder="User ID"
            />

            <CardInput
              placeholder="Password"
              style={styles.input}
              secure={true}
              
            />
          

            <CheckBox
              title='Remember My Password'
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
              style = {styles.checkpw}

            />
            </View>
            
          <View>
         
        
            <CardButton
              name="Sign in"
              style={styles.cardButtonSmall}
              onPress={this.onAdd}
            />
            <View style={{ padding: 10 }} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
