import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import styles from '../../styles/Styles';
import CardButton from '../../components/CardButton';
import CardInput from '../../components/CardInput';
import { CheckBox } from 'react-native-elements';

export default class Withdraw extends React.Component {
  static navigationOptions = {
    title: "Withdraw"
  };
  state = {
    checkedOne: true,
    checkedTwo: false,
    number: 1,
  };

  onAdd = () => {
    this.props.navigation.navigate('Transfer');
  };
  changeChecked =()=> {
     this.setState({ 
          checkedOne: !this.state.checkedOne,
          checkedTwo: !this.state.checkedTwo
      })
  }
  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View>
          <CardInput style={styles.input} placeholder="Enter Amount" kt='numeric'/>
          
          <View>
          <CheckBox
            title="Savings"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedOne}
            onPress ={()=> this.changeChecked()}
  
          />
          <CheckBox
            title="Current"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedTwo}
            onPress={()=>this.changeChecked()}
          />
        </View>
        </View>

        

        <View style ={styles.tabBar}>
          <CardButton name="Cancel" style={styles.cardButton} />
          <View />
          <CardButton func={this.onAdd} name="Confirm" style={styles.cardButton} />
          <View />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
