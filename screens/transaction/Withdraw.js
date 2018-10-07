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
    this.props.navigation.navigate('UserMain');
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
          <CardInput cardStyle={styles.card} style={styles.input} placeholder="Enter Amount" keyboardType='numeric'/>
          
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
        <View style={{ flexDirection: 'row'}}>
                  <CardButton name="Cancel"  onPress = {()=> this.props.navigation.navigate('Main')} style={styles.cardButtonSmallDelete} />

        <CardButton onPress={()=>this.onAdd()} name="Confirm" style={styles.cardButtonSmall} />
        
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
